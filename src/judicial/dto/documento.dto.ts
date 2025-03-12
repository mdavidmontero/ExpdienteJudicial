import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsDateString,
  Min,
} from 'class-validator';

export class CreateDocumentoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  fechaCreacion: string;

  @IsNotEmpty()
  @IsString()
  fechaIncorporacion: string;

  @IsInt()
  @Min(1, { message: 'El orden debe ser al menos 1' })
  orden: number;

  @IsInt()
  @Min(1, { message: 'El número de páginas debe ser al menos 1' })
  numeroPaginas: number;

  @IsInt()
  @Min(1, { message: 'La página de inicio debe ser al menos 1' })
  paginaInicio: number;

  @IsInt()
  @Min(1)
  paginaFin: number;

  @IsString()
  @IsNotEmpty()
  formato: string;

  @IsString()
  @IsNotEmpty()
  tamanio: string;

  @IsString()
  @IsNotEmpty()
  origen: string;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
