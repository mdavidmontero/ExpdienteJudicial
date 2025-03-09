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
  documentos: Documento[];
  expedienteFisico: boolean;
  documentosEnSoporteFisico: boolean;

  constructor(
    id: string,
    departamento: string,
    ciudad: string,
    despacho: DespachoJudicial,
    serie: SerieDocumental,
    numeroRadicacion: string,
  ) {
    this.id = id;
    this.departamento = departamento;
    this.ciudad = ciudad;
    this.despacho = despacho;
    this.serie = serie;
    this.numeroRadicacion = numeroRadicacion;
    this.partesProcesales = [];
    this.cuadernos = [];
    this.documentos = [];
  }
}
