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
    // const [checked, setChecked] = useState([1,2]);
    // console.log(checked);
    // const handleChecked = (id) => {
    //     setChecked(prev => {
    //         if (checked.includes(id)) {
    //             return checked.filter(item => item !== id)
    //         } else {
    //             return [...prev, id]
    //         }
    //     })
    // }
    // const handleGetInfo = () => {
    //     console.log('Ban da Chon')
    //     checked.forEach(id => {
    //         console.log(id)
    //     });
    // }
    // return (
    //     <div>
    //         <h2>two way binding for input, checkbox</h2>
    //         {courses.map(course => (
    //             <div key={course.id}>
    //                 <input type='checkbox'
    //                     checked={checked.includes(course.id)}
    //                     onChange={() => handleChecked(course.id)}
    //                 />
    //                 <label>{course.name}</label>
    //             </div>
    //         ))}
    //         <button onClick={handleGetInfo}> Get Info</button>
    //     </div>
    // )

    // 繰り返し
    const [checkedIdList, setChecked] = useState([]);
    const handleClickCheckBox = (id) => {
        const isChecked = checkedIdList.includes(id);
        if (isChecked) {
            return setChecked(isChecked =>
                isChecked.filter(item => item !== id)
            )
        } else {
            setChecked([...checkedIdList, id]);
        }
    }
    const handleCheckBoxButton = () => {
        console.log('Ban da chon: ')
        console.log(checkedIdList)
    }
    return (
        <div>
            <h2>two way binding for input(Checkbox)</h2>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type='checkbox'
                        checked={checkedIdList.includes(course.id)}
                        onChange={() => handleClickCheckBox(course.id)}
                    />
                    <label>{course.name}</label>
                </div>
            ))}
            <button onClick={handleCheckBoxButton}>Check Box</button>
        </div>
    )
}
export default InputCheckBox;