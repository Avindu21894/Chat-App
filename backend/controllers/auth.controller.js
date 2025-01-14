import { response } from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async(req,res) =>{
    try {
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        // Validate required fields
        if (!fullName || !userName || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Validate the password
        if(password !== confirmPassword){
            return res.status(400).json({error: 'Passwords do not match'})
        }

        // Validate gender
        if (!["male", "female"].includes(gender)) {
            return res.status(400).json({ error: "Invalid gender value" });
        }
        
        // Validate username uniqueness
        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({error: 'Username already exists'})
        }

        // Hash password

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // profile pic = https://avatar.iran.liara.run/public/gender/username=${}

        const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilepic : girlProfilepic
        })

        if(newUser){

            // Generate JWT token
            generateTokenAndSetCookie(newUser._id, res);

            // Save User
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePicture: newUser.profilePicture
            });
        }else{
            res.status(400).json({error:"Invalid User Data"})
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const login = (req,res) =>{
    console.log("login route");
    res.send("login route");

}

export const logout = (req,res) =>{
    console.log("logout route");
    res.send("logout route");

}