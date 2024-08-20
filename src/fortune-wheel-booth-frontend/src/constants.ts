import { WheelDataType } from 'react-custom-roulette';

import Astronaut from './assets/images/astronaut-loader.png';
import ckBtc from './assets/images/ckbtc.png';
import ckEth from './assets/images/cketh.png';
import ckUsdc from './assets/images/ckusdc.svg';
import IcpLogoLight from './assets/images/icp-logo-light.png';
import jackpot from './assets/images/jackpot.svg';
import jackpotModal from './assets/images/jackpot-modal.png';
import superJackpot from './assets/images/super-jackpot.svg';
import superJackpotModal from './assets/images/super-jackpot-modal.png';
import merchFan from './assets/images/icp-fan.png';
import merchBaliHat from './assets/images/icp-bali-hat.png';
import merchHat from './assets/images/icp-hat.png';
import merchTowel from './assets/images/icp-towel.png';

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
    option: 'merch.fan',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#522785' },
    modalImageUri: merchFan,
  },
  {
    option: 'ckUsdc',
    image: { uri: ckUsdc, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#ED1E79' },
  },
  {
    option: 'special.superJackpot',
    image: { uri: superJackpot, sizeMultiplier: 1.3, offsetY: 140 },
    style: { backgroundColor: '#F15A24' },
    modalImageUri: superJackpotModal,
  },
  {
    option: 'icp',
    image: { uri: IcpLogoLight, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#FBB03B' },
  },
  {
    option: 'merch.baliHat',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#29ABE2' },
    modalImageUri: merchBaliHat,
  },
  {
    option: 'ckBtc',
    image: { uri: ckBtc, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#522785' },
  },
  {
    option: 'merch.towel',
    image: { uri: Astronaut, sizeMultiplier: 0.7, offsetY: 220 },
    style: { backgroundColor: '#ED1E79' },
    modalImageUri: merchTowel,
  },
  {
    option: 'special.jackpot',
    image: { uri: jackpot, sizeMultiplier: 1.3, offsetY: 140 },
    style: { backgroundColor: '#F15A24' },
    modalImageUri: jackpotModal,
  },
  {
    option: 'merch.hat',
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
  'merch.baliHat': null,
  'merch.fan': null,
  'merch.towel': null,
  'merch.hat': null,
  'special.jackpot': null,
  'special.superJackpot': null,
};
