import {render} from '@testing-library/react-native'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'react-native-elements'
import {store} from '../store'

const AllTheProviders = ({children}: any) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (ui?: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react-native'
export {customRender as render}
