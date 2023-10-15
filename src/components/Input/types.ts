import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: IconType;
  error?: string;
  type?: string;
  isMask?: boolean;
  mask?: string;

  width?: string;
  height?: string;

  iconSize?: string;
  iconAction?: () => void;
  iconAfter?: boolean;

  borderRadius?: string;
  borderColor?: string;
  bgColor?: string;
  color?: string;
}

export interface ISInputProps {
  isErrored?: boolean;
  iconAction?: () => void;

  width?: string;
  height?: string;

  borderRadius?: string;

  iconSize?: string;

  borderColor?: string;
  bgColor?: string;
  color?: string;
}
