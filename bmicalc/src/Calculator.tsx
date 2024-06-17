import { useEffect, useState } from "react";

export function Calculator() {

    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);
    const [unitSettings, setUnitSettings] = useState<boolean>(true);

    useEffect(() => {
        getBMI();
    }, [weight, height]);

    function saveUserStats() {
        localStorage.setItem("userWeight", `${weight}`);
        localStorage.setItem("userHeight", `${height}`);
        localStorage.setItem("userBmi", `${bmi}`);
    }

    function handleUnit() {

        if(unitSettings === true) {
            document.querySelector("#weight")!.value = Math.round(document.querySelector("#weight")!.value *  2.205);
            document.querySelector("#height")!.value = Math.round(document.querySelector("#height")!.value / 2.54);
        } else {
            document.querySelector("#weight")!.value = Math.round(document.querySelector("#weight")!.value /  2.205);
            document.querySelector("#height")!.value = Math.round(document.querySelector("#height")!.value * 2.54);
        }

        setUnitSettings(!unitSettings);
        console.log(unitSettings);
    }
    const getBMI = () => {

        //IF Using metric unit system//
        if(unitSettings === true) {
        setWeight(document.querySelector("#weight")!.value);
        setHeight(document.querySelector("#height")!.value / 100);

        setBmi(Math.round(weight / Math.pow(height, 2) * 10) / 10);

        console.log(weight, height, bmi);

        saveUserStats();
        } else {
            //IF USING IMPERIAL UNIT SYSTEM//
            setWeight(document.querySelector("#weight")!.value);
            setHeight(document.querySelector("#height")!.value);

            setBmi(Math.round(703 * (weight / (height ** 2))));

            console.log(weight, height, bmi);

            saveUserStats();

        }

    };

    document.addEventListener("keydown", event => {
        if(event.key === "Enter") {
            getBMI();
        }
        
    })

    return (
        <div className="main-div">
            <h1 className="title">BMI CALCULATOR</h1>
            <label className="labels" htmlFor="weight">Weight <button onClick={handleUnit}>{unitSettings ? "kg" : "lb"}</button>:</label>
            <input defaultValue={70} type="number" id="weight" placeholder="70" min={0} onChange={getBMI}></input>
            <label className="labels" htmlFor="height">Height <button onClick={handleUnit}>{unitSettings ? "cm" : "in"}</button>:</label>
            <input defaultValue={170} type="number" id="height" placeholder="170" min={0} onChange={getBMI}></input>
            <button  className="get-bmi-button" onClick={getBMI}>Get BMI</button>
            <h1 className="bmi-display">{bmi}</h1>
            <p>note that BMI(Body Mass Index) is not a definite measure of a person's health</p>
        </div>
    );
}
