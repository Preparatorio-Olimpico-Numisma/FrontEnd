import { InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  altImg: string;
  img: string;
  label: string;
}

//props: InputProps
export function Input({altImg, img, label, ...input}: InputAttributes) {
  return (
    <div className="InputContainer">
      <img src={img} alt={altImg} />
      <div>
        <input {...input} />
        <label>{label}</label>
      </div>
    </div>
  );
}
