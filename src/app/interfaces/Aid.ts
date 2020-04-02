
// Liste des aids : aids
// Liste de tous les utilisateurs: users
// Utilisateur connecté: userConnected
import {Status} from './Status';
import {User} from './User';

export interface Aid {
    id: number;
    text: string;
    seniorUser: User;
    aidUser: User;
    location: string;
    status: Status;
}
