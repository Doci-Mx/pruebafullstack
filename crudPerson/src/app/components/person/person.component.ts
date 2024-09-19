import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; 
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatButtonModule } from '@angular/material/button'; 
import { Person } from '../../models/person';
import { ApiPersonService } from '../../services/api-person.service';
import Swal from 'sweetalert2';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule], 
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [ApiPersonService]
})
export class PersonComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'puesto', 'sueldo', 'acciones'];
  dataSource = new MatTableDataSource<Person>(); 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  pageIndex = 0;
  pageSize = 5;

  constructor(private apiPersonService: ApiPersonService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons() {
    this.apiPersonService.getAllPersons().subscribe(({data}: any) => {
      this.dataSource.data = data as Person[]; 
      this.dataSource.paginator = this.paginator;
    });
  }

  deletePerson(person: Person) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar a ${person.nombre} ${person.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiPersonService.deletePerson(person.id).subscribe({
          next: () => {
            Swal.fire(
              'Eliminado!',
              'La persona ha sido eliminada.',
              'success'
            );
            this.loadPersons(); 
          },
          error: (error) => {
            Swal.fire(
              'Error!',
              'No se pudo eliminar la persona.',
              'error'
            );
          }
        });
      }
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(PersonFormComponent, {
      data: {},
      width: '900px',
      height: 'auto',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiPersonService.createPerson(result).subscribe(() => {
          this.loadPersons(); 
        });
      }
    });
  }
  
  openEditDialog(person: Person) {
    const dialogRef = this.dialog.open(PersonFormComponent, {
      data: { person },
      width: '900px',
      height: 'auto',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiPersonService.updatePerson(person.id, result).subscribe(() => {
          this.loadPersons(); 
        });
      }
    });
  }
}



