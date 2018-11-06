import React from 'react';
import { Button } from 'reactstrap';
import HomeList from './homeList/container';
import Menu from '../../components/menu';


export default class Home extends React.Component {
  render() {
    const {
      bgColor,
      setBackgroundColor,
    } = this.props;
    console.log(bgColor);
    return (
      <div style={{background: bgColor}}>
        <Menu />
        <h1>Home</h1>
        <Button onClick={() => setBackgroundColor('#ccc')}>Click to switch div background color</Button>
        <HomeList />
      </div>
    );
  }
}
