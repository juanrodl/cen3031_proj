import React, {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { NavItem } from 'react-bootstrap';
function UserTable () {
    const pastResultsFake = [
      {
        id: 1,
        date: '4/13/22',
        idealMajor: 'Mathematics'
      },
      {
        id: 2,
        date: '4/14/22',
        idealMajor: 'Psychology'
      },
      {
        id: 3,
        date: '4/15/22',
        idealMajor: 'Engineering'
      },
    ]
    return (
        <div className = 'UserTable display-1 col-lg-9'>
            <h1 className = "text-center">Past Results</h1>
            <table className="past-results-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Result</th>
                    <th scope="col">Download</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {
                    /**Function reads the pastResults array and maps each assessment result to a 
                     * row in the table. When clicked, the user is redirected to an instance of 
                     * the assessment/ a page containing the assessment results
                    */
                    pastResultsFake.map(function(row) {
                      return(
                    <tr key = {row.id}>
                    <td scope = "row">{1}</td>
                    <td>{row.date}</td>
                    <td>{row.idealMajor}</td>
                    <td><FontAwesomeIcon icon={Icons.faDownload} /></td>
                    </tr>)
                  })}
                  
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;