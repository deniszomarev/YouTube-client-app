import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getDetails(): void {
    // console.log(this.item.id || this.item.id.videoId);
    this.router.navigate(['details', this.item.id.videoId || this.item.id]);
  }
}
