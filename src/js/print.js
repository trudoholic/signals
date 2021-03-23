import SignalFactory from 'js-signals-factory';

export default function printMe() {
  console.log('I get called from print.js!');
  
    SignalFactory.getSignal('completed').dispatch();
    // it is completed!

    // Remove reference by name
    SignalFactory.removeSignal('completed');
}