import { Injectable } from '@nestjs/common';
import { Expediente } from './entities/expediente.entity';
import { DespachoJudicial } from './entities/despachoJudicial.entity';
import { SerieDocumental } from './entities/serie-documental.entity';
import { Documento } from './entities/documento.entity';
import { ParteProcesal } from './entities/parte-procesal.entity';
import { Cuaderno } from './entities/cuaderno.entity';
import { generateUID } from 'src/common/utils/uuid.helper';

@Injectable()
export class JudicialService {
  private expedientes: Expediente[] = [];
  private nextExpedienteId = generateUID();

  createExpediente(
    departamento: string,
    ciudad: string,
    despacho: DespachoJudicial,
    serie: SerieDocumental,
    numeroRadicacion: string,
  ): Expediente {
    const expedienteId = generateUID();
    const expediente = new Expediente(
      expedienteId,
      departamento,
      ciudad,
      despacho,
      serie,
      numeroRadicacion,
    );
    this.expedientes.push(expediente);
    return expediente;
  }

  getAllExpedientes(): Expediente[] {
    return this.expedientes;
  }

  getExpedienteById(id: string): Expediente | undefined {
    return this.expedientes.find((exp) => exp.id === id);
  }

  addDocumentoToExpediente(
    expedienteId: string,
    documento: Documento,
  ): Expediente | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    if (expediente) {
      expediente.documentos.push(documento);
    }
    return expediente;
  }

  addParteProcesalToExpediente(
    expedienteId: string,
    parte: ParteProcesal,
  ): Expediente | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    if (expediente) {
      expediente.partesProcesales.push(parte);
    }
    return expediente;
  }
  addCuadernoToExpediente(
    expedienteId: string,
    cuaderno: Cuaderno,
  ): Expediente | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    if (expediente) {
      expediente.cuadernos.push(cuaderno);
    }
    return expediente;
  }
}
