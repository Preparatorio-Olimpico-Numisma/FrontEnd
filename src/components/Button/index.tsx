import { ButtonHTMLAttributes } from "react";

import "./styles.scss";

type propsButtons = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isSuccess?: boolean;
};

export function Button({ isOutlined = false, isSuccess = false, ...props }: propsButtons) {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""} ${isSuccess ? "success" : ""}`} {...props} />
  );
}
