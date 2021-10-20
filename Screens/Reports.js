import React from 'react'
import { CheckBox, Button, FlatList, Image, TextInput, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { styles } from '../Styles/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { logout } from '../Services/user_service';
import { ScrollView } from 'react-native-gesture-handler';



export default class Reports extends React.Component {
    onPressEdit(index, array) {
        this.props.navigation.navigate('EditReport', { index: index, array: array});
    }
    logouts = () => {
        logout();
        this.props.navigation.navigate('Login');
    
    }
    handleLogout = async () => {
        this.props.navigation.navigate('Home');
      };
    

    render() {
        const {reportsArray} = this.props.navigation.state.params;
        
        return (
            <ScrollView>
                <View style={styles.container}>
                  <View style={{flexDirection:"row"}}>
                  <View style={{flex:1}}>
      <TouchableOpacity
        onPress={this.handleLogout}
        style={styles.roundButton2}>
        <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
        <Text>Back</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
        <TouchableOpacity
        onPress={this.logouts}
        style={styles.roundButton1}>
        <MaterialCommunityIcons name="logout" size={24} color="black" />
        <Text>Logout</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View>
            <Image style={styles.homeImage} source={require('../images/PPM.png')}
            />
        </View>
            <View>
            <Text>RESPONSE</Text>
            {reportsArray instanceof Array ? reportsArray.map((itm, ndx) =>
            <View style={styles.row} key={ndx}>
            <Text style={styles.viewReportsNames} key={itm.reportName}>{itm.reportName}</Text>
            <TouchableOpacity style={styles.viewReportsBtn} onPress={this.onPressEdit.bind(this, ndx, this.props.navigation.state.params)}>
                <Text style={styles.viewReportButtonText}>Edit</Text>
                {console.log(ndx)}
                {console.log(reportsArray[ndx])}
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewReportsBtn}title="View">
            <Text style={styles.viewReportButtonText}>View</Text>
            </TouchableOpacity>
            </View>
            ) :  <View>
            <Text>No Reports to Show</Text>
        </View>}
            
            </View>
            <View>
            </View>
        </View>
        </ScrollView>
          );
        
    }
}
