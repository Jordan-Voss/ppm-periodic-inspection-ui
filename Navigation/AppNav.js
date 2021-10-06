import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'
import NewReport from '../Screens/NewReport';
import Reports from '../Screens/Reports';

const AppNav = createStackNavigator(
  {
    Home: { screen: Home },
    NewReport: { screen: NewReport},
    Reports: { screen: Reports},
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNav;