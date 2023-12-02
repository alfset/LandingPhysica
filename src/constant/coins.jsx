import React from 'react';

const GANACHECoins = [
  {
    name: 'Ether',
    abbr: 'ETH',
    address: '', // Weth address is fetched from the router
  },
  {
    name: 'Token A',
    abbr: 'TA',
    address: '0xE8C4BE1Bd495c984dD83B683966B7B538d3Ea82C',
  },
  {
    name: 'Token B',
    abbr: 'TB',
    address: '0x30988e63329713c3f3FeA1ca1B94D4Abb02F78C5',
  },

  {
    name: 'Token C',
    abbr: 'TC',
    address: '0x23b4ce07ef4e2378319E40CbC0cc95EAbCf8E419',
  },
  {
    name: 'Token D',
    abbr: 'TD',
    address: '0x49Ec3915F4daB907f7C6F74Cf5110366FCCc81A5',
  },
];

const GÖRLICoins = [
  {
    name: 'Ether',
    abbr: 'ETH',
    address: '', // Weth address is fetched from the router
  },
  {
    name: 'Dai',
    abbr: 'DAI',
    address: '0x73967c6a0904aa032c103b4104747e88c566b1a2',
  },
  {
    name: 'Tether USD',
    abbr: 'USDT',
    address: '0x509ee0d083ddf8ac028f2a56731412edd63223b9',
  },
];

const PlanqTestCoins = [
  {
    name: 'WPLANQ',
    abbr: 'PLANQ',
    address: '0x0909000990009000000900000000000000090909', // Weth address is fetched from the router
  },
  {
    name: 'Dai',
    abbr: 'DAI',
    address: '0x73967c6a0904aa032c103b4104747e88c566b1a2',
  },
  {
    name: 'Tether USD',
    abbr: 'USDT',
    address: '0x509ee0d083ddf8ac028f2a56731412edd63223b9',
  },
];
const COINS = new Map();
COINS.set(chains.ChainId.GÖRLI, GÖRLICoins);
COINS.set(chains.ChainId.GANCHE, GANACHECoins);
export default { GANACHECoins, GÖRLICoins, PlanqTestCoins, COINS };
