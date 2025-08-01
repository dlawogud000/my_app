const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };
    
    return (
        <fieldset>
            <legend>
                Enter temperature(scale: {scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput;