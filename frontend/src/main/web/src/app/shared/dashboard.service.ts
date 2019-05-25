import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AdminDashboard} from "@models/admin.dashboard";
import {GET_ADMIN_DASHBOARDS, GET_APPROVER_DASHBOARDS, GET_CARRIER_DASHBOARDS} from "@environments/environment";
import {CarrierDashboard} from "@models/carrier.dashboard";
import {ApproverDashboard} from "@models/approver.dashboard";

@Injectable({
  providedIn: 'root'
})

export class DashboardService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getAdminDashboard() {
    return this.http.get<AdminDashboard>(`${GET_ADMIN_DASHBOARDS}`);
  }

  getCarrierDashboard() {
    return this.http.get<CarrierDashboard>(`${GET_CARRIER_DASHBOARDS}`);
  }

  getApproverDashboard() {
    return this.http.get<ApproverDashboard>(`${GET_APPROVER_DASHBOARDS}`);
  }

}
