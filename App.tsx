import {Provider} from 'react-redux'
import {Cart} from './components/Cart'

import StackRouter from './routing/Stack'
import {store} from './store'

export default function App() {
  return (
    <Provider store={store}>
      <StackRouter />
    </Provider>
  )
}
