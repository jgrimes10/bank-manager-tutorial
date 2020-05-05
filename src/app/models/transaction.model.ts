export interface Transaction {
  id: number,
  transactionDate: Date;
  title: String;
  amount: Number;
  transactionType: 'DEBIT' | 'CREDIT';
  paymentType: 'CASH' | 'CHECK' | 'DEBIT' | 'CREDIT' | 'WIRE';
}
