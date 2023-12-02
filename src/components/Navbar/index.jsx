import { useEffect, useState } from 'react';
import Nav from './Nav';
import Logo from '../Logo';
import Button from '../Button/index';
import MenuDrawer from '../Drawer';
import { FaRocket } from '@react-icons/all-files/fa/FaRocket';
import { FaTools } from '@react-icons/all-files/fa/FaTools';
import { FaSwimmingPool } from '@react-icons/all-files/fa/FaSwimmingPool';
import { FaWallet } from '@react-icons/all-files/fa/FaWallet';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaRegSun } from '@react-icons/all-files/fa/FaRegSun';
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? 'light' : localStorage.getItem('theme'),
  );

  const [scrolled, setScrolled] = useState(false);
  const dropdownNav = [
    {
      icon: <FaRocket className="text-blue-950 dark:text-neutral" />,
      children: 'Trade',
      href: 'https://app.physica.finance/#/swap',
      target: '',
    },
    {
      icon: <FaTools className="text-blue-950 dark:text-neutral" />,
      children: 'Bridge',
      href: 'https://test-token.factory.physica.finance',
      target: '_blank',
    },
    {
      icon: <FaSwimmingPool className="text-blue-950 dark:text-neutral" />,
      children: 'Pool',
      href: 'https://app.physica.finance/#/pools',
      target: '',
    },
    {
      icon: <FaWallet className="text-blue-950 dark:text-neutral" />,
      children: 'Staking',
      href: 'https://restake.app/planq',
      target: '_blank',
    },
  ];

  const icons = [
    {
      url: 'https://twitter.com/PlanqFoundation',
      faIcon: <FaTwitter size={24} />,
    },
    {
      url: 'https://discord.com/invite/planq-network',
      faIcon: <FaDiscord size={24} />,
    },
    {
      url: 'https://t.me/planqnetwork',
      faIcon: <FaTelegramPlane size={24} />,
    },
  ];

  let logoPath = theme === 'dark' ? './logo-white.svg' : './logo-dark.svg';

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);

    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  return (
    <div
      className={`navbar bg-white dark:bg-primary px-3 px-lg-10 items-center sticky top-0 z-50 ${
        scrolled ? 'shadow-lg shadow-blue-200 dark:shadow-accent' : ''
      }`}
    >
      {/* Logo */}
      <div className="w-full space-x-3 navbar-start">
        <div className="flex items-center lg:hidden">
          <MenuDrawer
            component={<Logo srcLogo={`${logoPath}`} color="blue" url="/" />}
            items={dropdownNav}
            modeButton={
              <li>
                <label className="flex items-start justify-between text-lg font-medium swap swap-rotate lg:hidden text-blue-950 dark:text-neutral">
                  Theme
                  <span className="flex flex-end">
                    <input
                      type="checkbox"
                      onChange={handleToggle}
                      className="hidden md:hidden lg:hidden"
                    />
                    <FaRegSun className="w-6 h-6 text-blue-950 dark:text-neutral swap-on" />
                    <FaMoon className="w-6 h-6 text-neutral dark:text-blue-950 swap-off" />
                  </span>
                </label>
              </li>
            }
            footer={
              <div className="space-y-6">
                <aside className="items-center grid-flow-col">
                  <p>
                    POWERED BY PLANQ® NETWORK <br />
                    <span className="text-sm text-blue-900/80 dark:text-gray-400">
                      Copyright ® 2023, Planq Dev B. V.
                    </span>
                  </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                  <div className="flex gap-4 flex-start">
                    {icons.map((icon, index) => (
                      <Link to={icon.url} key={index} target="_blank">
                        {icon.faIcon}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            }
          />
        </div>
        <Logo srcLogo={`${logoPath}`} color="blue" url="/" />
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>

      {/* Dropdown */}
      <div className="max-w-lg gap-4 navbar-end">
        <label className="hidden space-x-2 swap swap-rotate lg:flex">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="hidden md:hidden lg:hidden"
          />
          {/* sun icon */}
          <FaRegSun className="w-6 h-6 text-blue-950 dark:text-neutral swap-on" />

          {/* moon icon */}
          <FaMoon className="w-6 h-6 text-neutral dark:text-blue-950 swap-off" />
        </label>
        <Button
          url="https://app.physica.finance/#/swap"
          target=""
          other="text-white dark:text-neutral bg-blue-800 hover:bg-blue-500 dark:bg-accent dark:hover:bg-blue-500 btn-sm shadow-md shadow-blue-800 dark:shadow-accent px-5 border-0"
        >
          Launch App
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
