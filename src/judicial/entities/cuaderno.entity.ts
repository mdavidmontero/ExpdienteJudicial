export class Cuaderno {
  id: number;
  numero: number;
  descripcion: string;

  constructor(id: number, numero: number, descripcion: string) {
    this.id = id;
    this.numero = numero;
    this.descripcion = descripcion;
  }
}
