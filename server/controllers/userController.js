import userModel from "../models/userModel.js";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // create user
    const newUser = new userModel(userData);

    // save user
    const User = await newUser.save();

    // create token
    const token = jwt.sign(
      {
        id: User._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // send response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        name: User.name
      },
      token,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
