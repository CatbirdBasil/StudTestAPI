import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL} from "@environments/environment";
import {FileInfo} from "@models/file-info";

const CLIENT_ID = "946828012865-5hd0k6f22l95r15943usdhr3ja777adh.apps.googleusercontent.com";
const CLIENT_SECRET = '4ELWxGRWw7YmatTO9-tXcQfs';
const REFRESH_TOKEN = '1/0MTQE1dKqrX6YMRp_qXuqc6_GttII7tYDKBccGXtO08';

const FOLDER_ID = '1bbOqyXHzpAYA4ygVzxWuIylkIk91KLWF';

declare var UploaderForGoogleDrive;

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {

  access_token: string = 'ya29.GlvVBlErtsHHegEzbXtDZ0WjseUDPTJvTahCL3CB6LKa9lxO0zSHvVULgbjgxZTX_FCjJt9Q486ktO1WVARQltJrKvpelo-u5IAilmyTmSzs7BACoWjEZBSSFVCD';

  constructor(private http: HttpClient) {
  }

  public importFile(file: FileInfo, onError: any, onComplete: any, onProgress: any) {

    this.refreshToken().subscribe(
      res => {
        this.access_token = res['access_token'];

        var contentType = file.Blob.type || 'application/octet-stream';
        var metadata = {
          name: file.Blob.name,
          mimeType: contentType,
          parents: [FOLDER_ID]
        };

        var uploader = new UploaderForGoogleDrive({
          file: file.Blob,
          token: this.access_token,
          metadata: metadata,
          onError: onError,
          onComplete: onComplete,
          onProgress: onProgress,
          params: {
            convert: false,
            ocr: false
          }

        });

        uploader.upload();
      },
      err => {
        alert(err);
      }
    );


  }

  private refreshToken() {

    let body = 'client_id=' + CLIENT_ID
      + '&client_secret=' + CLIENT_SECRET
      + '&refresh_token=' + REFRESH_TOKEN
      + '&grant_type=refresh_token';

    return this.http.post(`${GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL}`, body, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }

}
