const TagService = require('../../../domain/services/tags/TagService');
const apiResponse = require('../apiResponse');

module.exports = async (req, res) => {
    const responder = apiResponse(res, DELETE_TAG_RESPONSE);
    TagService.deleteTag(req.params.id, responder);
};