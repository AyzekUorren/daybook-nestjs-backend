import { AbstractResponseDto } from '../../utils/dto/abstract-response.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserResponseDto extends AbstractResponseDto {
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'profile/image.jpg',
    })
    readonly icon: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly createdAt: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example:
            'Wed Sep 18 2019 12:16:28 GMT+0300 (Eastern European Summer Time)',
    })
    readonly updatedAt: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'John',
    })
    readonly firstName: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Jason',
    })
    readonly middleName: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'Doe',
    })
    readonly lastName: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: String,
        example: 'test@email.com',
    })
    readonly email: string;
    @IsString()
    @IsOptional()
    @ApiModelProperty({
        required: false,
        type: Number,
        example: '18',
    })
    readonly age: string;

    constructor(data: any) {
        super();
        AbstractResponseDto.SetValueIfExists(this, data, 'icon');
        AbstractResponseDto.SetValueIfExists(this, data, 'createdAt');
        AbstractResponseDto.SetValueIfExists(this, data, 'updatedAt');
        AbstractResponseDto.SetValueIfExists(this, data, 'firstName');
        AbstractResponseDto.SetValueIfExists(this, data, 'middleName');
        AbstractResponseDto.SetValueIfExists(this, data, 'lastName');
        AbstractResponseDto.SetValueIfExists(this, data, 'email');
        AbstractResponseDto.SetValueIfExists(this, data, 'age');
    }
}
