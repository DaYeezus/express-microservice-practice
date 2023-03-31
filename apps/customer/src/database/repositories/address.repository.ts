import { AddressModel, CustomerModel } from "../models";
import { CreateCustomerDto } from "../../api/dtos/address/create-address.dto";

export class AddressRepository{
  async CreateAddress({ customerId, street, postalCode, city, country}:CreateCustomerDto){

    const profile = await CustomerModel.findById(customerId);

    if(profile){
      const newAddress = await AddressModel.create({
        city,country,street,postalCode
      })
      await CustomerModel.updateOne(
      {_id:profile._id},
        {$set:{address:newAddress}}
      )
    }

    return await profile.save();
  }
}