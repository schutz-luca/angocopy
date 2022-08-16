/**
 * IMPORTS
 */
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
export const schema = yup.object().shape({
  email: yup.string().typeError("Preencha com um texto").email("Email inválido").required('Digite seu email'),
  name: yup.string().typeError("Preencha com um texto").required('Digite seu nome completo'),
  confirmPassword: yup.string().typeError("Preencha com um texto").oneOf([yup.ref('password'), null], 'Senha não confere'),
  password: yup.string().typeError("Preencha com um texto").required('Digite sua senha'),
  bi: yup.string().typeError("Preencha com um texto").required('Digite seu BI'),
  nif: yup.string().typeError("Preencha com um texto").required('Digite seu NIF'),
  phone: yup.string().typeError("Preencha com um texto").required('Digite seu telefone'),
  state: yup.string().typeError("Preencha com um texto").required('Selecione sua província'),
  city: yup.string().typeError("Preencha com um texto").required('Digite sua cidade'),
  address: yup.string().typeError("Preencha com um texto").required('Digite seu endereço completo')
});