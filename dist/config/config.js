"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UPLOAD_FOLDER = exports.MAX_FILE_SIZE = exports.ALLOWED_FILE_TYPES = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var UPLOAD_FOLDER = exports.UPLOAD_FOLDER = 'uploads';
var ALLOWED_FILE_TYPES = exports.ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'video/mp4'];
var MAX_FILE_SIZE = exports.MAX_FILE_SIZE = 10 * 1024 * 1024;
var DBConnection = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  dbURL: 'postgresql://herogramtest_owner:sQAhju1dU2LG@ep-frosty-mountain-a2xufzdd.eu-central-1.aws.neon.tech/herogramtest?sslmode=require'
};
var _default = exports["default"] = DBConnection;