import { ApiModelProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsEmpty,
    IsDate,
    IsString,
} from 'class-validator';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserDto {
    @Field(() => ID)
    @IsString()
    @ApiModelProperty({
        required: true,
        type: String,
        example: '111',
    })
    readonly id: string;

    @Field()
    @IsNotEmpty()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'example.com/image.jpg',
    })
    readonly icon: string;

    @Field()
    @IsEmpty()
    createdAt: Date;

    @Field()
    @IsEmpty()
    updatedAt: Date;

    @Field()
    @IsNotEmpty()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'John',
    })
    readonly firstName: string;

    @Field()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Jason',
    })
    readonly middleName: string;

    @Field()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Doe',
    })
    readonly lastName: string;

    @Field()
    @IsNotEmpty()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'password12345',
    })
    readonly password: string;

    @Field()
    @IsEmail()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'example@mail.com',
    })
    readonly email: string;

    @Field()
    @IsDate()
    @ApiModelProperty({
        required: false,
        type: Date,
        example: 22,
    })
    readonly age: Date;
}
