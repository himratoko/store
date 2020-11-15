

import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
name: 'converToSpaces'
})
export class convertedToSpacesPipes implements PipeTransform{
    transform(value: string, character: string):string {
        return value.replace(character,' ') ;
    }

}