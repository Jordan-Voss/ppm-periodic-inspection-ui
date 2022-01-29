import React, { useState, Component, useEffect } from 'react';
import { CheckBox, Button, TextInput, Text, Image, TouchableOpacity, View } from 'react-native'
import { logout, saveReport } from '../Services/auth_service';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../Styles/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { options } from '../Components/PickerOptions';
import TableDemo from '../Components/DynamicTable';
import { Tab } from '@material-ui/core';
import DynamicTable from '../Components/DynamicTable';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component-2';

const initialState = {
  reportName: '',
  prNumber: null,
  contractorName: "",
  contractorAddress:"",
  contractorRegNumber: null,
  installationAge: '',
  occupantName:"",
  occupantAddress: "",
  occupantInAttendance: false,
  installationCategory: '',
  installationCategoryComment: '',
  inspectionReason: '',
  inspectionReasonComment: '',
  isFullExtent: true,
  earthingType:"",
  categoryValue:"",
  reasonValue:"",
  partialInspectionComment:"",
  deviceType: "",
  checkbox1: "",
  tbl: [],
  message: "",
  dt1:"",
  dt2:"",
  dt3:"",
  tableHead: ['Circuit Description', 'Tripping Current', 'Longest Tripping Time'],
  tableData: [],
};

export default class NewReport extends React.Component {
  state = initialState;
  constructor(props) {
    super(props);
  };

  UNSAFE_componentWillMount(){
    console.log("erhgert")
    this.setState({tableData:[
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      [<TextInput
        placeholder="Occupant Address"
        placeholderTextColor="grey"
        value={this.state.dt1}
        maxLength={256}
        color="#cd077d"
        onChangeText={this.ondt1Change}>
        </TextInput>, 
        <TextInput       
        placeholder="Occupant Address"
        placeholderTextColor="grey"
        value={this.state.dt2}
        maxLength={256}
        color="#cd077d"
        onChangeText={this.ondt2Change}>
        </TextInput>, 
        <TextInput       
        placeholder="Occupant Address"
        placeholderTextColor="grey"
        value={this.state.dt3}
        maxLength={256}
        color="#cd077d"
        onChangeText={this.ondt3Change}>
        </TextInput>]
    ]});
}

  logouts = () => {
    logout();
    this.props.navigation.navigate('Login');
  }
  // constructor(props) {
  //   super(props);
  //   console.log("Setting Table Data")
  //   this.setInitialTableData.bind(this);
  // }

  setInitialTableData () {
    console.log("Setting Initial Table Data")
    this.setState({tableData:[
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      [<TextInput
        placeholder="Occupant Address"
        placeholderTextColor="grey"
        value={this.state.dt1}
        maxLength={256}
        color="#cd077d"
        onChangeText={this.ondt1Change}>
        </TextInput>, 
        <TextInput       
        placeholder="Occupant Address"
        placeholderTextColor="grey"
        value={this.state.dt2}
        maxLength={256}
        color="#cd077d"
        onChangeText={this.ondt2Change}>
        </TextInput>, 
        <TextInput       
        placeholder="Occupant Address"
        placeholderTextColor="grey"
        value={this.state.dt3}
        maxLength={256}
        color="#cd077d"
        onChangeText={this.ondt3Change}>
        </TextInput>]
    ]});
    console.log("ERHER")
  }

  handleSaveReport = async () => {
    const {
    reportName,
    prNumber,
    contractorName, contractorAddress,
    contractorRegNumber,
    installationAge,
    occupantName,
    occupantAddress,
    occupantInAttendance,
    installationCategory,
    installationCategoryComment,
    inspectionReason,
    inspectionReasonComment,
    isFullExtent,
    partialInspectionComment,
    deviceType,
    earthingType,
    checkbox1,
    installationVoltage
  } = this.state;
    console.log(prNumber,
      contractorName, contractorAddress,
      contractorRegNumber,
      installationAge,
      occupantName,
      occupantAddress,
      occupantInAttendance,
      installationCategory,
      installationCategoryComment,
      inspectionReason,
      inspectionReasonComment,
      isFullExtent,
      partialInspectionComment,
      earthingType,
      deviceType,
      checkbox1,
      installationVoltage);
    const respon = await saveReport(reportName, prNumber,
      contractorName, contractorAddress,
      contractorRegNumber,
      installationAge,
      occupantName,
      occupantAddress,
      occupantInAttendance,
      installationCategory,
      installationCategoryComment,
      inspectionReason,
      inspectionReasonComment,
      isFullExtent,
      partialInspectionComment,
      earthingType,
      deviceType,
      checkbox1,
      installationVoltage);
    // const msg = respon;
    console.log(respon);

};

onpress = () => {
  // console.log(JSON.stringify(this))
  console.log("THIS " + this.props.items)
  console.log("THIS " + this.props.message)
}


