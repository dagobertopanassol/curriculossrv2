/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EditProfileProps } from "./EditProfile";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DadosCad1OverridesProps = {
    DadosCad1?: PrimitiveOverrideProps<FlexProps>;
    DadosCad136572913?: EditProfileProps;
} & EscapeHatchProps;
export declare type DadosCad1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DadosCad1OverridesProps | undefined | null;
}>;
export default function DadosCad1(props: DadosCad1Props): React.ReactElement;
