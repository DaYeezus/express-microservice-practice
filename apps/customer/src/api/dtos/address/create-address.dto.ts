import { Expose } from "class-transformer";
import { IS_EMAIL, IsPhoneNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { AddressDto } from "./address.dto";
import { Types } from "mongoose";

export class CreateCustomerDto extends PartialType(AddressDto){
  @Expose()
  @IsString()
  customerId:Types.ObjectId;

}