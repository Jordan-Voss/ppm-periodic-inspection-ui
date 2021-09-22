import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getCurrentRole } from './user_service';

const API_URL = "http://188.141.36.19:1969/api/auth/";

export const login = async (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then(async response => {
            if (response.data.accessToken) {
                await AsyncStorage.setItem(
                    "user",
                    JSON.stringify(response.data),
                );
            }
            console.log("DATA" + response.data);
            // this.props.navigation.navigate('App');
            return response.data;
        })
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: " +
                    error.message,
            );
        });
};

export const isCurrentUser = async () => {
    const isCurrent = await AsyncStorage.getItem("user");
    // console.log(isCurrent + 'iscurrent');
    if (isCurrent !== null) {
        return Promise.resolve(isCurrent);
    } else {
        return Promise.resolve(isCurrent);
    }
};

export const logout = async () => {
    console.log("out");
    await AsyncStorage.clear();
    await AsyncStorage.getItem("user")
        .then(resp => console.log("LOGGED OUT??>>??" + resp))
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: " +
                    error.message,
            );
            // ADD THIS THROW error
            throw error;
        });
};
