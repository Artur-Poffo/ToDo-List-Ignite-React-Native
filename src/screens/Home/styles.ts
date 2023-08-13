import { styled } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 0 24px;
`

export const InputContainer = styled.View`
  flex-direction: row;
  gap: 5px;
  margin-top: -7%;
  margin-bottom: 33px;
`

interface AddTaskInput {
  isInFocus: boolean
}

export const AddTaskInput = styled.TextInput<AddTaskInput>`
  flex: 1;
  height: 54px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONTS_FAMILY.PRIMARY};
  border: 1px solid ${({ theme, isInFocus }) => isInFocus ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
  border-radius: 6px;
`

export const AddTaskButton = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`

export const SummaryContainer = styled.View`
  width: '100%';
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 21px;
`