import axios from "axios";
import { useState } from "react";

const usePostData = (url) =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [dataResponse, setDataResponse] = useState({});

    const submit = async(data) =>{
        setLoading(true);
        try {
            const res = await axios.post(url, data);
            setDataResponse(res.data);
            setIsSuccess(true);
        } catch (error) {
            setError(error);
        }
        setLoading(false)
    };

    return { loading, dataResponse, error, submit, isSuccess };
};

export default usePostData;