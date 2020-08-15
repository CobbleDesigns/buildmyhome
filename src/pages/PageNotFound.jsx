import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class PageNotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='container d-flex justify-content-center'>
                <h1>
                    <b>404 Page Not Found</b>
                </h1>
            </div>
         );
    }
}
 
export default PageNotFound;