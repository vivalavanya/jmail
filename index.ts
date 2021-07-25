
import {getTag} from './helpers/getTag'

export class JMail {
    constructor(){}
    async toHtml(obj : any ) : Promise<String> {
        const pugString = await getTag(obj)
        return pugString;
    }
}