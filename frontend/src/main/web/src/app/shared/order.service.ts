import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GET_ORDERS_OF_USER} from "@environments/environment";
import {Order} from "@models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrdersOfUser(id: number) {
    return this.http.get<Order[]>(`${GET_ORDERS_OF_USER}` + id);
  }


}
