import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
require('dotenv').config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
