import { useEffect, useState } from "react";

const types = ['posts', 'photos', 'comments', 'albums', 'todos', 'users']
function UseEffect() {
    const [title, setTitle] = useState('');//chức năng update title html
    const [posts, setPosts] = useState([]);
    const [typeButton, setTypeButton] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {//lay gia tri cua typeButton
        fetch(`https://jsonplaceholder.typicode.com/${typeButton}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })

    }, [typeButton])// dependence: typeButton thay đổi giá trị thì useEffect() chạy một lần

    useEffect(() => {// lắng nghe sự kiện Dom
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 250)
            console.log(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])
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
            {showGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        right: 10,
                        bottom: 20
                    }}
                >Up to top</button>}
        </div>
    )
}

export default UseEffect;