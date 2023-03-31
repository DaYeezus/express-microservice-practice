import { IsString } from "class-validator";
import { Expose } from "class-transformer";
import { Types } from "mongoose";

export class AddressDto{
  @Expose()
  _id:Types.ObjectId;
  @Expose()
  @IsString()
  street: String;
  @Expose()
  @IsString()
  postalCode: String;
  @Expose()
  @IsString()
  city: String;
  @Expose()
  @IsString()
  country: String;
}