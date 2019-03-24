import {FormControl, FormGroup, Validators} from '@angular/forms';

export class BasicValidators {

  // VALIDACIÓN DE LOS CAMPOS EMAIL:
  static email (control: FormControl){

    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEXP.test(control.value) ? null : {
        validateEmail: {
              valid: false
        }
      };
  }

    // VALIDACIÓN DE NOMBRES, APELLIDOS, ....
    static nombreApellido (control: FormControl){

        let NOMBRES_REGEXP = /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/;
        return NOMBRES_REGEXP.test(control.value) ? null : {
            validateNombreApellido: {
                valid: false
            }
        };
    }


    // VALIDAR QUE COINCIDE EL NÚMERO CON EL TIPO DE DOCUMENTO INDICADO
    //   NIF/NIE --> con un número correcto de NIF/NIE
    //   Pasaporte --> con un número correcto de Pasaporte

    static tipoNumDocumento (group: FormGroup): any{
        if (group) {

            // Formato NIF:
            //      8 números y una letra
            //           La letra tiene que ser una de las siguientes: (TRWAGMYFPDXBNJZSQVHLCKE)
            let NIF_REGEXP = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

            // Formato NIE:
            //      1 letra, 7 números y 1 letra
            //        La primera letra tiene que ser una de las siguientes: XYZ
            //        La última letra tiene que ser una de las siguientes: TRWAGMYFPDXBNJZSQVHLCKE
            let NIE_REGEXP = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;


            // Formato Pasaporte:
            //    3 letras y 6 dígitos y opcionalmente 1 letra (caracter de control para las autoridades)
            let PASAPORTE_REGEXP = /^[a-zA-Z]{3}[0-9]{6}[a-zA-Z]?$/;

            let tipoDoc = group.get('tipoDocumento').value;
            let numDoc = group.get('numDocumento').value;


            if (tipoDoc === 'NIF/NIE'){
                let testNIF = NIF_REGEXP.test(numDoc) ? 0 : 1;
                let testNIE = NIE_REGEXP.test(numDoc) ? 0 : 1;

                if ((testNIF + testNIE) === 1) return null;
                else return {
                    validateNIF_NIE: {
                        valid: false
                    }
                };
            }
            if (tipoDoc === 'Pasaporte'){
                return PASAPORTE_REGEXP.test(numDoc) ? null : {
                    validatePasaporte: {
                        valid: false
                    }
                };
            }
        }
        return null;
    }


    // VALIDAR QUE EN EL FORMULARIO DEL IDIOMA,
    //      OTROIDIOMA NO PUEDE QUEDAR EN BLANCO (ES DECIR ES OBLIGATORIO)
    //      SOLO EN CASO DE HABER SELECCIONADO LA OPCIÓN "OTROS" EN LA LISTA DEL IDIOMA

    static otroIdioma (group: FormGroup): any{
        if (group) {
            let idioma = group.get('idioma').value;
            let otroIdioma = group.get('otroIdioma').value;

            if (idioma === 'Otros'){

                if ((otroIdioma === '') || (typeof otroIdioma === 'undefined')){
                    return{
                        validateOtroIdioma: {
                            valid: false
                        }
                    }
                }else{
                    return null;
                }
            }
        }
        return null;
    }

}
