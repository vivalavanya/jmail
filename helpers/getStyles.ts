export async function  getStyles(obj : any): Promise<String> {
    let styles : any = {}
    for(let s in obj) {
        styles[obj[s].key] = obj[s].value;
    }
    return  JSON.stringify(styles);
}