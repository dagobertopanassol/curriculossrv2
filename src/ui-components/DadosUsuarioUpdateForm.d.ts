/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DadosUsuario } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DadosUsuarioUpdateFormInputValues = {
    nascimento?: string;
    celular?: string;
    foto?: string;
};
export declare type DadosUsuarioUpdateFormValidationValues = {
    nascimento?: ValidationFunction<string>;
    celular?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DadosUsuarioUpdateFormOverridesProps = {
    DadosUsuarioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nascimento?: PrimitiveOverrideProps<TextFieldProps>;
    celular?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DadosUsuarioUpdateFormProps = React.PropsWithChildren<{
    overrides?: DadosUsuarioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dadosUsuario?: DadosUsuario;
    onSubmit?: (fields: DadosUsuarioUpdateFormInputValues) => DadosUsuarioUpdateFormInputValues;
    onSuccess?: (fields: DadosUsuarioUpdateFormInputValues) => void;
    onError?: (fields: DadosUsuarioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DadosUsuarioUpdateFormInputValues) => DadosUsuarioUpdateFormInputValues;
    onValidate?: DadosUsuarioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DadosUsuarioUpdateForm(props: DadosUsuarioUpdateFormProps): React.ReactElement;
