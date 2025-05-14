import React, { useState, useEffect } from 'react';

const ApiExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTimeout(async () => {
                    const response = await fetch('/status');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    setData(result);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Example</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <p>Data fetched successfully with status: { data.Status }!</p>
            )}
        </div>
    );
}

export default ApiExample;