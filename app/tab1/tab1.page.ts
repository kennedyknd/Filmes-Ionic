import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  filmes = []

  constructor(
    private filmeService: FilmesService   
  ){}
  ngOnInit(){
   
      this.filmeService.getPopular().subscribe((data: any) =>{
        this.filmes = data.results;
        console.log(data);
      });
  }
}
