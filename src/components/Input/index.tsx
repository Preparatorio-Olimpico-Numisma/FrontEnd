import { InputHTMLAttributes } from "react";
import "./styles.scss";

interface InputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  altImg?: string;
  img?: string;
  label: string;
  isFile?: boolean
}

export function Input({ altImg, img, label, isFile, ...input }: InputAttributes) {
  return (
    <div className="InputContainer">
      {img && altImg ?<img src={img} alt={altImg} /> : ""}
      <div>
        <input className={isFile ? "File":""} {...input} />
        <label>{label}</label>
      </div>
    </div>
  );
}
