import { WheelDataType } from 'react-custom-roulette';

import Astronaut from './assets/images/astronaut-loader.png';
import ckBtc from './assets/images/ckbtc.png';
import ckEth from './assets/images/cketh.png';
import ckUsdc from './assets/images/ckusdc.svg';
import IcpLogoLight from './assets/images/icp-logo-light.png';
import tryAgain from './assets/images/try-again.svg';
import merchHat from './assets/images/icp-hat.png';
import merchSocks from './assets/images/icp-socks.png';

type CustomWheelDataType = WheelDataType & {
  option: string;
  modalImageUri?: string;
  hideModalImage?: boolean;
};

export const PRIZES: CustomWheelDataType[] = [
  {
    option: 'ckEth',
    image: { uri: ckEth, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#29ABE2' },
  },
  {
    option: 'merch.Socks',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#522785' },
    modalImageUri: merchSocks,
  },
  {
    option: 'ckUsdc',
    image: { uri: ckUsdc, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#ED1E79' },
  },
  {
    option: 'noPrize',
    image: { uri: tryAgain, sizeMultiplier: 1.3, offsetY: 140 },
    style: { backgroundColor: '#F15A24' },
  },
  {
    option: 'icp',
    image: { uri: IcpLogoLight, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#FBB03B' },
  },
  {
    option: 'merch.Hat',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#29ABE2' },
    modalImageUri: merchHat,
  },
  {
    option: 'ckBtc',
    image: { uri: ckBtc, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#522785' },
  },
  {
    option: 'merch.Socks',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#ED1E79' },
    modalImageUri: merchSocks,
  },
  {
    option: 'noPrize',
    image: { uri: tryAgain, sizeMultiplier: 1.3, offsetY: 140 },
    style: { backgroundColor: '#F15A24' },
  },
  {
    option: 'merch.Hat',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#FBB03B' },
    modalImageUri: merchHat,
  },
];

export const PRIZES_VALUES_MAPPING: Record<string, string | null> = {
  ckEth: '$5 in ckETH',
  icp: '$5 in ICP',
  ckBtc: '$5 in ckBTC',
  ckUsdc: '5 ckUSDC',
  'merch.Hat': 'ICP Hat',
  'merch.Socks': 'ICP Socks',
  noPrize: 'TRY AGAIN',
};
