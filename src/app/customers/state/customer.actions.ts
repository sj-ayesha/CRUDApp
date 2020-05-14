import { Action } from '@ngrx/store';

import { Customer } from '../customer.model';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMERS_FAILURE = '[Customer] Load Customers Failure'
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]){}
}

export class LoadCustomersFailure implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAILURE;

  constructor(public payload: string) {}
}

export type CustomerAction = LoadCustomers | LoadCustomersSuccess | LoadCustomersFailure;
