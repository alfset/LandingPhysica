export const networks = [5,1337,700707]

export const ChainId = {
  GÖRLI: 5,
  GANCHE: 1337,
  PLANQTEST: 700707 
};

export const routerAddress = new Map();
routerAddress.set(ChainId.GÖRLI, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
routerAddress.set(ChainId.GANCHE, "0x0F44AC51198D8F99847db6C431448dBC673428f1");
routerAddress.set(ChainId.PLANQTEST, "0x000000000000000000000000000000000000");
