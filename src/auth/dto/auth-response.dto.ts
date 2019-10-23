import { AbstractResponseDto } from '../../utils/dto/abstract-response.dto';
import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class AuthResponseDto extends AbstractResponseDto {
    @Field()
    @IsNumber()
    @ApiModelProperty({
        required: true,
        type: Number,
        example: 3600,
    })
    readonly expiresIn: number;

    @Field()
    @IsString()
    @ApiModelProperty({
        required: true,
        type: String,
        example: 'accessKey',
    })
    // tslint:disable-next-line:variable-name
    readonly access_token: string;

    constructor(data: any) {
        super();
        AbstractResponseDto.SetValueIfExists(this, data, 'expiresIn');
        AbstractResponseDto.SetValueIfExists(this, data, 'access_token');
    }
}
