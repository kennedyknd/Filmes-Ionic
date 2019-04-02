import { FilmesService } from './../filmes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {

  filme = []
  credits = []

  constructor(private router: ActivatedRoute,
    private filmeService: FilmesService
    ){}

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');

    this.filmeService.getDetails(id).subscribe((data: any) =>{
      this.filme = data
      console.log(data);
    });

    this.filmeService.getCredits(id).subscribe((data1: any) =>{
      this.credits = data1.cast
      console.log(data1);
    });
  }
}