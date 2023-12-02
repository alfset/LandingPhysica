/* eslint-disable react/prop-types */
function CurrencyFormat({ amount, classes }) {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

  return <span className={`${classes}`}>{formattedAmount}</span>;
}

export default CurrencyFormat;
