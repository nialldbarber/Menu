import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {Layout} from '../../components/Layout'
import {Title} from '../../components/Title'
import {RootStackParamList} from '../../routing/Stack'

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

  return (
    <Layout>
      <>
        <View style={styles.back}>
          <Text onPress={() => navigate('Items')}>Back</Text>
        </View>
        <Title text="Your Cart" />
      </>
    </Layout>
  )
}
