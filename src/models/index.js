// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DadosUsuario, Job } = initSchema(schema);

export {
  DadosUsuario,
  Job
};