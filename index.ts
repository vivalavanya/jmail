import * as pug from 'pug';

export class JMail {
    constructor(){}
    async toHtml(obj : any ): Promise<String> {
        var pugString = await this.getTag(obj)
        var html = pug.render(pugString)
        return html;
    }
    async getTag(json : any) : Promise<any> {
        for (const item of json) {
            if(item.childs && item.childs.length > 0 ) {
                return `${item.tag}(style=${await this.getStyles(item.styles)}) ${item.content}\n\t${await this.getTag(item.childs)}`
            }  else {
                return `${item.tag}(style=${await this.getStyles(item.styles)}) ${item.content}`
            }
        }
    }
    async getStyles(obj : any): Promise<String> {
        var styles : any = {}
        for(let s in obj) {
            styles[obj[s].key] = obj[s].value;
        }
        return  JSON.stringify(styles);
    }
}