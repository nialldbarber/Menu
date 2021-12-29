import {useState} from 'react'
import {StyleSheet, Pressable} from 'react-native'
import {Icon} from 'react-native-elements'

type IconsProps = {
  type: string
  action?: () => void
}

export default function Icons({type, action}: IconsProps) {
  const [active, setActive] = useState(true)

  const styles = StyleSheet.create({
    arrow: {
      backgroundColor: active ? '#5F00F5' : '#000',
      borderRadius: 30,
      padding: 5,
    },
  })

  return (
    <Pressable
      style={styles.arrow}
      onPress={action}
      onPressIn={() => setActive(false)}
      onPressOut={() => setActive(true)}
    >
      <Icon name={type} type="antdesign" color="#fff" size={18} />
    </Pressable>
  )
}
