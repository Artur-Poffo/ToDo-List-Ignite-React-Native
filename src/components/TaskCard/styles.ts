import { styled } from "styled-components/native";

export const Container = styled.View`
  width: '100%';
  padding: 12px 8px 12px 12px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  margin-bottom: 8px;
`

export const TaskContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.PRIMARY};
  font-size: 16px;
  flex: 1;
`

export const RemoveTaskButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`