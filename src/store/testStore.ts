import { observable, action, makeObservable, runInAction, computed } from 'mobx'
import './config'

class TestStore {
  count1: number = 0;
  count2: number = 0;

  constructor() {
    makeObservable(this, {
      count1: observable,
      count2: observable,
      count: computed,
      add: action,
      min: action
    })
  }

  get count() {
    return this.count1 + this.count2
  }

  add = () => {
    this.count1++
  }
  min = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.count2 -= 1
        resolve(this.count2)
      }, 2000);
    })
  }
}

export default new TestStore()