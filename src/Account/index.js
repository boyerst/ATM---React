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
    console.log(event.target.value, "This is event.target.value")
    console.log(event.target, "This is event.target")

    const currentInput = this.myRef.current.value
    console.log(currentInput)
    if(event.target.value === 'Deposit'){
      this.setState({balance: currentInput})
    }
  }


  render() {
    console.log(this.myRef, "This is myRef")
    console.log(this.myRef.value)
 
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
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

//a way in react to interact w elements on the DOM (ie w buttons, forms, etc)


//this.amount
//this.amount.balance
//this.amount.value?


// import React, { Component } from 'react';


// class Account extends Component {

//   constructor() {
//     super()
//       this.state = {
//         balance: 0
//       }
//   }

//   handleSubmit = event => {
//     this.state + this.input.value
//   }

//   render() {
//     return (
//       <div className="account">
//         <h2>{this.props.name}</h2>
//         <div className="balance">$0</div>
//         <form onSubmit={this.handleSubmit} >
//         <input type="text" 
//                placeholder="enter an amount" 
//                ref={(funds) => this.amount = funds} />
//         </form>
//         <input type="button" value="Deposit" />
//         <input type="button" value="Withdraw" />
//       </div>
//     )
//   }
// }

// export default Account;