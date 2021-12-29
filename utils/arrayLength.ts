export function arrayLength<T>(cart: T[]): number | null {
  return cart.length > 0 ? cart.length : null
}
