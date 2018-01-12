import { Collegue } from './collegue';

export class Vote {
  id: number;
  voteur: Collegue;
  voteFor: Collegue;
  action: string;
  date: Date;
}
