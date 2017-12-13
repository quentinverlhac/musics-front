import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  code: string;
  state: string;

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.code = params['code'];
      this.state = params['state'];
    });
    this.authService.callback(this.code, this.state)
    .then(() => this.router.navigate(['']))
    .catch(() => {
      console.log('login error')
    })
  }

}
