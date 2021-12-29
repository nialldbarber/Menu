import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ItemsScreen} from '../screens/Items'
import {CartScreen} from '../screens/Cart'

export type RootStackParamList = {
  Items: undefined
  Cart: undefined
}

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>()
const options = {headerShown: false}

export default function StackRouter() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Items" component={ItemsScreen} options={options} />
        <Screen name="Cart" component={CartScreen} options={options} />
      </Navigator>
    </NavigationContainer>
  )
}
