import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    createdAt: String,
    updatedAt: String,
    firstName: String,
    middleName: String,
    lastName: String,
    password: String,
    email: String,
    age: String,
    icon: String,
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Events',
        },
    ],
    gender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gender',
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
});
