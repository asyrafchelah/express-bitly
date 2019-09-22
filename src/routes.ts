import {TestController} from "./controller/TestController";
import { UrlShortenController } from "./controller/UrlShortenController";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},

{
    method: "post",
    route: "/urls",
    controller: UrlShortenController,
    action: "shortUrl"
},

{
    method: "get",
    route: "/urls",
    controller: UrlShortenController,
    action: "list"   
},

{
    method: "get",
    route: "/urls/:id",
    controller: UrlShortenController,
    action: "redirect"   
}

];