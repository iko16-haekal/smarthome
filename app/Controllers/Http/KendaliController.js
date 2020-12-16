"use strict";
const Kendali = use("App/Models/Kendali");
class KendaliController {
  async proccess({ view, response }) {
    let data = await Kendali.find(1);
    data = JSON.stringify(data);
    return view.render("proccess", { data });
  }
}

module.exports = KendaliController;
