import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultSearchServiceService } from '../../services/result-search-service/result-search-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public card: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private resultSearchServiceService: ResultSearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const cardIdFromUrl: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');
    this.resultSearchServiceService
      .getCardById(cardIdFromUrl)
      .subscribe((cardFromJson) => {
        if (!!cardFromJson) {
          this.card = cardFromJson;
        } else {
          this.router.navigate(['404']);
        }
      });
  }
  public returnBack(): void {
    this.router.navigate(['/']);
  }
}
