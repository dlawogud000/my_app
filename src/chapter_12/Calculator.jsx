import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if (props.celsius >= 100){
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelsisus(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    const celsius = 
        scale === 'f' ? tryConvert(temperature, toCelsisus) : temperature;
    const fahrenheit =
        scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;