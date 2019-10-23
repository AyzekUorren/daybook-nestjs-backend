import { ApiModelProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsEmpty,
    IsDate,
    IsOptional,
} from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserCreateDto {
    @Field({ nullable: true })
    @IsEmpty()
    createdAt: Date;

    @Field({ nullable: true })
    @IsEmpty()
    updatedAt: Date;

    @Field()
    @IsNotEmpty()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'John',
    })
    readonly firstName: string;

    @Field({ nullable: true })
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Jason',
    })
    readonly middleName: string;

    @Field()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'Doe',
    })
    readonly lastName: string;

    @Field()
    @IsNotEmpty()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'password12345',
    })
    readonly password: string;

    @Field()
    @IsEmail()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'example@mail.com',
    })
    readonly email: string;

    @Field({ nullable: true })
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: new Date(),
        format: 'date',
    })
    readonly age: Date;
}
