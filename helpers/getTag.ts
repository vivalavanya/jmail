import * as pug from 'pug';
import {getStyles} from './getStyles'

export async function getTag(json : any) : Promise<any> {
    let html = [];
    for (const item of json) {
        if(item.childs && item.childs.length > 0 ) {
            html.push(
                pug.render(
                    `${item.tag}(style=${await getStyles(item.styles)}) ${item.content}\n\t${await getTag(item.childs)}`
                )
            )
        }  else {
            html.push(
                pug.render(
                    `${item.tag}(style=${await getStyles(item.styles)}) ${item.content}`
                )
            )
        }
    }
    return html.join('');
}