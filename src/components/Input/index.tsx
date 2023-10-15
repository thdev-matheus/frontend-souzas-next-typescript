import * as S from "./styles";
import * as t from "./types";
import { forwardRef, useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputMask from "react-input-mask";

export const Input = forwardRef<HTMLInputElement, t.IInputProps>(
  (
    {
      label,
      icon: Icon,
      iconAction,
      iconAfter = false,
      iconSize,
      error,
      type,
      width,
      height,
      bgColor,
      borderColor,
      borderRadius,
      color,
      isMask = false,
      mask,
      ...rest
    },
    ref
  ) => {
    const [isPassword, setIsPassword] = useState<boolean>(true);

    useEffect(() => {
      type === "password" ? setIsPassword(true) : setIsPassword(false);
    }, [type]);

    return (
      <S.Container
        width={width}
        height={height}
        bgColor={bgColor}
        color={color}
      >
        <div>
          {label} {!!error && <span> - {error}</span>}
        </div>
        <S.InputContainer
          isErrored={!!error}
          borderColor={borderColor}
          borderRadius={borderRadius}
          color={color}
          iconSize={iconSize}
          iconAction={iconAction}
        >
          {Icon && !iconAfter && <Icon onClick={iconAction} />}
          {isMask && mask ? (
            <InputMask type={type} mask={mask} {...rest} inputRef={ref} />
          ) : type === "password" ? (
            <>
              <input
                type={isPassword ? "password" : "text"}
                {...rest}
                ref={ref}
              />
              {isPassword && (
                <FiEye
                  onClick={() => setIsPassword(!isPassword)}
                  className="password_eye"
                />
              )}
              {!isPassword && (
                <FiEyeOff
                  onClick={() => setIsPassword(!isPassword)}
                  className="password_eye"
                />
              )}
            </>
          ) : (
            <input type={type} {...rest} ref={ref} />
          )}
          {Icon && iconAfter && <Icon onClick={iconAction || undefined} />}
        </S.InputContainer>
      </S.Container>
    );
  }
);
