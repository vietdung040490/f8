import { useState } from "react";

// two way binding
// two way binding for input>radio
const courses = [
    {
        id: 1,
        name: 'Html, Css, Jasascript'
    },
    {
        id: 2,
        name: 'ReactJs'
    },
    {
        id: 3,
        name: 'ExpressJs'
    }
]

function InputRadio() {
    // const [checked, setChecked] = useState();
    // const handleGetInfo = () => {
    //     const a = courses.find(course => course.id === checked);
    //     return alert(a.name)
    // }
    // return (
    //     <div className="App">
    //         <h2>two way binding input,radio</h2>
    //         {courses.map((course) => (
    //             <div key={course.id}>
    //                 <input
    //                     type='radio'
    //                     checked={checked === course.id}
    //                     onChange={() => setChecked(course.id)}
    //                 />
    //                 <label>{course.name}</label>
    //             </div>
    //         ))}
    //         <button onClick={handleGetInfo}>Get Info</button>
    //     </div>
    // )

    // Lam lai 
    const [checked, setChecked] = useState('');
    const handleGetInfo = () => {
        const result = courses.find(course => checked === course.id)
        console.log(result.name)
    }
    return(
        <div>
            <h2>two way binding for input(Radio)</h2>
            {courses.map(course => (
                <div key={course.id}>
                    <input 
                        type='radio'
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />
                    <label>{course.name}</label>
                </div>
            ))}
            <button onClick={handleGetInfo}>Get Info</button>
        </div>
    )
}

export default InputRadio;