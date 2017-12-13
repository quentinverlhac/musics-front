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

  ngOnInit() {
    this.route.queryParams.toPromise().then((params: Params) => {
      this.authService.callback(params['code'], params['state'])
    }).catch(() => {
      console.log('login error')
    }).then(() => this.router.navigate(['']))
  }

}
