import { ApiModelProperty } from '@nestjs/swagger';
import { Field, ObjectType } from 'type-graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class UserAuthDto {
    @Field()
    @IsString()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'test@email.com',
    })
    readonly email: string;

    @Field()
    @IsString()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'password12345',
    })
    readonly password: string;
}
