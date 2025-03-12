import { IsNotEmpty, IsString } from 'class-validator';

export class DespachoJudicial {
  @IsNotEmpty()
  @IsString()
  codigoDespacho: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  categoria: string;
}
