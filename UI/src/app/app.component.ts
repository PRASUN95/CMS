import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav class = "navbar navbar-expand-sm navbar-light bg-light">
  <a class = "navbar-brand" routerLink = "/">Home</a>
  <button class = "navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
  <span class= "navbar-toggler-icon"></span>
  </button>
    <div class = "collapse navbar-collapse" id="navbarMenu">
      <ul class = "navbar-nav">
      <li class="nav-item"><a class = "nav-link" routerLink = "/about">About</a></li>
      <li class="nav-item"><a class = "nav-link" routerLink = "/content">Content</a></li>
      <li class="nav-item"><a class = "nav-link" routerLink = "/category">Category</a></li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { }
