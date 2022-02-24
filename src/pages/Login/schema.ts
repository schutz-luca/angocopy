/**
 * IMPORTS
 */
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
export const schema = yup.object().shape({
  username: yup.string().typeError("Preencha com um texto").required('Digite seu usuário'),
  password: yup.string().typeError("Preencha com um texto").required('Digite sua senha')
});