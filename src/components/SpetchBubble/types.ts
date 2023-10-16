import { IMessage } from "@/providers/MessageProvider/types";

export interface ISpetchBubbleProps {
  message: IMessage;
  position: "left" | "center" | "right";
  notch?: boolean;
}

export interface ISContainerProps {
  position: "left" | "center" | "right";
  notch: boolean;
}

export interface ISBubbleProps {
  position: "left" | "center" | "right";
  notch: boolean;
}

export interface IBoxTopProps {
  isLoggedUser: boolean;
}
