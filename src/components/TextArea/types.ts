import { TextareaHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: IconType;
  iconAction?: () => void;
  IconAfter?: boolean;
  iconSize?: string;

  maxRows?: number;
}

export interface ISTextareaProps {
  iconAction?: () => void;
  iconAfter?: boolean;
  iconSize?: string;
}
