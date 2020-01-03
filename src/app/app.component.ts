import { Component } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miracle';
  headerFooter: boolean;
constructor(private router:Router){}
ngOnInit(){
  this.router.events.subscribe((event)=>{
    if(event instanceof NavigationEnd){
      this.headerFooter = (event.url!=='/signup' && event.url !=='/signup/elf' && event.url !=='/signup/family')
    }
  });
}
}
