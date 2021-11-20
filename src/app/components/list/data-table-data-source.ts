import {Holder} from "../../domain/model/holder";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {map, merge, Observable, of as observableOf} from "rxjs";
import {DataSource} from "@angular/cdk/collections";


export class DataTableDataSource extends DataSource<Holder>{

  data: Holder[] = []
  // @ts-ignore
  constructor(private paginator: MatPaginator, private sort: MatSort, private dataList: Holder[]) {
    super()
    // @ts-ignore
    this.data = dataList
    // @ts-ignore
    console.log("data-table.data.source"+ this.data.length)

  }

  connect(): Observable<Holder[]> {

    if(this.paginator){
      const dataMutations = [
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ];

      // @ts-ignore
      return merge(...dataMutations).pipe(map(()=>{
        let result = this.getPagedData(this.getSortedData([...this.data]));
        return result;
      }));
    }
  }

  disconnect(){}

  private getPagedData(data: Holder[]){
    const startIndex = this.paginator.pageIndex *  this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Holder[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active){
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'userId': return compare(+a.userId, +b.userId, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'body': return compare(a.body, b.body, isAsc);
        default: return 0;
      }
    })
  }
}

function compare(a: any, b: any, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
}
