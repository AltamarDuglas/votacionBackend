// src/tipo-candidatura/dto/create-tipo-candidatura.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoCandidaturaDto {
  @IsInt({ message: 'id_candidatura debe ser numérico' })
  id_candidatura: number;

  @IsString({ message: 'descripcion debe ser texto' })
  @IsNotEmpty({ message: 'descripcion no puede estar vacía' })
  descripcion: string;
}
