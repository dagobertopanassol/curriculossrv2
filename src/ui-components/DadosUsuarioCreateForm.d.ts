/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DadosUsuarioCreateFormInputValues = {
    nascimento?: string;
    celular?: string;
    foto?: string;
};
export declare type DadosUsuarioCreateFormValidationValues = {
    nascimento?: ValidationFunction<string>;
    celular?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DadosUsuarioCreateFormOverridesProps = {
    DadosUsuarioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nascimento?: PrimitiveOverrideProps<TextFieldProps>;
    celular?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DadosUsuarioCreateFormProps = React.PropsWithChildren<{
    overrides?: DadosUsuarioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DadosUsuarioCreateFormInputValues) => DadosUsuarioCreateFormInputValues;
    onSuccess?: (fields: DadosUsuarioCreateFormInputValues) => void;
    onError?: (fields: DadosUsuarioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DadosUsuarioCreateFormInputValues) => DadosUsuarioCreateFormInputValues;
    onValidate?: DadosUsuarioCreateFormValidationValues;
} & React.CSSProperties>;
export default function DadosUsuarioCreateForm(props: DadosUsuarioCreateFormProps): React.ReactElement;
