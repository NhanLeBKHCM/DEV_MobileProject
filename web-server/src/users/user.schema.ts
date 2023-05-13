import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

@Schema()
export class User {
    @Prop({required: true, unique: true})
    email:string

    @Prop({required: true})
    password:string

    @Prop({default: ''})
    nickname:string

    @Prop({default: ''})
    fname:string

    @Prop({default: ''})
    lname:string

    @Prop({type: Date, default: new Date()})
    birth: Date

    @Prop({default: ''})
    gender:string

    @Prop({default: ''})
    address:string

    @Prop({default: ''})
    phone:string
}

export const UserSchema = SchemaFactory.createForClass(User)