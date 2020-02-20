import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBar: MatSnackBar,
  ) {

  }

  public dismiss(): void {
    this.snackBar.dismiss();
  }

  public open(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {duration: 10000});
  }

}
