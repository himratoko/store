import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { IComment } from "./comment";


@Injectable({
    providedIn:'root'
})
export class CommentService{
    private commentUrl = 'api/products/comments.json';
    constructor(private http:HttpClient){

    }
    getComment(): Observable<IComment>{
        return this.http.get<IComment>(this.commentUrl). pipe(tap(data => console.log('ALL :'
        +JSON.stringify(data))))
    }
}