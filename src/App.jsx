import "./styles.scss";
import React from 'react';

export default function App() {

    const header = React.createElement("h1", null, "My first reactJS app");

    return (
        <div className="App">
            <h1>Hello World</h1>
            {header}
        </div>
    );
}
