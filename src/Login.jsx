import {
  Button,
  Input,
  Center,
  Stack,
  Container,
  Avatar,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const [errorU, setErrorU]= useState("x");
  const [errorP, setErrorP]= useState("x");

  const submit = () => {
    if (user==="usuario" && password==="123"){
      setErrorU("s");
      setErrorP("s");
      navigate("/PageGifs") 
    }
     else{
      setErrorU("n");
      setErrorP("n");
     }
  };

  return (
    <Center
      height="100vh"
      backgroundImage={
        "https://i.pinimg.com/736x/0c/c9/04/0cc9041f6ad1dbb68fad785ed2f6555f.jpg"
      }
    >
      <Container maxW={"md"} borderRadius={"2xl"} bg={"#5C6168"}>
        <Stack p="4" color="white" axis="both">
          <Center>
            <Avatar
              bg={"#496892"}
              size={"xl"}
              src="https://cdn-icons-png.flaticon.com/128/11284/11284777.png"
            ></Avatar>
          </Center>

          <Input
            type="text"
            textColor={"black"}
            placeholder="User"
            bgColor={"#CED9E9"}
            onChange={(event) => setUser(event.target.value) }
          />
          <Input
            type="text"
            textColor={"black"}
            placeholder="Password"
            bgColor={"#CED9E9"}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errorP==="n" && errorU==="n"?<Text textColor={"red.500"}>usuario o contraseña incorrectos</Text>:null}
          <Center>
            <Button colorScheme="white" bgColor={"#4F75AD"} onClick={submit}>
              Login
            </Button>
          </Center>
          <Center>
            <h1>Forgot the password? </h1>
          </Center>
        </Stack>
      </Container>
    </Center>
  );
}
