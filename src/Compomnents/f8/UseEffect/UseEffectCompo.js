import { useState } from "react";

import UseEffect from "./UseEffect";
import UseEffectTimerFunction from "./UseEffectTimerFunction"

function UseEffectCompo() {
    const [toggle, setToggleValue] = useState(false);
    return (
        <div>
            <br></br>
            <button
                onClick={() => setToggleValue(!toggle)}
            >Toggle</button>
            {toggle && <div>
                <UseEffectTimerFunction />
                <UseEffect />
            </div>}
        </div>
    )
}
export default UseEffectCompo;