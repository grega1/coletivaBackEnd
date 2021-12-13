import EventsRoutes from './events.routes.js'
import UserRoutes from './users.routes.js'
import CategoriesRoutes from './categories.routes.js'

import app from '../app.js';

app.use(EventsRoutes);
app.use(UserRoutes);
app.use(CategoriesRoutes);

export default app