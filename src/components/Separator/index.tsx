import * as T from "./types";
import * as S from "./styles";

export const Separator = ({
  bgColor,
  height,
  identifier,
  width = "100vw",
  zIndex,
  children,
}: T.ISeparatorProps) => {
  return (
    <S.Container
      id={identifier}
      bgColor={bgColor}
      height={height}
      width={width}
      zIndex={zIndex}
    >
      {children}
    </S.Container>
  );
};
