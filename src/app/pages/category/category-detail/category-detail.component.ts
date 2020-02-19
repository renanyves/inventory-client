import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ConfirmationDialogComponent, DialogData } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';
import { Action } from '../../product/product-detail/product-detail.component';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  action = Action.CREATE;
  public idCategory: number;

  categoryForm = new FormGroup(
    {
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(300)
      ])),
    });

  validationMessages = {
    name: [
      { type: 'required', message: 'É necessário preencher o nome da categoria' },
      { type: 'maxlength', message: 'O nome da categoria está longo demais. Utilize o campo descrição.' },
    ],
    description: [
      { type: 'required', message: 'É necessário preencher a descrição da categoria' },
      { type: 'maxlength', message: 'A descrição não pode passar de 300 characteres.' }
    ],
  };

  constructor(
    private categoryService: CategoryService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    const idCategory = this.route.snapshot.paramMap.get('id');
    if (idCategory) {
      this.idCategory = +idCategory;
      this.action = Action.SAVE;
      this.categoryService.findById(this.idCategory).subscribe(product => {
        console.log(product);
        this.categoryForm.get('id').setValue(product.id);
        this.categoryForm.get('name').setValue(product.name);
        this.categoryForm.get('description').setValue(product.description);
      });
    }
  }

  save(product) {
    let $save;
    if (this.action === Action.CREATE) {
      $save = this.categoryService.create(product).pipe(tap(() => {
        this.messageService.open('A categoria foi cadastrada com sucesso');
      }));
    } else {
      $save = this.categoryService.save(product).pipe(tap(() => {
        this.messageService.open('A categoria foi salva com sucesso');
      }));
    }

    $save.subscribe(() => {
      this.router.navigate(['category']);
    }, error => {
      console.log(error);
      this.messageService.open('Um erro inesperado ocorreu');
    });
  }

  cancel() {
    this.router.navigate(['category']);
  }

  delete() {
    const data = new DialogData();
    data.title = 'Confirmar exclusão';
    data.text = `Tem certeza que quer excluir a categoria de código "${this.idCategory}"?`;

    const dialogoConfirmacao = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data
    });

    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.categoryService.delete(this.idCategory).subscribe(() => {
          this.messageService.open('Categoria excluída com sucesso');
          this.router.navigate(['category']);
        },
          err => {
            console.log(err);
            this.messageService.open('Um erro inesperado ocorreu.');
          });
      }
    });
  }

}
