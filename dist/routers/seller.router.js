"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seller_service_1 = require("../services/seller.service");
const router = express_1.Router();
router.route('/')
    //.get(getPublish)
    .post(seller_service_1.createSeller);
/*router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);*/
exports.default = router;
//# sourceMappingURL=seller.router.js.map