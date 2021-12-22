import { useState } from "react"

function Account(props) {
  //add a new useState for balance & input
  const [balance, setBalance] = useState(0);
  const [input, setInput] = useState("");

  //create an event listener to store current value of the input state
  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.valueAsNumber);
  }

  //handle deposit
  // const handleDeposit = (e) => {
  //   e.preventDefault();
  //   setBalance(balance + input);
  //   console.log(`New Balance: ${balance}`);
  //   console.log(typeof balance);
  // }

  //simplified handleDeposit
  const handleDeposit = () => {
    setBalance(balance + input);
    console.log(`New Balance After Deposit: ${balance}`);
    console.log(typeof balance);
  }

  const handleWithdraw = () => {
    setBalance(balance - input);
    console.log(`New Balance After Withdraw: ${balance}`);
  }

  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={"balance " + (balance==0 ? "zero": "")}>$ {balance}</div>
          <input type="number" placeholder="enter an amount" onChange={handleInput}/>
          <button onClick={handleDeposit}>Deposit</button>
      <button disabled={input > balance} onClick={handleWithdraw}>Withdraw</button>
        </div>
  )
}

export default Account;
