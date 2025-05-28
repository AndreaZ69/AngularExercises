import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-parametri-demo',
  imports: [CommonModule],
  templateUrl: './parametri-demo.component.html',
  styleUrl: './parametri-demo.component.scss',
})
export class ParametriDemoComponent implements OnInit {
  routeParamId: string | null = null;
  queryParamId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeParamId = params.get('id');
    });

    this.route.queryParamMap.subscribe(params => {
      this.queryParamId = params.get('id');
    });
  }

  vaiConRouteParams() {
    this.router.navigate(['/parametri-demo', 999]);
  }

  vaiConQueryParams() {
    this.router.navigate(['/parametri-demo'], {
      queryParams: { id: 888 }
    });
  }
}
