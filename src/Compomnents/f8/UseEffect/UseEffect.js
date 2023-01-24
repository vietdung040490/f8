import { useEffect, useState } from "react";

const types = ['posts', 'photos', 'comments', 'albums', 'todos', 'users']
function UseEffect() {
    const [title, setTitle] = useState('');//chức năng update title html
    const [posts, setPosts] = useState([]);
    const [typeButton, setTypeButton] = useState('posts')

    useEffect(() => {//lay gia tri cua typeButton
        fetch(`https://jsonplaceholder.typicode.com/${typeButton}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
        
    }, [typeButton])// dependence: typeButton thay đổi giá trị thì useEffect() chạy một lần

    useEffect(() => {// lắng nghe sự kiện 
        
    })
    return (
        <div>
            {types.map(type => (
                <button
                    key={type}
                    onClick={() => {
                        setTypeButton(type);
                        // setPosts(type)
                    }}
                >
                    {type}
                </button>
            ))}
            <br></br>
            <input //chức năng update title html
                value={title}
                onChange={e => setTitle(prev => {
                    prev = e.target.value;
                    document.title = prev;
                })}
            />
            <ul>{posts.map(post => (
                <li>{post.title || post.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default UseEffect;