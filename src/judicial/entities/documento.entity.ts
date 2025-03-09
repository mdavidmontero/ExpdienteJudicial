export class Documento {
  id: number;
  nombre: string;
  fechaCreacion: string;
  fechaIncorporacion: string;
  orden: number;
  numeroPaginas: number;
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
  ) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.fechaIncorporacion = fechaIncorporacion;
    this.orden = orden;
    this.numeroPaginas = numeroPaginas;
    this.formato = formato;
    this.tamanio = tamanio;
    this.origen = origen;
    this.observaciones = observaciones;
  }
}
