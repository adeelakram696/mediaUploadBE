"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controller = require("./controller.js");
var _authMiddleware = require("../../middleware/authMiddleware.js");
var _uploadMiddleware = require("../../middleware/uploadMiddleware.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/upload', _authMiddleware.authenticateJWT, (0, _uploadMiddleware.uploadMiddleWare)('file'), _controller.uploadMedia);
router.get('/', _authMiddleware.authenticateJWT, _controller.listMedia);
router.get('/:id', _authMiddleware.authenticateJWT, _controller.viewMedia);
router.get('/:id/file', _authMiddleware.authenticateJWT, _controller.readMedia);
router.put('/:id', _authMiddleware.authenticateJWT, _controller.editMedia);
router["delete"]('/:id', _authMiddleware.authenticateJWT, _controller.deleteMedia);
router.post('/:id/increment-view', _authMiddleware.authenticateJWT, _controller.incrementViewCount);
router.get('/shared/:token', _controller.sharedToken);
var _default = exports["default"] = router;