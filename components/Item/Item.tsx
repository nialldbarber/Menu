import {useState} from 'react'
import {StyleSheet, Image, Text, View, Pressable} from 'react-native'
import {useDispatch} from 'react-redux'
import {addItemToCart, removeItemFromCart} from '../../store/cart.slice'

type ItemProps = {
  id?: number
  name?: string
  price?: number
  image?: number | string
  count?: number
  alt?: string
}

export default function Item({id, name, price, image, count, alt}: ItemProps) {
  const styles = StyleSheet.create({
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'red',
      marginVertical: 20,
    },
    image: {
      width: 130,
      height: 130,
    },
  })

  const dispatch = useDispatch()
  const [isAddButtonActive, setIsAddButtonActive] = useState(true)

  const item = {
    id,
    name,
    price,
    image,
    count,
    alt,
  }

  return (
    <View key={image} style={styles.itemContainer}>
      {/* @ts-ignore */}
      <Image source={image} style={styles.image} />
      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Pressable
          onPress={() => {
            if (isAddButtonActive) {
              setIsAddButtonActive(false)
              dispatch(addItemToCart(item))
            } else {
              setIsAddButtonActive(true)
              dispatch(removeItemFromCart(id))
            }
          }}
        >
          <Text>{isAddButtonActive ? 'Add to' : 'Remove from'} cart</Text>
        </Pressable>
      </View>
    </View>
  )
}
