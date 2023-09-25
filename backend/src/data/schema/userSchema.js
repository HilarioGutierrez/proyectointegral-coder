import mongoose, {Schema} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const userCollection1 = "userCollection1";

const userSchema = new Schema({
    firstName:{type: Schema.Types.string, required: true},
    lastName:{type: Schema.Types.string, required: true},
    email:{type: Schema.Types.email, required: true},
    password:{type: Schema.Types.password, required: true},
    lastLogin:{type: Schema.Types.Date, required: true, default: new Date()},
})

userSchema.plugin(mongoosePaginate);

export default mongoose.model(userCollection1, userSchema);