import { Observable } from 'rxjs';

export interface IGrcpUserInterface {
    findById(userId: IUserId): Observable<any>;
}

interface IUserId {
    userId: string;
}
