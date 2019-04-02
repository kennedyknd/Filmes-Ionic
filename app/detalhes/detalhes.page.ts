import { FilmesService } from './../filmes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  id //atributo id 
  filme 

  constructor(
    private router: ActivatedRoute, 
    private filmesService: FilmesService
    )
     {
        //this.id = this.router.snapshot.paramMap.get('id');
        //this.filme = this.filmesService.get(this.id);
     } 

  ngOnInit() {
    console.log(this.filme)
  }

}