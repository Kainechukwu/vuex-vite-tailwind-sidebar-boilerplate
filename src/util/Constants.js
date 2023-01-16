export default class Constants {
  static API_BASE = "/api/v1";

  static authExcludeApiPaths = [
    "/login",
    "/signup",
    "/account_created",
    "/reset_password",
    "/set_new_password",
  ];

  static currencyFormat = "0,0.00";

  // static nairaSymbol = &#x20A6;

  static btcFormat = "0,0.00000000";

  static backOfficeAuth = ["BornfreeAdmin"];

  static merchantAuth = ["Merchant"];
}
