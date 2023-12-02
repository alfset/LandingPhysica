import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const NavItem = (props) => {
  const {
    children = 'Home',
    target,
    url = 'https://comunity-node.gitbook.io/planq-network-dapps-team/building-overview/dex-service/liquidity-pools-and-swap-function',
    textColor = 'text-black dark:text-white',
  } = props;

  return (
    <li className="py-1" tabIndex={0}>
      <Link to={url} target={target} className={`${textColor}`}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
