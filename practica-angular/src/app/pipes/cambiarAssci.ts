import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name: "cambiaAscii",
})

export class cambiaAsciiPipe implements PipeTransform{

    transform(value:string) {
     const ascii = value.split('')
                        .map(char => char.charCodeAt(0))
                        .join(' ');
        return ascii;
    }
}