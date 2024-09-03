const { Router } = require("express")
const routes = Router();

const MovieController = require("../../controllers/Movie_notes")
const movieController = new MovieController();


 //#region Movies Notion Resources Routes
routes.get("/index/:user_id", movieController.index )
routes.post("/create/:user_id", movieController.create )
routes.delete("/delete/:note_id", movieController.delete )
//#endregion


module.exports = routes;