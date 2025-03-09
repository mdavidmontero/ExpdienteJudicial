export class ParteProcesal {
  id: number;
  tipoDocumento: string;
  numeroDocumento: string;
  nombre: string;

  constructor(
    id: number,
    tipoDocumento: string,
    numeroDocumento: string,
    nombre: string,
  ) {
    this.id = id;
    this.tipoDocumento = tipoDocumento;
    this.numeroDocumento = numeroDocumento;
    this.nombre = nombre;
  }
}
