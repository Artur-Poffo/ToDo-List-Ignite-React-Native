import { styled } from "styled-components/native";

export const Separator = styled.View`
  width: '100%';
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Container = styled.View`
  padding: 48px 20px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  align-items: center;
  gap: 10px;
`

interface WarningProps {
  isTitle?: boolean
}

export const Warning = styled.Text<WarningProps>`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme, isTitle }) => isTitle ? theme.FONTS_FAMILY.PRIMARY_BOLD : theme.FONTS_FAMILY.PRIMARY};
  font-size: 14px;
  text-align: center;
`