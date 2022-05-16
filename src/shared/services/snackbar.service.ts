import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    public _snackBar: MatSnackBar,
  ) { }

 public open(message, action = 'success', duration = 5000) {
        this._snackBar.open(message, action, { duration });

}
public error(message: string, duration = 5000) {
  return this._snackBar.open(message, undefined, {panelClass: ['snackbar-error'], duration});
}

public success(message: string, duration = 5000) {
  return this._snackBar.open(message, undefined, {panelClass: ['snackbar-success'], duration});
}

public info(message: string, duration = 5000) {
  return this._snackBar.open(message, undefined, {panelClass: ['snackbar-info'], duration});
}
}
