import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Queries from './Queries';

function MainPage() {

    
      
    const [clientList, setClientList] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:3002/api/query1").then((data) => {
            // console.log(data)
            setClientList(data.data)
        });
    }, [])

    return (
        <div className="MainPage">
            <Queries clientList={clientList} />
        </div>
    )
}

export default MainPage