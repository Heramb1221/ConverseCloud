import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { upsertStreamUser } from '../lib/stream.js';

export async function signup(req, res) {
    const {email, password, fullName} = req.body;

    try {
        if(!email || !password || !fullName) {
            return res.status(400).json({error: 'All fields are required'});
        }

        if(password.length < 6) {
            return res.status(400).json({error: 'Password must be at least 6 characters long'});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists, please login' });
        }

        const index = Math.floor(Math.random() * 100) + 1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${index}.png`;

        const newUser = await User.create({
            email,
            password,
            fullName,
            profilePic: randomAvatar
        });

        try {
            await upsertStreamUser({
            id: newUser._id.toString(),
            name: newUser.fullName,
            image: newUser.profilePic || "",
        });
        console.log("Stream user upserted successfully");
        } catch (error) {
            console.error("Error upserting Stream user:", error);
            return res.status(500).json({error: 'Failed to create Stream user'});
        }

        const token = jwt.sign({userId:newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('jwt', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        })

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                _id: newUser._id,
                email: newUser.email,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic
            }
        });

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}

export async function login(req, res) {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error: 'Email and password are required'});
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({error: 'Invalid email or password'});
        }

        const isPasswordValid = await user.matchPassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({error: 'Invalid email or password'});
        }

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('jwt', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user});
        } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}

export async function logout(req, res) {
    res.clearCookie('jwt');
    res.status(200).json({success: true, message: 'Logged out successfully'});
}