import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    row: {

        flexDirection:'row',
    },
    prnumber: {
        flex:1,
        justifyContent:'space-evenly',
    },
    contractorname: {
        flex:1,
        justifyContent:'space-evenly',
    },
    contractoraddress: {
        flex:1,
        justifyContent:'space-evenly',
    },
    tabContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
    },
    inputView: {
      flex: 1, 
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
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