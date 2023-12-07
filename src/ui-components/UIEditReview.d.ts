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
export declare type UIEditReviewOverridesProps = {
    UIEditReview?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Edit Review"?: PrimitiveOverrideProps<TextProps>;
    Divider4132431?: PrimitiveOverrideProps<ViewProps>;
    Forms4132435?: PrimitiveOverrideProps<FlexProps>;
    TextField41321066?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41321073?: PrimitiveOverrideProps<TextFieldProps>;
    TextField41321087?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4132439?: PrimitiveOverrideProps<ViewProps>;
    Forms4132440?: PrimitiveOverrideProps<FlexProps>;
    Button4132441?: PrimitiveOverrideProps<ButtonProps>;
    Button4132442?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UIEditReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UIEditReviewOverridesProps | undefined | null;
}>;
export default function UIEditReview(props: UIEditReviewProps): React.ReactElement;
