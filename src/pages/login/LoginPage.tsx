import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { ContainerDiv, ContentDiv } from "../../styles/defaultContainer";
import { Main } from "./styles";

export const LoginPage = () => {
  return (
    <Main>
      <ContainerDiv>
        <ContentDiv>
          <Form LabelForm="Login" LabelButton="Entrar">
            <Input LabelInput="Email" type="email" />
            <Input LabelInput="Password" type="password" />
          </Form>
        </ContentDiv>
      </ContainerDiv>
    </Main>
  );
};
