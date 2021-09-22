import React from 'react'
import { CheckBox, Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { logout } from '../Services/auth_service';

const initialState = {
  username: "",
  password: "",
  isSelected: false,
  countries: ["Egypt", "Canada", "Australia", "Ireland"]

};

export default class Home extends React.Component {
  state = initialState;
  this.setValue = this.setValue.bind(this);
}

setOpen(open) {
  this.setState({
    open
  });
}

setValue(callback) {
  this.setState(state => ({
    value: callback(state.value)
  }));
}

setItems(callback) {
  this.setState(state => ({
    items: callback(state.items)
  }));
}

  onUsernameChange = username => {
    this.setState({ username });
};

setSelection = isSelected => {
  this.setState({ isSelected });
};
  handleLogout = async () => {
    await logout();
    this.props.navigation.navigate('Auth')    
  };
  render() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={this.handleLogout} title="Logout"></Button>

      <View style={styles.inputView}>
      <Text>PR Number</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="PR Number"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
      <Text>Contractor Name</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Contractor Name"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
      <Text>Contractor Address</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Contractor Address"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
      <Text>Contractor Registration Number</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Contractor Registration Number"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
      <Text>Installation Approx. Age</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Installation Approx Age"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
      <Text>Occupant Name</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Occupant Name"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
        <Text>Occupant Address</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="Occupant Address"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
      <View style={styles.inputView}>
        <Text>Occupant in Attendance?</Text>
      <CheckBox
          value={this.state.isSelected}
          onValueChange={this.setSelection.bind(this)}
          style={styles.checkbox}
        />
      </View>
      <View style={styles.inputView}>
      <Text>Installation Category</Text>

      </View>
      <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="PR Number"
              placeholderTextColor="grey"
              value={this.state.username}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onUsernameChange}
              
              autoCapitalize="none"
              autoCorrect={false}
          />
      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  tabContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
  },
  reg_icon: {
      fontSize: 250,
      marginTop: "5%",
      alignItems: "center",
      alignContent: "center",
      color: "#cd077d",
      paddingLeft: "5%",
      paddingBottom: "1%",
  },
  icon: {
      // flex: 1,
      marginTop: "20%",
      fontSize: 250,
      alignItems: "center",
      alignContent: "center",
      color: "#cd077d",
      paddingLeft: "5%",
  },
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },

  image: {
      height: 150,
      width: 150,
      marginLeft: '40%',
  },
  // t:{
  //   marginTop:'50%',
  //   marginLeft:'45%',
  //   flex: 1,
  // },

  inputView: {
    flex: 1, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  errorMessageContainerStyle: {
      marginBottom: 8,
      backgroundColor: "#fff",
      padding: 8,
      borderRadius: 4,
  },

  errorMessageTextStyle: {
      color: "#db2828",
      textAlign: "center",
      fontSize: 12,
  },
  checkbox: {
    marginLeft:'10px',
  },

  TextInput: {
    marginLeft:'10px',
    borderWidth: '1px',
      height: 25,
      width: "25%",
      flex: 1,
      padding: 0,
      //   marginLeft: "50%",
      textAlign: "center",
  },

  forgot_button: {
      height: 30,
      textAlign: "center",
      color: "#db2828",
      //   marginBottom: 5,
  },
  account_button: {
      textAlign: "center",
      height: 30,
      color: "#db2828",
      // marginBottom: 10,
  },
  reg_loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#cd077d",
  },
  loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      marginLeft:'10%',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "blue",
  },
  loginText: {
      color: "#FEF2F2",
  },
});
