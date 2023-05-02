import { useState } from 'react';
import useFetch from '../../helper/useFetch';
import Table from '../table/Table';
import Cards from '../cards/Cards';
import './purchases.css';

const url = 'data.json';

const Purchases = () => {
    const { isLoading, isError, data } = useFetch(url);
    const [mobileView, setMobileView] = useState(false);
    
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    if (isError) {
      return <h2>There was an error...</h2>;
    }
    
    const headers = ['name', 'location', 'purchaseDate', 'category', 'description', 'price', ' '];

    const changeView = () => {
      setMobileView(!mobileView);
    }

    return (
      <div className="purchases">
        <header className="header">
          <h1>Purchases</h1>
          (<a href="#" onClick={changeView}>
            Change to {mobileView ?  " desktop view" : "mobile view"}
          </a>)
        </header>

        {mobileView ? 
          <Cards data={data} />
        :
          <Table headers={headers} data={data} />}

      </div>
    );
  };
  export default Purchases;