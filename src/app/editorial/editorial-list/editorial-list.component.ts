import { Component, OnInit } from '@angular/core';
import { EditorialDetail } from '../editorial-detail';
import { EditorialService } from '../editorial.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css'],
})
export class EditorialListComponent implements OnInit {
  showInfo() {
    alert("Al pinchar aquí se tiene que abrir en otra página el detalle del libro, hazlo con routerLink :)")
  }
  editorials: Array<EditorialDetail> = [];
  constructor(private editorialService: EditorialService, private route: Router) { }

  getEditorials() {
    this.editorialService.getEditorials().subscribe((apiData) => {
      this.editorials = apiData;
    });
  }

  ngOnInit() {
    this.getEditorials();
  }

  goToBook(index: number){
    this.route.navigate(['books/'+index])
  }
}
