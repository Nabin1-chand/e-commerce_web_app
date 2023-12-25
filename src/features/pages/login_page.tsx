import { Button, Container, Input, Stack } from "@chakra-ui/react";

interface ILogonPage {
  fname: string;
  lname: string;
}
const LoginPage = () => {
  return (
    <>
      <Container py={"5"}>
        <Input variant="outline" width="auto" placeholder="" />

        <Stack spacing={6} direction="row" align="center">
          <Button colorScheme="teal" width={40} variant="outline" size="md">
            Edit
          </Button>
          <Button colorScheme="red" width={40} size="md">
            Edit
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default LoginPage;
