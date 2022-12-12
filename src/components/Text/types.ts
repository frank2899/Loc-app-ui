import { TextProps as NativeTextProps } from "react-native";
import { LayoutProps, SpaceProps, TypographyProps } from "styled-system";
import { ReactNode } from "react"

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps, NativeTextProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  children?: ReactNode;
}
