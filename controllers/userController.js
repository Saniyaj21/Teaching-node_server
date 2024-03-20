import { User } from "../models/userModel.js"

export const getUserProfile = (req, res) => {
    res.send("Profile")
}



export const logout = async (req, res) => {
    try {

        const { email } = req.body
        let user = await User.findOne({ email })
        user.token = null;
        user.save();

        res.status(200).json({
            success: true,
            message: "logout successful",
            token: null
        })


    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Cannot logout user"
        })
    }
}