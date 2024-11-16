"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateJWT = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var authenticateJWT = exports.authenticateJWT = function authenticateJWT(req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Access token missing or invalid'
    });
  }
  var token = authHeader.split(' ')[1];
  try {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to `req` object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(403).json({
      message: 'Invalid or expired token'
    });
  }
};