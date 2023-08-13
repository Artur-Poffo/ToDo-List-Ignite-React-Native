import { Container, ItemName, NumberIndicator } from "./styles";

interface SummaryItemProps {
  name: string;
  number: number;
  variant: "BLUE" | "PURPLE"
}

export function SummaryItem({ name, number, variant }: SummaryItemProps) {
  return (
    <Container>
      <ItemName variant={variant}>{name}</ItemName>
      <NumberIndicator>{number}</NumberIndicator>
    </Container>
  )
}