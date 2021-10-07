import React from 'react'
import { CheckBox, Button, TextInput, Text, TouchableOpacity, View } from 'react-native'
import { logout, saveReport } from '../Services/auth_service';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../Styles/styles';

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

export default class NewReport extends React.Component {
  state = initialState;
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
      earthingType);
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
      earthingType);
    // const msg = respon;
    console.log(respon);

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

  handleLogout = async () => {
    await logout();
    this.props.navigation.navigate('Home')    
  };
  render() {
    const inspectionReasonCommentTextInput = (
      <View>
      <TextInput style={styles.TextInput} onChangeText={this.onInspectionReasonCommentChange}></TextInput>
      </View>
    );

    const installationCategoryCommentTextInput = (
      <View>
      <TextInput style={styles.TextInput} onChangeText={this.onInspectionReasonCommentChange}></TextInput>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={this.handleLogout} title="Back"></Button>
      <View style={styles.row}>
      <View style={styles.prNumber}>
      <Text>Report Name</Text>
          <TextInput
              style={styles.TextInput}
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

      <View style={styles.prNumber}>
      <Text>PR Number</Text>
          <TextInput
              style={styles.TextInput}
              placeholder="PR Number"
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
              style={styles.TextInput}
              placeholder="Contractor Name"
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
              style={styles.TextInput}
              placeholder="Contractor Address"
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
              style={styles.TextInput}
              placeholder="Contractor Registration Number"
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
              style={styles.TextInput}
              placeholder="Installation Approx Age"
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
              style={styles.TextInput}
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
              style={styles.TextInput}
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
{this.state.installationCategory === 'other' ? installationCategoryCommentTextInput : inspectionReasonCommentTextInput}
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
{this.state.inspectionReason === 'other' ? inspectionReasonCommentTextInput : installationCategoryCommentTextInput}
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
  )
}
}