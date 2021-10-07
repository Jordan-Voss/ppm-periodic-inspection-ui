import React from 'react'
import { CheckBox, Button, FlatList, TextInput, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { styles } from '../Styles/styles'

export default class Reports extends React.Component {
    render() {
        const {reportsArray} = this.props.navigation.state.params;
        return (
        <View>
            <View>
            <Text>RESPONSE</Text>
            
            <Text>{}</Text>
            {reportsArray.map((item) =>
            <View>
            <Text key={item.prNo}>{item.prNo}</Text>
            <Pressable style={styles.viewReportsBtn} title="Edit">
                <Text style={styles.viewReportButtonText}>Edit</Text>
            </Pressable>
            <Pressable style={styles.viewReportsBtn}title="View"></Pressable>
            </View>
            )}
            </View>
            <View>

            {/* <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      /> */}
            </View>
        </View>
        )
    }
}
