/**
 * IMPORTS
 */
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
export const schema = yup.object().shape({
  name: yup.string().typeError("Preencha com um texto").required('Digite seu nome completo'),
  message: yup.string().typeError("Preencha com um texto").required('Digite sua mensagem de contato'),
});