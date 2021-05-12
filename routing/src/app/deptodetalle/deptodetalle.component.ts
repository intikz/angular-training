import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deptodetalle',
  template: `<nav>
    <h3>elegiste depto con id {{ departmentId }}</h3>

    <p>
      <button (click)="showInfo()">Info</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <a (click)="goPrev()">Prev</a>
      <a (click)="goNext()">Next</a>
    </p>
    <div>
      <button (click)="goToDepto()">Back</button>
    </div>
  </nav>`,
  styleUrls: ['./deptodetalle.component.css'],
})
export class DeptodetalleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  public departmentId;
  ngOnInit() {
    //Snapshot approach doesnt work
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  //from the current route snapshot get the id parameter from the url

  goPrev() {
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  goToDepto() {
    let selectedId = this.departmentId ? this.departmentId : null; // passing as optional param
    this.router.navigate(['../', { id: selectedId }], {
      //key: value,
      relativeTo: this.route,
    }); // con relative nav
  }

  showInfo() {
    this.router.navigate(['info'], { relativeTo: this.route });
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
