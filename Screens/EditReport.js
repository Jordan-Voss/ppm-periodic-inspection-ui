import React from 'react'
import { CheckBox, Button, TextInput, Text, TouchableOpacity, View } from 'react-native'
import { getReports } from '../Services/user_service';
import { styles } from '../Styles/styles'

export default class EditReport extends React.Component {
  render() {
    // const {reportObject} = this.props.navigation.state.params;
    console.log(this);
    return (
      <View style={styles.container}>
        <Text>Edit Reports</Text>
        <Text></Text>
    </View>
    )
}
}
