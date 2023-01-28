import { Text, View, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

import { TaskProps } from "../../screens/Home";

import checked from "../../assets/checked.png";
import trash from "../../assets/trash.png";

interface Props {
  data: TaskProps;
  handleCheck: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function Task({ data, handleCheck, handleDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleCheck(data.id)}
        activeOpacity={0.7}
        style={data.checked ? styles.checked : styles.unchecked}
      >
        {data.checked && <Image source={checked} />}
      </TouchableOpacity>

      <Text style={data.checked ? styles.textChecked : styles.text}>
        {data.title}
      </Text>

      <TouchableOpacity
        onPress={() => handleDelete(data.id)}
        activeOpacity={0.7}
      >
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  );
}
