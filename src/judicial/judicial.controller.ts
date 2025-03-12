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
import { PartesProcesalesDto } from './dto/partes-procesales.dto';
import { CreateCuadernoDto } from './dto/cuaderno.dto';
import { CreateDocumentoDto } from './dto/documento.dto';
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

  @Get('despacho')
  getAllDespachos(): DespachoJudicial[] {
    return this.judicialService.getAllDespachos();
  }

  @Get('serie-documental')
  getAllSerieDocumentals(): SerieDocumental[] {
    return this.judicialService.getAllSerieDocumentals();
  }

  @Get(':id')
  getExpedienteById(@Param('id') id: string): Expediente | undefined {
    return this.judicialService.getExpedienteById(id);
  }

  @Get('despacho/:codigo')
  getDespachoByCodigo(
    @Param('codigo') codigo: string,
  ): DespachoJudicial | undefined {
    return this.judicialService.getDespachoByCodigo(codigo);
  }

  @Get('serie-documental/:id')
  getSerieDocumentalById(@Param('id') id: string): SerieDocumental | undefined {
    return this.judicialService.getSerieDocumentalById(id);
  }

  @Post(':id/documentos/:cuadernoId')
  addDocumentoToCuaderno(
    @Param('id') expedienteId: string,
    @Param('cuadernoId') cuadernoId: string,
    @Body() createDocumentDto: CreateDocumentoDto,
  ): Cuaderno | undefined {
    return this.judicialService.addDocumentoToCuaderno(
      expedienteId,
      cuadernoId,
      createDocumentDto,
    );
  }

  @Post(':id/partes-procesales')
  addParteProcesalToExpediente(
    @Param('id') expedienteId: string,
    @Body() parteProcesalDto: PartesProcesalesDto,
  ): Expediente | undefined {
    return this.judicialService.addParteProcesalToExpediente(
      expedienteId,
      parteProcesalDto,
    );
  }

  @Post('despacho')
  addDespacho(
    @Body('codigoDespacho') codigoDespacho: string,
    @Body('nombre') nombre: string,
    @Body('categoria') categoria: string,
  ): string {
    this.judicialService.addDespacho(codigoDespacho, nombre, categoria);
    return 'Despacho creado';
  }

  @Post('serie-documental')
  addSerieDocumental(
    @Body('codigo') codigo: string,
    @Body('descripcion') descripcion: string,
  ): string {
    this.judicialService.addSerieDocumental(codigo, descripcion);
    return 'Serie documental creada';
  }

  @Post(':id/cuadernos')
  addCuadernoToExpediente(
    @Param('id') expedienteId: string,
    @Body() cuadernoDto: CreateCuadernoDto,
  ): string {
    this.judicialService.addCuadernoToExpediente(expedienteId, cuadernoDto);
    return 'Cuaderno creado';
  }
}
