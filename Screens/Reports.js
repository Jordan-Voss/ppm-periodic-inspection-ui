import React from 'react'
import { CheckBox, Button, FlatList, TextInput, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { styles } from '../Styles/styles'

export default class Reports extends React.Component {
    onPressEdit(index, array) {
        this.props.navigation.navigate('EditReport', { index: index, array: array});
    }

    render() {
        // const withReports = (<View>
        //     <View>
        //     <Text>RESPONSE</Text>
        //     {reportsArray.length ? reportsArray.map((itm, ndx) =>
        //     <View style={styles.row} key={ndx}>
        //     <Text style={styles.viewReportsNames} key={itm.reportName}>{itm.reportName}</Text>
        //     <TouchableOpacity style={styles.viewReportsBtn} onPress={this.onPressEdit.bind(this, ndx, this.props.navigation.state.params)}>
        //         <Text style={styles.viewReportButtonText}>Edit</Text>
        //         {console.log(ndx)}
        //         {console.log(reportsArray[ndx])}
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.viewReportsBtn}title="View">
        //     <Text style={styles.viewReportButtonText}>View</Text>
        //     </TouchableOpacity>
        //     </View>
        //     ) :  <View>
        //     <Text>No Reports to Show</Text>
        // </View>}
            
        //     </View>
        //     <View>
        //     </View>
        // </View>
        //   );

        // const withoutReports = (
        //     <View>
        //         <Text>No Reports to Show</Text>
        //     </View>
        // )
        // const key = 0;
        const {reportsArray} = this.props.navigation.state.params;
        return (<View>
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
          );
        
    }
}
