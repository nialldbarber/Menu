import {StyleSheet, Text} from 'react-native'

type TitleProps = {
  text: string
}

export default function Title({text}: TitleProps) {
  const styles = StyleSheet.create({
    title: {
      paddingTop: 80,
      fontSize: 35,
    },
  })

  return <Text style={styles.title}>{text}</Text>
}
