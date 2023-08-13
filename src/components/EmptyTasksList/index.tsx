import { Image, View } from "react-native";
import { Container, Separator, Warning } from "./styles";

export function EmptyTasksList() {
  return (
    <>
      <Separator />

      <Container>
        <Image source={require('../../assets/customIcons/Clipboard.png')} />
        <View>
          <Warning isTitle>Você ainda não tem tarefas cadastradas</Warning>
          <Warning>Crie tarefas e organize seus itens a fazer</Warning>
        </View>
      </Container>
    </>
  )
}