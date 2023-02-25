import {useState, useEffect} from "react"
import axios from "axios"
function Chats(){
const [data, setData] = useState() 

const getData = () =>{
return fetch(`http://localhost:8000/api/chat`).then(res=>res.json())
}

// const getData = async ()=>{
//     let {chatData} = await axios.get(`http://localhost:8000/api/chat`)
//     setData(chatData)
//     console.log(chatData)
// }


useEffect(()=>{
getData().then((res)=>setData(res))
// getData()
},[])

console.log(data)

    return(
        <div>
{
data && data.map((e)=>(
    <div key={e._id}>

    </div>
))
}


        </div>
    )
}
export default Chats