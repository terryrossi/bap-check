const routes = require("next-routes")();

routes
  //  .add("/campaigns/new", "/campaigns/new")
  //  .add("/campaigns/:address", "/campaigns/show")
  //  .add("/campaigns/:address/requests", "/campaigns/requests/index")
  //  .add("/campaigns/:address/requests/new", "/campaigns/requests/new")

  // .add("/campaigns/:startingBull", "/campaigns/pagination/");
  .add("/home", "/")
  .add("/teens", "/bap/teens")
  .add("/:startingBull", "/")
  .add("/teens/:startingTeen", "/bap/teens");

module.exports = routes;
