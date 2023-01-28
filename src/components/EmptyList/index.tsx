import { Image, Text, View } from "react-native";

import { styles } from "./styles";

import clipboard from "../../assets/Clipboard.png";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <Text style={styles.text}>
        Você ainda não tem tarefas cadastradas. {"\n"} Crie tarefas e organize
        seus itens a fazer
      </Text>
    </View>
  );
}
