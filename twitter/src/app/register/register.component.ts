import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroDto } from '../dto/register/register.dto';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: any;
  constructor(private registerService: RegisterService, private route: ActivatedRoute, private router: Router) {
    this.usuario = new RegistroDto('','','');
  }

  ngOnInit(): void {
  }
  doRegister(){
    this.registerService.registro(this.usuario).subscribe(respuesta =>{
      alert('Registro completado');
      this.router.navigate(["/"]);

    });
  }

}