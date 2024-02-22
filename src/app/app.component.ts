import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showInfo() {
    alert("¡Oh! No puedo crear un nuevo autor, no funciona el enlace, ¿me ayudas?")
  }
  title = 'proyectoLibros';
}
