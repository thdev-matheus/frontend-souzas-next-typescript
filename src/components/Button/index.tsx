import * as T from "./types";
import * as S from "./styles";

export const Button = ({
  label,
  onAction,
  width,
  height,
  icon: Icon,
  iconAfter = false,
  iconSize,
  fontSize,
  radius,
  type,
  secondary = false,
}: T.IButtonProps) => {
  return (
    <S.SButton
      iconAfter={iconAfter}
      iconSize={iconSize}
      width={width}
      height={height}
      fontSize={fontSize}
      radius={radius}
      onClick={onAction}
      type={type}
      secondary={secondary}
    >
      {Icon && <Icon />}
      {label}
    </S.SButton>
  );
};
