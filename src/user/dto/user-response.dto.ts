import { AbstractResponseDto } from '../../utils/dto/abstract-response.dto';
import { IsOptional, IsString } from 'class-validator';
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
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly createdAt: string;

    @Field({ nullable: true })
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly updatedAt: string;

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
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly age: string;

    constructor(data: any) {
        super();
        this.SetValueIfExists(data, [
            'icon',
            'id',
            'createdAt',
            'updatedAt',
            'firstName',
            'middleName',
            'lastName',
            'email',
            'age',
        ]);
    }
}
