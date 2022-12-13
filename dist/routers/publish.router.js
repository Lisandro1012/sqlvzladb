"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publish_service_1 = require("../services/publish.service");
const router = express_1.Router();
router.route('/').get(publish_service_1.getPublish).post(publish_service_1.createPublish);
/*router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);*/
exports.default = router;
//# sourceMappingURL=publish.router.js.map