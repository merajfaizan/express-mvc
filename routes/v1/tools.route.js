const express = require("express");
const toolsController = require("../../controllers/tools.controller");
const viewCount = require("../../middlewares/viewCount");
const limiter = require("../../middlewares/limiter");

const router = express.Router();

router
  .route("/")

  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization User's access token
   *
   * @apiParam {Number{1-}}       [page=1]     List Page
   * @apiParam {Number{1-100}}    [limit=10]   Users Per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)   Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)    Forbidden   Only can access the data
   */
  .get(toolsController.getAllTools)

  /**
   * @api {post} /tools Save a tool
   * @apiDescription post a tool
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization User's access token
   *
   * @apiParam {Number{1-}}       [page=1]     List Page
   * @apiParam {Number{1-100}}    [limit=10]   Users Per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)   Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)    Forbidden   Only can access the data
   */
  .post(toolsController.saveATool);

router
  .route("/:id")
  .get(viewCount, limiter, toolsController.getToolDetail)
  .patch(toolsController.updateTool)
  .delete(toolsController.deleteTool);

module.exports = router;
