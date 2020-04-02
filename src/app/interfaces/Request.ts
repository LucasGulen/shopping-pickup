import {Status} from './Status';

export interface Request {
    photoUrl: string;
    description: string;
    titre: string;
    status: Status;
}
