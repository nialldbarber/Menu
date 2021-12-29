import {render, fireEvent} from '../../utils'
import StackRouter from '../../../routing/Stack'

describe('routing -> <Stack />', () => {
  it('renders the home screen on first render', async () => {
    const {findByText} = render(<StackRouter />)
    const homePageTitle = await findByText(/To Go Menu/i)
    expect(homePageTitle).toBeTruthy()
  })

  it('renders the cart screen when the cart button is pressed', async () => {
    const {findByText} = render(<StackRouter />)
    const button = await findByText(/Cart:/i)
    fireEvent.press(button)
    const cartPageTitle = await findByText(/Your Cart/i)
    expect(cartPageTitle).toBeTruthy()
  })

  it('should go back to home screen when "back" is pressed', async () => {
    const {findByText} = render(<StackRouter />)
    const homePageTitle = await findByText(/To Go Menu/i)
    const button = await findByText(/Cart:/i)
    fireEvent.press(button)
    const backButton = await findByText(/Back/i)
    fireEvent.press(backButton)
    expect(homePageTitle).toBeTruthy()
  })
})
