import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class UrlShortenController {

    // async list(request: Request, response: Response, next: NextFunction){
    //     response.send(storage.urls)
    // }



    async shortUrl(request: Request, response: Response, next: NextFunction){
        let storageLen = storage.urls.length + 1
        let urlData = {
            "id": storageLen,
            "urls": request.body.urls,
            "shortUrl": "https://protected-bayou-98151.herokuapp.com/urls/"+storageLen
        }
        storage.urls.push(urlData)
        response.json({
            "shortUrl": urlData.shortUrl
        })
    }

    async showList(request: Request, response: Response, next: NextFunction){
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
