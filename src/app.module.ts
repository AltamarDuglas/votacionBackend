import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoCandidaturaModule } from './tipo-candidatura/tipo-candidatura.module';
import { CandidatoModule } from './candidato/candidato.module';

@Module({
  imports: [UsuarioModule, TipoCandidaturaModule, CandidatoModule],
})
export class AppModule {}
