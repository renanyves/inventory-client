import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent, DialogData } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private categoryService: CategoryService,
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
    this.categoryService.findAll().subscribe((products: Category[]) => {
      console.log(products);
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  detail(id: number) {
    this.router.navigate(['category', id]);
  }

  delete(id: number) {
    const data = new DialogData();
    data.title = 'Confirmar exclusão';
    data.text = 'Tem certeza que quer excluir a categoria?';

    const dialogoConfirmacao = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data
    });

    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.categoryService.delete(id).subscribe(() => {
          this.refreshTableData();
          this.messageService.open('Categoria excluída com sucesso');
        },
          err => {
            console.log(err);
            this.messageService.open('Um erro inesperado ocorreu.');
          });
      }
    });
  }
}
