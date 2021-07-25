import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandbox } from "./AxiosService.js";


class QuotesService {
  async getNewQuote() {
    const res = await sandbox.get('quotes')
    // console.log(res.data)
    ProxyState.activeQuote = new Quote(res.data)
    // console.log('logging the active Quote from Service getNewQuote:', ProxyState.activeQuote.content)
  }

}

export const quotesService = new QuotesService();