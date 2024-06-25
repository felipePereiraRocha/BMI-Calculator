import { useEffect, useState } from "react";

export function MetabolicRate(){

    const [bmr, setBmr] = useState<number>((88.4 + 13.4 * 70) + (4.8 * 179) - (5.68 * 19));

    useEffect(() => {
        getBmr(70, 179, 19, true);
    }, []);

    function getBmr(weight:number, height:number, age:number, sex:boolean){
        if(sex) {
            setBmr((88.4 + 13.4 * weight) + (4.8 * height) - (5.68 * age));
        } else {
            setBmr((447.6 + 9.25 * weight) + (3.10 * height) - (4.33 * age));
        }

        setBmr(Math.round(bmr))

    }
    return(
        <div className="main-div">
            <h1>Your Basic Metabolic Rate is of:</h1>
            <h1 className="bmi-display" id="display">{bmr} calories</h1>
        </div>
    );
}