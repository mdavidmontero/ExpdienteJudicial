import { Documento } from './documento.entity';

export class Cuaderno {
  id: string;
  numero: number;
  descripcion: string;
  documento: Documento[];

  constructor(id: string, numero: number, descripcion: string) {
    this.id = id;
    this.numero = numero;
    this.descripcion = descripcion;
    this.documento = [];
  }
}
