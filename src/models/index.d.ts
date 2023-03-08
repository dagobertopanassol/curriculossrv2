import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDadosUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DadosUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nascimento?: string | null;
  readonly celular?: string | null;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDadosUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DadosUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nascimento?: string | null;
  readonly celular?: string | null;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DadosUsuario = LazyLoading extends LazyLoadingDisabled ? EagerDadosUsuario : LazyDadosUsuario

export declare const DadosUsuario: (new (init: ModelInit<DadosUsuario>) => DadosUsuario) & {
  copyOf(source: DadosUsuario, mutator: (draft: MutableModel<DadosUsuario>) => MutableModel<DadosUsuario> | void): DadosUsuario;
}

type EagerJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly position: string;
  readonly rate: number;
  readonly description: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJob = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Job, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly position: string;
  readonly rate: number;
  readonly description: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Job = LazyLoading extends LazyLoadingDisabled ? EagerJob : LazyJob

export declare const Job: (new (init: ModelInit<Job>) => Job) & {
  copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}