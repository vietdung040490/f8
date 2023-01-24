import { useState } from "react";

function ToDoList() {
    const [job, setJob] = useState('')

    const [listJobs, setListJobs] = useState(() => {
        const jobsList = JSON.parse(localStorage.getItem('listJobs')) ?? []
        return jobsList;
    })
    console.log(listJobs)
    const handleAddButton = () => {
        setListJobs(priv => {
            const localStorageListJob = [...priv, job];
            localStorage.setItem('listJobs', JSON.stringify(localStorageListJob))
            return localStorageListJob;
        })
        setJob('')
    }
    return (
        <div>
            <h2>To do list</h2>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleAddButton}>Add</button>
            <ul>
                {listJobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;