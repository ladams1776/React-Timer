const TagService = require('../../../domain/services/tags/TagService');
const apiResponse = require('../apiResponse');
const { FETCH_TAGS_RESPONSE } = require('../reduxTypes');

module.exports = async (req, res) => {
  const responseHandler = apiResponse(res, FETCH_TAGS_RESPONSE)
  const tags = await TagService.fetchAllTags();
  responseHandler(tags);
};
