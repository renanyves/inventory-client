import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent, DialogData } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { Product } from 'src/app/model/product';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  displayedColumns: string[] = ['barcode', 'name', 'quantity', 'category', 'actions'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.refreshTableData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private refreshTableData() {
    this.productService.findAll().subscribe((products: Product[]) => {
      console.log(products);
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  detail(row) {
    this.router.navigate(['product', row.barcode]);
  }

  delete(barcode: string) {
    const data = new DialogData();
    data.title = 'Confirmar exclusão';
    data.text = 'Tem certeza de que quer excluir?';

    const dialogoConfirmacao = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data
    });

    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.productService.delete(barcode).subscribe(() => {
          this.refreshTableData();
          this.messageService.open('Produto excluído com sucesso');
        },
          err => {
            console.log(err);
            this.messageService.open('Um erro inesperado ocorreu.');
          });
      }
    });
  }

  view(row) {
    this.router.navigate(['view', 'product', row.barcode]);
  }

}
