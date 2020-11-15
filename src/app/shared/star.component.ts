import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core'
@Component({
selector : 'pm-star',
templateUrl: './star.component.html',
styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    
    ngOnChanges(changes: SimpleChanges): void {
       this.starWidth = this.rating*75/5;
    } 
   @Input() rating:number;
   @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
   onClick(){
       this.ratingClicked.emit(`the rating ${this.rating} was clicked!` )
   }
    starWidth:number;
}