import { Router } from "express";
import { createEventController } from '../controllers/createEventController.js';
import { deleteEventController } from "../controllers/deleteEventController.js";
import { getEventsController } from "../controllers/getEventsController.js";
import { subscribeEventController } from "../controllers/subscribeEventController.js";
import { unsubscribeEventController } from "../controllers/unsubscribeEventController.js";
import { updateEventController } from "../controllers/updateEventController.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { isLogged } from "../middlewares/isLogged.js";

const router = Router();

router.post('/createclass', isLogged, new createEventController().handle);
router.delete('/deleteclass/:id', isLogged, new deleteEventController().handle);
router.delete('/deleteclassadmin/:id', isAdmin, new deleteEventController().handleAdmin);
router.patch('/updateclass/:id', isLogged, new updateEventController().handle);
router.patch('/updateclassadmin/:id', isAdmin, new updateEventController().handleAdmin);
router.get('/getevents', isLogged, new getEventsController().handle);
router.get('/geteventsadmin', isAdmin, new getEventsController().handleAdmin);
router.post('/subscribe', isLogged, new subscribeEventController().handle);
router.delete('/unsubscribe', isLogged, new unsubscribeEventController().handle);


export default router;