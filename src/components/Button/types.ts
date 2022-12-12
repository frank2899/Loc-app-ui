import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { LayoutProps, SpaceProps } from "styled-system";

export const scales = {
  MD: "md",
  SM: "sm",
  XS: "xs",
} as const;

export const variants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  LIGHT: "light"
} as const;

export type Scale = typeof scales[keyof typeof scales];
export type Variant = typeof variants[keyof typeof variants];

export interface BaseButtonProps extends LayoutProps, SpaceProps, TouchableOpacityProps {
  borderRadius?: string;
  isLoading?: boolean;
  scale?: Scale;
  variant?: Variant;
  disabled?: boolean | false;
  label?: ReactNode | string;
  children? : ReactNode;
}
