import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  ADD_FEEDBACK,
  CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID,
  DELETE_FEEDBACK,
  GET_TRIP_FEEDBACK_BY_TRIP_ID,
  UPDATE_FEEDBACK
} from "@environments/environment";
import {Feedback} from "@models/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  addFeedback(feedbackPayload: Feedback) {
    return this.http.post<any>(`${ADD_FEEDBACK}`, feedbackPayload);
  }

  updateFeedback(feedbackPayload: Feedback) {
    return this.http.put<any>(`${UPDATE_FEEDBACK}`, feedbackPayload);
  }

  deleteFeedback(id: number) {
    return this.http.delete<any>(`${DELETE_FEEDBACK}` + id);
  }

  getTripFeedback(id: number) {
    return this.http.get<Feedback[]>(`${GET_TRIP_FEEDBACK_BY_TRIP_ID}` + id);
  }

  checkUserFeedbackAbility(tripId: number) {
    return this.http.get<boolean>(`${CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID}` + tripId);
  }
}
