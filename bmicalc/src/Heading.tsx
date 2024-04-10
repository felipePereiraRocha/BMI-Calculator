import { FaGithub } from "react-icons/fa";
import { FaCloudscale } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";

function Heading(){

    return(
        <>
        <header className="header-container">
        <h1 className="header-title">BMI Calculator</h1>
        <div className="links">
            <a href="https://tdeecalculator.net/"><FaCloudscale/>Tdee</a>
            <a href="https://github.com/felipePereiraRocha/BMI-Calculator"><FaGithub/>Github Repo</a>
            <a href="https://store.steampowered.com/app/1229490/ULTRAKILL/"><FaGun/>UltraKill</a>
        </div>
        </header>
        </>
    );
}
export default Heading;