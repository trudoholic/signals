import SignalFactory from 'js-signals-factory';
import printMe from './js/print.js';

const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;
document.body.appendChild(btn);

console.log("hello world!");

    // First register a callback function to your signal
    SignalFactory.getSignal('completed').add(function () {
        console.log('it is completed!');
    });
	
	/*/
    SignalFactory.getSignal('completed').dispatch();
    // it is completed!

    // Remove reference by name
    SignalFactory.removeSignal('completed');
	/*/