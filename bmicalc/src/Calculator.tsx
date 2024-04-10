import { useEffect, useState } from "react";

export function Calculator() {

    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    useEffect(() => {
        getBMI();
    }, [weight, height]);

    function saveUserStats() {
        localStorage.setItem("userWeight", `${weight}`);
        localStorage.setItem("userHeight", `${height}`);
        localStorage.setItem("userBmi", `${bmi}`);
    }

    const getBMI = () => {

        setWeight(document.querySelector("#weight").value);
        setHeight(document.querySelector("#height").value / 100);

        setBmi(Math.round(weight / Math.pow(height, 2) * 10) / 10);
        console.log(weight, height, bmi);

        saveUserStats();

    };

    return (
        <div className="main-div">
            <h1 className="title">BMI CALCULATOR</h1>
            <label className="labels" htmlFor="weight">Weight kg:</label>
            <input type="number" id="weight" placeholder="70" min={0} tabIndex={1}></input>
            <label className="labels" htmlFor="height">Height cm:</label>
            <input type="number" id="height" placeholder="170" min={0} tabIndex={2}></input>
            <button onClick={getBMI} tabIndex={3}>Get BMI</button>
            <h1 className="bmi-display">{bmi}</h1>
            <p>note that BMI(Body Mass Index) is not a definite measure of a person's health</p>
        </div>
    );
}
