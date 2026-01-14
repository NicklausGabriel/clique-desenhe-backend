import { IsEnum, IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { PixabayCategory } from '../enums/category.enum';

export class GetRandomImageDto {
  @IsEnum(PixabayCategory)
  category: PixabayCategory;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(160)
  page: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(2)
  index: number;
}
