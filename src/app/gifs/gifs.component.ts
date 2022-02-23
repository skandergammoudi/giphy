import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.getGifs()
    .subscribe((response: any) => {
      console.log('hee', response);
    }
    );
  }

}