  onReportNameChange = reportName => {
  this.setState({ reportName });
  };

  onPrNumberChange = prNumber => {
    this.setState({ prNumber });
};

ondt1Change = dt1 => {
  this.setState({dt1});
};
ondt2Change = dt2 => {
  this.setState({dt2});
};
ondt3Change = dt3 => {
  this.setState({dt3});
};

  onContractorNameChange = contractorName => {
    this.setState({ contractorName });
  };

  onContractorAddressChange = contractorAddress => {
    this.setState({ contractorAddress });
  };

  onContractorRegNumberChange = contractorRegNumber => {
    this.setState({ contractorRegNumber });
  };
  onInstallationAgeChange = installationAge => {
    this.setState({ installationAge });
  };
  onOccupantNameChange = occupantName => {
    this.setState({ occupantName });
  };
  onOccupantAddressChange = occupantAddress => {
    this.setState({ occupantAddress });
  };
  onOccupantInAttendanceChange = occupantInAttendance => {
    this.setState({ occupantInAttendance });
  };
  onIsFullExtentChange = isFullExtent => {
    this.setState({ isFullExtent });
  };
  oncontractorAddressChange = contractorAddress => {
    this.setState({ contractorAddress });
  };

  setOccupantInAttendance = occupantInAttendance => {
    this.setState({ occupantInAttendance });
  };

  setIsFullExtent = isFullExtent => {
    this.setState({ isFullExtent });
  };

  onInspectionReasonCommentChange = inspectionReasonComment => {
    this.setState({ inspectionReasonComment });
  };

  onInstallationCategoryCommentChange = installationCategoryComment => {
    this.setState({ installationCategoryComment });
  };
  onInstallationVoltageChange = installationVoltage => {
    this.setState({ installationVoltage });
  };
  onPartialInspectionCommentChange = partialInspectionComment => {
    this.setState({ partialInspectionComment});
  }

  setInstallationVoltage = installationVoltage => {
    this.setState({ installationVoltage });
  };

  onDeviceTypeChange = deviceType => {
    this.setState({deviceType});
  }
  onCheckbox1Change = checkbox1 => {
    this.setState({checkbox1})
  }

  onChange = ({key, value}) => { 
    this.setState({key, value});
}

