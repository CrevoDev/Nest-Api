import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from '../../schemas/client.schema';

@Injectable()
export class ClientsService {

  constructor(
    @InjectModel(Client.name) private clientModel: Model<Client>
  ) {}

  create(createClientDto: CreateClientDto) {
    const createdClient = new this.clientModel(createClientDto)
    return createdClient.save();
  }

  findAll() {
    return this.clientModel.find().exec();
  }

  findOne(email: string) {
    return this.clientModel.findOne({ email: email }).exec();
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(id, { $set: updateClientDto });
  }

  remove(id: string) {
    return this.clientModel.findByIdAndDelete(id);
  }
}
