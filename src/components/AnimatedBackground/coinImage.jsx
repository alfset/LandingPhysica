import '../../index.css'; // Import your CSS file

const CoinAnimation = () => {
  const imageUrls = [
    './coin/bitcoin.svg',
    './coin/cosmos.svg',
    './coin/eth.svg',
    './coin/maker.svg',
    './coin/usdc.svg',
    './coin/usdt.svg',
    './coin/planq.svg',
    './coin/delta-swap.svg',
    './coin/physica.svg',
  ];
  return (
    <ul className="coins">
      {imageUrls.map((imageUrl, index) => (
        <li
          key={index}
          className="absolute list-none"
          style={{
            left: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${index * 5 + 10}s`,
          }}
        >
          <div
            className="w-20 h-20 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </li>
      ))}
    </ul>
  );
};

export default CoinAnimation;
