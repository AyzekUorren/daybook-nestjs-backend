import { AbstractResponseDto } from '../../utils/dto/abstract-response.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserResponseDto extends AbstractResponseDto {
    @Field(() => ID)
    @IsString()
    @ApiModelProperty({
        required: true,
        type: String,
        example: '111',
    })
    readonly id: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'profile/image.jpg',
    })
    readonly icon: string;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: Date,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly createdAt: Date;

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: Date,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly updatedAt: Date;

    @Field()
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'John',
    })
    readonly firstName: string;

    @Field({ nullable: true })
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

    @Field({ nullable: true })
    @IsDate()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: Date,
        example: new Date(),
    })
    readonly age: Date;

    constructor(data: any) {
        super();
        AbstractResponseDto.SetValueIfExists(this, data, 'icon');
        AbstractResponseDto.SetValueIfExists(this, data, 'id');
        AbstractResponseDto.SetValueIfExists(this, data, 'createdAt');
        AbstractResponseDto.SetValueIfExists(this, data, 'updatedAt');
        AbstractResponseDto.SetValueIfExists(this, data, 'firstName');
        AbstractResponseDto.SetValueIfExists(this, data, 'middleName');
        AbstractResponseDto.SetValueIfExists(this, data, 'lastName');
        AbstractResponseDto.SetValueIfExists(this, data, 'email');
        AbstractResponseDto.SetValueIfExists(this, data, 'age');
    }
}
