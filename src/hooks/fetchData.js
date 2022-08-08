import axios from "axios";
import { useEffect, useState } from "react"

const useFetchData = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async() =>{
        try {
            const res = await axios.get(url);
            setData(res.data.data);
        } catch (error) {
            
        }
        setLoading(false)
    };

    useEffect(() =>{
        getData()
    }, []);

    return { loading, data }
};

export default useFetchData;