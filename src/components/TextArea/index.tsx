import { forwardRef, useState } from "react";
import * as T from "./types";
import * as S from "./styles";

export const TextArea = forwardRef<HTMLTextAreaElement, T.ITextareaProps>(
  (
    {
      icon: Icon,
      iconAction,
      IconAfter = true,
      iconSize,
      maxRows = 3,
      ...rest
    },
    ref
  ) => {
    const [rows, setRows] = useState(1);
    const handleKeyPress = (e: any) => {
      if (e.key === "Enter" && e.target.rows < maxRows) {
        setRows(rows + 1);
      }
    };

    return (
      <S.Container
        iconAction={iconAction}
        iconAfter={IconAfter}
        iconSize={iconSize}
        onKeyDown={handleKeyPress}
      >
        {Icon && !IconAfter && (
          <Icon
            onClick={() => {
              iconAction && iconAction();
              setRows(1);
            }}
          />
        )}
        <textarea rows={rows} ref={ref} {...rest} />
        {Icon && IconAfter && (
          <Icon
            onClick={() => {
              iconAction && iconAction();
              setRows(1);
            }}
          />
        )}
      </S.Container>
    );
  }
);
