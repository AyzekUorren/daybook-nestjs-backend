import { Document } from 'mongoose';

export interface User extends Document {
    createdAt: string;
    updatedAt: string;
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly password: string;
    readonly email: string;
    readonly age: string;
    readonly icon: string;
    readonly events: string[];
    readonly gender: string;
    readonly role: string;
}
