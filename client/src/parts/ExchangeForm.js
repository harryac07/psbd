import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ExchangeForm extends Component{
	constructor(props){
		super(props);
        this.state={
            base : '',
            amount: 0,
            currency :'',
            startDate:moment()
        }
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		const data={
			amount : this.refs.amount.value,
			currency : this.refs.currency.value,
			date : this.state.startDate 
						? this.state.startDate.format('YYYY-MM-DD') 
						: moment().format('YYYY-MM-DD')
		};
		console.log('date',data.date);
		this.props.submit(data);
		this.refs.amount.value="";
		this.refs.currency.value="";
	}
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleDateChange=(date)=>{
    	this.setState({startDate:date})
    }
    render(){
		return(
	      <form className="form-vertical" onSubmit={this.handleSubmit}>
	            <div className="form-group">
	                <label  htmlFor="date">Select Date:</label>
					<DatePicker
					    selected={this.state.startDate}
					    className="form-control"
					    todayButton={"Get Today's Date"}
					    onChange={this.handleDateChange}/>
	            </div>
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