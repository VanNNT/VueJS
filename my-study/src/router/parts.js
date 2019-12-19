
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowserParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';

const routes = [
    {
        path: '/parts/:partType/:id',
        name: 'Parts',
        component: PartInfo,
        props: true,
        beforeEnter(to, from, next) {
            const isValidId = Number.isInteger(Number(to.params.id));
            next(isValidId)
        }
    },
    {
        path: '/browse',
        name: 'BrowseParts',
        component: BrowseParts,
        children: [
            {
                name: 'BrowseHeads',
                path: 'heads',
                component: RobotHeads
            },            
            {
                name: 'BrowseArms',
                path: 'arms',
                component: RobotArms
            },
            {
                name: 'BrowseTorsos',
                path: 'torsos',
                component: RobotTorsos
            },
            {
                name: 'BrowseBases',
                path: 'bases',
                component: RobotBases
            }
        ]
}]

export default routes