import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import codePush from 'react-native-code-push';

function onButtonPress() {
  codePush.sync({
    updateDialog: true,
    installMode: codePush.InstallMode.IMMEDIATE,
  });
}

function App() {
  return (
    <View style={styles.container}>
      <Text>Login to msales</Text>
      <TouchableOpacity onPress={onButtonPress}>
        <Text>Check for updates</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
export default codePush(App);
