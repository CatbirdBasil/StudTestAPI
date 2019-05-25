import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {
  CHANGE_TT_STATUS,
  CREATE_TROUBLE_TICKET,
  GET_TROUBLE_TICKET_BY_ID,
  GET_TROUBLE_TICKET_BY_SERVICE_ID,
  GET_TROUBLE_TICKET_MESSAGES_BY_ID,
  POST_TT_FEEDBACK,
  POST_TT_MESSAGE
} from "@environments/environment";
import {TroubleTicket, TroubleTicketMessage} from "@models/trouble.ticket";

@Injectable({
  providedIn: 'root'
})

export class TroubleTicketService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getTroubleTicketById(id: number) {
    return this.http.get<TroubleTicket>(`${GET_TROUBLE_TICKET_BY_ID}` + id);
  }

  getTroubleTicketByServiceId(id: number) {
    return this.http.get<TroubleTicket[]>(`${GET_TROUBLE_TICKET_BY_SERVICE_ID}` + id);
  }

  getTroubleTicketMessagesById(id: number) {
    return this.http.get<TroubleTicketMessage[]>(`${GET_TROUBLE_TICKET_MESSAGES_BY_ID}` + id);
  }

  createTroubleTicketWithFirstMessage(serviceId: number, headline: string, message: string) {
    return this.http.post(`${CREATE_TROUBLE_TICKET}`, {
      "serviceId": serviceId,
      "headline": headline,
      "message": message
    });
  }

  postMessage(id: number, message: string) {
    return this.http.post(`${POST_TT_MESSAGE}` + id, message);
  }

  postFeedback(id: number, rating: number, text: string) {
    return this.http.post(`${POST_TT_FEEDBACK}`, {"id": id, "rating": rating, "text": text});
  }

  changeStatus(troubleTicket: TroubleTicket, statusId: number) {
    return this.http.put(`${CHANGE_TT_STATUS}`, {"troubleTicket": troubleTicket, "statusId": statusId});
  }
}
