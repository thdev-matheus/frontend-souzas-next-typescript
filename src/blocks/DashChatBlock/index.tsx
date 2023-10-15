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

  const msgProps = {
    focus: false,
    forwarded: false,
    replyButton: false,
    removeButton: false,
    copiableDate: false,
    retracted: false,
    titleColor: "#313131",
    statusTitle: "",
    className: "msg_box",
  };

  useEffect(() => {
    document.getElementById("daschatmessages")?.scrollTo(0, 600000);
  }, []);

  return (
    <S.Container id="daschatmessages">
      <S.BoxMessages>
        {messages.map((msg, i, arr) => (
          <>
            {msg.user?.id !== arr[i - 1]?.user?.id && (
              <C.Separator height="2rem" />
            )}
            {msg.type === "text" ? (
              <>
                <MessageBox
                  id={msg.id}
                  type="text"
                  position={msg.user?.id == user.id ? "right" : "left"}
                  text={msg.text!}
                  title={msg.user!.username}
                  date={msg.date}
                  avatar={msg.user!.image}
                  reply={msg.replyData}
                  status="received"
                  notch={msg.user?.id == user.id ? true : false}
                  {...msgProps}
                />
              </>
            ) : msg.type === "system" ? (
              <SystemMessage
                id={msg.id}
                type="system"
                position=""
                text={msg.text!}
                title=""
                date={msg.date}
                status="received"
                notch={false}
                {...msgProps}
              />
            ) : msg.type == "photo" ? (
              <MessageBox
                id={msg.id}
                type="photo"
                position={msg.user?.id == user.id ? "right" : "left"}
                text=""
                title={msg.user!.username}
                date={msg.date}
                avatar={msg.user!.image}
                reply={msg.replyData}
                status="received"
                data={{
                  ...msg.data!,
                  width: 200,
                  height: 100,
                  status: {
                    click: () => {},
                  },
                }}
                notch={msg.user?.id == user.id ? true : false}
                {...msgProps}
                onClick={() => {
                  // função para abrir modal de foto
                  console.log("clickou");
                }}
              />
            ) : null}
          </>
        ))}
      </S.BoxMessages>
    </S.Container>
  );
};
