/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UINewReviewOverridesProps = {
    UINewReview?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Review"?: PrimitiveOverrideProps<TextProps>;
    Divider4132346?: PrimitiveOverrideProps<ViewProps>;
    Forms4132350?: PrimitiveOverrideProps<FlexProps>;
    TextField41321045?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41321052?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41321059?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4132354?: PrimitiveOverrideProps<ViewProps>;
    Forms4132355?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UINewReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UINewReviewOverridesProps | undefined | null;
}>;
export default function UINewReview(props: UINewReviewProps): React.ReactElement;
