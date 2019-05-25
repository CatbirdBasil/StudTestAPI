import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  GET_CHAT_FOR_CURRENT_USER,
  GET_CHAT_MESSAGES_BY_CHAT_ID,
  GET_CHATS_FOR_APPROVER,
  POST_CHAT_MESSAGE_WITH_CHAT_ID,
  PUT_CHANGING_CHAT_ASSIGNMENT
} from "@environments/environment";
import {Chat, ChatMessage} from "@models/chat.models";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  getChatForCurrentUser() {
    return this.http.get<Chat>(`${GET_CHAT_FOR_CURRENT_USER}`);
  }

  getChatsForApprover() {
    return this.http.get<Chat[]>(`${GET_CHATS_FOR_APPROVER}`);
  }

  getChatMessagesByChatId(id: number) {
    return this.http.get<ChatMessage[]>(`${GET_CHAT_MESSAGES_BY_CHAT_ID}` + id);
  }

  postChatMessageWithChatId(message: string, id: number) {
    return this.http.post(`${POST_CHAT_MESSAGE_WITH_CHAT_ID}` + id, message);
  }

  putChangingChatAssignment(chat: Chat) {
    return this.http.put(`${PUT_CHANGING_CHAT_ASSIGNMENT}`, chat);
  }
}
