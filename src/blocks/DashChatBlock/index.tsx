"use client";

import * as S from "./styles";
import * as CTX from "@/providers";
import * as C from "@/components";

import { MessageBox, SystemMessage } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { useEffect } from "react";

// export interface IMessage {
//   id: string | number
//   position: string
//   text: string
//   title: string
//   focus: boolean
//   date: number | Date
//   dateString?: string
//   avatar?: string
//   titleColor: string
//   forwarded: boolean
//   replyButton: boolean
//   removeButton: boolean
//   status: 'waiting' | 'sent' | 'received' | 'read'
//   statusTitle?: string
//   notch: boolean
//   copiableDate?: boolean
//   retracted: boolean
//   className?: string
//   letterItem?: ILetterItem
//   reply?: IReplyMessage | any
//   type: string
// }

export const DashChatBlock = () => {
  const { messages } = CTX.useMessages();
  const { user } = CTX.useUser();

  // useEffect(() => {
  //   document.getElementById("dashchatmessages")?.scrollTo(0, 600000);
  // }, []);

  return <S.Container id="dashchatmessages"></S.Container>;
};
