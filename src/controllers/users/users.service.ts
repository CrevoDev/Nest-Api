import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(email: string) {
    return this.userModel.findOne({ email: email }).exec();
  }

  async getOne(email: string) {
    return await this.userModel.findOne({ email: email }).select({ password: 1, email: 1, role: 1 }).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, { $set: updateUserDto });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
