const refreshRouter = require('express').Router();
const { userExtractor } = require('../middleware/auth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

refreshRouter.get('/', async (request, response) => {
    const { user } = request;
    const accessToken = request.cookies?.accessToken;
  return response.status(200).json({ isAdmin: user.admin, accessToken, userId: user.id });
});

module.exports = refreshRouter;