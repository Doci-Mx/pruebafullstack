import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../../models/person';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class PersonFormComponent {
  personForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PersonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { person?: Person }
  ) {
    this.personForm = this.fb.group({
      nombre: [data.person ? data.person.nombre : '', Validators.required],
      apellido: [data.person ? data.person.apellido : '', Validators.required],
      fechaNacimiento: [data.person ? data.person.fechaNacimiento : '', Validators.required],
      puesto: [data.person ? data.person.puesto : '', Validators.required],
      sueldo: [data.person ? data.person.sueldo : '', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      this.dialogRef.close(this.personForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
