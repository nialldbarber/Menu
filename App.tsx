import {Provider} from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import StackRouter from './routing/Stack'
import {store} from './store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StackRouter />
      </SafeAreaProvider>
    </Provider>
  )
}
