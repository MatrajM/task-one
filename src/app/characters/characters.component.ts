import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort'
import { InfHttpService } from '../inf-http.service';
import { isNgTemplate } from '@angular/compiler';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {
  
  // ----------MODAL controls ------------------- closeResult = '';
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  collection: any;
  p: number;
  itemsPerPage = 25;
  totalItems: any;
  pageSizes = [10, 25, 50];
  page: number;
  gender: string;

constructor(private http: HttpClient, private modalService: NgbModal){}
  
  /*  ----------MODAL controls -------------------
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
  }
     ----------MODAL controls -------------------
*/

  ngOnInit() {
    this.getAllData();
  }

  onClick() {
    this.p = 1;
    this.getAllData();
  }

  onLast() {
    this.p = this.page;
    if ( this.itemsPerPage == 10){
      this.getPage(214), this.p =214 }
    else if (this.itemsPerPage == 25){
      this.getPage(86), this.p =86 }
    else if (this.itemsPerPage == 50){
      this.getPage(43), this.p =43 } 
  }

handlePageSizeChange(event): void {
  this.itemsPerPage = event.target.value;
  this.p = 1;
  this.getAllData();
}

/* TODO fix pagination problems */
getGender(gender, page) {
  const url = `https://anapioficeandfire.com/api/characters?gender=${gender}&page=${page}&pageSize=${this.itemsPerPage}`;
  this.http.get(url).subscribe((data: any[]) => {
  console.log(data);
  this.collection = data;
  this.totalItems = 2140;
  });
}

getAllData() {
  const url = `https://anapioficeandfire.com/api/characters?page=1&pageSize=${this.itemsPerPage}`;
  this.http.get(url).subscribe((data: any) => {
  console.log(data);
  this.collection = data;
  this.totalItems = 2140;
  });
}

getPage(page) {
  const url = `https://anapioficeandfire.com/api/characters?page=${page}&pageSize=${this.itemsPerPage}`;
  this.http.get(url).subscribe((data: any) => {
  console.log(data);
  this.collection = data;
  this.totalItems = 2140;
  });  
}

}


