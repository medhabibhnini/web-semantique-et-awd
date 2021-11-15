import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  departement:any=[]
 
  constructor(private http:HttpClient) { }
  
  ngOnInit() : void {
    
    this.http.get('http://localhost:3030/projet/sparql?query=PREFIX+ns%3A+%3Chttp%3A%2F%2Fwww.semanticweb.org%2Fmehdi%2Fontologies%2F2021%2F9%2Funtitled-ontology-6%23%3E%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0A%0ASELECT+%3FdID+%3FdNom+%0AWHERE+%7B%0A%3FDepartement+ns%3AdID+%3FdID.%0A%3FDepartement+ns%3AdNom+%3FdNom+.%0A%7D%0A%0A&output=json').subscribe((data)=>{
      console.log(data.results.bindings)
      this.departement=data.results.bindings
      console.log(this.departement)
    })
  }

}
