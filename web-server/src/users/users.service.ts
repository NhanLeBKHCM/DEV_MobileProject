import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = await new this.userModel(createUserDto)
    return createdUser.save()
  }

  async findAll() {
    const users = await this.userModel.find()
    return users;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(new mongoose.Types.ObjectId(id));
    // console.log(user)
    if(!user) throw new NotFoundException('User not found')
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, updateUserDto);
    // console.log(updatedUser)
    if(!updatedUser) throw new NotFoundException('User not found')
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)})
    if(!deletedUser) throw new NotFoundException('User not found')
    return deletedUser; 
  }
}
