import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Button from './components/Button';
import shareImage from './images/share.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [
        { id: 1, name: 'Cras justo odio' },
        { id: 2, name: 'Dapibus ac facilisis in' },
        { id: 3, name: 'Morbi leo risus' },
        { id: 4, name: 'Porta ac consectetur ac' },
        { id: 5, name: 'Vestibulum at eros' }
      ]
    }
  }
  
  render() {
    var items = this.state.items;
    return (
      <div className="items-panel">
        {/* <Button type="primary" size="big">你好</Button>
        <Button type="primary">你好</Button>
        <Button>你好</Button> */}
        <ul>
          <FlipMove>
          {
            items.map((item, index) => (
              <li key={item.id} className="list-group-item">
                <div className="name">{item.name}</div>
                <div className="btn-group">
                  {
                    index > 0 ?
                      <Button type="primary" onClick={() => this.sortUp(index)}>Up</Button> : null
                  }
                  {
                    index < items.length - 1 ?
                      <Button type="dark" onClick={() => this.sortDown(index)}>Down</Button> : null
                  }
                </div>
              </li>
            ))
          }
          </FlipMove>
        </ul>
      </div>
    );
  }
  
  sortUp(index) {
    this.resort(index, -1);
  }
  
  sortDown(index) {
    this.resort(index, 1)
  }
  
  resort(index, diff) {
    var items = this.state.items;
    var item = items[index];
    items.splice(index, 1);
    items.splice(index + diff, 0, item);
    this.setState({ items: items });
  }
}

export default App;
