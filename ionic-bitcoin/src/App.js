import React, {Component} from 'react';
import './App.css';
import { getBitcoinPrice } from './api/Bitcoin';
import MdbBitcoinCards from './Components/BitcoinCard/MdbBitcoinCards';
import MdbLoadingCard from './Components/LoadingCard/MdbLoadingCard';
import { MDBJumbotron,  MDBContainer, MDBCardTitle} from "mdbreact";

class App extends Component {
state = {
  bitcoinInfo:{},
  loading:true,
};

async componentDidMount(){
  const bitcoinInfo = await getBitcoinPrice();
  
    
  this.setState (
    {
      bitcoinInfo,
      loading:false,
    },

    ()=>console.log(this.state),
  );
}

createLoadingCards(){
  return (
    <>
    <MdbLoadingCard/>
    <MdbLoadingCard/>
    <MdbLoadingCard/>
    </>
  );
}


createBitcoinCards(bitcoinInfo){
  return  Object.keys(bitcoinInfo.bpi)
    .map((item,index) => (
      <MdbBitcoinCards data={bitcoinInfo.bpi[item]}/>
      ))
      
}

  render(){
    const { bitcoinInfo, loading} =this.state;
  return (
    <MDBContainer>
      
          <MDBJumbotron className="bg overflow-auto" style={{ padding:20, margin:10}} >
          <MDBCardTitle className=" h1 responsive m-5 font-bold text-white text-center display-3" >SkyCoin</MDBCardTitle> 
                {
                  loading === true ?
                  this.createLoadingCards() :
                  this.createBitcoinCards(bitcoinInfo)
                }
          </MDBJumbotron>
    </MDBContainer>
  );
}
}

export default App;
