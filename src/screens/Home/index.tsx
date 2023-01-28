import { useState } from "react";
import {
  Keyboard,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { Task } from "../../components/Task";

import { styles } from "./styles";
import { EmptyList } from "../../components/EmptyList";

import plus from "../../assets/plus.png";
import logo from "../../assets/Logo.png";
import { TaskInfo } from "../../components/TaskInfo";

export type TaskProps = {
  id: string;
  title: string;
  checked: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleAddTask() {
    if (!taskTitle) {
      return Alert.alert("Atenção", "Informe o nome da tarefa.");
    }

    const newTask = {
      id: new Date().getTime().toString(),
      title: taskTitle,
      checked: false,
    };

    setTasks((prev) => [...prev, { ...newTask }]);
    setTaskTitle("");
    Keyboard.dismiss();
  }

  function handleCheck(id: string) {
    const newTasks = tasks.map((item) => {
      if (item.id === id) item.checked = !item.checked;
      return item;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover", `Tem certeza que deseja remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          const newTasks = tasks.filter((item) => item.id !== id);
          setTasks(newTasks);
        },
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={logo} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <TaskInfo label="Criadas" value={tasks.length} color="#4EA8DE" />

        <TaskInfo
          label="Concluídas"
          value={tasks.filter((item) => item.checked).length}
          color="#8284FA"
        />
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            data={item}
            handleCheck={handleCheck}
            handleDelete={handleRemoveTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
