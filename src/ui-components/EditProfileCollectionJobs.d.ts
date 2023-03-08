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
export declare type EditProfileCollectionJobsOverridesProps = {
    EditProfileCollectionJobs?: PrimitiveOverrideProps<CollectionProps>;
    EditProfile?: EditProfileProps;
} & EscapeHatchProps;
export declare type EditProfileCollectionJobsProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => EditProfileProps;
} & {
    overrides?: EditProfileCollectionJobsOverridesProps | undefined | null;
}>;
export default function EditProfileCollectionJobs(props: EditProfileCollectionJobsProps): React.ReactElement;
