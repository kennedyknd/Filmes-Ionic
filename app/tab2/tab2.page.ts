import { AtoresService } from './../atores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  atores = []

  constructor(
    private atoresService: AtoresService   
  ){}
  ngOnInit(){
   
      this.atoresService.getPopular().subscribe((data: any) =>{
        this.atores = data.results;
        console.log(data);
      });
  }
}