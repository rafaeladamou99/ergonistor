import { Button as MUIButton } from "@mui/material";
import "./Button.scss";
import Colors from "../../ColorsModule/Colors.module.scss";

export type TButtonType = EButtonType.primary | EButtonType.secondary;

export enum EButtonType {
  primary = "primary",
  secondary = "secondary",
}

interface IButton {
  type: TButtonType;
  children: string;
  onClick: () => void;
}
const Button = (props: IButton) => {
  const isPrimary = props.type === EButtonType.primary;
  return (
    <MUIButton
      variant={isPrimary ? "contained" : "outlined"}
      className={`custom-button ${isPrimary ? "" : "custom-button-secondary"}`}
      onClick={props.onClick}
    >
      {props.children}
    </MUIButton>
  );
};

export default Button;
