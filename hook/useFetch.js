import { useState,useEffect } from 'react';
import axios from 'axios';



const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const options = {
        method: 'GET',
        url:`https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'f4dc1d9476mshf6c16f1f49ef381p1a9c51jsn2365fc12e1e4',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

         try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
         }catch(error){
            setIsError(error);
            alert(error);

         }finally{
            setIsLoading(false);

         }
        }

        useEffect(() => {
            fetchData();
         } ,[]);


         const refetch = () => {
            isLoading(true);
            fetchData();
         }


         return {data, isLoading, isError, refetch};
}

export default useFetch;