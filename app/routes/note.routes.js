module.exports = (app) => {
    const express = require('express'),
    router = express.Router(),
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../../config/swagger.json');
  

    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    router.post('/notes', notes.create);

    // Retrieve all Notes
    router.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    router.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    router.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    router.delete('/notes/:noteId', notes.delete);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api/v1', router);
}