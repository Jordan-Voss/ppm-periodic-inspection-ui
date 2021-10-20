import React from 'react'
import { CheckBox, Button, TextInput, Text, Image, TouchableOpacity, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { styles } from '../Styles/styles'
import { updateReport } from '../Services/auth_service';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


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
  isFullExtent: false,
  earthingType:"",
  categoryValue:"",
  reasonValue:"",
};

export default class EditReport extends React.Component {
  state = {
    reportName: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].reportName,
    prNumber: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].prNo,
    contractorName: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].contractorName,
    contractorAddress:this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].contractorAddress,
    contractorRegNumber: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].contractorRegNumber,
    installationAge: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].installationAge,
    occupantName:this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].occupantName,
    occupantAddress: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].occupantAddress,
    occupantInAttendance: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].occupantInAttendance,
    installationCategory: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].installationCategory,
    installationCategoryComment: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].installationCategoryComment,
    inspectionReason: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].inspectionReason,
    inspectionReasonComment: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].inspectionReasonComment,
    isFullExtent: this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].isFullExtent,
    earthingType:this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].earthingType,
    categoryValue:this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].categoryValue,
    reasonValue:this.props.navigation.state.params.array.reportsArray[this.props.navigation.state.params.index].reasonValue,
  };
  logouts = () => {
    logout();
    this.props.navigation.navigate('Login');
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
      earthingType
    } = this.state;
      // console.log(prNumber,
      // contractorName, contractorAddress,
      // contractorRegNumber,
      // installationAge,
      // occupantName,
      // occupantAddress,
      // occupantInAttendance,
      // installationCategory,
      // installationCategoryComment,
      // inspectionReason,
      // inspectionReasonComment,
      // isFullExtent,
      // earthingType);
    const respon = await updateReport(
      reportName,
      prNumber,
      contractorName,
      contractorAddress,
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
      earthingType
      );
    };

  onReportNameChange = reportName => {
    this.setState({ reportName });
  };

  onPrNumberChange = prNumber => {
    this.setState({ prNumber });
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

  setEditReportValues(array, index) {
    this.setState({reportName: array.reportsArray[index].reportName})
  }

  handleLogout = async () => {
    console.log(this.props.navigation.state.params.array.reportsArray)
    this.props.navigation.navigate('Reports')    
  };

  render() {
    console.log(this.state);
    const inspectionReasonCommentTextInput = (
      <View>
        <TextInput style={styles.reportInput} onChangeText={this.onInspectionReasonCommentChange} placeholder={this.state.inspectionReasonComment}></TextInput>
      </View>
    );
    
    const installationCategoryCommentTextInput = (
      <View>
        <TextInput style={styles.reportInput} onChangeText={this.onInspectionReasonCommentChange} placeholder={this.state.inspectionReasonComment}></TextInput>
      </View>
    );
    
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
            <Image style={styles.homeImage} source={require('../images/PPM.png')}/>
          </View>
          <View style={styles.row}>
            <View style={styles.prNumber}>
              <Text>Report Name</Text>
              <TextInput
              style={styles.reportInput}
              placeholder={this.state.reportName}
              placeholderTextColor="grey"
              value={this.state.reportName}
              maxLength={256}
              color="#cd077d"
              onChangeText={this.onReportNameChange}
              autoCapitalize="none"
              autoCorrect={false}
              />
            </View>
          <View style={styles.prNumber}>
            <Text>PR Number</Text>
            <TextInput
            style={styles.reportInput}
            placeholder={this.state.prNumber}
            placeholderTextColor="grey"
            value={this.state.c}
            maxLength={256}
            color="#cd077d"
            onChangeText={this.onPrNumberChange}
            autoCapitalize="none"
            autoCorrect={false}
            />
          </View>
          <View style={styles.contractorName}>
            <Text>Contractor Name</Text>
            <TextInput
            style={styles.reportInput}
            placeholder={this.state.contractorName}
            placeholderTextColor="grey"
            value={this.state.username}
            maxLength={256}
            color="#cd077d"
            onChangeText={this.onContractorNameChange}
            autoCapitalize="none"
            autoCorrect={false}
            />
          </View>
          <View style={styles.contractorAddress}>
            <Text>Contractor Address</Text>
            <TextInput
            style={styles.reportInput}
            placeholder={this.state.contractorAddress}
            placeholderTextColor="grey"
            value={this.state.username}
            maxLength={256}
            color="#cd077d"
            onChangeText={this.onContractorAddressChange}
            autoCapitalize="none"
            autoCorrect={false}
            />
          </View>
        </View>
  <View style={styles.contractorRegNumber}>
  <Text>Contractor Registration Number</Text>
  <TextInput
  style={styles.reportInput}
  placeholder={this.state.contractorRegNumber}
  placeholderTextColor="grey"
  value={this.state.username}
  maxLength={256}
  color="#cd077d"
  onChangeText={this.onContractorRegNumberChange}

  autoCapitalize="none"
  autoCorrect={false}
  />
  </View>
  <View style={styles.installationAge}>
  <Text>Installation Approx. Age</Text>
  <TextInput
  style={styles.reportInput}
  placeholder={this.state.installationAge}
  placeholderTextColor="grey"
  value={this.state.username}
  maxLength={256}
  color="#cd077d"
  onChangeText={this.onInstallationAgeChange}

  autoCapitalize="none"
  autoCorrect={false}
  />
  </View>
  <View style={styles.occupantName}>
  <Text>Occupant Name</Text>
  <TextInput
  style={styles.reportInput}
  placeholder={this.state.occupantName}
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
  placeholder={this.state.occupantAddress}
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
    {this.state.occupantInAttendance ? <Text>"YES"</Text> : <Text>NO</Text>}
  </View>
  <View style={styles.installationCategory}>
  <Text>Installation Category</Text>
  <Picker
  selectedValue={this.state.installationCategory}
  onValueChange={
  (itemValue) =>
  this.setState({installationCategory: itemValue})
  // console.log(this.state.value)
  }>
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
  this.setState({inspectionReason: itemValue})
  // console.log(this.state.value)
  }>
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
  {this.state.isFullExtent ? <Text>"YES"</Text> : <Text>NO</Text>}
  </View>

  <View style={styles.container}>
  <Text>Type of System Earthing</Text>
  <Picker
  selectedValue={this.state.earthingType}
  onValueChange={
  (itemValue) =>
  this.setState({earthingType: itemValue})
  // console.log(this.state.value)
  }>
  <Picker.Item label="TNCS" value="tncs" />
  <Picker.Item label="TT" value="tt" />
  <Picker.Item label="TNS" value="tns" />
  <Picker.Item label="IT" value="it" />
  </Picker>
  </View>

  <TouchableOpacity
          style={styles.loginBtn}
          onPress={this.handleSaveReport.bind(this)}
      >
          <Text style={styles.loginText}>Save Report</Text>
      </TouchableOpacity>
  </View>
  </ScrollView>
  )
  }
  }
