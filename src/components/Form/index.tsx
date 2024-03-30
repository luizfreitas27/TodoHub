import { FormContent, FormDiv } from "./styles";

export const Form = ({
  LabelForm,
  LabelButton,
  children,
}: {
  LabelForm?: string;
  LabelButton?: string;
  children: React.ReactNode;
}) => {
  return (
    <FormDiv>
      <FormContent>
        {LabelForm ? <h1>{LabelForm}</h1> : null}
        {children}
      </FormContent>
      {LabelButton ? <button>{LabelButton}</button> : null}
    </FormDiv>
  );
};
