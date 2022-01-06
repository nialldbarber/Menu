import {render, fireEvent} from '../../utils'
import StackRouter from '../../../routing/Stack'

describe('routing -> <StackRouter />', () => {
  it('renders the home screen on first render', async () => {
    const {findByText} = render(<StackRouter />)
    const homePageTitle = await findByText(/To Go Menu/i)
    expect(homePageTitle).toBeTruthy()
  })

  it('should render the cart screen when pressed, then go back to home screen when "back" is pressed', async () => {
    const {findByText, getByTestId} = render(<StackRouter />)
    const homePageTitle = await findByText(/To Go Menu/i)
    const button = await findByText(/Cart:/i)
    fireEvent.press(button)
    const backButton = await getByTestId(/back/i)
    fireEvent.press(backButton)
    expect(homePageTitle).toBeTruthy()
  })
})
