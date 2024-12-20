import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private apiUrl = 'https://api.mymemory.translated.net/get';

  constructor(private http: HttpClient) {}

  translate(text: string, targetLanguage: string = 'pt'): Promise<string> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`;

    return this.http.get<any>(url).toPromise()
      .then(response => {
        if (response.responseData && response.responseData.translatedText) {
          return response.responseData.translatedText;
        }
        return text;
      })
      .catch(error => {
        console.error('Error translating text:', error);
        return text;
      });
  }
}
