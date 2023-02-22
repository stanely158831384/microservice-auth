import mongoose from "mongoose";
import { Password } from "../services/password";

//here is a little bit different than the instruction because the typescript needs extra steps to check the datatype

//Describe the properties that required to create a new user
//input
//the model needs this interface to check the datatype of the input
interface UserAttrs {
  email: string;
  password: string;
  address: string;
  phone: string;
  username: string;
}

//functions
//"userSchema.statics.build" we need this interface
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//single documents//output
//the reason why we need an extra object for the output is because the mongoose has it default extra elements in the output
//when we need a customerized object, we need this type. If we miss this object, we cannot customerize the output. That's mean, so default mongodb element will be printed out such as "createdAt"
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

//this step make sure the input wil follow the datatype UserAttrs
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

//UserDoc is about output, UserModel is about method
const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
