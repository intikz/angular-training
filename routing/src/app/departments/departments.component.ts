import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departments',
  template: `
    <ul class="items">
      <li
        (click)="onSelect(depto)"
        [class.selected]="isSelected(depto)"
        *ngFor="let depto of departments"
      >
        <span class="badge">{{ depto.id }}</span> {{ depto.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentsComponent implements OnInit {
  public selectedId;
  departments = [
    { id: 1, name: 'Canelones' },
    { id: 2, name: 'Maldonado' },
    { id: 3, name: 'Montevideo' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate([department.id], { relativeTo: this.route }); //links parameter array, path, route parameter
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
