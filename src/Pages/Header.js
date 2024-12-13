import Navbar from '../components/Navbar.js'
import { useState } from 'react'
import { link } from 'react';
// import Button from '../components/Button.js'
// import IMG from '../components/IMG.js'
function Home(){
    const [data,setData] = useState(1)
    console.log(data);

    const increment =()=>{
        setData(data+1)
    }


    

    return(
        <div>
            <Navbar logo="INWOOD"/>
            {/* <Button text="Add to card" class="addToCard"/>
            <Button text="delete to card" class="deleteButton"/>
            <IMG url="https://picsum.photos/id/20/290/290" alter="no image"/> */}
            <div>{data}</div>
            <button onClick={increment}>ADD</button>
            <link to="/about">About</link>
        </div>
    )
}
export default Home