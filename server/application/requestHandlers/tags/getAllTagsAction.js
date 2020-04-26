const TagService = require('../../../domain/services/tags/TagService');

module.exports = async (req, res) => {
    console.log('getAllTagsAction.js');
    const tags = await TagService.fetchAllTags();
    res.jsonp(tags);
};

