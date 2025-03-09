import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JudicialService } from './judicial.service';
import { DespachoJudicial } from './entities/despachoJudicial.entity';
import { SerieDocumental } from './entities/serie-documental.entity';
import { Expediente } from './entities/expediente.entity';
import { Documento } from './entities/documento.entity';
import { ParteProcesal } from './entities/parte-procesal.entity';
import { Cuaderno } from './entities/cuaderno.entity';
@Controller('judicial')
export class JudicialController {
  constructor(private readonly judicialService: JudicialService) {}

  @Post()
  createExpediente(
    @Body('departamento') departamento: string,
    @Body('ciudad') ciudad: string,
    @Body('despacho') despacho: DespachoJudicial,
    @Body('serie') serie: SerieDocumental,
    @Body('numeroRadicacion') numeroRadicacion: string,
  ): Expediente {
    return this.judicialService.createExpediente(
      departamento,
      ciudad,
      despacho,
      serie,
      numeroRadicacion,
    );
  }
  @Get()
  getAllExpedientes(): Expediente[] {
    return this.judicialService.getAllExpedientes();
  }
  @Get(':id')
  getExpedienteById(@Param('id') id: string): Expediente | undefined {
    return this.judicialService.getExpedienteById(id);
  }

  @Post(':id/documentos')
  addDocumentoToExpediente(
    @Param('id') expedienteId: string,
    @Body() documento: Documento,
  ): Expediente | undefined {
    return this.judicialService.addDocumentoToExpediente(
      expedienteId,
      documento,
    );
  }

  @Post(':id/partes-procesales')
  addParteProcesalToExpediente(
    @Param('id') expedienteId: string,
    @Body() parte: ParteProcesal,
  ): Expediente | undefined {
    return this.judicialService.addParteProcesalToExpediente(
      expedienteId,
      parte,
    );
  }

  @Post(':id/cuadernos')
  addCuadernoToExpediente(
    @Param('id') expedienteId: string,
    @Body() cuaderno: Cuaderno,
  ): Expediente | undefined {
    return this.judicialService.addCuadernoToExpediente(expedienteId, cuaderno);
  }
}
