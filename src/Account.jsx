function Account(props) {
  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className="balance">$0</div>
      <input type="text" placeholder="enter an amount" />
      <button>Deposit</button>
      <button>Withdraw</button>
    </div>
  )
}

export default Account;
