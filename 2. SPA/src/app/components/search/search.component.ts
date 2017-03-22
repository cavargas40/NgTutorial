import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
      private heroesService: HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['query']);
      this.termino = params['query'];
      this.heroes = this.heroesService.searchHeroes(params['query']);
      console.log(this.heroes);
    })
  }

}
