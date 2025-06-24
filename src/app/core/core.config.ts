import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const CoreConfig = [
  importProvidersFrom(HttpClientModule),
  // Outros providers globais como Auth, Interceptors, Guards
];
