import { useState } from "react";

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

function InputCheckBox() {
    return(
        <div>
            <h2>two way binding for input, checkbox</h2>
            {courses.map(course => (
                <div id={course.id}>
                    <input type='checkbox'
                    checked
                    />
                    <label>{course.name}</label>
                </div>
            ))}
            <button> Get Info</button>
        </div>
    )
}
export default InputCheckBox;