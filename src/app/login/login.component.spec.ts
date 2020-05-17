import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let userEmail : any;
  let userPassword : any;
  let loginBtn : any;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,ReactiveFormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginBtn = fixture.debugElement.query(By.css('.loginButton')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain default value for login form',()=>{
    expect(component.loginForm.value).toEqual({email : '', password : ''});
  })

  it('form is valid then should navigate to dashboard',()=>{
    component.loginForm.setValue({email : 'admin@gmail.com',password: 'admin@123'});
    spyOn(component.router,'navigate');
    component.login();
    expect(component.router.navigate).toHaveBeenCalled();
  })

  it('when email and paddword  invalid then show error message',()=>{
    let errorMessage = "Please enter valid email and password";
    component.loginForm.setValue({email : 'disha@gmail.com',password: 'disha@123'});
    component.login();
    expect(component.errorMessage).toEqual(errorMessage);
  })
  

  it('form invalid when empty',()=>{
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('should be valid form',()=>{
    component.loginForm.controls['email'].setValue('admin@gmail.com');
    component.loginForm.controls['password'].setValue('admin@123');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('email field validity',()=>{
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();

    component.loginForm.controls['email'].setValue('admin');
    expect(email.errors['pattern']).toBeTruthy();
  })

  it('Password field validity',()=>{
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();

    component.loginForm.controls['password'].setValue('admi');

    expect(password.errors['minlength']).toBeTruthy();


  })

  it('should check loginBtn is disabled initially',() => {
      expect(loginBtn.disabled).toBe(true)
  });

  it('should check loginBtn is enabled after inputs check out', () => {
    component.loginForm.controls['email'].setValue('admin@gmail.com');
    component.loginForm.controls['password'].setValue('admin@123');
    fixture.detectChanges();
    expect(loginBtn.disabled).toBe(false)
    
    
  });

  
});
