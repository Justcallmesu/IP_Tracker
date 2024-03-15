export interface IPData{
    ip:string
    location:{
        region:string,
        city:string,
        lat:number,
        lng:number,
        timezone: string
    }
    isp:string
}