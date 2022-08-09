import { Observable, map } from 'rxjs';

import { AuthStates } from '../store/auth.reducer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import { MessageResultModel } from 'src/app/core/models/messageResultModel';
import { Store } from '@ngrx/store';
import { TokenUserModel } from '../models/tokenUserModel';
import { UserForLoginModel } from '../models/userForLoginModel';
import { UserLoginResponseModel } from '../models/userLoginResponse';
import { environment } from 'src/environments/environment';
import { setTokenUserModel } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
    .select(state => state.appAuth)
    .pipe(map(state => state.tokenUserModel));

  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private jwtHelperService: JwtHelperService,
    private store: Store<AuthStates>
  ) {}

  login(userForLoginModel: UserForLoginModel): Observable<UserLoginResponseModel> {
    return this.httpClient.post<UserLoginResponseModel>(
      `${this.apiControllerUrl}/login`,
      userForLoginModel
    );
  }

  saveAuth(userLoginResponseModel: UserLoginResponseModel) {
    this.localStorageService.set('token', userLoginResponseModel.access_token);
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));
  }

  test(): Observable<MessageResultModel> {
    return this.httpClient.get<MessageResultModel>(`${this.apiControllerUrl}/test`);
  }

  get isAuthenticated(): boolean {
    if (!this.jwtHelperService.tokenGetter()) return false;
    if (this.jwtHelperService.isTokenExpired()) return false;

    return true;
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel })); // tokenUserModel -> tokenUserModel:tokenUserModel ile aynı
  }
}

export function tokenGetter() {
  return localStorage.getItem('token');
}
