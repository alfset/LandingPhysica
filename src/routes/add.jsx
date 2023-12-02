import { useState } from 'react';
import { BiLeftArrowAlt } from '@react-icons/all-files/bi/BiLeftArrowAlt';
import { BsGearFill } from '@react-icons/all-files/bs/BsGearFill';
import { BsWallet } from '@react-icons/all-files/bs/BsWallet';
import Button from '../components/Button';
import IconButton from '../components/Button/IconButton';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import ListItem from '../components/ListItem';
import tokenList from '../constant/tokenList';

const disableClass = 'opacity-30 pointer-events-none select-none';
const disableTextClass = 'text-black dark:text-white';
const firstPairToken = 'first-pair-token';
const secondPairToken = 'second-pair-token';
const highlighToken = 'bg-blue-500 text-white';
const defaultSelectToken = 'Select a token';

function Page() {
  const [disabled] = useState(true);
  const [firstPair, setFirstPair] = useState(null);
  const [secondPair, setSecondPair] = useState(null);
  const navigate = useNavigate();
  const tokens = tokenList.map((x) => ({
    title: x.name,
    subtitle: x.ticker,
    imgUrl: x.img,
  }));

  const handleCoinSelection = (coin, id) => {
    if (id === firstPairToken) {
      setFirstPair(coin);
    } else if (id === secondPairToken) {
      setSecondPair(coin);
    }
  };

  return (
    <section>
      <Modal
        id={firstPairToken}
        title="Select a token"
        content={
          <ListItem
            items={tokens}
            onItemSelected={handleCoinSelection}
            id={firstPairToken}
          />
        }
      />
      <Modal
        id={secondPairToken}
        title="Select a token"
        content={
          <ListItem
            items={tokens}
            onItemSelected={handleCoinSelection}
            id={secondPairToken}
          />
        }
      />
      <main className="container w-auto max-w-2xl min-h-screen p-6 py-20 mx-auto bg-base-100">
        <div className="flex flex-col gap-6 px-4 py-6 mt-2 border rounded-xl border-black/30 dark:border-white/10">
          {/* App Bar */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1 float-left w-full">
              <IconButton
                icon={<BiLeftArrowAlt size={32} />}
                onClick={() => navigate('/liquidity')}
              />
            </div>
            <span className="flex-1 text-lg font-medium text-black dark:text-white">
              Add Liquidity
            </span>
            <div className="flex items-center gap-6">
              <a className="text-primary/80" href="#">
                clear all
              </a>
              <span>
                <BsGearFill size={18} />
              </span>
            </div>
          </div>
          <div className="p-0 m-0 divider divider-vertical" />
          {/* Select Pair */}
          <div>
            <div className="flex flex-col w-full gap-4 text-sm font-medium">
              <span className="text-lg text-black dark:text-white">
                Select pair
              </span>
              <div className="flex items-center w-full gap-2">
                <label
                  className={`${
                    !firstPair ? highlighToken : ''
                  } flex-col items-start flex-1 text-sm capitalize rounded-full btn select select-bordered focus:bg-base-300 ${
                    firstPair ? 'px-2' : ''
                  }`}
                  onClick={() =>
                    document.getElementById(firstPairToken).showModal()
                  }
                >
                  {firstPair ? (
                    <div className="flex items-center w-full gap-4 p-0 m-0 text-xl">
                      <img
                        src={firstPair.imgUrl}
                        className="w-8 h-full"
                        alt=""
                      />
                      <span className="h-full">{firstPair.subtitle}</span>
                    </div>
                  ) : (
                    <span className="flex items-center h-full text-lg">
                      {defaultSelectToken}
                    </span>
                  )}
                </label>
                <label
                  className={`${
                    !secondPair ? highlighToken : ''
                  } flex-col items-start flex-1 text-sm capitalize rounded-full btn select select-bordered focus:bg-base-300 ${
                    secondPair ? 'px-2' : ''
                  }`}
                  onClick={() =>
                    document.getElementById(secondPairToken).showModal()
                  }
                >
                  {secondPair ? (
                    <div className="flex items-center w-full gap-4 p-0 m-0 text-xl">
                      <img
                        src={secondPair.imgUrl}
                        className="w-8 h-full"
                        alt=""
                      />
                      <span className="h-full">{secondPair.subtitle}</span>
                    </div>
                  ) : (
                    <span className="flex items-center h-full text-lg">
                      {defaultSelectToken}
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>
          {/* Fee Tier */}
          <div
            disabled
            className={`flex flex-col items-center w-full gap-4 text-sm font-medium ${
              disabled ? disableClass : ''
            }`}
          >
            {/* Disable Fee Tier */}
            <div
              disabled
              className="flex justify-between w-full p-4 border rounded-xl border-black/30 dark:border-white/10"
            >
              <div className="flex flex-col gap-1 text-xs">
                <span className="text-lg font-bold">Fee Tier</span>
                <span>The % you will earn in fees</span>
              </div>
              <div className="capitalize border btn">Hide</div>
            </div>
            {/* Disabled Fee Tier List */}
            <div className="flex w-full gap-2">
              <div
                disabled
                className="flex border menu rounded-xl border-black/30 dark:border-white/10"
              >
                <btn className="flex flex-col gap-1 text-xs">
                  <span className="text-sm font-bold">0.01%</span>
                  <span>Best for very stable pairs</span>
                </btn>
              </div>
              <div
                disabled
                className="flex border menu rounded-xl border-black/30 dark:border-white/10"
              >
                <btn className="flex flex-col gap-1 text-xs">
                  <span className="text-sm font-bold">0.05%</span>
                  <span>Best for stable pairs</span>
                </btn>
              </div>
              <div
                disabled
                className="flex border menu rounded-xl border-black/30 dark:border-white/10"
              >
                <btn className="flex flex-col gap-1 text-xs">
                  <span className="text-sm font-bold">0.3%</span>
                  <span>Best for most pairs</span>
                </btn>
              </div>
              <div
                disabled
                className="flex border menu rounded-xl border-black/30 dark:border-white/10"
              >
                <btn className="flex flex-col gap-1 text-xs">
                  <span className="text-sm font-bold">1%</span>
                  <span>Best for exotic pairs</span>
                </btn>
              </div>
            </div>
          </div>
          {/* Price Range List */}
          <div
            disabled
            className={`flex flex-col items-center w-full gap-4 text-sm font-medium ${
              disabled ? disableClass : ''
            }`}
          >
            {/* Disabled Price Range */}
            <div className="flex flex-col w-full gap-4 text-sm font-medium">
              <span className="text-lg text-black dark:text-white">
                Set price range
              </span>
              {/* TODO: disabled price input range */}
            </div>
          </div>
          {/* Position List */}
          <div
            disabled
            className={`flex flex-col items-center w-full gap-4 text-sm font-medium ${
              disabled ? disableClass : ''
            }`}
          >
            {/* Disabled Position */}
            <div disabled className="flex flex-col items-center w-full gap-4">
              <BsWallet size={48} />
              <span className={`text-lg text-center ${disableTextClass}`}>
                Your positions will appear here.
              </span>
            </div>
          </div>
          <Button
            gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
            rounded="lg"
            other="w-full rounded-xl text-lg"
          >
            Connect Wallet
          </Button>
        </div>
      </main>
    </section>
  );
}

export default Page;
