import {store} from '../../../store'
import {addItemToCart, removeItemFromCart} from '../../../store/cart.slice'

const newItem = {
  id: 5,
  name: 'Chicken Salad with Parmesan',
  price: 698,
  image: require('../../../assets/images/plate__chicken-salad.png'),
  alt: 'Chicken Salad with Parmesan',
  count: 0,
}

describe('store -> cart.slice', () => {
  let state = store.getState().cart

  it('should render the inital state', () => {
    expect(state.cart).toEqual([])
  })

  it('should update cart when an item is added', () => {
    store.dispatch(addItemToCart(newItem))
    state = store.getState().cart
    expect(state.cart).toEqual([newItem])
  })

  it('should update cart when an item is removed', () => {
    store.dispatch(addItemToCart(newItem))
    store.dispatch(removeItemFromCart(5))
    state = store.getState().cart
    expect(state.cart).toEqual([])
  })
})
