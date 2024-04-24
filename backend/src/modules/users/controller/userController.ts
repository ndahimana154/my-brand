import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserRepository from "../repository/userRepository";

const JWT_SECRET = "your_secret_key"; // Replace with your JWT secret key

class UserController {
  async register(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      // Check if user already exists
      const existingUser = await UserRepository.findUserByUsername(username);
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const newUser = await UserRepository.createUser(username, hashedPassword);

      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Error registering user" });
    }
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      // Find user by username
      const user = await UserRepository.findUserByUsername(username);
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password); // This line causes the error
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid password" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res
        .status(200)
        .json({ success: true, message: "Login successful", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error logging in" });
    }
  }
}

export default new UserController();
