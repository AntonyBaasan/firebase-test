import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  connected: any;
  constructor(private af: AngularFireDatabase) {
    this.af.object('connected').valueChanges().subscribe((value) => {
      this.connected = value;
    });
  }

  ngOnInit() {
  }

}
