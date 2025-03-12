import { Cuaderno } from './cuaderno.entity';

export class Documento {
  id: string;
  nombre: string;
  fechaCreacion: string;
  fechaIncorporacion: string;
  orden: number;
  numeroPaginas: number;
  paginaInicio: number;
  paginaFin: number;
  formato: string;
  tamanio: string;
  origen: string;
  observaciones: string;

  constructor(
    id: string,
    nombre: string,
    fechaCreacion: string,
    fechaIncorporacion: string,
    orden: number,
    numeroPaginas: number,
    formato: string,
    tamanio: string,
    origen: string,
    observaciones: string,
    paginaInicio: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaIncorporacion = fechaIncorporacion;
    this.orden = orden;
    this.numeroPaginas = numeroPaginas;
    this.paginaInicio = paginaInicio;
    this.paginaFin = paginaInicio + numeroPaginas - 1;
    this.formato = formato;
    this.tamanio = tamanio;
    this.origen = origen;

    this.observaciones = observaciones;
  }
}
