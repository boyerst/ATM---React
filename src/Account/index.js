import React, { Component } from 'react';


class Account extends Component {

  constructor() {
    super()
      this.state = {
        balance: 0
      }
    this.myRef = React.createRef() //the receives the underlying DOM element as its current property
  }

  handleClick = (event) => {
    const currentInput = this.myRef.current.value
    console.log(currentInput)


    if(event.target.value === 'Deposit'){
      this.setState({balance: currentInput})
    } else if (this.state.balance >= currentInput) {
      this.setState({balance: this.state.balance - currentInput})
    }
  }


  


  render() {
    console.log(this.myRef, "This is myRef")

    if(this.state.balance === 0) {
      this.className = 'zero'
    } else {
      this.className = 'balance'
    }
    
  
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.className}>{this.state.balance}</div>
        <input type="text" 
               placeholder="enter an amount" 
               ref={this.myRef} />
        <input type="button" value="Deposit" onClick={this.handleClick} />
        <input type="button" value="Withdraw" onClick={this.handleClick} />
      </div>
    )
  }
}



export default Account;

//7. if current balance in zero, add another class name to that particular div
  // if statement 



