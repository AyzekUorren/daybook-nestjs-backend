import { ApiModelProperty } from '@nestjs/swagger';
import { Field, InputType } from 'type-graphql';
import { IsString } from 'class-validator';

@InputType()
export class UserAuthDto {
    @Field()
    @IsString()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'example@mail.com',
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
