import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bundle} from "@models/bundle";
import {Observable} from "rxjs";
import {
  CREATE_BUNDLE_URL,
  DELETE_BUNDLE_BY_ID,
  GET_ALL_BUNDLE_WITH_IMG,
  GET_ALL_BUNDLES,
  GET_BUNDLE_BY_ID
} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  constructor(private http: HttpClient) {
  }

  createBundle(bundle: Bundle): Observable<Bundle> {
    return this.http.post<Bundle>(CREATE_BUNDLE_URL, bundle);
  }

  getAllBundles() {
    return this.http.get<Bundle[]>(`${GET_ALL_BUNDLES}`);
  }

  getBundleById(id: number) {
    return this.http.get<Bundle>(`${GET_BUNDLE_BY_ID}` + id);
  }

  getAllBundleWithImg() {
    return this.http.get<Bundle[]>(`${GET_ALL_BUNDLE_WITH_IMG}`);
  }

  deleteBundleById(id: number) {
    return this.http.delete(`${DELETE_BUNDLE_BY_ID}` + id);
  }

}
