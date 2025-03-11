import { Documento } from './documento.entity';

export class Cuaderno {
  id: number;
  numero: number;
  descripcion: string;
  documento: Documento[];

  constructor(id: number, numero: number, descripcion: string) {
    this.id = id;
    this.numero = numero;
    this.descripcion = descripcion;
    this.documento = [];
  }
}
