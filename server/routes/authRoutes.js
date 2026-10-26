import express from 'express'
import { sendVerifyOtp, userLogin, userLogout, userRegister, verifyEmail , isAuthenticated,sentResetPasswordOtp,resetPassword} from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRoute = express.Router();

authRoute.post('/register', userRegister);
authRoute.post('/login', userLogin);
authRoute.post('/logout', userLogout);
authRoute.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRoute.post('/verify-email', userAuth, verifyEmail);
authRoute.post('/is-auth', userAuth, isAuthenticated);
authRoute.post('/send-reset-password-otp', sentResetPasswordOtp);
authRoute.post('/reset-password', resetPassword);


export default authRoute;
