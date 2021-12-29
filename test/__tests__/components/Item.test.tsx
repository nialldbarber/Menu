import {render, fireEvent, waitFor} from '../../utils'
import {Item} from '../../../components/Item'

describe('components -> <Item />', () => {
  it('render the food name if one is provided', () => {
    const {getByText} = render(<Item name="testing" />)
    const testName = getByText('testing')
    expect(testName).toBeTruthy()
  })

  it('render the food price if one is provided', () => {
    const {getByText} = render(<Item price={12345} />)
    const testPrice = getByText('12345')
    expect(testPrice).toBeTruthy()
  })

  it('on first render, the button text should say "Add to cart"', () => {
    const {getByText} = render(<Item />)
    const defaultButtonText = getByText('Add to cart')
    expect(defaultButtonText).toBeTruthy()
  })

  it('should render "Remove from cart" when button is pressed', async () => {
    const {getByText} = render(<Item />)
    const button = getByText('Add to cart')
    fireEvent.press(button)
    await waitFor(() => expect(getByText('Remove from cart')).toBeTruthy())
  })
})
