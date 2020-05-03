import { Component, OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  data: Array<any>
  totalRecored: any;
  page: any = 1;


  constructor( private userService: UserlistService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
  }

  getDataList(){
    this.userService.getData().subscribe((data)=>{
      console.log(data);
      this.data=data.results;
      this.totalRecored=data.results.length
      console.log('Total recored', this.totalRecored);
    })

  }

}
