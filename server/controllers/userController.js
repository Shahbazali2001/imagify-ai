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

    // create user controller function
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
        name: User.name,
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





// login user controller function
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const User = await userModel.findOne({ email });

    if (!User) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: User._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        name: User.name,
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






// logout user controller function

export const logoutUser = async (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "Strict" : "Lax",
      maxAge: 3600000, // 1 hour
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong during logout",
    });
  }
};

// User Credits
export const userCredits = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    res.status(200).json({
      success: true,
      message: "User credits fetched successfully",
      name: user.name,
      credits: user.creditBalance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



















// export const userCredits = async (req, res)=>{
//   try{
//         const {userId} = req.body;
//         const user = await userModel.findById(userId);

//         res.status(200).json({
//           success: true,
//           message: "User credits fetched successfully",
//           name: user.name,
//           credits: user.creditBalance,
//         });

//   }catch(error){
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }
