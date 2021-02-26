import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  Footer,
  LinkButton,
} from "./style.js";
import Marvel from "../../assets/marvel_logo.png";
import { Link } from "react-router-dom";
import { login } from "../../services/auth";

function Login({ history }) {
  function handleSubmit() {
    console.log('i was called')
    login("ldlskfçlpewekrwekrwlçerkwçelkr");
    history.push("/protect-route");
  }
  return (
    <Container>
      <Logo src={Marvel} />
      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button onClick={() => handleSubmit()}>Login</Button>
        <span>Não possui cadastro?</span>
        <LinkButton>clique aqui</LinkButton>
      </Form>
    </Container>
  );
}

export default Login;