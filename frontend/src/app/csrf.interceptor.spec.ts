import { HttpInterceptorFn } from '@angular/common/http';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: { 'X-CSRF-Token': 'fake-token' } // tu lógica aquí
  });
  return next(modifiedReq);
};

