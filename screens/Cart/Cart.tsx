import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {Icon} from 'react-native-elements'
import {Layout} from '../../components/Layout'
import {Title} from '../../components/Title'
import {RootStackParamList} from '../../routing/Stack'
import {useSelector} from 'react-redux'
import {cartSelector, cartTotalSelector} from '../../store/cart.slice'
import {Item} from '../../components/Item'

type itemsScreenProp = StackNavigationProp<RootStackParamList, 'Items'>

export default function CartScreen() {
  const styles = StyleSheet.create({
    back: {
      position: 'absolute',
      top: 50,
      left: 0,
      paddingVertical: 10,
      paddingRight: 5,
      zIndex: 9,
    },
  })

  const {navigate} = useNavigation<itemsScreenProp>()
  const {cart} = useSelector(cartSelector)
  const total = useSelector(cartTotalSelector)

  return (
    <Layout>
      <>
        <View style={styles.back}>
          <Text onPress={() => navigate('Items')}>
            <Icon name="arrowleft" type="antdesign" />
          </Text>
        </View>
        <Title text="Your Cart" cartScreen />
        {cart.length <= 0 ? (
          <Text>Your cart is empty!</Text>
        ) : (
          <View>
            {cart.map(({id, name, price, image, count, alt, total}) => (
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
                  total,
                }}
              />
            ))}
            {total >= 1 ? (
              <View>
                <Text>£{total?.toFixed(2)}</Text>
              </View>
            ) : null}
          </View>
        )}
      </>
    </Layout>
  )
}
