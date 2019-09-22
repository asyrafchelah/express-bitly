import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class UrlShortenController {

    // async list(request: Request, response: Response, next: NextFunction){
    //     response.send(storage.urls)
    // }



    async shortUrl(request: Request, response: Response, next: NextFunction) {
        
        let urlData = storage.urls.length + 1
        let shortUrlData = {
            "id" : storage.urls.length + 1,
            "urls":request.body.urls,
            "shortUrl": "https://protected-bayou-98151.herokuapp.com/" + urlData ,
        }

        storage.urls.push(shortUrlData)

        response.json({
            "shortUrl": shortUrlData.shortUrl
        })


    }

    async list(request: Request, response: Response, next: NextFunction){
        response.send(storage.urls)
    }

    async redirect(request: Request, response: Response, next: NextFunction){

        let urlId = request.params.id
        for(let url of storage.urls){
            if(parseInt(urlId) == url.id){
                response.redirect(url.urls)
            }
        }
    }
}
