import { Exclude, Expose } from "class-transformer";
import { IS_EMAIL, IsEmail, IsPhoneNumber, IsString } from "class-validator";
import { Types } from "mongoose";

export class CustomerDto {
  @Expose()
  _id:Types.ObjectId;
  @Expose()
  @IsString()
  @IsEmail()
  email:string;
  @Exclude()
  @IsString()
  password:string;
  @Exclude()
  @IsString()
  salt:string;
  @Expose()
  @IsString()
  @IsPhoneNumber()
  phone:string;
}