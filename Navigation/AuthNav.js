import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'


const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation