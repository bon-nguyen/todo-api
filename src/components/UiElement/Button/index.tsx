import React, { Children, FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  className?: string;
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  children?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  disabled: boolean;
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  textAlign?: "left" | "center" | "right";
}

const ButtonStyled = styled.button.attrs<ButtonProps>((props) => ({
  props,
}))`
  color: ${(props) => props.theme.colors.primary};
`;
// {
//     className,
//     type = "primary",
//     size = "medium",
//     loading = false,
//     children,
//     htmlType,
//     disabled = false,
//     onClickButton,
//     style,
//     textAlign = "center",
// }



const Button = ()=> {
    
}
export default Button;
