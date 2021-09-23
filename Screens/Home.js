import React from 'react'
import { CheckBox, Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { logout } from '../Services/auth_service';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';

const initialState = {
  username: "",
  password: "",
  isSelected: false,
  categoryValue:"",
  reasonValue:"",
};

export default class Home extends React.Component {
  state = initialState;

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
    const txtInput = (
      <View>
      <TextInput style={styles.TextInput}></TextInput>
      </View>
    );

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
                  onValueChange={this.setSelection.bind(this)}></CheckBox>
      </View>
      <View style={styles.container}>
        <Text>Installation Category</Text>
      <Picker
  selectedValue={this.state.categoryValue}
  onValueChange={
    (itemValue) =>
    this.setState({categoryValue: itemValue})
    // console.log(this.state.value)
  }>
  <Picker.Item label="Domestic" value="domestic" />
  <Picker.Item label="Commercial" value="commercial" />
  <Picker.Item label="Industrial" value="industrial" />
  <Picker.Item label="Other (Please Specify)" value="other"/>
</Picker>
{this.state.categoryValue === 'other' ? txtInput : console.log(this.state)}
        </View>
        <View>
        <View style={styles.container}>
        <Text>Reason For Inspection</Text>
      <Picker
  selectedValue={this.state.reasonValue}
  onValueChange={
    (itemValue) =>
    this.setState({reasonValue: itemValue})
    // console.log(this.state.value)
  }>
  <Picker.Item label="Insurance Inspection" value="insurance-inspection" />
  <Picker.Item label="Safety Audit" value="safety-audit" />
  <Picker.Item label="Other (Please Specify)" value="other"/>
</Picker>
{this.state.reasonValue === 'other' ? txtInput : console.log(this.state)}
        </View>
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
  container2: {
    marginHorizontal: 20,
    marginBottom: 22.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 10,

    //
    marginTop: 150,
    flex: 1,
  },
  containerStyles: {
    minHeight: 50,
    minWidth: 149,
    // borderColor: '#6F8C95',
    // borderRadius: 6,
  },
  dropDownStyles: {
    backgroundColor: '#fff',
  },
  labelStyles: {
    color: '#6F8C95',
    fontSize: 14,
    textAlign: 'left',
  },
  itemStyles: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});