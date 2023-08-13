import { useState } from "react";
import { FlatList, Image, Text } from "react-native";
import uuid from "react-native-uuid";
import { EmptyTasksList } from "../../components/EmptyTasksList";
import { Header } from "../../components/Header";
import { SummaryItem } from "../../components/SummaryItem";
import { TaskCard } from "../../components/TaskCard";
import { ITask } from "../../interfaces/ITask";
import { AddTaskButton, AddTaskInput, Container, InputContainer, SummaryContainer } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskName, setNewTaskName] = useState("")

  const [isInputOnFocus, setIsInputOnFocus] = useState(false)

  function handleCreateTask(taskContent: string) {
    const newTask: ITask = {
      id: uuid.v4().toString(),
      content: taskContent,
      isDone: false
    }

    setTasks(prevState => [...prevState, newTask])
    setNewTaskName("")
  }

  function handleSetTaskAsDone(taskId: string) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    const tempTasks = [...tasks]

    tempTasks[taskIndex].isDone = !tempTasks[taskIndex].isDone

    setTasks(tempTasks)
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <>
      <Header />

      <Container>
        <InputContainer>
          <AddTaskInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#808080'}
            isInFocus={isInputOnFocus}
            onFocus={() => setIsInputOnFocus(true)}
            onBlur={() => setIsInputOnFocus(false)}
            onChangeText={text => setNewTaskName(text)}
            value={newTaskName}
          />
          <AddTaskButton
            onPress={() => handleCreateTask(newTaskName)}
          >
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "bold" }} >
              <Image source={require("../../assets/customIcons/plus.png")} />
            </Text>
          </AddTaskButton>
        </InputContainer>

        <SummaryContainer>
          <SummaryItem name="Criadas" number={tasks.length} variant="BLUE" />
          <SummaryItem name="Concluídas" number={tasks.filter(task => task.isDone === true).length} variant="PURPLE" />
        </SummaryContainer>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={(task) => <TaskCard task={task.item} onSetTaskAsDone={handleSetTaskAsDone} onDeleteTask={handleDeleteTask} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <EmptyTasksList />}
        />
      </Container>
    </>
  )
}