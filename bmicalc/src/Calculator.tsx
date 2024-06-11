import { useEffect, useState } from "react";

export function Calculator() {

    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    const [weightSettings, setWeightSettings] = useState<boolean>(true);
    const [heightSettings, setHeightSettings] = useState<boolean>(true);

    useEffect(() => {
        getBMI();
    }, [weight, height]);

    function saveUserStats() {
        localStorage.setItem("userWeight", `${weight}`);
        localStorage.setItem("userHeight", `${height}`);
        localStorage.setItem("userBmi", `${bmi}`);
    }

    function handleHeightMetric() {
        setHeightSettings(!heightSettings);
        console.log(heightSettings)
    }
    function handleWeightMetric() {
        setWeightSettings(!weightSettings!);
        console.log(weightSettings)
    }

    const getBMI = () => {

        setWeight(document.querySelector("#weight")!.value);
        setHeight(document.querySelector("#height")!.value / 100);

        weightSettings ? null : setWeight(_prevWeight => weight / 2.205);
        heightSettings ? null : setHeight(_prevHeight => height *  30.48);

        setBmi(Math.round(weight / Math.pow(height, 2) * 10) / 10);

        console.log(weight, height, bmi);

        saveUserStats();

    };

    return (
        <div className="main-div">
            <h1 className="title">BMI CALCULATOR</h1>
            <label className="labels" htmlFor="weight">Weight <button onClick={handleWeightMetric}>{weightSettings? "kg" : "lbs"}</button>:</label>
            <input defaultValue={70} type="number" id="weight" placeholder="70" min={0}></input>
            <label className="labels" htmlFor="height">Height <button onClick={handleHeightMetric}>{heightSettings? "cm" : "ft"}</button>:</label>
            <input defaultValue={170} type="number" id="height" placeholder="170" min={0}></input>
            <button  className="get-bmi-button" onClick={getBMI}>Get BMI</button>
            <h1 className="bmi-display">{bmi}</h1>
            <p>note that BMI(Body Mass Index) is not a definite measure of a person's health</p>
        </div>
    );
}
