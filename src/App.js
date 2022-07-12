import React, {Component} from 'react';
import Posts from "./components/Posts";

class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
    return (
        <div>
          <Posts/>
        </div>
    );
  }
}

export default App;


// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти
