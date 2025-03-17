// usuario/usuario.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  private usuarios = [];

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExistente = this.usuarios.find(
      usuario => usuario.documento_identidad === createUsuarioDto.documento_identidad,
    );
    if (usuarioExistente) {
      throw new NotFoundException('El usuario ya existe');
    }
    this.usuarios.push(createUsuarioDto);
    return createUsuarioDto;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id_usuario: number) {
    const usuario = this.usuarios.find(u => u.id_usuario === id_usuario);
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }

  update(id_usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    const pos = this.usuarios.findIndex(u => u.id_usuario === id_usuario);
    if (pos === -1) {
      throw new NotFoundException('Usuario no encontrado');
    }
    this.usuarios[pos] = { ...this.usuarios[pos], ...updateUsuarioDto };
    return this.usuarios[pos];
  }

  remove(id_usuario: number) {
    const pos = this.usuarios.findIndex(u => u.id_usuario === id_usuario);
    if (pos === -1) {
      throw new NotFoundException('Usuario no encontrado');
    }
    const usuarioEliminado = this.usuarios.splice(pos, 1);
    return usuarioEliminado;
  }
}
