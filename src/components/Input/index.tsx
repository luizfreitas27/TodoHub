import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";
import { InputDiv } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  LabelInput?: string;
}

export const Input = forwardRef(
  (
    { LabelInput, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputDiv>
        {LabelInput ? <label htmlFor={LabelInput}>{LabelInput}</label> : null}
        <input id={LabelInput} ref={ref} {...rest} />
      </InputDiv>
    );
  }
);
