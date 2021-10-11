import React from 'react'
import { CheckBox, Button, TextInput, Text, TouchableOpacity, View } from 'react-native'
import { getReports } from '../Services/user_service';
import { styles } from '../Styles/styles'

export default class Home extends React.Component {
  state={};

  newReport() {
      this.props.navigation.navigate('NewReport');
  }

  async reports() {
    console.log('getting reports');
    const resp = await getReports();
    this.props.navigation.navigate('Reports', {reportsArray: resp });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homebtn}>
          <Button style={styles.homebtn} onPress={this.newReport.bind(this)} title="New Report"></Button>
          </View>
          <View style={styles.homebtn}>
      <Button style={styles.homebtn} onPress={this.reports.bind(this)} title="Reports"></Button>
    </View>
    </View>
    )
}
}
