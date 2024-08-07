import React from 'react';
import Ticket from './component/ticket';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TicketWithLocation />} />
        </Routes>
      </div>
    </Router>
  );
};

const TicketWithLocation = () => {
  const location = useLocation();
  const [data, setData] = React.useState();

  React.useEffect(() => {
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

  return <Ticket data={data} />;
};

export default App;
