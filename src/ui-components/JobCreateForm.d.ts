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
export declare type JobCreateFormInputValues = {
    position?: string;
    rate?: number;
    description?: string;
    owner?: string;
};
export declare type JobCreateFormValidationValues = {
    position?: ValidationFunction<string>;
    rate?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobCreateFormOverridesProps = {
    JobCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobCreateFormProps = React.PropsWithChildren<{
    overrides?: JobCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobCreateFormInputValues) => JobCreateFormInputValues;
    onSuccess?: (fields: JobCreateFormInputValues) => void;
    onError?: (fields: JobCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobCreateFormInputValues) => JobCreateFormInputValues;
    onValidate?: JobCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobCreateForm(props: JobCreateFormProps): React.ReactElement;
