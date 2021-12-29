import {useMemo, useState} from 'react'
import {StyleSheet, Image, Text, View, Pressable} from 'react-native'
import {useDispatch} from 'react-redux'
import {
  addItemToCart,
  decrementItemCount,
  incrementItemCount,
  removeItemFromCart,
} from '../../store/cart.slice'

type ItemProps = {
  id?: number
  name?: string
  price?: number
  image?: number | string
  count?: number
  alt?: string
  cartItem?: boolean
}

export default function Item({
  id,
  name,
  price,
  image,
  count,
  alt,
  cartItem,
}: ItemProps) {
  const styles = StyleSheet.create({
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'red',
      marginVertical: 20,
      height: 150,
    },
    image: {
      width: 130,
      height: 130,
    },
    name: {
      fontSize: 17,
      flexWrap: 'wrap',
      width: 150,
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
    },
  })

  const dispatch = useDispatch()
  const [isAddButtonActive, setIsAddButtonActive] = useState(true)
  const totalPrice = useMemo(() => {
    // @ts-ignore
    return count === 0 ? price : (count * price).toFixed(2)
  }, [count])

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
      <View style={{display: 'flex', justifyContent: 'center', marginLeft: 20}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>£{totalPrice}</Text>
        {cartItem ? (
          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Pressable onPress={() => dispatch(decrementItemCount(id))}>
                <Text>{'<'}</Text>
              </Pressable>
              <Text>{count}</Text>
              <Pressable onPress={() => dispatch(incrementItemCount(id))}>
                <Text>{'>'}</Text>
              </Pressable>
            </View>
            <Text>Total Price</Text>
          </View>
        ) : (
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
        )}
      </View>
    </View>
  )
}
