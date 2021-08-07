import { useLocalObservable } from 'mobx-react-lite'

const counterStore = {
  counter: 10,
  
  onIncrement() {
    this.counter ++
  },
  onDecrement() {
    this.counter --
  }
}
const CounterStore = () => {
  return useLocalObservable(() => counterStore)
}

export default CounterStore