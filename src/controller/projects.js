const ProjectsModel = require('../models/projects')

const getAllProjects = async (req, res) => {
    try {
        const [data] = await ProjectsModel.getAllProjects()

        const formattedData = data.map((project) => ({
            ...project,
            technologies: JSON.parse(project.technologies),
            links: JSON.parse(project.links)
        }));

        res.json({ 
            message: 'Get All Projects Success!',
            data: formattedData
         }) 
    } catch (error) {
        res.status(500).json({ 
            message: 'Get All Projects Failed!',
            serverMessage: error
         })
    }
}

const createProject = async (req, res) => {
    const {body} = req;
    
    try {
        await ProjectsModel.createProject(body)
        res.json({ 
            message: 'Create project Success!',
            data: body
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Create project Failed!',
            serverMessage: error
         })
    }
    
}

const deleteProject = async (req, res) => {
    const {idProject} = req.params
    
    try {
        await ProjectsModel.deleteProject(idProject)
        res.json({ message: 'Delete project Success!' })
    } catch (error) {
        res.status(500).json({ 
            message: 'Delete project Failed!',
            serverMessage: error
         })
    }
    
}

const updateProject = async (req, res) => {
    const {idProject} = req.params
    const {body} = req

    try {
        await ProjectsModel.updateProject(idProject, body)
        res.json({ 
            message: 'Update project Success!',
            data: {
                id: idProject,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({ 
            message: 'Update project Failed!',
            serverMessage: error
         })
    }
}

module.exports = { 
    getAllProjects,
    createProject,
    deleteProject,
    updateProject
}