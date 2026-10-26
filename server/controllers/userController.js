import userModel from "../models/userModel.js";

export const getUserData=async(req,res)=>{
    const {userId}=req.body;

    if(!userId){
        return res.json({success:false,message:"user not authorized"});
    }

    try{
        const user=await userModel.findById(userId);

        if(!user){
            return res.json({success:false,message:"user not found"});
        }
        const userData={
            name:user.name,
            isAccountVerified:user.isAccountVerified
        };
        return res.json({success:true,Data:userData,message:"user data fetched successfully"});

    }catch(error){
        return res.json({success:false,message:error.message});
    }
}