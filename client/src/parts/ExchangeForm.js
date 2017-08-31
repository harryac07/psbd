import React,{Component} from 'react';

class ExchangeForm extends Component{
	constructor(props){
		super(props);
        this.state={
            base : '',
            amount: 0,
            currency :''
        }
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		const data={
			amount : this.refs.amount.value,
			currency : this.refs.currency.value
		};
		this.props.submit(data);
		this.refs.amount.value="";
		this.refs.currency.value="";
	}
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
		return(
	      <form className="form-vertical" onSubmit={this.handleSubmit}>
	            <div className="form-group">
	                <label  htmlFor="name">Amount:</label>
	                <input type="number" className="form-control" name="amount" 
	                    value={this.state.amount} 
	                    onChange={this.handleChange} 
	                    ref="amount" />
	            </div>
	            <div className="form-group">
	                <label  htmlFor="breed">Currency To:</label>
	                <select className="form-control" name="currency" ref="currency" value={this.state.currency} onChange={this.handleChange}>
	                    <option value="USD">USD</option>
	                    <option value="EUR">EUR</option>
	                </select>
	            </div>       
	            <div className="form-group">
	               	<button type="submit" className="btn btn-primary">Convert</button>
	            </div> 
	        </form>
		);
	}
}
export default ExchangeForm;