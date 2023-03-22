const Joi = require('joi');
const {
  password
} = require('./custom.validation');
const {
  MIN_COMPANY_LENGTH,MAX_COMPANY_LENGTH
} = require('../constants');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    username: Joi.string().min(3).required(),
    password: Joi.string().required().custom(password),
    company: Joi.string().required().min(MIN_COMPANY_LENGTH).max(MAX_COMPANY_LENGTH),
    mobileNumber:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    timeZone: Joi.string().required(),
    currency: Joi.string().required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
