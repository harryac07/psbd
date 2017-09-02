import React, { Component } from 'react';
import {connect} from 'react-redux';
import {exchangeCurrency} from '../actions/currencyAction';

import ExchangeForm from '../parts/ExchangeForm';
// import Nav from '../parts/Nav';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            converted : false,
            formdata :{}
        }
    }
    handleExchange=(data)=>{
        this.props.exchangeCurrency(data).then(()=>{
            this.setState({converted:true,formdata:this.props.exchange.exchange});
            console.log('data',this.state.formdata);
        });
    }
    componentWillReceiveProps(nextProps){
        if(this.props !==nextProps){
            this.setState({converted:true});
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.converted===true){
            this.setState({converted:false});
        }
    }
    render() {
        const {amount,base,currency,convertedRate} = this.state.formdata;

        return (
            <div className="App">
                <h2 className="text-center">Daily Currency Conversion</h2>
                <div className="jumbotron">
                    <div className="text-center">
                        <p>{base ? `${amount} ${base} equals`:null}</p>
                        <h2><strong>{base ?`${convertedRate} ${currency}`:null}</strong></h2>
                    </div>
                    <div className="col-sm-6 col-sm-offset-3 col-xs-12">
                        <ExchangeForm submit={this.handleExchange} />
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
  return{
    exchange :state.exchange
  }
}
export default connect(mapStateToProps,{exchangeCurrency})(App);
