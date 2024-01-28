import { HomePage, SmartHousePage, SurveillanceCamerasPage, ServicePage } from '../pages';
import { RouteType } from '../types/route';

const routes: RouteType[] = [
    {
        path: '/',
        name: 'Home',
        element: HomePage
    },
    {
        path: '/smart-house',
        name: 'Smart-House',
        element: SmartHousePage
    },
    {
        path: '/surveillance-cameras',
        name: 'Surveillance-cameras',
        element: SurveillanceCamerasPage
    },
    {
        path: '/services',
        name: 'Services',
        element: ServicePage
    }
]

export { routes }