import { Component } from '@angular/core';
import { DataStorageService } from "../../shared/data-storange.service";
import { Response } from '@angular/http';
import { AuthService } from "../../auth/auth.service";
//import { HttpEventType,HttpEvent } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  
  constructor(private datastorageService: DataStorageService,
              private authService: AuthService)  {}
  onSaveData()
  {
    this.datastorageService.storeRecipe()
    .subscribe(
    (response) => // resposne  type 4 is normal response ; type 0 is sent response, type 1 is uploadprogress Event resposne, type 3 is downloadprogress response
//      (response: HttpEvent<Object>) => // we give get the full response in this case, when an event istriggered and not response type
      { 
//        console.log(response.type === HttpEventType.Sent);// check different type if EventType
        console.log(response);  // we get 2 event - first is sent event above is true and 2nd is full response
      
      }  
    );

  }
fetchData()
{
  this.datastorageService.getRecipes();
}
  onlogout()
  {
    this.authService.logout();
  }
}
