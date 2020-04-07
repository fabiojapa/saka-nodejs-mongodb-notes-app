module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    /**
     * @typedef Note
     * @property {string} title
     * @property {string} content.required - Some description for point - eg: 1234
     */

    /**
     * Create a new Note
     * @route POST /notes
     * @param {Note.model} note.body.required - the new note
     * @group notes - Operations about notes
     * @produces application/json application/xml
     * @consumes application/json application/xml
     * @returns {Response.model} 200 - An note info
     */
    app.post('/notes', notes.create);

    /**
     * Retrieve all Notes
     * @route GET /notes
     * @group notes - Operations about notes
     * @returns {object} 200 - An array of notes
     * @returns {Error}  default - Unexpected error
     */
    app.get('/notes', notes.findAll);

    /**
     * Retrieve a single Note with noteId
     * @route GET /notes/:noteId
     * @param {noteId} note.required - the noteId
     * @group notes - Operations about notes
     * @returns {object} 200 - The note
     * @returns {Error}  default - Unexpected error
     */
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}