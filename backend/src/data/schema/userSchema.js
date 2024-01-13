import mongoose, {Schema} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const users = "users";

const userSchema = new Schema({
    firstName:{type: Schema.Types.String, required: true},
    lastName:{type: Schema.Types.String, required: true},
    email:{type: Schema.Types.String, unique: true, required: true},
    password:{type: Schema.Types.String, required: true},
    confirmUser: {type: Schema.Types.Boolean, default: false },
    lastLogin:{type: Schema.Types.Date},
})

userSchema.plugin(mongoosePaginate);

export default mongoose.model(users, userSchema);