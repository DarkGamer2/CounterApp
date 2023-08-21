import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const Form = () => {
  return (
    <View>
      <Text style={styles.screenTitle}>Create Account</Text>
      <View>
        <Text style={styles.formLabel}>Name</Text>
        <TextInput style={styles.formInput}></TextInput>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput style={styles.formInput}></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  screenTitle: {
    textAlign: "center",
    fontSize: 40,
  },

  formInput: {
    margin: "auto",
    alignSelf: "center",
    backgroundColor: "#cfcdcc",
    width: 150,
    marginBottom: 20,
    borderRadius: 8,
    padding: 8,
  },

  buttonContainer: {
    width: 50,
    textAlign: "center",
    alignSelf: "center",
  },
  submitButton: {
    backgroundColor: "#7b00ff",
    padding: 10,
    width: 160,
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  formLabel:{
    textAlign:"center",
    marginBottom:10,
    fontSize:25
  }
});
