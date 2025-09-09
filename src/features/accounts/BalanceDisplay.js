import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const currentBalance = useSelector((store) => store.account.balance);

  return <div className="balance">{formatCurrency(currentBalance)}</div>;
}

export default BalanceDisplay;
