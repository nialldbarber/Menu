import {Pressable, StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {Icon} from 'react-native-elements'
import {useSelector} from 'react-redux'
import {Layout} from '../../components/Layout'
import {Title} from '../../components/Title'
import {RootStackParamList} from '../../routing/Stack'
import {cartSelector, cartTotalSelector} from '../../store/cart.slice'
import {Item} from '../../components/Item'
import {CustomIcons} from '../../components/CustomIcons'

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
          <Pressable onPress={() => navigate('Items')} testID="back">
            {/* <Icon name="arrowleft" type="antdesign" color="#000" size={20} /> */}
            <Text>Back</Text>
          </Pressable>
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
