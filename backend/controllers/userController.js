import asyncHanlder from "../middleware/asyncHandler.js";
import User from "../models/productModel.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
// @desc        Auth user & get token
// @route       POST /api/users/login
// @access      Public
const authUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
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

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHanlder(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
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
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc        Get user
// @route       PUT /api/users/profile
// @access      Private/Admin

const updateUserProfile = asyncHanlder(async (req, res) => {
  const user = User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }

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
