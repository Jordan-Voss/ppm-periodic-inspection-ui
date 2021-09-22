import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'

const AppNav = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNav;