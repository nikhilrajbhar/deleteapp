import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observables';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class. tetsing 3
    const observables = new Observable((obj) => obj.next(Math.random()));

    //subsrciber1
    observables.subscribe(x => console.log('subsrciber1', x));
    //subsrciber2
    observables.subscribe(x => console.log('subsrciber2', x));

    const subject = new Subject();
    
    //subsrciber1
    subject.subscribe(x => console.log('subsrciber11', x));
    //subsrciber2
    subject.subscribe(x => console.log('subsrciber22', x));
    subject.next(Math.random());
  }
}
