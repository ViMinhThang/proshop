import asyncHanlder from "../middleware/asyncHandler.js";
import User from "../models/productModel.js";

// @desc        Auth user & get token
// @route       POST /api/users/login
// @access      Public

const authUser = asyncHanlder(async (req, res) => {
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
  res.send("logout user");
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
const getUserByID = asyncHanlder(async (req, res) => {
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
  getUserByID,
  updateUser,
};
