import jwt from 'jsonwebtoken';


export const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.json({ success: false, message: 'User not authorized' });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);

        if (decodedToken.id) {
            req.body ??= {};
            req.body.userId = decodedToken.id;
            
        }
        else{
            return res.json({ success: false, message: 'Token is invalid' });
        }
       
        

        next();
    }
    catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export default userAuth;