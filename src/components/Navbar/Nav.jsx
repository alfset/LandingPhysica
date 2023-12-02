/* eslint-disable react/no-children-prop */
import NavItem from './NavItem';
import DropdownMenu from '../Dropdown';
import { FaSwimmingPool } from '@react-icons/all-files/fa/FaSwimmingPool';
import { FaWallet } from '@react-icons/all-files/fa/FaWallet';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const dropdownItems = [
    {
      icon: <FaSwimmingPool />,
      text: 'Pool',
      url: 'https://app.physica.finance/#/pools',
      target: '',
    },
    {
      icon: <FaWallet />,
      text: 'Staking',
      url: 'https://restake.app/planq',
      target: '_blank',
    },
  ];
  const location = useLocation();
  // Access the current path from the location object
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <ul className={`menu menu-horizontal gap-2`}>
      <NavItem
        url="https://app.physica.finance/#/swap"
        textColor="text-neutral"
      >
        Trade
      </NavItem>
      <NavItem
        url="https://test-token.factory.physica.finance"
        target="_blank"
        textColor="text-neutral"
      >
        Bridge
      </NavItem>
      <DropdownMenu children="Earn" width="w-52" items={dropdownItems} />
      {/* <NavItem
        url="https://test-token.factory.physica.finance"
        target="_blank"
        textColor="text-neutral"
      >
        NFTs
      </NavItem> */}
    </ul>
  );
};

export default Nav;
