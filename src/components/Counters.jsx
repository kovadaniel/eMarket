import { countersData } from "../constants";
import Counter from "./UI/Counter/Counter";

function Counters(props) {
    return (
        <div {...props}>
            <div className="container">
                {countersData.map((cntr, i, arr) => <Counter key={cntr.label} counter={cntr} i={i}/>)}
            </div>
        </div>
    );
}

export default Counters;