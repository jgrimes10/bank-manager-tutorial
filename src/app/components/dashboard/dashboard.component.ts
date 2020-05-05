import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

import {Transaction} from "../../models/transaction.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  constructor() {
  }

  private _lastTransaction: Transaction = null;

  get lastTransaction(): Transaction {
    return this._lastTransaction;
  }

  @Input() set lastTransaction(txn: Transaction) {
    if (txn != null && (this._lastTransaction == null || this._lastTransaction.id !== txn.id)) {
      this._lastTransaction = txn;
    }
  }

  ngOnInit(): void {
  }

}
