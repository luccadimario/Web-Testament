import React, { useState, useEffect } from 'react';
const BTCPrice = () => {
    const [data, setData] = useState(null);
    let tests = 0;
    const [loading, setLoading] = useState(true);

    const fetchData = async() => {
        try {
            const response = await fetch("/live");
            const data = await response.json();
            setData(data.map((data) =>
                <li>
                    {data ? (data.code + ": " + data.rate.toFixed(2)) : <div>Unavailable</div>}
                </li>
                )
            );
            setLoading(false);
        }
        catch(error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchData();
    }, [])
    if(loading) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    return(
        <div>
            <ul>
                {data}
            </ul>
            
        </div>
    )
}
export default BTCPrice

