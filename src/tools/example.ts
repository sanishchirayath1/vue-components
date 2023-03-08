import classInstanceProvider from './classInstanceProvider';
class Example {
  private count: number;
  constructor() {
    this.count = 0;
  }

  setCurrentCount(count: number) {
    this.count = count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  logger() {
    console.log(this.count);
  }
}

export default classInstanceProvider.getInstance(Example);
