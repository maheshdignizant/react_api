import React from 'react'
import axios from 'axios'
import {useEffect} from 'react';

const Api = () => {

    const fetchProducts = async () => {
        const response = await axios
            .post("http://dignizant.com/practical-task-api-doc/public/api/login")
            .catch((err) => {
                console.log("Err: ", err);
            });
            
        console.log(response)
        // dispatch(GetData(response.data.data.regional));
        // dispatch(AllData(response.data.data.summary));
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>
                All Data
            </h1>
        </div>
    )
}

export default Api;
