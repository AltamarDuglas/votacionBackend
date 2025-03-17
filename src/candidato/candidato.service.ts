// candidato.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { TipoCandidaturaService } from '../tipo-candidatura/tipo-candidatura.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';

@Injectable()
export class CandidatoService {
  private candidatos = [];

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly tipoCandidaturaService: TipoCandidaturaService,
  ) {}

  create(createDto: CreateCandidatoDto) {
    const usuario = this.usuarioService.findOne(createDto.id_Usuario);
    if (!usuario) throw new NotFoundException('El usuario no existe.');

    const tipo = this.tipoCandidaturaService.findOne(createDto.id_Tipo_Candidatura);
    if (!tipo) throw new NotFoundException('El tipo de candidatura no existe.');

    const existe = this.candidatos.find(c => c.id_Candidato === createDto.id_Candidato);
    if (existe) throw new BadRequestException('Ya existe un candidato con este ID.');

    const nuevoCandidato = { ...createDto };
    this.candidatos.push(nuevoCandidato);
    return nuevoCandidato;
  }

  findAll() {
    return this.candidatos;
  }

  findOne(id: number) {
    const candidato = this.candidatos.find(c => c.id_Candidato === id);
    if (!candidato) {
      throw new NotFoundException('Candidato no encontrado');
    }
    return candidato;
  }

  remove(id: number) {
    const index = this.candidatos.findIndex(c => c.id_Candidato === id);
    if (index === -1) throw new NotFoundException('Candidato no encontrado');
    const eliminado = this.candidatos.splice(index, 1);
    return eliminado;
  }
}
