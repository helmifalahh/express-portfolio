const dbPool = require('../config/database');

const getAllProjects = () => {
    const SQLQuery = "SELECT * FROM project ORDER BY id DESC";
    return dbPool.execute(SQLQuery)
}

const createProject = (body) => {
    const SQLQuery = `INSERT INTO project (title, href, dates, description, technologies, links, image, video) VALUES ('${body.title}', '${body.href}', '${body.dates}', '${body.description}', '${JSON.stringify(body.technologies)}', '${JSON.stringify(body.links)}', '${body.image}', '${body.video}')`;
    return dbPool.execute(SQLQuery)
}

const deleteProject = (idProject) => {
    const SQLQuery = `DELETE FROM project WHERE id = ${idProject}`;
    return dbPool.execute(SQLQuery)
}

const updateProject = (idProject, body) => {
    const SQLQuery = `UPDATE project SET title='${body.title}', href='${body.href}', dates='${body.dates}', description='${body.description}', technologies='${JSON.stringify(body.technologies)}', links='${JSON.stringify(body.links)}', image='${body.image}', video='${body.video}' WHERE id=${idProject}`;
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllProjects,
    createProject,
    deleteProject,
    updateProject
}