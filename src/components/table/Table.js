import React from "react";
import formatPrice from '../../helper/formatPrice';
import Moment from 'moment';
import './table.css';


const Table = ({ headers, data }) => {
    const columnFormat = (row,head) => {
        const category = {
            Food: 'green',
            Technology: 'blue',
            Travel: 'purple',
            Footwear: 'red',
            Automotive: 'pink',
            Entertainment: 'black',
            Apparel: 'orange',

        };

        switch(head) {
          case "location":
            return <div className="location"><img src={row[head]} alt={row[head]}/></div>;
          
          case "purchaseDate":
            return <span className="date">{Moment(row[head]).format('MMMM d, YYYY')}</span>
    
          case "category":
            return <div className="category" 
                style={{border: '1px solid '+category[row[head]], color: category[row[head]]}}>
                {row[head]}</div>

          case "description":
             
            const formattedDesc = row[head];
            return <div className="desc">{formattedDesc}</div>
           
          case "price":
            return <span className="price">{formatPrice(row[head])}</span>
          
          case " ":
            return <>
                <div className="dropdown">
                    <a href><span className="actions">⋮</span></a>
                    <div className="dropdown-content">
                        <a href="#">Delete</a>
                        <a href="#">Order Again</a>
                        <a href="#">Add Review</a>
                    </div>
                </div>
            </>
          
          default:
            return  row[head];
        }
      }
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map(head => (
              <th>{head.charAt(0).toUpperCase() + head.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
              {headers.map(head => (
                <td>
                    {columnFormat(row,head)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;