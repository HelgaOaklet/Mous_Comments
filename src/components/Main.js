import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewContainer from "./news/NewContainer";

function Main() {
    return (
        <div className="card">
            <Header author="Belarusian author Helga"/>
          <NewContainer />
        </div>
    );
}

export default Main;
