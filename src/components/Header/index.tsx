import { Image } from "react-native";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Image source={require('../../assets/logo.png')} />
    </Container>
  )
}