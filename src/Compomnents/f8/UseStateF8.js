import { useState } from "react";//ứng dụng đếm số

//vd 1 tăng giá trị lên 1 đơn vị, 
// function useStateF8() {
//   const [ giaTriBanDau, hamTangGiaTri ] = useState(1)
//   const handleIncrease = () => {
//     hamTangGiaTri(giaTriBanDau + 1)
//   }
//   return (
//     <div className="App">
//       <h2>{giaTriBanDau}</h2>
//       <button onClick={handleIncrease}>Click me</button>
//     </div>
//   );
// }

//tăng lên 3 đơn vị, tham số return của hàm setCouter
// function useStateF8() {
//   const [counter, setCounter] = useState(1);
//   const handleIncrease = () => {
//     setCounter(pre => pre +3);
//   }
//   return (
//     <div className="App">
//       <h2>{counter}</h2>
//       <button onClick={handleIncrease}>Click Me</button>
//     </div>
//   )
// }

//add thêm thuộc tính cho mảng.
// function useStateF8() {
//   const [info, updateInfo] = useState({ name: "Ho Viet Dung", tuoi: 32, DiaChi: "japan" })
//   const handleUpdate = () => {
//     updateInfo({
//       ...info, bio: "Yeu Panda love love"
//     })
//   }
//   return (
//     <div className="App">
//       <h2>Thông tin user.</h2>
//       <p>{JSON.stringify(info)}</p>
//       <button onClick={handleUpdate}>Click me to add info</button>
//     </div>
//   )
// }

// Nhận phần thưởng.
// const gifts = ['quà 1', 'quà ２', 'quà 3', 'quà 4', 'quà 5'];
// const quaDaNhan = [];
// function useStateF8() {
//     const [gift, setGift] = useState();
//     function handleRandomGift(){
//         let random = Math.floor(Math.random() * (gifts.length));
//         setGift(gifts[random])
//         quaDaNhan.push(gift);
//     }
//     return (
//         <div className="App">
//             <h2>{gift || 'Chưa có quà'}</h2>
//             <button onClick={handleRandomGift}>Click để nhận quà</button>
//             <p>qua da nhan: {JSON.stringify(quaDaNhan)}</p>
//         </div>
//     )
// }

//two ways binding
// <input />, phan 1
// function useStateF8() {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     console.log({ name, email })
//     const handleShowInFo = () => {
//         console.log({ name, email })

//     }
//     return (
//         <div className="App">
//             <input
//                 // value={name}
//                 onChange={(typingNameValue) => setName(typingNameValue.target.value)}

//             /><br></br>
//             <input
//                 // value={email}
//                 onChange={(typingEmailValue) => setEmail(typingEmailValue.target.value)}
//             />
//             <button onClick={handleShowInFo}>Show info</button>
//         </div>
//     )
// }


//two ways binding
// <input />, phan 2
// function useStateF8(){
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const handleShowInfo = () => {
//         console.log({name, email});
//     }
//     return(
//         <div className="App">
//             <input
//                 onChange={(typingValue) => setName(typingValue.target.value)}
//             />
//             <br></br>
//             <input
//             onChange={(typingValue) => setEmail(typingValue.target.value)}
//             />
//             <button onClick={handleShowInfo}>Show Info</button>
//         </div>
//     )
// }

//two ways binding
// <input />, phan 3
function UseStateF8() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleGetInfo = () => {
        console.log({ name, email })
    }

    return (
        <div className="App">
            <h2>two ways binding, input </h2>
            <input
                onChange={(typingValue) => setName(typingValue.target.value)}
            /><br></br>
            <input
                onChange={(typingValue) => setEmail(typingValue.target.value)}
            />
            <button onClick={handleGetInfo}>Get Info</button>
        </div>
    )
}

export default UseStateF8;