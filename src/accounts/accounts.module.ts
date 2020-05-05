import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialDesignModule} from "../material-design/material-design.module";

import {AccountsRoutingModule} from './accounts-routing.module';
import {AccountsListComponent} from './components/accounts-list/accounts-list.component';

@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    MaterialDesignModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule {
}
