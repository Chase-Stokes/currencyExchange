export default class ExchangeAPI {
  static async getCurrencyAndRate() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP/AMOUNT`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json;
    } catch(error) {
      return error.message;
    }
  }
}