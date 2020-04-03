// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AidType} from '../app/interfaces/AidType';

export const environment = {
  production: false
};

const pathToIcons = '/assets/icon/';

export const aidTypeRecord: Record<AidType|number, {title: string, icon: string}> = {
    [AidType.IT]: {
        title: 'Demande informatique',
        icon: pathToIcons + 'pc.png'
    },
    [AidType.SHOPPING]: {
        title: 'Demande de courses',
        icon:  pathToIcons + 'shopping_cart.svg'
    },
    [AidType.ANIMALS] : {
        title: 'Demande pour animaux',
        icon: pathToIcons + 'pet.svg'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
