import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
  },
  input: {
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 6,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginLeft: "30%",
    marginTop: 50,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 24,
  },
  listSeparator: {
    margin: 4,
  },
});
