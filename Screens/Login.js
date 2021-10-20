import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import {login} from '../Services/auth_service';
import { styles } from '../Styles/styles';
const initialState = {
    username: "",
    password: "",

};

export default class Login extends React.Component {
    state = initialState;
    onUsernameChange = username => {
        this.setState({ username });
    };

    onPasswordChange = password => {
        this.setState({ password });
    };
    async handleLogin() {
        const { username, password } = this.state;
        const resp = await login(username, password);
        if (resp !== undefined) {
            this.props.navigation.navigate('App');
        }
        console.log(resp);
        
    }
    render() {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
        <View>
        <View>
            <Image style={styles.image} source={require('../images/PPM.png')}
            />
        </View>

        <View style={styles.loginInputView}>
            <TextInput
                style={styles.loginTextInput}
                placeholder="Username"
                placeholderTextColor="grey"
                maxLength={256}
                color="#cfcbc0"
                onChangeText={this.onUsernameChange}
                autoCapitalize="none"
                autoCorrect={false}
            />
                    </View>
                    <View style={styles.loginInputView}>
            <TextInput
                style={styles.loginTextInput}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry={true}
                onChangeText={this.onPasswordChange}
                maxLength={256}
                color="#cfcbc0"
                autoCapitalize="none"
                autoCorrect={false}
            />
                    </View>

        {/* <TouchableOpacity>
            <Text style={styles.forgot_button}>
                Forgot Password?
            </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
            <Text
                style={styles.account_button}
            >
                Don't Have an Account?
            </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
            style={styles.loginBtn}
            onPress={this.handleLogin.bind(this)}
        >
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
    </View>
</ScrollView>
)
}
}
