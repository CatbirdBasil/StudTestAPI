import {Injectable} from '@angular/core';
import {
  DELETE_DISCOUNT,
  DISCOUNT_CONTROLLER,
  GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID
} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Discount} from "@models/discount";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) {
  }

  createDiscount(discountPayload: Discount) {
    return this.http.post<Discount>(`${DISCOUNT_CONTROLLER}`, discountPayload);
  }

  getTripRelatedDiscounts(tripId: number) {
    return this.http.get<Discount[]>(`${GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID}` + tripId);
  }

  updateDiscount(discountPayload: Discount) {
    return this.http.put<any>(`${DISCOUNT_CONTROLLER}`, discountPayload);
  }

  deleteDiscount(discountPayload: Discount) {
    return this.http.delete<any>(`${DELETE_DISCOUNT}` + discountPayload.id);
  }

}
