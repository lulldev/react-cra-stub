import React from 'react';
import { Button } from 'reactstrap';
import HomeList from './homeList/container';

export default class Home extends React.Component {
  render() {
    const {
      bgColor,
      setBackgroundColor,
    } = this.props;
    console.log(bgColor);
    return (
      <div style={{background: bgColor}}>
        <div>Home content</div>
        <Button onClick={() => setBackgroundColor('#ccc')}>Click to switch div background color</Button>
        <HomeList />
      </div>
    );
  }
}
