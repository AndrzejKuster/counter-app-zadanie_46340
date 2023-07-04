import { useEffect, useState } from "react";
import './Counter.css';
import Display from './components/Display'
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Step from "./components/Step";


// const counter = Math.floor(Math.random()*10);

const Counter = (props) => {

    const [counter, setCounter] = useState(17);
    // const [showClock, setShowClock] = useState(true);
    const [step, setStep] = useState(1);

    const updateCounter = (action) => {
        console.log('ustawiony step to', step);
        if (action === 'add') {
            setCounter(counter + parseInt(step));
        } else if (action === 'reset') {
            setCounter(props.counterInitValue);
        } else {
            setCounter(0);
        }
    }

    // console.log(props);
    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} />
            <Step step={step} setStep={setStep} />
            {/* {showClock ? <Clock setShowClock={setShowClock} /> : <p className='clockControl' onClick={() => setShowClock(true)}>pokaż zegar</p>} */}
        </div>
    );
}

export default Counter;