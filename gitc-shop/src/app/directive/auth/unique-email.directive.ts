import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterService } from '../../services/auth/register.service';

@Directive({
  selector: '[appUniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailDirective, multi: true }]
})
export class UniqueEmailDirective implements AsyncValidator {

  constructor(private http: RegisterService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http.getRegistrationByEmail(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { uniqueEmail: true } : null;
      })
    );
  }
}
