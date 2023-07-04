import './Step.css'

const Step = (props) => {
    return (
        <div className="step">
            <span >Krok:</span>
            <input onChange={(e) => {
                // console.log(e.target.value);
                props.setStep(e.target.value)
            }} type="number" min={1} value={props.step} />
        </div>
    )
}


export default Step;