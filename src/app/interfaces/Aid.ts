
// Liste des aids : aids
// Liste de tous les utilisateurs: users
// Utilisateur connecté: userConnected
import { Status } from './Status';
import { User } from './User';
import { AidType } from './AidType';
import { GeoPosition } from './GeoPosition';

export interface Aid {
    id: number;
    text: string;
    seniorUser: User;
    aidUser?: User;
    location: GeoPosition;
    status: Status;
    aidType: AidType;
    photo?: number;
}
