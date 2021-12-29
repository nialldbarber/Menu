import {useMemo} from 'react'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {RootStackParamList} from '../../routing/Stack'
import {cartSelector} from '../../store/cart.slice'
import {arrayLength} from '../../utils/arrayLength'

type cartScreenProp = StackNavigationProp<RootStackParamList, 'Cart'>

export default function Cart() {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 50,
      right: 0,
      backgroundColor: 'red',
      zIndex: 9,
      padding: 5,
      borderRadius: 5,
    },
  })

  const {cart} = useSelector(cartSelector)
  const {navigate} = useNavigation<cartScreenProp>()
  const cartItemsLength = useMemo(() => arrayLength(cart), [cart])

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate('Cart')}>
        <Text>Cart: {cartItemsLength}</Text>
      </Pressable>
    </View>
  )
}
