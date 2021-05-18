import {useState, useEffect} from 'react';

export const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
            } catch (e) {
                setError(e)
            }
        };
        getData();
    }, []);

    return {data, error};
};