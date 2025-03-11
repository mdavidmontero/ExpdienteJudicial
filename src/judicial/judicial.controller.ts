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
import { CreateJudicialDto } from './dto/create-judicial.dto';
@Controller('judicial')
export class JudicialController {
  constructor(private readonly judicialService: JudicialService) {}

  @Post()
  createExpediente(@Body() createJudicialDto: CreateJudicialDto): Expediente {
    return this.judicialService.createExpediente(createJudicialDto);
  }

  @Get()
  getAllExpedientes(): Expediente[] {
    return this.judicialService.getAllExpedientes();
  }
  @Get(':id')
  getExpedienteById(@Param('id') id: string): Expediente | undefined {
    return this.judicialService.getExpedienteById(id);
  }

  @Post(':id/documentos/:cuadernoId')
  addDocumentoToCuaderno(
    @Param('id') expedienteId: string,
    @Param('cuadernoId') cuadernoId: number | string,
    @Body() documento: Documento,
  ): Cuaderno | undefined {
    return this.judicialService.addDocumentoToCuaderno(
      expedienteId,
      +cuadernoId,
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
    @Body('numero') numero: number,
    @Body('descripcion') descripcion: string,
  ): string {
    this.judicialService.addCuadernoToExpediente(
      expedienteId,
      numero,
      descripcion,
    );
    return 'Cuaderno creado';
  }
}
