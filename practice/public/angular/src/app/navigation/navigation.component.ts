import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.route.navigate([path]);
  }
}
