import {store} from '../../../store'
import {
  addItemToCart,
  decrementItemCount,
  incrementItemCount,
  removeItemFromCart,
} from '../../../store/cart.slice'

const newItem = {
  id: 5,
  name: 'Chicken Salad with Parmesan',
  price: 6.98,
  image: require('../../../assets/images/plate__chicken-salad.png'),
  alt: 'Chicken Salad with Parmesan',
  count: 1,
  total: 6.98,
}

const incrementedItem = {
  id: 5,
  name: 'Chicken Salad with Parmesan',
  price: 6.98,
  image: require('../../../assets/images/plate__chicken-salad.png'),
  alt: 'Chicken Salad with Parmesan',
  count: 3,
  total: 20.94,
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
    store.dispatch(removeItemFromCart(5))
    state = store.getState().cart
    expect(state.cart).toEqual([])
  })

  it('should increment an items count and total', () => {
    store.dispatch(addItemToCart(newItem))
    store.dispatch(incrementItemCount(5))
    state = store.getState().cart
    expect(state.cart).toEqual([incrementedItem])
  })

  it('should decrement an items count and total', () => {
    store.dispatch(decrementItemCount(5))
    store.dispatch(decrementItemCount(5))
    state = store.getState().cart
    expect(state.cart).toEqual([
      {
        id: 5,
        name: 'Chicken Salad with Parmesan',
        price: 6.98,
        image: require('../../../assets/images/plate__chicken-salad.png'),
        alt: 'Chicken Salad with Parmesan',
        count: 1,
        total: 6.98,
      },
    ])
  })
})
