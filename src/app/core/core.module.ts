import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { ErrorHandlingInterceptor } from './interceptors/error-handling/error-handling.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { NgModule } from '@angular/core';
import { StorageModule } from './storage/storage.module';

@NgModule({
  declarations: [IfNotDirective],
  imports: [CommonModule, CoreRoutingModule, AuthModule, StorageModule],
  exports: [IfNotDirective],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }]
})
export class CoreModule {}
