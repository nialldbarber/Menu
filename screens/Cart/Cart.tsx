import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {Layout} from '../../components/Layout'
import {Title} from '../../components/Title'
import {RootStackParamList} from '../../routing/Stack'
import {useSelector} from 'react-redux'
import {cartSelector} from '../../store/cart.slice'
import {Item} from '../../components/Item'

type itemsScreenProp = StackNavigationProp<RootStackParamList, 'Items'>

export default function CartScreen() {
  const styles = StyleSheet.create({
    back: {
      position: 'absolute',
      top: 50,
      left: 0,
      backgroundColor: 'red',
      zIndex: 9,
    },
  })

  const {navigate} = useNavigation<itemsScreenProp>()
  const {cart} = useSelector(cartSelector)

  // console.log(cart)

  return (
    <Layout>
      <>
        <View style={styles.back}>
          <Text onPress={() => navigate('Items')}>Back</Text>
        </View>
        <Title text="Your Cart" />
        {cart.length <= 0 ? (
          <Text>Your cart is empty!</Text>
        ) : (
          <View>
            {cart.map(({id, name, price, image, count, alt}) => (
              <Item
                key={id}
                cartItem
                {...{
                  id,
                  name,
                  price,
                  image,
                  count,
                  alt,
                }}
              />
            ))}
          </View>
        )}
      </>
    </Layout>
  )
}
