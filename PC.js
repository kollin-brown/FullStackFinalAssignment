// ParentComponent.jsx
import React, { Component } from 'react';
import ChildComponent from './CC';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: [],
      colors: [],
    };

    this.changeChildsColor = this.changeChildsColor.bind(this);
  }

  componentDidMount() {
    this.setState({
      children: [
        { id: 1, title: 'child one', color: 1 },
        { id: 2, title: 'child two', color: 2 },
        { id: 3, title: 'child three', color: 3 },
      ],
      colors: ['red', 'blue', 'purple', 'yellow'],
    });
  }

  changeChildsColor(name) {
    console.log('changing color for:');
    console.log(name);

    const nextChildren = this.state.children.map((child) => {
      if (child.title === name) {
        let newColor = (child.color + 1) % 4;
        console.log(newColor);
        console.log(this.state.colors[newColor]);
        return { ...child, color: newColor };
      } else {
        return child;
      }
    });

    this.setState({ children: nextChildren });
  }

  render() {
    const childComponents = this.state.children.map((child) => (
      <ChildComponent
        key={'key-' + child.id}
        id={child.id}
        title={child.title}
        onButton={this.changeChildsColor}
        color={this.state.colors[child.color]}
      />
    ));

    return <div className='ui unstackable items'>{childComponents}</div>;
  }
}

export default ParentComponent;
