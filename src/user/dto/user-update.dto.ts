import { ApiModelProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class UserUpdateDto {
    @Field()
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'profile/image.jpg',
    })
    readonly icon: string;

    @Field()
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'John',
    })
    readonly firstName: string;

    @Field()
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Jason',
    })
    readonly middleName: string;

    @Field()
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Doe',
    })
    readonly lastName: string;

    @Field()
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'test@email.com',
    })
    readonly email: string;

    @Field(() => Int)
    @IsDate()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: Date,
        example: '18',
    })
    readonly age: Date;
}
