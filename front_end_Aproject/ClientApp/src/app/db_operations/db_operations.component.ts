import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'db_operations',
  templateUrl: './db_operations.component.html'
})

export class DBOperationsComponent
{
  public spices: SpiceModel[] = []
  configUrl: string = 'http://192.168.0.178:8050/spice/select';

  

  constructor(private http: HttpClient)
  {
    
  }

  public chooseSelect()
  {
    var request = <SpiceSelectRequest>{ name: 'ginger' }
    this.http.post<SpiceModel[]>('http://192.168.0.178:8050/spice/select', request).subscribe(result => {
      this.spices = result;
    }, error => console.error(error));
  }

  public getSelectTest()
  {
    return this.http.get(this.configUrl).subscribe(res => {
      console.log(res);
    },
      err => {
        throw err;
      });
  }

 

  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}

interface SpiceModel
{
  id?: number;
  name: string;
  description: string
}

interface SpiceSelectRequest
{
  name: string; 
}


