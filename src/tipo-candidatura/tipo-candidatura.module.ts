// tipo-candidatura.module.ts
import { Module } from '@nestjs/common';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { TipoCandidaturaController } from './tipo-candidatura.controller';

@Module({
  controllers: [TipoCandidaturaController],
  providers: [TipoCandidaturaService],
  exports: [TipoCandidaturaService], // 👈 obligatorio exportar también aquí
})
export class TipoCandidaturaModule {}
