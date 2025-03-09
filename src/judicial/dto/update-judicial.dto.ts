import { PartialType } from '@nestjs/mapped-types';
import { CreateJudicialDto } from './create-judicial.dto';

export class UpdateJudicialDto extends PartialType(CreateJudicialDto) {}
