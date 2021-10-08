import { createStackNavigator } from 'react-navigation-stack'
import EditReport from '../Screens/EditReport';
import Home from '../Screens/Home'
import NewReport from '../Screens/NewReport';
import Reports from '../Screens/Reports';

const AppNav = createStackNavigator(
  {
    Home: { screen: Home },
    NewReport: { screen: NewReport},
    Reports: { screen: Reports},
    EditReport: { screen: EditReport}
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNav;