export class DespachoJudicial {
  codigoDespacho: string;
  nombre: string;
  categoria: string;

  constructor(codigoDespacho: string, nombre: string, categoria: string) {
    this.codigoDespacho = codigoDespacho;
    this.nombre = nombre;
    this.categoria = categoria;
  }
}
