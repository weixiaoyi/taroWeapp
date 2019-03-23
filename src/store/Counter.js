import { observable,computed } from 'mobx'
import StoreExtend from './StoreExtend'

class CounterStore extends StoreExtend{
  @observable counter=1

  increment=()=>{
    console.log(this.extendname,'--')
    this.changeModel('counter',this.counter+1)
  }
  decrement=()=> {
    this.changeModel('counter',this.counter-1)
  }
  incrementAsync=()=>{
    setTimeout(() => {
      this.changeModel('counter',this.counter+1)
    }, 1000)
  }
}


export default CounterStore
