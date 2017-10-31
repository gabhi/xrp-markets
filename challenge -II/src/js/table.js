import React from 'react';  
import * as Filter from './search'
import * as Data from './data'

export default class Table extends React.Component { 

  constructor() {
    this.state = { 
      data: [],
      filteredData: []
    };
  }

  componentWillMount() {
    this.setState({ 
      data: Data.goFectch("https://data.ripple.com/v2/accounts/r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV/payments"),
    });
  }

    this.setState({
      filteredData: Filter.filterData(this.state.data),
    });
  }

  render() {
    const { filteredData } = this.state.data;
    const prettyRows = filteredData.map(function(datum) {
      return (
        <tr>
          <td>{ datum.get("id") }</td>
          <td>{ datum.get("title") }</td>
        </tr>
      );
    });

    return(
      <div className="Table container">
        <input
          type="text"
          className="form-control"
          onChange={ this.filterData.bind(this) }
          placeholder="Search" />

        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
          </thead>

          <tbody>
            { prettyRows }
          </tbody>
       </table>
     </div>);
   }
