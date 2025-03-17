// src/usuario/dto/update-usuario.dto.ts
import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString({ message: 'nombre debe ser texto' })
  nombre?: string;

  @IsOptional()
  @IsString({ message: 'apellido debe ser texto' })
  apellido?: string;

  @IsOptional()
  @IsEmail({}, { message: 'correo_electronico debe ser válido' })
  correo_electronico?: string;

  @IsOptional()
  @IsString({ message: 'contrasena debe ser texto' })
  contrasena?: string;

  @IsOptional()
  @IsInt({ message: 'id_Rol debe ser numérico' })
  id_Rol?: number;

  @IsOptional()
  @IsInt({ message: 'id_Curso debe ser numérico' })
  id_Curso?: number;
}
