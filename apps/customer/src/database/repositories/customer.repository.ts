import { CustomerModel } from "../models";
import { CreateCustomerDto } from "../../api/dtos/customer/create-customer.dto";
import Customer from "../models/Customer";
import { CustomerDto } from "../../api/dtos/customer/customer.dto";
import { FindCustomerByEmailDto, FindCustomerByIdDto } from "../../api/dtos/customer/find-customer.dto";

export class CustomerRepository{
  async CreateCustomer({ email, password, phone, salt }:CreateCustomerDto){

    const customer = new CustomerModel({
      email,
      password,
      salt,
      phone,
      address: []
    })

    return await customer.save();
  }



  async FindCustomer({ email }:FindCustomerByEmailDto){
    return await CustomerModel.findOne({ email: email });
  }

  async FindCustomerById({ _id }:FindCustomerByIdDto){
    return await CustomerModel.findById(_id).populate('address');
  }

  async Wishlist({_id : customerId}:FindCustomerByIdDto){

    const profile = await CustomerModel.findById(customerId).populate('wishlist');

    return profile.wishlist;
  }

  async AddWishlistItem(customerId, { _id, name, desc, price, available, banner}){

    const product = {
      _id, name, desc, price, available, banner
    };

    const profile = await CustomerModel.findById(customerId).populate('wishlist');

    if(profile){

      let wishlist = profile.wishlist;

      if(wishlist.length > 0){
        let isExist = false;
        wishlist.map(item => {
          if(item._id.toString() === product._id.toString()){
            const index = wishlist.indexOf(item);
            wishlist.splice(index,1);
            isExist = true;
          }
        });

        if(!isExist){
          await CustomerModel.updateOne({_id:profile._id} , {$push : {wishlist: product}})

        }

      }else{
        await CustomerModel.updateOne({_id:profile._id} , {$push : {wishlist: product}})
      }

      profile.wishlist = wishlist;
    }

    return profile.wishlist

  }




}