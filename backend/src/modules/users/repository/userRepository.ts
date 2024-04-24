import mongoose from "mongoose";
import User, { UserDocument } from "../../../database/models/UsersModel";

class UserRepository {
  async createUser(username: string, password: string): Promise<UserDocument> {
    return await User.create({ username, password });
  }

  async findUserByUsername(username: string): Promise<UserDocument | null> {
    return await User.findOne({ username }).select("+password").exec();
  }
}

export default new UserRepository();
