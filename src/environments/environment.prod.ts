import {AidType} from '../app/interfaces/AidType';

export const environment = {
  production: true
};

export const aidTypeRecord: Record<AidType, {title: string, icon: string}> = {
  [AidType.IT]: {
    title: 'Demande de soutien informatique',
    icon: 'pc.png'
  },
  [AidType.SHOPPING]: {
    title: 'Demande de courses',
    icon: 'shopping_cart.svg'
  }
};
