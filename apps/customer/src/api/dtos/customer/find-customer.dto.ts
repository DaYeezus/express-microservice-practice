import { CustomerDto } from "./customer.dto";
import { PickType } from "@nestjs/mapped-types";

export class FindCustomerByEmailDto extends PickType(CustomerDto , ['email']){}
export class FindCustomerByIdDto extends PickType(CustomerDto , ['_id']){}