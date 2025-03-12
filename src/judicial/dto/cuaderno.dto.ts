import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateCuadernoDto {
  @IsNotEmpty()
  @IsInt()
  numero: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
