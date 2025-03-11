import { Injectable, NotFoundException } from '@nestjs/common';
import { Expediente } from './entities/expediente.entity';
import { DespachoJudicial } from './entities/despachoJudicial.entity';
import { SerieDocumental } from './entities/serie-documental.entity';
import { Documento } from './entities/documento.entity';
import { ParteProcesal } from './entities/parte-procesal.entity';
import { Cuaderno } from './entities/cuaderno.entity';
import { generateUID } from 'src/common/utils/uuid.helper';
import { CreateJudicialDto } from './dto/create-judicial.dto';

@Injectable()
export class JudicialService {
  private expedientes: Expediente[] = [];
  private nextExpedienteId = generateUID();
  private nextCuadernoId = 1;

  createExpediente(createJudicialDto: CreateJudicialDto): Expediente {
    const expedienteId = generateUID(); // Generar un ID único para el expediente

    // Extraer propiedades del DTO
    const {
      departamento,
      ciudad,
      despacho,
      serie,
      numeroRadicacion,
      expedienteFisico,
      documentosEnSoporteFisico,
    } = createJudicialDto;

    const expediente = new Expediente(
      expedienteId,
      departamento,
      ciudad,
      despacho,
      serie,
      numeroRadicacion,
      expedienteFisico,
      documentosEnSoporteFisico,
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

  addDocumentoToCuaderno(
    expedienteId: string,
    cuadernoId: number,
    documento: Documento,
  ): Cuaderno | undefined {
    const expediente = this.getExpedienteById(expedienteId);

    if (expediente) {
      let cuaderno = expediente.cuadernos.find((c) => c.id === cuadernoId);

      if (!cuaderno) {
        cuaderno = new Cuaderno(
          cuadernoId,
          cuadernoId,
          `Cuaderno ${cuadernoId}`,
        );
        expediente.cuadernos.push(cuaderno);
      }

      const documentoExiste = cuaderno.documento.some(
        (d) => d.id === documento.id,
      );

      if (!documentoExiste) {
        cuaderno.documento.push(documento);
        return cuaderno;
      }
    }
  }

  // addDocumentoToExpediente(
  //   expedienteId: string,
  //   documento: Documento,
  // ): Expediente | undefined {
  //   const expediente = this.getExpedienteById(expedienteId);
  //   if (expediente) {
  //     expediente.documentos.push(documento);
  //   }
  //   return expediente;
  // }

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
    numero: number,
    descripcion: string,
  ): Expediente | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    if (!expediente) {
      throw new NotFoundException('Expediente not exists');
    }
    if (expediente) {
      const cuaderno = new Cuaderno(this.nextCuadernoId++, numero, descripcion);
      expediente.cuadernos.push(cuaderno);
      return expediente;
    }
  }
}
