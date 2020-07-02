import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header title="Contact Manager" />
            <div className="container">
                <Contacts />
            </div>
        </div>
    );
}

export default App;
