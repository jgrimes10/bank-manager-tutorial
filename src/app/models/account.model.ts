import {Transaction} from "./transaction.model";

export interface Account {
  id: number;
  title: string;
  accountType: 'CHECKING' | 'SAVINGS' | 'CREDIT CARD' | 'LOAN' | 'MISC';
  openedDate: Date;
  transactions: Transaction[];
  currentBalance: number;
  active: boolean;
}
