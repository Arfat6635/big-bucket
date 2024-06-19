import { HttpHeaders } from "@angular/common/http"

export const Constant= {
    API_END_POINT : 'https://freeapi.miniprojectideas.com/api/BigBasket/',
    METHODS: {
        GET_ALL_PRODUCT: '',
        GET_ALL_CATEGORY: 'GetAllCategory'
    }
}

export const httpOptions = {
    headers: new HttpHeaders ({
      "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    })
  }