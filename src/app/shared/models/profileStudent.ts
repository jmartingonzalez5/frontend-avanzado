import {TituloUniversitarioStudent} from './tituloUniversitarioStudent';
import {TituloCicloFormativoStudent} from './tituloCicloFormativoStudent';
import {ExperienciaLaboral} from './experienciaLaboral';
import {Idioma} from './idioma';

export class ProfileStudent {
    id: string;
    nombre: string;
    apellidos: string;
    fechaNacimiento: string;
    tfnoContacto: string;
    tfnoAlternativo: string;
    tipoDocumento: string;
    numDocumento: string;
    direccion: string;
    provincia: string;
    municipio: string;
    sobreMi: string;
    otrasCompetencias: string;
    permisosConducir: string;
    titulosUniversitarios: TituloUniversitarioStudent[];
    ciclosFormativos: TituloCicloFormativoStudent[];
    experienciaLaboral: ExperienciaLaboral[];
    idiomas: Idioma[];
}

