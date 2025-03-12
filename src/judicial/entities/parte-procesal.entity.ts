export class ParteProcesal {
  id: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombre: string;

  constructor(
    id: string,
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
