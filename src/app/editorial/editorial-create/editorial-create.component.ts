import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditorialDetail } from '../editorial-detail';
import { EditorialService } from '../editorial.service';

@Component({
  selector: 'app-editorial-create',
  templateUrl: './editorial-create.component.html',
  styleUrls: [],
})
export class EditorialCreateComponent implements OnInit {
  editorialForm!: FormGroup;

  constructor(
    private editorialService: EditorialService,
    private toastrService: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editorialForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.maxLength(100) ]],
      mail: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
    });
    alert("Necesito completar el formulario de creación: \n - Añade el campo de Fecha de creación (datepicker). \n - Añade el email del director (valida que sea email correcto) \n - Los dos campos son obligatorios")
  }

  createEditorial(editorial: EditorialDetail) {
    this.editorialService.createEditorial(editorial).subscribe(
      {
        next: apiData => {
          this.toastrService.success(
            'The editorial was created',
            'Editorial creation'
          );
          this.router.navigate(['/editorials/list']);
          this.editorialForm.reset();
        }, error: e => {
          this.toastrService.error(e, 'Error creating the editorial');
        }
      }
    );
  }

  cancelCreation(): void {
    this.toastrService.warning(
      "The editorial wasn't created",
      'Editorial creation'
    );
    this.editorialForm.reset();
  }
}
