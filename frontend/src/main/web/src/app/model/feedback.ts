import {User} from "@models/user";
import {Service} from "@models/service";

export interface Feedback {
  id: number;
  userId: number;
  serviceId: number;
  rating: number;
  feedbackMessage: string;
  feedbackDate: number;

  user: User;
  Service: Service;
}
