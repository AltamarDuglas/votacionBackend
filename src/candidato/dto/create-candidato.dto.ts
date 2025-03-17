// src/candidato/dto/create-candidato.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCandidatoDto {
  @IsInt({ message: 'id_Candidato debe ser numérico' })
  id_Candidato: number;

  @IsInt({ message: 'id_Usuario debe ser numérico' })
  id_Usuario: number;

  @IsString({ message: 'No_Tarjeton debe ser texto' })
  @IsNotEmpty({ message: 'No_Tarjeton es requerido' })
  No_Tarjeton: string;

  @IsInt({ message: 'id_Tipo_Candidatura debe ser numérico' })
  id_Tipo_Candidatura: number;
}
