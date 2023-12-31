import express from 'express';
import {  login, register } from '../controller/auth.js';
import generateToken from '../utils/generateToken.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();
const CLIENT_URL = 'http://localhost:5173';
// const SUCCESS_URL = 'http://localhost:5173/login/success';
const SUCCESS_URL = 'http://localhost:5173/login/success';

router.post('/register', register);

router.post('/login', login);






router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.post('/logout', function (req, res, next) {
  // Call the req.logout() function with a callback function
  req.logout(function (err) {
    if (err) {
      // Handle error if logout fails
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }

    // Redirect to the desired route after successful logout
    res.redirect('/');
  });
});




router.get('/login/success', async (req, res) => {
  try {
    // Use the user data stored in the session
    const sessionUser =  req.session.user;
   
console.log('user', sessionUser)
    if (!sessionUser) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    // Generate an access token (JWT)
    const token = generateToken(sessionUser._id);

    // Set the access token as a cookie
    res.cookie('access_token', token, { httpOnly: true });

    // Send the access token and user in the response
    res.status(200).json({
      success: true,
      message: 'success',
      access_token: token,
      user: sessionUser,
    });
  } catch (error) {
    // Handle any errors that occur during this process
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

export default router;
