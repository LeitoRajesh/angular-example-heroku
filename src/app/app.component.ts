import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {environment} from "../environments/environment";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  @ViewChild("sidenav") sidenav : MatSidenav;
  versao: string = environment.versao;

  constructor(private observer: BreakpointObserver, private router: Router) {
  }

  ngAfterViewInit(){
    this.sidenav.opened = true;
    this.observer.observe(['(max-width: 1200px)']).subscribe((response)=>{
      if(response.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }

  goToNewHolder(){
    this.router.navigate(["cad"])
  }

  goTolist(){
    this.router.navigate(["index"])
  }

}
