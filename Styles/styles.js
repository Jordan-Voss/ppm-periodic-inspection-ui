import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  // Container
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    row: {
      flexDirection:'row',
    },

    // Home Screen
    homeImage: {
      height: '40%',
      width: '40%',
      marginLeft: '25%',
      paddingTop: '25%',
    },
    newReportText: {
      color: 'white',
      marginTop: '2.5%',
    },
    newReportBtn: {
      borderRadius: 500,
      textAlign: 'center',
      height: '50%',
      margin:"50px",
      backgroundColor:"#4a4a49"
    },


    // Login Screen
    image: {
      height: 150,
      width: 150,
      marginLeft: '40%',
      marginTop: '20%',
    },
    loginInputView: {
      backgroundColor: "#cfcbc0",
      width: "40%",
      height: 45,
      marginBottom: 20,
      marginLeft: '30%',
      alignItems: "center",
      justifyContent: 'center',
    },
    loginTextInput: {
      height: 25,
      width: "100%",
      flex: 1,
      padding: 0,
      textAlign: "center",
    },
    loginBtn: {
      width: "75%",
      borderRadius: 25,
      height: 50,
      marginLeft:'15%',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#4a4a49",
    },
    loginText: {
      color: "#FEF2F2",
    },

    // Buttons
    roundButton1: {
      width: '10%',
      height: '10%',
      marginTop: '5%',
      marginLeft: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '5%',
      marginLeft: '80%',
      borderRadius: 100,
      backgroundColor: 'white',
    },
    roundButton2: {
      width: '10%',
      height: '10%',
      marginTop: '5%',
      marginLeft: '5%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5%',
      borderRadius: 100,
      backgroundColor: 'white',
    },

    // Report Editing
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


    // Reports List
    viewReportsNames: {
      fontSize: 20,
    },
    viewReportButtonText:{
      color: 'white',
    },
    viewReportsBtn: {
      marginLeft: '10%',
      marginRight:'10%',
      width: '25px',
      height: '10px',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

    
    reportInput: {
      marginLeft:'10px',
      borderWidth: '1px',
        height: 25,
        width: "25%",
        flex: 1,
        padding: 0,
        //   marginLeft: "50%",
        textAlign: "center",
    },
  });