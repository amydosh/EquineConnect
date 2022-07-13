import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  // On logout, clear the stored data
  ngOnInit(): void {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("admin");
  }
}
