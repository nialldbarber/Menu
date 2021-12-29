import {ReactChild} from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {Cart} from '../Cart'

type LayoutProps = {
  children: ReactChild
}

export default function Layout({children}: LayoutProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 30,
    },
  })

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Cart />
      {children}
    </ScrollView>
  )
}
