const refreshRouter = require('express').Router();
const { userExtractor } = require('../middleware/auth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

refreshRouter.get('/', async (request, response) => {
    const { user } = request;
    const accessToken = request.cookies?.accessToken;
    console.log(user);
  return response.status(200).json({ accessToken, userId: user.id });
});

module.exports = refreshRouter;