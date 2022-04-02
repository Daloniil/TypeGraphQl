import { Field, InputType } from "type-graphql";
import { IsEmail, Length } from "class-validator";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "This email already exist" })
  email: string;

  @Field()
  password: string;
}