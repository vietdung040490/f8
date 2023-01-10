import { useState } from "react";//ứng dụng đếm số

//vd 1 tăng giá trị lên 1 đơn vị, 
// function App() {
//   const [ giaTriBanDau, hamTangGiaTri ] = useState(1)
//   const handleIncrease = () => {
//     hamTangGiaTri(giaTriBanDau + 1)
//   }
//   return (
//     <div className="App" style={{padding: 100}}>
//       <h2>{giaTriBanDau}</h2>
//       <button onClick={handleIncrease}>Click me</button>
//     </div>
//   );
// }

//tăng lên 3 đơn vị, tham số return của hàm setCouter
// function App() {
//   const [counter, setCounter] = useState(1);
//   const handleIncrease = () => {
//     setCounter(pre => pre +3);
//   }
//   return (
//     <div className="App" style={{ padding: 100 }}>
//       <h2>{counter}</h2>
//       <button onClick={handleIncrease}>Click Me</button>
//     </div>
//   )
// }

//add thêm thuộc tính cho mảng.
// function App() {
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
// function App() {
//     const [gift, setGift] = useState();
//     function handleRandomGift(){
//         let random = Math.floor(Math.random() * (gifts.length));
//         setGift(gifts[random])
//         quaDaNhan.push(gift);
//     }
//     return (
//         <div className="App" style={{padding: 100}}>
//             <h2>{gift || 'Chưa có quà'}</h2>
//             <button onClick={handleRandomGift}>Click để nhận quà</button>
//             <p>qua da nhan: {JSON.stringify(quaDaNhan)}</p>
//         </div>
//     )
// }

//two ways binding
// <input />
function App() {
    const [value, setValue] = useState()
    console.log(value)
    
    return (
        <div className="App" style={{ padding: 100 }}>
            <h2>bla bla input</h2>
            <input onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
export default App;
