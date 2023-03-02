// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DadosUsuario } = initSchema(schema);

export {
  DadosUsuario
};