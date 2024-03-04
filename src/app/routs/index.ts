import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();
const modulesRoutes = [
  {
    path: '/users',
    router: UserRoutes,
  },
];
//optimize routes

modulesRoutes?.forEach(route => router?.use(route?.path, route?.router));

export default router;
