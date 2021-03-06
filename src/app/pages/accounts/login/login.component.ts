import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../biosys-core/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'biosys-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    public errorMessages: string[];
    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
        this.authService = authService;
        this.router = router;

        this.loginForm = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public login(event: any) {
        event.preventDefault();

        this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
            () => this.router.navigate(['/']),
            () => this.errorMessages = ['Invalid username/password.']
        );

        event.preventDefault();
    }
}
