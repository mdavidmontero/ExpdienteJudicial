import { Cuaderno } from './cuaderno.entity';
import { DespachoJudicial } from './despachoJudicial.entity';
import { Documento } from './documento.entity';
import { ParteProcesal } from './parte-procesal.entity';
import { SerieDocumental } from './serie-documental.entity';

export class Expediente {
  id: string;
  departamento: string;
  ciudad: string;
  despacho: DespachoJudicial;
  serie: SerieDocumental;
  numeroRadicacion: string;
  partesProcesales: ParteProcesal[];
  cuadernos: Cuaderno[];
  expedienteFisico: boolean;
  documentosEnSoporteFisico: boolean;

  constructor(
    id: string,
    departamento: string,
    ciudad: string,
    despacho: DespachoJudicial,
    serie: SerieDocumental,
    numeroRadicacion: string,
    expedienteFisico: boolean,
    documentosEnSoporteFisico: boolean,
  ) {
    this.id = id;
    this.departamento = departamento;
    this.ciudad = ciudad;
    this.despacho = despacho;
    this.serie = serie;
    this.numeroRadicacion = numeroRadicacion;
    this.expedienteFisico = expedienteFisico;
    this.documentosEnSoporteFisico = documentosEnSoporteFisico;
    this.partesProcesales = [];
    this.cuadernos = [];
  }
}
