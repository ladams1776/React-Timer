const { validationResult } = require('express-validator');
const { FETCH_TASK_BY_ID_RESPONSE } = require('../reduxTypes');
const TaskService = require('../../../domain/services/tasks/TaskService');
const apiResponse = require('../apiResponse');
const RequestToTaskDto = require('./assemblers/RequestToTaskDto');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('yes errors', errors)
        return res.status(400).json({ errors: errors.array() });
    }

    const response = apiResponse(res, FETCH_TASK_BY_ID_RESPONSE);
    const incomingDto = RequestToTaskDto(req, res);
    TaskService.updateTask(incomingDto, response);
};