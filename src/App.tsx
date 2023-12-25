import { Container } from "@chakra-ui/react";
import { LoginPage } from "./features/pages/LoginPage";

function App() {
  return (
    <>
      <Container py={10} color={{ base: "red", sm: "blue", lg: "green" }}>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production look and feel, not just in our design specs, but in
        production
      </Container>
      <LoginPage />
    </>
  );
}

export default App;
