import {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Item} from '../../components/Item'
import {Layout} from '../../components/Layout'
import {Title} from '../../components/Title'
import {fetchItems, itemsSelector} from '../../store/items.slice'

export default function ItemsScreen() {
  const dispatch = useDispatch()

  const styles = StyleSheet.create({
    itemListContainer: {
      paddingBottom: 40,
      paddingTop: 20,
    },
  })

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  const {items} = useSelector(itemsSelector)

  console.log(items)

  return (
    <Layout>
      <>
        <Title text="To Go Menu" />
        <View style={styles.itemListContainer}>
          {items?.map(({id, name, price, image, count, alt}) => (
            <Item key={id} {...{id, name, price, image, count, alt}} />
          ))}
        </View>
      </>
    </Layout>
  )
}
