"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadMiddleWare = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _config = require("../config/config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "".concat(_config.UPLOAD_FOLDER, "/"));
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = "".concat(Date.now(), "-").concat(Math.round(Math.random() * 1E9)).concat(_path["default"].extname(file.originalname));
    cb(null, uniqueSuffix);
  }
});
var fileFilter = function fileFilter(req, file, cb) {
  if (_config.ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and MP4 files are allowed.'));
  }
};
var upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: _config.MAX_FILE_SIZE
  }
});
var uploadMiddleWare = exports.uploadMiddleWare = function uploadMiddleWare(fieldName) {
  return upload.single(fieldName);
};