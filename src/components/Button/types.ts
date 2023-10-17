import { IconType } from "react-icons";

export interface IButtonProps {
  onAction: () => void;
  label: string;
  icon?: IconType;
  iconAfter?: boolean;
  iconSize?: string;
  type?: "button" | "submit" | "reset" | undefined;
  secondary?: boolean;

  width?: string;
  height?: string;

  fontSize?: string;

  radius?: string;
}

export interface ISButtonProps {
  iconAfter?: boolean;
  iconSize?: string;
  secondary: boolean;

  width?: string;
  height?: string;

  fontSize?: string;

  radius?: string;
}
