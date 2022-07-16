import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-db',
  templateUrl: './test-db.component.html',
  styleUrls: ['./test-db.component.css']
})
export class TestDBComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  

}
