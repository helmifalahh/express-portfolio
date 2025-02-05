const express = require('express');
const router = express.Router();

const projectController = require('../controller/projects')

router.get('/', projectController.getAllProjects);

router.post('/', projectController.createProject);

router.delete('/:idProject', projectController.deleteProject);

router.patch('/:idProject', projectController.updateProject);

module.exports = router;