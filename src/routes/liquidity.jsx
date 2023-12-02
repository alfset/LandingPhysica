import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import cn from 'classnames';
import { BsPlus } from '@react-icons/all-files/bs/BsPlus';
import { BsChevronDown } from '@react-icons/all-files/bs/BsChevronDown';
import { BsChevronDoubleRight } from '@react-icons/all-files/bs/BsChevronDoubleRight';
import { BsBook } from '@react-icons/all-files/bs/BsBook';
import { BsWallet } from '@react-icons/all-files/bs/BsWallet';
import { ImStack } from '@react-icons/all-files/im/ImStack';
import { ImArrowUpRight2 } from '@react-icons/all-files/im/ImArrowUpRight2';
import Button from '../components/Button';

function Page() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside(dropdownRef, () => setOpen(false));

  //onclick handler when clicking a menu item
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <section>
      <main className="container w-auto max-w-4xl min-h-screen py-20 mx-auto bg-base-100">
        <div className="flex flex-col w-full gap-6">
          {/* Subheader */}
          <div className="flex items-center justify-between w-full">
            <span className="text-4xl font-medium text-black dark:text-white">
              Pools
            </span>
            <div className="flex items-center gap-4 w-fit">
              <div
                className={cn({
                  dropdown: true,
                  'dropdown-open': open,
                })}
                id="dropdown-liquidity"
                ref={dropdownRef}
              >
                <label
                  tabIndex={0}
                  className="capitalize border border-black/30 dark:border-white/10 btn btn-ghost"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  More <BsChevronDown />
                </label>
                <ul
                  tabIndex={0}
                  className={cn({
                    'dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52': true,
                    hidden: !open,
                  })}
                >
                  <li onClick={handleClick}>
                    <a className="flex items-center justify-between">
                      Migrate <BsChevronDoubleRight />
                    </a>
                  </li>
                  <li onClick={handleClick}>
                    <a className="flex items-center justify-between">
                      V2 Liquidity <ImStack />
                    </a>
                  </li>
                  <li onClick={handleClick}>
                    <a className="flex items-center justify-between">
                      Learn <BsBook />
                    </a>
                  </li>
                </ul>
              </div>
              <Button
                gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
                rounded="lg"
                url="/add"
              >
                <BsPlus size={20} /> New position
              </Button>
            </div>
          </div>
          {/* Main Content */}
          <div className="border rounded-xl border-black/30 dark:border-white/10">
            {/* v3 liquidity */}
            <div className="flex flex-col items-center w-full gap-10 p-8 pb-10">
              {/* v3 liquidity title */}
              <div className="flex flex-col items-center w-full gap-4 text-sm font-medium">
                <BsWallet size={48} />
                <span className="text-center text-black dark:text-white ">
                  Your active V3 liquidity positions will appear here.
                </span>
              </div>
              <Button
                gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
                rounded="lg"
                other="w-80 rounded-xl text-lg"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
          {/* Suggestions */}
          <ul className="w-full gap-2 menu menu-horizontal">
            <li className="flex-1 border rounded-lg border-black/30 dark:border-white/10">
              {/* Suggesstion Title */}
              <div className="flex flex-col justify-start w-full p-4 font-medium text-md text-black/80 dark:text-white/60 hover:text-black/60 hover:dark:text-white/40">
                <span className="flex flex-row items-baseline w-full gap-2">
                  Learn more about providing liquidity <ImArrowUpRight2 />
                </span>
                <span className="w-full">
                  Check out our v3 LP walkthrough and migration guides.
                </span>
              </div>
            </li>
            <li className="flex-1 border rounded-lg border-black/30 dark:border-white/10">
              {/* Suggesstion Title */}
              <div className="flex flex-col justify-start w-full p-4 font-medium text-md text-black/80 dark:text-white/60 hover:text-black/60 hover:dark:text-white/40">
                <span className="flex flex-row items-baseline w-full gap-2">
                  Top Pools <ImArrowUpRight2 />
                </span>
                <span className="w-full">Explore our analytics.</span>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}

export default Page;
