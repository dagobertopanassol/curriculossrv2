/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EditProfileProps } from "./EditProfile";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditProfileCollectionOverridesProps = {
    EditProfileCollection?: PrimitiveOverrideProps<CollectionProps>;
    EditProfile?: EditProfileProps;
} & EscapeHatchProps;
export declare type EditProfileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => EditProfileProps;
} & {
    overrides?: EditProfileCollectionOverridesProps | undefined | null;
}>;
export default function EditProfileCollection(props: EditProfileCollectionProps): React.ReactElement;
