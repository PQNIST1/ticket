import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Ticket from './component/ticket';

const App = () => {
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const jsonData = query.get('data');

        if (jsonData) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(jsonData));
                setData(parsedData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }, [location.search]);


    return (
        <div className="App">
            <Ticket data={data}/>
        </div>
    );
};

export default App;
