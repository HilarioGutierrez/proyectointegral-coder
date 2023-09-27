import mongoose, {Schema} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userCollection1 = "userCollection1";

const userSchema = new Schema({
    firstName:{type: Schema.Types.String, required: true},
    lastName:{type: Schema.Types.String, required: true},
    email:{type: Schema.Types.String, unique: true, required: true},
    password:{type: Schema.Types.String, required: true},
    lastLogin:{type: Schema.Types.Date},
})

userSchema.plugin(mongoosePaginate);

export default mongoose.model(userCollection1, userSchema);