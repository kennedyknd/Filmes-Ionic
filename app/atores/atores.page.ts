import { AtoresService } from './../atores.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atores',
  templateUrl: './atores.page.html',
  styleUrls: ['./atores.page.scss'],
})
export class AtoresPage implements OnInit {

  ator = []
  combinedCredits = []

  constructor(private router: ActivatedRoute,
    private atoresService: AtoresService
    ){}

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id');

    this.atoresService.getDetails(id).subscribe((data: any) =>{
      this.ator = data
      console.log(data);
    });

    this.atoresService.getCombinedCredits(id).subscribe((data: any) =>{
      this.combinedCredits = data.cast
      console.log(data);
    });
  }
}