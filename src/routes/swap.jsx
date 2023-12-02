import { useState } from 'react';
import { BsGear } from '@react-icons/all-files/bs/BsGear';
import { BsArrowUpDown } from '@react-icons/all-files/bs/BsArrowUpDown';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
import { BsQuestionCircle } from '@react-icons/all-files/bs/BsQuestionCircle';
import InputGroup from '../components/Form/InputGroup';
import IconButton from '../components/Button/IconButton';
import Button from '../components/Button/index';
import tokenList from '../constant/tokenList';
import Modal from '../components/Modal';
import ListItem from '../components/ListItem';
import CurrencyFormat from '../components/CurrencyFormat';
import Collapse from '../components/Collapse';
import CustomDropdown from '../components/Dropdown/CustomDropdown';
import { Link } from 'react-router-dom';

const paySwap = 'pay-swap';
const recieveSwap = 'recieve-swap';

function Page() {
  const [swapPay, setSwapPay] = useState(true);
  const [swapReceive, setSwapReceive] = useState(true);

  const [selectedPaySwap, setSelectedPaySwap] = useState(null);
  const [selectedReceiveSwap, setSelectedReceiveSwap] = useState(null);
  const [payValue, setPayValue] = useState('');
  const [recieveValue, setReceiveValue] = useState('');

  const handleCoinSelection = (coin, id) => {
    if (id === paySwap) {
      setSelectedPaySwap(coin);
    } else if (id === recieveSwap) {
      setSelectedReceiveSwap(coin);
    }
  };

  const payKeyUp = (event) => {
    setPayValue(event.target.value);
  };

  const receiveKeyUp = (event) => {
    setReceiveValue(event.target.value);
  };

  const tokens = tokenList.map((x) => ({
    title: x.name,
    subtitle: x.ticker,
    imgUrl: x.img,
  }));

  return (
    <section>
      <main className="container mx-auto min-h-screen w-auto max-w-lg py-10 bg-base-100">
        <div className="w-full shadow-2xl shadow-blue-500 rounded-xl py-2">
          <div className="px-2 self-start">
            <div className="flex justify-between items-center">
              <div className="grid grid-cols-2 gap-3 ml-3">
                <div>
                  <p className="text-lg font-semibold">Swap</p>
                </div>
              </div>
              <div>
                <CustomDropdown
                  padding="p-1"
                  position="dropdown-end"
                  icon={<BsGear />}
                  width="w-96 shadow-base-content"
                  component={
                    <div className="max-w-sm">
                      <div className="flex items-center space-x-3 px-3 py-3">
                        <img src="./logo-planq.png" className="w-10" alt="" />
                        <p className="font-medium text-lg">PlanQ Network</p>
                      </div>
                      <div className="flex items-center justify-between space-x-3 px-3">
                        <p className="font-medium text-sm">
                          When available, aggregates liquidity sources for
                          better prices and gas free swaps.
                          <Link to={'/'} className="ps-1 text-sm text-blue-700">
                            Learn More
                          </Link>
                        </p>
                        <input
                          type="checkbox"
                          className="toggle toggle-lg px-3"
                        />
                      </div>
                      <details className="collapse collapse-arrow border-t-2 border-base-300 my-3">
                        <summary className="collapse-title min-h-fit font-medium">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center">
                              <p className="flex items-center text-sm">
                                Max. slippage
                                <BsQuestionCircle className="ms-2" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm flex gap-1 justify-center items-center">
                                Auto
                              </p>
                            </div>
                          </div>
                        </summary>
                        <div className="collapse-content">
                          <div className="flex items-center justify-between gap-2">
                            <div className="join">
                              <input
                                className="join-item btn btn-sm capitalize"
                                type="radio"
                                name="options"
                                aria-label="Auto"
                              />
                              <input
                                className="join-item btn btn-sm capitalize"
                                type="radio"
                                name="options"
                                aria-label="Custom"
                              />
                            </div>
                            <div>
                              <div className="relative rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pe-3">
                                  <span className="text-white sm:text-sm">
                                    %
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="price"
                                  id="price"
                                  className="input input-sm input-bordered"
                                  placeholder="0.5"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                      <details className="collapse collapse-arrow border-t-2 border-base-300 my-3">
                        <summary className="collapse-title font-medium min-h-fit">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-center">
                              <p className="flex items-center text-sm">
                                Transaction deadline
                                <BsQuestionCircle className="ms-2" />
                              </p>
                            </div>
                            <div>
                              <p
                                className="text-sm flex gap-1 justify-center items-center"
                                id="deadline"
                              >
                                10m
                              </p>
                            </div>
                          </div>
                        </summary>
                        <div className="collapse-content">
                          <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pe-3">
                              <span className="text-white sm:text-sm">
                                minutes
                              </span>
                            </div>
                            <input
                              type="text"
                              name="price"
                              id="price"
                              className="input input-sm input-bordered w-full"
                              placeholder="10"
                            />
                          </div>
                        </div>
                      </details>
                    </div>
                  }
                />
              </div>
            </div>
            <div className="space-y-0">
              <InputGroup
                label="Your Pay"
                component={
                  swapPay ? (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                          <input
                            type="text"
                            placeholder="0"
                            onKeyUp={payKeyUp}
                            className="input w-full rouded-lg bg-base-200 px-2"
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <label
                            className={`flex-col items-start flex-1 btn select select-bordered rounded-full capitalize text-sm ${
                              selectedPaySwap ? 'px-2' : ''
                            }`}
                            onClick={() =>
                              document.getElementById(paySwap).showModal()
                            }
                          >
                            {selectedPaySwap ? (
                              <img
                                src={selectedPaySwap.imgUrl}
                                className="w-8"
                                alt=""
                              />
                            ) : (
                              ''
                            )}
                            {selectedPaySwap
                              ? selectedPaySwap.subtitle
                              : 'Select token'}
                          </label>
                        </div>
                      </div>
                      <label className="label px-2">
                        <span
                          className="label-text text-xs text-gray-500"
                          id=""
                        >
                          {payValue !== '' ? (
                            <CurrencyFormat amount={payValue} />
                          ) : (
                            ''
                          )}
                        </span>
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                          <input
                            type="text"
                            placeholder="0"
                            onKeyUp={receiveKeyUp}
                            className="input w-full rouded-lg bg-base-200 px-2"
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <label
                            className={`flex-col items-start flex-1 btn select select-bordered rounded-full capitalize text-sm ${
                              selectedReceiveSwap ? 'px-2' : ''
                            }`}
                            onClick={() =>
                              document.getElementById(recieveSwap).showModal()
                            }
                          >
                            {selectedReceiveSwap ? (
                              <img
                                src={selectedReceiveSwap.imgUrl}
                                className="w-8"
                                alt=""
                              />
                            ) : (
                              ''
                            )}
                            {selectedReceiveSwap
                              ? selectedReceiveSwap.subtitle
                              : 'Select token'}
                          </label>
                        </div>
                      </div>
                      <label className="label px-2">
                        <span
                          className="label-text text-xs text-gray-500"
                          id=""
                        >
                          {recieveValue !== '' ? (
                            <CurrencyFormat amount={recieveValue} />
                          ) : (
                            ''
                          )}
                        </span>
                      </label>
                    </>
                  )
                }
              />
              <div className="divider bg-base-100">
                <IconButton
                  icon={<BsArrowUpDown />}
                  bgColor="base-200"
                  padding="p-3"
                  onClick={() => {
                    setSwapPay(!swapPay);
                    setSwapReceive(!swapReceive);
                  }}
                  iconColor="white"
                  gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
                />
              </div>
              <InputGroup
                label="Your Receive"
                component={
                  swapReceive ? (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                          <input
                            type="text"
                            placeholder="0"
                            onKeyUp={receiveKeyUp}
                            className="input w-full rouded-lg bg-base-200 px-2"
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <label
                            className={`flex-col items-start flex-1 btn select select-bordered rounded-full capitalize text-sm ${
                              selectedReceiveSwap ? 'px-2' : ''
                            }`}
                            onClick={() =>
                              document.getElementById(recieveSwap).showModal()
                            }
                          >
                            {selectedReceiveSwap ? (
                              <img
                                src={selectedReceiveSwap.imgUrl}
                                className="w-8"
                                alt=""
                              />
                            ) : (
                              ''
                            )}
                            {selectedReceiveSwap
                              ? selectedReceiveSwap.subtitle
                              : 'Select token'}
                          </label>
                        </div>
                      </div>
                      <label className="label px-2">
                        <span
                          className="label-text text-xs text-gray-500"
                          id=""
                        >
                          {recieveValue !== '' ? (
                            <CurrencyFormat amount={recieveValue} />
                          ) : (
                            ''
                          )}
                        </span>
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-2">
                          <input
                            type="text"
                            placeholder="0"
                            onKeyUp={payKeyUp}
                            className="input w-full rouded-lg bg-base-200 px-2"
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <label
                            className={`flex-col items-start flex-1 btn select select-bordered rounded-full capitalize text-sm ${
                              selectedPaySwap ? 'px-2' : ''
                            }`}
                            onClick={() =>
                              document.getElementById(paySwap).showModal()
                            }
                          >
                            {selectedPaySwap ? (
                              <img
                                src={selectedPaySwap.imgUrl}
                                className="w-8"
                                alt=""
                              />
                            ) : (
                              ''
                            )}
                            {selectedPaySwap
                              ? selectedPaySwap.subtitle
                              : 'Select token'}
                          </label>
                        </div>
                      </div>
                      <label className="label px-2">
                        <span
                          className="label-text text-xs text-gray-500"
                          id=""
                        >
                          {payValue !== '' ? (
                            <CurrencyFormat amount={payValue} />
                          ) : (
                            ''
                          )}
                        </span>
                      </label>
                    </>
                  )
                }
              />
            </div>
            <div className="py-2">
              <Collapse
                border="border rounded-lg border-black/30 dark:border-white/10"
                header={
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-md flex items-center">
                        1 AAVE = 00.01 WETH
                        <CurrencyFormat
                          classes="text-primary-content text-xs mx-2"
                          amount={1.6409}
                        />
                      </p>
                    </div>
                    <div>
                      <p className="text-xs flex gap-1 justify-center items-center">
                        <FaFileAlt />
                        <CurrencyFormat amount={1.69} />
                      </p>
                    </div>
                  </div>
                }
                content={
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="text-sm flex items-center">
                          Price impact
                        </p>
                      </div>
                      <div>
                        <p className="text-xs flex gap-1 justify-center items-center">
                          0.826%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="text-sm flex items-center">
                          Max. slippage
                        </p>
                      </div>
                      <div>
                        <p className="text-xs flex gap-1 justify-center items-center">
                          0.608%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="text-sm flex items-center">
                          Network cost
                        </p>
                      </div>
                      <div>
                        <p className="text-xs flex gap-2 justify-center items-center">
                          <img
                            src="https://www.nicepng.com/png/full/152-1525748_ethereum-logo-png.png"
                            className="w-2"
                            alt=""
                          />
                          <CurrencyFormat amount={1.77} />
                        </p>
                      </div>
                    </div>
                  </div>
                }
                footer={
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm flex items-center">Order routing</p>
                    </div>
                    <div>
                      <p className="text-xs flex gap-1 justify-center items-center">
                        PlanQ Client
                      </p>
                    </div>
                  </div>
                }
              />
            </div>
            <div className="grid px-4 h-12 card bg-base-300 border rounded-lg border-red-200 dark:border-red-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-sm flex items-center text-red-400">
                    Price Impact Warning
                  </p>
                </div>
                <div>
                  <p className="text-xs flex gap-1 justify-center items-center text-red-400">
                    -48.430%
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2">
              <Button
                gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-500/50"
                rounded="lg"
                other="w-full"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Modal
        id={paySwap}
        title="Select a token"
        content={
          <ListItem
            items={tokens}
            onItemSelected={handleCoinSelection}
            id={paySwap}
          />
        }
      />
      <Modal
        id={recieveSwap}
        title="Select a token"
        content={
          <ListItem
            items={tokens}
            onItemSelected={handleCoinSelection}
            id={recieveSwap}
          />
        }
      />
    </section>
  );
}

export default Page;
