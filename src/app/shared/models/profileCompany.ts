import {DatosContactoEmpresa} from './datosContactoEmpresa';

export class ProfileCompany {
    id: string;
    nombreComercial: string;
    razonSocial: string;
    CIF: string;
    direccion: string;
    provincia: string;
    municipio: string;
    url: string;
    datosContacto: DatosContactoEmpresa;
}
