import {
  IsString,
  IsBoolean,
  ValidateNested,
  MinLength,
  Min,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DespachoJudicial } from '../entities/despachoJudicial.entity';
import { SerieDocumental } from '../entities/serie-documental.entity';

export class CreateJudicialDto {
  @IsNotEmpty({ message: 'Departamento no puede estar vacío' })
  @IsString({ message: 'Departamento no valido' })
  departamento: string;

  @IsNotEmpty({ message: 'Ciudad no puede estar vacía' })
  @IsString({ message: 'Ciudad no valido' })
  ciudad: string;

  @ValidateNested()
  @Type(() => DespachoJudicial)
  despacho: DespachoJudicial = new DespachoJudicial('', '', '');

  @ValidateNested()
  serie: SerieDocumental = new SerieDocumental(0, '', '');

  @IsNotEmpty({ message: 'Numero Radicacion no puede estar vacío' })
  @IsString()
  numeroRadicacion: string;

  @IsBoolean()
  expedienteFisico: boolean;

  @IsBoolean({ message: 'Documentos en Soporte Físico no puede estar vacío' })
  documentosEnSoporteFisico: boolean;
}
