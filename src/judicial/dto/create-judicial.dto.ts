import {
  IsString,
  IsBoolean,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { DespachoJudicial } from './despacho.dto';
import { SerieDocumental } from './serie-documental.dto';

export class CreateJudicialDto {
  @IsNotEmpty({ message: 'Departamento no puede estar vacío' })
  @IsString({ message: 'Departamento no valido' })
  departamento: string;

  @IsNotEmpty({ message: 'Ciudad no puede estar vacía' })
  @IsString({ message: 'Ciudad no valido' })
  ciudad: string;

  @IsNotEmpty({ message: 'Despacho no puede estar vacío' })
  @ValidateNested()
  @Type(() => DespachoJudicial)
  despacho: DespachoJudicial;

  @IsNotEmpty({ message: 'Serie documental no puede estar vacía' })
  @ValidateNested()
  @Type(() => SerieDocumental)
  serie: SerieDocumental;

  @IsNotEmpty({ message: 'Numero Radicacion no puede estar vacío' })
  @IsString()
  numeroRadicacion: string;

  @IsBoolean()
  expedienteFisico: boolean;

  @IsBoolean({ message: 'Documentos en Soporte Físico no puede estar vacío' })
  documentosEnSoporteFisico: boolean;
}
