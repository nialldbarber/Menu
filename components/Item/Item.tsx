import {useMemo, useState} from 'react'
import {StyleSheet, Image, Text, View, Pressable} from 'react-native'
import {useDispatch} from 'react-redux'
import {Icon} from 'react-native-elements'
import {
  addItemToCart,
  decrementItemCount,
  incrementItemCount,
  removeItemFromCart,
} from '../../store/cart.slice'
import {Icons} from '../Icons'

type ItemProps = {
  id?: number
  name?: string
  price?: number
  image?: number | string
  count?: number
  alt?: string
  cartItem?: boolean
  total?: number
}

const COLOR_MAP: Record<string, string> = {
  1: '#DDEEFD',
  2: '#FDDEED',
  3: '#F8F7FC',
  4: '#D8FCEE',
  5: '#DDEEFD',
  6: '#FDDEED',
}

export default function Item({
  id,
  name,
  price,
  image,
  count,
  alt,
  cartItem,
  total,
}: ItemProps) {
  const dispatch = useDispatch()
  const [isAddButtonActive, setIsAddButtonActive] = useState(true)

  const styles = StyleSheet.create({
    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 20,
      height: 150,
      // @ts-ignore
      backgroundColor: COLOR_MAP[id],
      borderRadius: 30,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 20,
    },
    image: {
      width: 150,
      height: 150,
      marginTop: -20,
      marginLeft: -20,
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
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    countContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    count: {
      fontSize: 25,
      fontWeight: 'bold',
      marginHorizontal: 5,
      width: 35,
      textAlign: 'center',
    },
    addButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      backgroundColor: isAddButtonActive ? '#5F00F5' : '#000000',
      width: isAddButtonActive ? 100 : 150,
      height: 25,
      borderRadius: 30,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  })

  const item = {
    id,
    name,
    price,
    image,
    count,
    alt,
    total: 0,
  }

  return (
    <View key={image} style={styles.itemContainer}>
      {/* @ts-ignore */}
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={cartItem ? styles.totalPrice : styles.price}>
          £{price}
        </Text>
        {cartItem ? (
          <View>
            <View style={styles.countContainer}>
              <Icons
                type="arrowleft"
                action={() => dispatch(decrementItemCount(id))}
              />
              <Text style={styles.count}>{count}</Text>
              <Icons
                type="arrowright"
                action={() => dispatch(incrementItemCount(id))}
              />
            </View>
            <Text style={styles.price}>£{total?.toFixed(2)}</Text>
          </View>
        ) : (
          <Pressable
            style={styles.addButton}
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
            <Text style={styles.addButtonText}>
              {isAddButtonActive ? 'Add to' : 'Remove from'} cart
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}
