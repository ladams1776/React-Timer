const TaskService = require('../../../domain/services/tasks/TaskService');
const apiResponse = require('../apiResponse');
const { FETCH_ALL_TASKS_RESPONSE } = require('../reduxTypes');

module.exports = async (req, res) => {
  const response = apiResponse(res, FETCH_ALL_TASKS_RESPONSE);
  const tasks = await TaskService.fetchAllTasks();
  response(tasks);
};