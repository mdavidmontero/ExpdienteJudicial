import { Injectable, NotFoundException } from '@nestjs/common';
import { Expediente } from './entities/expediente.entity';

import { Documento } from './entities/documento.entity';
import { ParteProcesal } from './entities/parte-procesal.entity';
import { Cuaderno } from './entities/cuaderno.entity';
import { generateIdRandom, generateUID } from 'src/common/utils/uuid.helper';
import { CreateJudicialDto } from './dto/create-judicial.dto';
import { DespachoJudicial } from './entities/despachoJudicial.entity';
import { SerieDocumental } from './entities/serie-documental.entity';
import { PartesProcesalesDto } from './dto/partes-procesales.dto';
import { CreateCuadernoDto } from './dto/cuaderno.dto';
import { CreateDocumentoDto } from './dto/documento.dto';

@Injectable()
export class JudicialService {
  private expedientes: Expediente[] = [];
  private nextExpedienteId = generateUID();
  private nextCuadernoId = 1;
  private despachos: DespachoJudicial[] = [];
  private series: SerieDocumental[] = [];

  createExpediente(createJudicialDto: CreateJudicialDto): Expediente {
    const expedienteId = generateUID();
    const expediente = new Expediente(
      expedienteId,
      createJudicialDto.departamento,
      createJudicialDto.ciudad,
      createJudicialDto.despacho,
      createJudicialDto.serie,
      createJudicialDto.numeroRadicacion,
      createJudicialDto.expedienteFisico,
      createJudicialDto.documentosEnSoporteFisico,
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

  getAllDespachos(): DespachoJudicial[] {
    return this.despachos;
  }

  getAllSerieDocumentals(): SerieDocumental[] {
    return this.series;
  }

  getDespachoByCodigo(codigo: string): DespachoJudicial | undefined {
    return this.despachos.find((d) => d.codigoDespacho === codigo);
  }
  getSerieDocumentalById(id: string): SerieDocumental | undefined {
    return this.series.find((s) => s.id === id);
  }

  addDocumentoToCuaderno(
    expedienteId: string,
    cuadernoId: string,
    documento: CreateDocumentoDto,
  ): Cuaderno | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    const documentoId = generateIdRandom();

    if (!expediente) {
      throw new NotFoundException('Expediente not exists');
    }
    const cuaderno = expediente.cuadernos.find((c) => c.id === cuadernoId);
    if (!cuaderno) {
      throw new NotFoundException('Cuaderno not exists');
    }

    const createDocument = new Documento(
      documentoId,
      documento.nombre,
      documento.fechaCreacion,
      documento.fechaIncorporacion,
      documento.orden,
      documento.numeroPaginas,
      documento.formato,
      documento.tamanio,
      documento.origen,
      documento.observaciones!,
      documento.paginaInicio,
    );
    cuaderno.documento.push(createDocument);
    return cuaderno;
  }

  addDespacho(
    codigoDespacho: string,
    nombre: string,
    categoria: string,
  ): DespachoJudicial | undefined {
    const despacho = new DespachoJudicial(codigoDespacho, nombre, categoria);

    const validExistDespacho = this.getDespachoByCodigo(codigoDespacho);
    if (!validExistDespacho) {
      this.despachos.push(despacho);
      return despacho;
    }
  }

  addSerieDocumental(
    codigo: string,
    descripcion: string,
  ): SerieDocumental | undefined {
    const serieDocumental = generateUID();
    const serie = new SerieDocumental(serieDocumental, codigo, descripcion);
    // const validExistSerie = this.getSerieDocumentalById(id);
    // if (!validExistSerie) {
    this.series.push(serie);
    return serie;
    // }
  }

  addParteProcesalToExpediente(
    expedienteId: string,
    parteProcesalDto: PartesProcesalesDto,
  ): Expediente | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    const generateId = generateIdRandom();
    const parteProcesal = new ParteProcesal(
      generateId,
      parteProcesalDto.tipoDocumento,
      parteProcesalDto.numeroDocumento,
      parteProcesalDto.nombre,
    );
    if (expediente) {
      expediente.partesProcesales.push(parteProcesal);
    }
    return expediente;
  }
  addCuadernoToExpediente(
    expedienteId: string,
    cuadernoDto: CreateCuadernoDto,
  ): Expediente | undefined {
    const expediente = this.getExpedienteById(expedienteId);
    const cuadernoI = generateIdRandom();
    if (!expediente) {
      throw new NotFoundException('Expediente not exists');
    }
    if (expediente) {
      const cuaderno = new Cuaderno(
        cuadernoI,
        cuadernoDto.numero,
        cuadernoDto.descripcion,
      );
      expediente.cuadernos.push(cuaderno);
      return expediente;
    }
  }
}
