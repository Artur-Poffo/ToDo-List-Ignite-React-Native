import { styled } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

interface ItemNameProps {
  variant: "BLUE" | "PURPLE"
}

export const ItemName = styled.Text<ItemNameProps>`
  color: ${({ theme, variant }) => variant === "BLUE" ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.PRIMARY_BOLD};
`

export const NumberIndicator = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.PRIMARY};
  padding: 2px 10px;
  border-radius: 999px;
`