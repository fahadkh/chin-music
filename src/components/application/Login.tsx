import styled from "styled-components";
import { subTitleStyles } from "styles/typography";

import Logo from "./Logo";

const Login = () => (
  <Container>
    <LogoContainer>
      <Logo />
    </LogoContainer>

    <Header>Log in to continue</Header>
    <div>
      <GoogleButton>Continue with Google</GoogleButton>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(8, 0, 5)};
  border-bottom: 1px solid #151515;
`;

const Header = styled.h1`
  ${subTitleStyles(17)}
`;

const GoogleButton = styled.button`
  max-width: 300px;
`;

export default Login;
