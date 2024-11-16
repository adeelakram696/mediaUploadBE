"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _fileController = require("../controllers/fileController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/upload', _fileController.uploadFile);
router.get('/', _fileController.getFiles);
var _default = exports["default"] = router;