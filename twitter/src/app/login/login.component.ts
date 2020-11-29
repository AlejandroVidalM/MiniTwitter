import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { LoginService } from '../services/login.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any;
  constructor(private loginService: LoginService,private route: ActivatedRoute, private router: Router) {
    this.usuario = new LoginDto('','');
  }

  ngOnInit(): void {
  }
  doLogin(){
    this.loginService.login(this.usuario).subscribe(respuesta =>{
      let token=respuesta.token;
      localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name })); 
      //alert('API TOKEN ' + respuesta.token);
      this.router.navigate(["/index"]);
    });
  }

}
