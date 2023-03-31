import { Expose } from "class-transformer";
import { IS_EMAIL, IsPhoneNumber, IsString   } from "class-validator";
import { CustomerDto } from "./customer.dto";
import { PickType } from "@nestjs/mapped-types";

export class CreateCustomerDto extends PickType(CustomerDto, ['email' , 'password','salt','phone']){

}