  handleLogout = async () => {
    await logout();
    this.props.navigation.navigate('Home')    
  };
  render() {
    const inspectionReasonCommentTextInput = (
      <View>
      <TextInput style={styles.reportInput} onChangeText={this.onInspectionReasonCommentChange}></TextInput>
      </View>
    );

    const installationCategoryCommentTextInput = (
      <View>
      <TextInput style={styles.reportInput} onChangeText={this.onInstallationCategoryCommentChange}></TextInput>
      </View>
    );

    const partialInspectionComment = (
      <View>
      <TextInput style={styles.reportInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
      </View>
    );

    const singlePhaseVoltage = (
      <View style={styles.detailsContainer}>
        <Text>L1</Text>
      <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
      </View>
    );

    const threePhaseVoltage = (
      <View style={styles.detailsContainer}>
        <View style={styles.occupantDetailsContainer}>
        <Text>L1</Text>
        <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
        <Text>L2</Text>
        <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
        <Text>L3</Text>
        <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
        </View>
      <View style={styles.occupantDetailsContainer}>
        <Text>L1-L2</Text>
        <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
        <Text>L2-L3</Text>
        <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
        <Text>L3-L1</Text>
        <TextInput style={styles.voltageInput} onChangeText={this.onPartialInspectionCommentChange}></TextInput>
      </View>
      </View>
    );

  return (
    // TOP BUTTONS AND IMAGES
    <ScrollView style={styles.container}>
        <View id="topBtns" style={{flexDirection:"row"}}>
          <View id="logoutbtn" style={{flex:1}}>
            <TouchableOpacity
              onPress={this.handleLogout}
              style={styles.roundButton2}>
              <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
              <Text>Back</Text>
            </TouchableOpacity>
          </View> {/* logoutbtn*/} 
          <View id="backbtn" style={{flex:1}}>
            <TouchableOpacity
              onPress={this.logouts}
              style={styles.roundButton1}>
              <MaterialCommunityIcons name="logout" size={24} color="black" />
              <Text>Logout</Text>
            </TouchableOpacity>
          </View> {/*backbtn*/}
        </View> {/* topBtns*/}
        <View>
          <Image style={styles.homeImage} source={require('../images/PPM.png')}/>
        </View>

{/* REPORT DETAILS */}
        <View  style={styles.detailsContainer}>

          <View id="contractor-details" style={styles.contractorDetailsContainer}>

            <View style={styles.reportName}>
              <Text>Report Name</Text>
              <TextInput
              style={styles.reportInput}
              placeholder="Report Name"
              placeholderTextColor="grey"
              value={this.state.reportName}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onReportNameChange}

              autoCapitalize="none"
              autoCorrect={false}
              />
            </View>

            <View style={styles.contractorName}>
              <Text style={styles.contractornamelabel}>Contractor Name</Text>
              <Text style={styles.contractornametext}
              // style={styles.reportInput}
              maxLength={256}
              color="#cd077d"
              >PPM</Text>
            </View>

            <View style={styles.contractorAddress}>
              <Text>Contractor Address</Text>
              <Text
              // style={styles.reportInput}
              maxLength={256}
              color="#cd077d"
              >PPM Address</Text>
            </View>

            <View style={styles.contractorRegNumber}>
              <Text>Contractor Registration Number</Text>
              <Text
              // style={styles.reportInput}
              maxLength={256}
              color="#cd077d"
              >123456789</Text>
            </View>
          </View>  {/* contractor-details */}

          <View id="occupant-details" style={styles.occupantDetailsContainer}>
            <View style={styles.prNumber}>
              <Text style={styles.prNumberLabel}>PR Number</Text>
              <TextInput
              style={styles.reportInput}
              placeholder="PR Number"
              placeholderTextColor="grey"
              value={this.state.prNumber}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onPrNumberChange}

              autoCapitalize="none"
              autoCorrect={false}
              />
            </View>
            <View style={styles.occupantName}>
              <Text>Occupant Name</Text>
              <TextInput
                style={styles.reportInput}
                placeholder="Occupant Name"
                placeholderTextColor="grey"
                value={this.state.username}
                maxLength={256}
                color="#cd077d"
                onChangeText={this.onOccupantNameChange}

                autoCapitalize="none"
                autoCorrect={false}
                />
            </View>
            <View style={styles.occupantAddress}>
              <Text>Occupant Address</Text>
              <TextInput
                style={styles.reportInput}
                placeholder="Occupant Address"
                placeholderTextColor="grey"
                value={this.state.username}
                maxLength={256}
                color="#cd077d"
                onChangeText={this.onOccupantAddressChange}

                autoCapitalize="none"
                autoCorrect={false}
                />
            </View>
            <View style={styles.occupantInAttendance}>
              <Text>Occupant in Attendance?</Text>
              <CheckBox
              value={this.state.occupantInAttendance}
              onValueChange={this.onOccupantInAttendanceChange.bind(this)}></CheckBox>
              {this.state.occupantInAttendance ? <Text>YES</Text> : <Text>NO</Text>}
            </View>
          </View> {/* occupant-details*/}
        </View>   {/* details-container */}


{/* INSTALLATION DETAILS */}

        <View style={styles.installationAge}>
          <Text>Installation Approx. Age</Text>
          <Picker>
            {Object.keys(options).map((key) => {
            return (<Picker.Item label={options[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
            })}
          </Picker>
        </View>

        <View style={styles.installationCategory}>
          <Text>Installation Category</Text>
          <Picker
          selectedValue={this.state.installationCategory}
          onValueChange={
          (itemValue) =>
          this.setState({installationCategory: itemValue})}>
            <Picker.Item label="Domestic" value="domestic" />
            <Picker.Item label="Commercial" value="commercial" />
            <Picker.Item label="Industrial" value="industrial" />
            <Picker.Item label="Other (Please Specify)" value="other"/>
          </Picker>
            {this.state.installationCategory === 'other' ? installationCategoryCommentTextInput : null}
        </View>
        <View style={styles.inspectionReason}>
          <Text>Reason For Inspection</Text>
          <Picker
          selectedValue={this.state.inspectionReason}
          onValueChange={
          (itemValue) =>
          this.setState({inspectionReason: itemValue})}>
            <Picker.Item label="Insurance Inspection" value="insurance-inspection" />
            <Picker.Item label="Safety Audit" value="safety-audit" />
            <Picker.Item label="Other (Please Specify)" value="other"/>
          </Picker>
          {this.state.inspectionReason === 'other' ? inspectionReasonCommentTextInput : null}
        </View>
        <View style={styles.fullextent}>
          <Text>Is the Full Extent of the Installation Covered by This Report?</Text>
          <CheckBox
          value={this.state.isFullExtent}
          onValueChange={this.onIsFullExtentChange.bind(this)}></CheckBox>
          {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>}
          {!this.state.isFullExtent ? partialInspectionComment : null}
        </View>

{/* SYSTEM EARTHING */}

        <View style={styles.container}>
          <Text>Type of System Earthing</Text>
          <Picker
          selectedValue={this.state.earthingType}
          onValueChange={
          (itemValue) =>
          this.setState({earthingType: itemValue})}>
            <Picker.Item label="TNCS" value="tncs" />
            <Picker.Item label="TT" value="tt" />
            <Picker.Item label="TNS" value="tns" />
            <Picker.Item label="IT" value="it" />
          </Picker>
        </View>
        <View style={styles.installationVoltage}>
          <Text>Installation Voltage</Text>
          <Picker
          selectedValue={this.state.installationVoltage}
          onValueChange={
          (itemValue) =>
          this.setState({installationVoltage: itemValue})}>
            <Picker.Item label="Single Phase" value="single" />
            <Picker.Item label="Three Phase" value="three" />
          </Picker>
          {this.state.installationVoltage === 'three' ? threePhaseVoltage : singlePhaseVoltage}

        </View>


        <View style={styles.detailsContainer}>
          <Text>
          <Text>Max Prospective S/C Current   </Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>v   A</Text>
          </Text>
        </View>


        <View style={styles.deviceType}>
          <Text>Installation Voltage</Text>
          <Picker
          selectedValue={this.state.deviceType}
          onValueChange={
          (itemValue) =>
          this.setState({deviceType: itemValue})}>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Switch Fuse" value="switch-fuse" />
            <Picker.Item label="MCB" value="mcb" />
            <Picker.Item label="MCCB" value="mccb" />
          </Picker>
        </View>


        <View style={styles.detailsContainer}>
          <Text>
          <Text>Nominal Rating   </Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>A</Text>
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text>
          <Text>Rated Current   </Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>A</Text>
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text>
          <Text>Tripping current I▲n   </Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>mA</Text>
          </Text>
        </View>

{/* CheckBox Section */}
        <View style={styles.checkbox}>
          <View style={styles.checkboxleft}>
            <View>
              <Text>1.</Text>
              <CheckBox
              value={this.state.checkbox1}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>2.</Text>
              <CheckBox
              value={this.state.checkbox2}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>3.</Text>
              <CheckBox
              value={this.state.checkbox3}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>4.</Text>
              <CheckBox
              value={this.state.checkbox4}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>5.</Text>
              <CheckBox
              value={this.state.checkbox5}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>6.</Text>
              <CheckBox
              value={this.state.checkbox6}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>7.</Text>
              <CheckBox
              value={this.state.checkbox7}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>8.</Text>
              <CheckBox
              value={this.state.checkbox8}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>9.</Text>
              <CheckBox
              value={this.state.checkbox9}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>10.</Text>
              <CheckBox
              value={this.state.checkbox10}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
          </View>
          <View style={styles.checkboxright}>
            <View>
              <Text>11.</Text>
              <CheckBox
              value={this.state.checkbox11}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>12.</Text>
              <CheckBox
              value={this.state.checkbox12}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>13.</Text>
              <CheckBox
              value={this.state.checkbox13}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>14.</Text>
              <CheckBox
              value={this.state.checkbox14}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>15.</Text>
              <CheckBox
              value={this.state.checkbox15}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>16.</Text>
              <CheckBox
              value={this.state.checkbox16}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>17.</Text>
              <CheckBox
              value={this.state.checkbox17}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>18.</Text>
              <CheckBox
              value={this.state.checkbox18}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>19.</Text>
              <CheckBox
              value={this.state.checkbox19}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            </View>
            </View>
          <View>
              <Text>20.</Text>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.state.tableData} textStyle={styles.text}/>
        </Table>
              {/* <Text>{this}</Text> */}
              {/* console.log(this) */}
             {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View style={styles.checkbox}>

            <View style={styles.checkboxleft}>
            <View>
              <Text>21.</Text>
              <CheckBox
              value={this.state.checkbox21}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>22.</Text>
              <CheckBox
              value={this.state.checkbox22}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>23.</Text>
              <CheckBox
              value={this.state.checkbox23}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>24.</Text>
              <CheckBox
              value={this.state.checkbox24}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>25.</Text>
              <CheckBox
              value={this.state.checkbox25}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            </View>
            <View style={styles.checkboxright}>
            <View>
              <Text>26.</Text>
              <CheckBox
              value={this.state.checkbox26}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>27.</Text>
              <CheckBox
              value={this.state.checkbox27}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>28.</Text>
              <CheckBox
              value={this.state.checkbox28}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>29.</Text>
              <CheckBox
              value={this.state.checkbox29}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            <View>
              <Text>30.</Text>
              <CheckBox
              value={this.state.checkbox30}
              onValueChange={this.onCheckbox1Change.bind(this)}></CheckBox>
              {/* {this.state.isFullExtent ? <Text>YES</Text> : <Text>NO</Text>} */}
              {/* {!this.state.isFullExtent ? partialInspectionComment : null} */}
            </View>
            </View>
          </View>
          <View style={styles.workmanship}>
          <Text>Quality of Workmanship</Text>
          <Picker
          selectedValue={this.state.workmanship}
          onValueChange={
          (itemValue) =>
          this.setState({workmanship: itemValue})}>
            <Picker.Item label="Very Good" value="vg" />
            <Picker.Item label="Satisfactory" value="satisfactory" />
            <Picker.Item label="Poor" value="poor" />
          </Picker>
        </View>

        <View style={styles.minresistancecontainer}>
          <Text>Summary Test Data</Text>
          <Text>
          <Text>Min Insulation Resistance</Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>MΩ</Text>
          </Text>
        </View>
        <View style={styles.maxresistancecontainer}>
          <Text>
          <Text>Max Resistance of protective conductor</Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>Ω</Text>
          </Text>
        </View>
        <View style={styles.faxfaultloopcontainer}>
          <Text>
          <Text>Max fault loop impedance</Text>
          <TextInput 
            // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>Ω and type and size of associated protective device   </Text>
          <Text>Type</Text>
          <TextInput             // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          <Text>Size</Text>
          <TextInput             // style={styles.occupantDetailsContainer}
            style={styles.current}
            textAlign="center"
            keyboardType="numeric"></TextInput>
          </Text>
        </View>


        <Text>Test Instrument Serial Numbers</Text>
        <View style={styles.minresistancecontainer}>
          <Text>
          <Text>Continuity Tester</Text>

          <Picker
          selectedValue={this.state.workmanship}
          onValueChange={
          (itemValue) =>
          this.setState({workmanship: itemValue})}>
            <Picker.Item label="Very Good" value="vg" />
            <Picker.Item label="Satisfactory" value="satisfactory" />
            <Picker.Item label="Poor" value="poor" />
          </Picker>
          </Text>
        </View>
        <View style={styles.maxresistancecontainer}>
          <Text>
          <Text>Insulation Resistance Tester</Text>
          <Picker
          selectedValue={this.state.workmanship}
          onValueChange={
          (itemValue) =>
          this.setState({workmanship: itemValue})}>
            <Picker.Item label="Very Good" value="vg" />
            <Picker.Item label="Satisfactory" value="satisfactory" />
            <Picker.Item label="Poor" value="poor" />
          </Picker>
          </Text>
        </View>
        <View style={styles.faxfaultloopcontainer}>
          <Text>
          <Text>Loop Impedance Tester</Text>
          <Picker
          selectedValue={this.state.workmanship}
          onValueChange={
          (itemValue) =>
          this.setState({workmanship: itemValue})}>
            <Picker.Item label="Very Good" value="vg" />
            <Picker.Item label="Satisfactory" value="satisfactory" />
            <Picker.Item label="Poor" value="poor" />
          </Picker>
          </Text>
        </View>
        <View style={styles.faxfaultloopcontainer}>
          <Text>
          <Text>RCD Tester</Text>
          <Picker
          selectedValue={this.state.workmanship}
          onValueChange={
          (itemValue) =>
          this.setState({workmanship: itemValue})}>
            <Picker.Item label="Very Good" value="vg" />
            <Picker.Item label="Satisfactory" value="satisfactory" />
            <Picker.Item label="Poor" value="poor" />
          </Picker>
          </Text>
        </View>

{/* BOTTTOM BUTTONS */}

        <TouchableOpacity
        style={styles.loginBtn}
        onPress={this.onpress.bind(this)}>
          <Text style={styles.loginText}>check Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.loginBtn}
        onPress={this.handleSaveReport.bind(this)}>
          <Text style={styles.loginText}>Save Report</Text>
        </TouchableOpacity>
        {/* </View> */}
        </ScrollView>

)
}
}