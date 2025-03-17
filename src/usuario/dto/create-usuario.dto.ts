// src/usuario/dto/create-usuario.dto.ts
import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsInt({ message: 'id_usuario debe ser numérico' })
  id_usuario: number;

  @IsString({ message: 'nombre debe ser texto' })
  @IsNotEmpty({ message: 'nombre no puede estar vacío' })
  nombre: string;

  @IsString({ message: 'apellido debe ser texto' })
  @IsNotEmpty({ message: 'apellido no puede estar vacío' })
  apellido: string;

  @IsString({ message: 'documento_identidad debe ser texto' })
  @IsNotEmpty({ message: 'documento_identidad no puede estar vacío' })
  documento_identidad: string;

  @IsEmail({}, { message: 'correo_electronico debe ser un email válido' })
  correo_electronico: string;

  @IsString({ message: 'contrasena debe ser texto' })
  @IsNotEmpty({ message: 'contrasena no puede estar vacía' })
  contrasena: string;

  @IsInt({ message: 'id_Rol debe ser numérico' })
  id_Rol: number;

  @IsInt({ message: 'id_Curso debe ser numérico' })
  id_Curso: number;
}
