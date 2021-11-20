import styles from './mainSection.module.css';
import React from 'react';

export default function MainSection() {
  return (
    <div className={styles.container}>
        <h2>Chart</h2> 
        <div className={styles.coinList}>
          <Coins />
        </div>       
    </div>
  )
}

class Coins extends React.Component {
  constructor(props) {
    super(props);
    
    this.price = React.createRef();
  }


  componentDidMount(){
    

     var goodThis = this;
      const source = new EventSource("https://www.coin-tunnel.ml/sse/prices/eth");
      source.onmessage = function(event) {
          goodThis.price.current.innerHTML = event.data;
      };
  }

  render() {
    let coins = ["ETH"]


    return coins.map(coin =>
      <div>
        <h3>{coin}</h3>
        <div>
          <span>Price: </span>
          <span><b ref={this.price}>50$</b></span>
        </div>
      </div>
   )
  }
}