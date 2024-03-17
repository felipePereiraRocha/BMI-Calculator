import { useEffect, useState } from "react";


function Calculator(){

    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);
    const [bmi, setBmi] = useState(22);

    useEffect(()=> {
        getBMI();
    },[weight, height]);

    

    const getBMI = () => {

        setWeight(document.querySelector("#weight").value);
        setHeight(document.querySelector("#height").value/100);

        setBmi(Math.floor(weight/Math.pow(height, 2)));
    }

    return(
        <div className="main-div">
            <h1 className="title">BMI CALCULATOR</h1>
            <label className="labels" for="weight" value={70}>Weight kg:</label>
            <input type="number" id="weight" placeholder="70"></input>
            <label className="labels" for="height" value={170}>Height cm:</label>
            <input type="number" id="height" placeholder="170"></input>
            <button onClick={() => getBMI()}>Get BMI</button>
            <h1 className="bmi-display">{bmi}</h1>
        </div>
    );
}

export default Calculator;