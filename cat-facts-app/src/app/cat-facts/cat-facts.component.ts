import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../services/cat-fact.service';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss'],
  standalone: true
})
export class CatFactsComponent implements OnInit {
  fact: string | undefined;

  constructor(
    private catFactService: CatFactService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.getFact();
  }

  async getFact(): Promise<void> {
    try {
      const data = await this.catFactService.getCatFact().toPromise();
      this.fact = await this.translateService.translate(data.fact);
    } catch (error) {
      console.error('Error getting cat fact:', error);
    }
  }

  loadNewFact(): void {
    this.getFact();
  }
}
