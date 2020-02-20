import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';
import { ConfirmationDialogComponent, DialogData } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export enum Action {
  CREATE = 'Cadastrar', SAVE = 'Salvar', VIEW = 'Ver detalhe'
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  allCategories: Category[];
  action = Action.CREATE;
  readonly Actions = Action;
  productBarcode: string;

  productForm = new FormGroup(
    {
      barcode: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(25)
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(100)
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(300)
      ])),
      quantity: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(0)
      ])),
      category: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });

  validationMessages = {
    barcode: [
      { type: 'required', message: 'É necessário preencher o código de barras' },
      { type: 'pattern', message: 'Este campo aceita apenas números' },
      { type: 'maxlength', message: 'O código de barras não pode passar de 25 characters' },
    ],
    name: [
      { type: 'required', message: 'É necessário preencher o nome do produto' },
      { type: 'maxlength', message: 'O nome do produto está longo demais. Utilize o campo descrição.' },
    ],
    description: [
      { type: 'required', message: 'É necessário preencher a descrição do produto' },
      { type: 'maxlength', message: 'A descrição não pode passar de 300 characteres.' }
    ],
    quantity: [
      { type: 'required', message: 'É necessário preencher a quantidade' },
      { type: 'pattern', message: 'Este campo aceita apenas números' },
      { type: 'min', message: 'A quantidade deve ser um valor maior ou igual a 0' },
    ],
    category: [
      { type: 'required', message: 'É necessário preencher a categoria' }
    ]
  };

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(categories => {
      console.log(categories);
      this.allCategories = categories;
    });
    this.productBarcode = this.route.snapshot.paramMap.get('id');
    if (this.productBarcode) {
      if (this.route.snapshot.data.action && this.route.snapshot.data.action === 'view') {
        this.action = Action.VIEW;
      } else {
        this.action = Action.SAVE;
      }
      this.productService.findById(this.productBarcode).subscribe(product => {
        console.log(product);
        this.productForm.get('barcode').setValue(product.barcode);
        this.productForm.get('barcode').disable();
        this.productForm.get('name').setValue(product.name);
        this.productForm.get('description').setValue(product.description);
        this.productForm.get('quantity').setValue(product.quantity);
        this.productForm.get('category').setValue(product.category.id);
        if (this.action === Action.VIEW) {
          this.productForm.get('barcode').disable();
          this.productForm.get('name').disable();
          this.productForm.get('description').disable();
          this.productForm.get('quantity').disable();
          this.productForm.get('category').disable();

        }
      });
    }
  }

  save(product) {
    let $save;
    if (this.action === Action.CREATE) {
      $save = this.productService.create(product).pipe(tap(() => {
        this.messageService.open('O produto foi cadastrado com sucesso');
      }));
    } else {
      product.barcode = this.productBarcode;
      $save = this.productService.save(product).pipe(tap(() => {
        this.messageService.open('O produto foi salvo com sucesso');
      }));
    }

    $save.subscribe(() => {
      this.router.navigate(['product']);
    }, error => {
      console.log(error);
      if (error.status === 303) {
        this.messageService.open(`O código de barras ${product.barcode} já está cadastrado.`);
      } else {
        this.messageService.open('Um erro inesperado ocorreu');
      }
    });
  }

  cancel() {
    this.router.navigate(['product']);
  }

  delete() {
    const data = new DialogData();
    data.title = 'Confirmar exclusão';
    data.text = `Tem certeza que quer excluir o produto de código "${this.productBarcode}"?`;

    const dialogoConfirmacao = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data
    });

    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.productService.delete(this.productBarcode).subscribe(() => {
          this.messageService.open('Produto excluído com sucesso');
          this.router.navigate(['product']);
        },
          error => {
            console.log(error);
            this.messageService.open('Um erro inesperado ocorreu.');
          });
      }
    });
  }

}
