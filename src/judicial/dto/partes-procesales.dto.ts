import { IsNotEmpty, IsString } from 'class-validator';

export class PartesProcesalesDto {
  @IsNotEmpty({ message: 'El tipo de documento no puede estar vacío' })
  @IsString({ message: 'El tipo de documento debe ser un string' })
  tipoDocumento: string;

  @IsNotEmpty({ message: 'El numero de documento no puede estar vacío' })
  @IsString({ message: 'El numero de documento debe ser un string' })
  numeroDocumento: string;

  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @IsString({ message: 'El nombre debe ser un string' })
  nombre: string;
}
