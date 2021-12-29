import {StyleSheet, Image, Text, View} from 'react-native'
import {useSelector} from 'react-redux'
import {Item} from '../../components/Item'
import {Layout} from '../../components/Layout'
import {Title} from '../../components/Title'
import {itemsSelector} from '../../store/items.slice'

export default function ItemsScreen() {
  const styles = StyleSheet.create({
    itemListContainer: {
      paddingBottom: 40,
      paddingTop: 20,
    },
  })

  const {items} = useSelector(itemsSelector)

  return (
    <Layout>
      <>
        <Title text="To Go Menu" />
        <View style={styles.itemListContainer}>
          {items.map(({id, name, price, image, count, alt}) => (
            <Item key={id} {...{id, name, price, image, count, alt}} />
          ))}
        </View>
      </>
    </Layout>
  )
}
