import { IsNotEmpty, IsString } from 'class-validator';

export class SerieDocumental {
  @IsNotEmpty({ message: 'El ID de la serie no puede estar vacío' })
  @IsString({ message: 'El ID de la serie debe ser un string' })
  id: string;

  @IsNotEmpty({ message: 'El código de la serie no puede estar vacío' })
  @IsString({ message: 'El código de la serie debe ser un string' })
  codigo: string;

  @IsNotEmpty({ message: 'La descripción de la serie no puede estar vacía' })
  @IsString({ message: 'La descripción de la serie debe ser un string' })
  descripcion: string;
}
