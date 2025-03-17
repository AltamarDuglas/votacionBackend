import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoCandidaturaDto } from './create-tipo-candidatura.dto';

export class UpdateTipoCandidaturaDto extends PartialType(CreateTipoCandidaturaDto) {}
