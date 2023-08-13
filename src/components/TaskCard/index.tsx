import { Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ITask } from "../../interfaces/ITask";
import { Container, RemoveTaskButton, TaskContent } from "./styles";

interface TaskCardProps {
  task: ITask
  onSetTaskAsDone: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function TaskCard({ task, onSetTaskAsDone, onDeleteTask }: TaskCardProps) {
  return (
    <Container>
      <BouncyCheckbox
        size={24}
        fillColor="#5E60CE"
        isChecked={task.isDone}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={() => onSetTaskAsDone(task.id)}
      />

      <TaskContent>{task.content}</TaskContent>

      <RemoveTaskButton
        onPress={() => onDeleteTask(task.id)}
      >
        <Image source={require("../../assets/customIcons/trash.png")} style={{ width: 40 }} />
      </RemoveTaskButton>
    </Container>
  )
}