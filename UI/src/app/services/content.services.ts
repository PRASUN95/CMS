import{ Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentServices
{
    constructor(private http : Http)
    {
        console.log('Content Service initiated.......');
    }
    getContents()
    {
        return this.http.get('http://localhost/CMS/api/content/read.php')
        .map(res => res.json());
    }
    addContents(content : Content)
    {
        return this.http.post('http://localhost/CMS/api/content/create.php',content)
        .map(res => res.json());
    }
    getCategories()
    {
        return this.http.get('http://localhost/CMS/api/category/read.php')
        .map(res => res.json());
    }
    addCategory(category : Category)
    {
        return this.http.post('http://localhost/CMS/api/category/create.php',category)
        .map(res => res.json());
    }
}

interface Content{
    id: string;
    name:string;
    description:string;
    category_id : string;
    CreatedDate : string;
}
interface Category{
    id: string;
    name:string;
    CreatedDate : string;
}