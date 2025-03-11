import { Cuaderno } from './cuaderno.entity';

export class Documento {
  id: number;
  nombre: string;
  fechaCreacion: string;
  fechaIncorporacion: string;
  orden: number;
  numeroPaginas: number;
  paginaInicio: number; // Nuevo campo
  paginaFin: number; // Nuevo campo
  formato: string;
  tamanio: number;
  origen: string;
  observaciones: string;

  constructor(
    id: number,
    nombre: string,
    fechaCreacion: string,
    fechaIncorporacion: string,
    orden: number,
    numeroPaginas: number,
    formato: string,
    tamanio: number,
    origen: string,
    observaciones: string,
    paginaInicio: number, // Nuevo parámetro
  ) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaIncorporacion = fechaIncorporacion;
    this.orden = orden;
    this.numeroPaginas = numeroPaginas;
    this.paginaInicio = paginaInicio; // Asignar página inicio
    this.paginaFin = paginaInicio + numeroPaginas - 1; // Calcular página fin
    this.formato = formato;
    this.tamanio = tamanio;
    this.origen = origen;

    this.observaciones = observaciones;
  }
}
