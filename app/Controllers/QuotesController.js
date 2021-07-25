import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
  // console.log(ProxyState.activeQuote)
  document.getElementById('quotes').innerHTML = ProxyState.activeQuote.Template

  // document.getElementById('quotes').innerHTML = ProxyState.activeQuote.Template
}
export default class QuotesController {
  constructor() {
    this.getNewQuote()
    ProxyState.on('activeQuote', _draw)
  }

  async getNewQuote() {
    try {
      await quotesService.getNewQuote()
    } catch (error) {
      console.error(error)
    }
  }
}