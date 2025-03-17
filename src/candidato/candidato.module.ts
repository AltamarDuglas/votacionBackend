// src/candidato/candidato.module.ts
import { Module } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CandidatoController } from './candidato.controller';

// Estos dos imports son necesarios para acceder a sus servicios
import { UsuarioModule } from '../usuario/usuario.module';
import { TipoCandidaturaModule } from '../tipo-candidatura/tipo-candidatura.module';

@Module({
  imports: [UsuarioModule, TipoCandidaturaModule],  // 👈 aquí está la clave para corregir tu error
  controllers: [CandidatoController],
  providers: [CandidatoService],
})
export class CandidatoModule {}
