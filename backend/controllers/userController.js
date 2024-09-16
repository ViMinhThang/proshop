import asyncHanlder from "../middleware/asyncHandler.js";
import User from "../models/productModel.js";
import jwt from "jsonwebtoken";

// @desc        Auth user & get token
// @route       POST /api/users/login
// @access      Public
const authUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set JWT as HTTP-Only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.send("auth user");
});

// @desc        Register
// @route       POST /api/users/login
// @access      Public

const registerUser = asyncHanlder(async (req, res) => {
  res.send("register user");
});

// @desc        Logout user / clear cookie
// @route       POST /api/users/logout
// @access      Private

const logoutUser = asyncHanlder(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnlyLtrue,
    expires: new Date(0),
  });
  res.status(200).json({ message: "logged out successfully" });
});

// @desc        Logout user / clear cookie
// @route       GET /api/users/profile
// @access      Private

const getUserProfile = asyncHanlder(async (req, res) => {
  res.send("get user profile");
});

// @desc        Get user
// @route       PUT /api/users/profile
// @access      Private/Admin

const updateUserProfile = asyncHanlder(async (req, res) => {
  res.send("get users");
});

// @desc        Get users
// @route       GET /api/users
// @access      Private/Admin
const getUsers = asyncHanlder(async (req, res) => {
  res.send("get users");
});

// @desc        Get user by ID
// @route       GET /api/users/:id
// @access      Private/Admin
const getUserById = asyncHanlder(async (req, res) => {
  res.send("get users");
});

// @desc        Delete user
// @route       DELETE /api/users/:id
// @access      Private/Admin
const deleteUser = asyncHanlder(async (req, res) => {
  res.send("get users");
});

// @desc        Update user
// @route       PUT /api/users/:id
// @access      Private/Admin
const updateUser = asyncHanlder(async (req, res) => {
  res.send("get users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
