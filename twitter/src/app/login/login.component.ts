import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/login.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: LoginDto;
  constructor(private loginService: LoginService) {
    this.usuario = new LoginDto(' ',' ');
  }

  ngOnInit(): void {
  }
  doLogin(){
    this.loginService.login(this.usuario).subscribe(respuesta =>{
      alert('API TOKEN ' + respuesta.token);
    });
  }

}
