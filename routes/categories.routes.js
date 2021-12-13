import { Router } from "express";
import { createCategoryController } from '../controllers/createCategoryController.js';
import { deleteCategoryController } from "../controllers/deleteCategoryController.js";
import { getCategoriesController } from "../controllers/getCategoriesController.js";
import { updateCategoryController } from "../controllers/updateCategoryController.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.post('/createcategory', isAdmin, new createCategoryController().handle);
router.delete('/deletecategory/:id', isAdmin, new deleteCategoryController().handle);
router.get('/getcategories/:id', new getCategoriesController().handle);
router.patch('/updatecategory/:id', isAdmin, new updateCategoryController().handle);


export default router;