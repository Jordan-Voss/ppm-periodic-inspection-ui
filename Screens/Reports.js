import React from 'react'
import { CheckBox, Button, FlatList, TextInput, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { styles } from '../Styles/styles'

const initialState={
    key: null,
}
export default class Reports extends React.Component {
    state=initialState;
    onPressEdit(index, array) {
        this.props.navigation.navigate('EditReport', { index: index, array: array});
    }

    render() {
        // const key = 0;
        const {reportsArray} = this.props.navigation.state.params;
        return (
        <View>
            <View>
            <Text>RESPONSE</Text>
            
            <Text>{}</Text>
            {reportsArray.map((item, index) =>
            <View style={styles.row} key={index}>
            <Text style={styles.viewReportsNames} key={item.reportName}>{item.reportName}</Text>
            <TouchableOpacity style={styles.viewReportsBtn} onPress={this.onPressEdit.bind(this, index, this.props.navigation.state.params)}>
                <Text style={styles.viewReportButtonText}>Edit</Text>
                {console.log(index)}
                {console.log(reportsArray[index])}
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewReportsBtn}title="View">
            <Text style={styles.viewReportButtonText}>View</Text>
            </TouchableOpacity>
            </View>
            )}
            
            </View>
            <View>
            </View>
        </View>
        )
    }
}
