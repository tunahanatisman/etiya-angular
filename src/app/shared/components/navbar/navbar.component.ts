import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth/services/auth.service';
import { Observable } from 'rxjs';
import { TokenUserModel } from 'src/app/core/auth/models/tokenUserModel';

@Component({
  selector: 'etiya-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tokenUserModel$!: Observable<TokenUserModel | undefined>;

  constructor(private authService: AuthService) {
    this.tokenUserModel$ = this.authService.tokenUserModel$;
  }

  ngOnInit(): void {}

  testAuth() {
    this.authService.test().subscribe(response => {
      console.log(response);
    });
  }
}
