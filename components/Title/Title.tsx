import {StyleSheet, Text} from 'react-native'

type TitleProps = {
  text: string
  cartScreen?: boolean
}

export default function Title({text, cartScreen}: TitleProps) {
  const styles = StyleSheet.create({
    title: {
      paddingTop: cartScreen ? 110 : 80,
      fontSize: 35,
    },
  })

  return <Text style={styles.title}>{text}</Text>
}
