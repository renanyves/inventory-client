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
    router: Router
  ) {
    // Limpa a mensagem da tela toda vez que uma navegação for iniciada
    router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.snackBar.dismiss();
    });
  }

  public dismiss(): void {
    this.snackBar.dismiss();
  }

  public open(msg: string): void {
    this.snackBar.open(msg, 'Fechar');
  }

}
