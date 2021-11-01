import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import menumap from 'resources/menumap';
import LoadingComponent from 'components/loading';
import CDRCalculatorComponent from './calculator/CDRCalculatorComponent';
import RCRCalculatorComponent from './calculator/RCRCalculatorComponent';
import GemCalculatorComponent from './calculator/GemCalculatorComponent';
import ParagonCalculatorComponent from './calculator/ParagonCalculatorComponent';
import FollowerSettingComponent from './ros/FollowerSettingComponent';
import EfficiencySettingComponent from './ros/EfficiencySettingComponent';
import RBATriggerComponent from './ros/RBATriggerComponent';
import TroubleshootingComponent from './ros/TroubleShootingComponent';
import ThudPluginComponent from './thud-plugin/ThudPluginComponent';
import BluePostComponent from './bluepost/BluePostComponent';

const DashboardComponent = lazy(() => import('./dashboard'));

function Router() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={menumap.dashboard} component={DashboardComponent} />
                <Route exact path={menumap.calculator_cdr} component={CDRCalculatorComponent} />
                <Route exact path={menumap.calculator_rcr} component={RCRCalculatorComponent} />
                <Route exact path={menumap.calculator_gems} component={GemCalculatorComponent} />
                <Route exact path={menumap.calculator_paragon} component={ParagonCalculatorComponent} />
                <Route exact path={menumap.ros_followersettings} component={FollowerSettingComponent} />
                <Route exact path={menumap.ros_efficiency_setting} component={EfficiencySettingComponent} />
                <Route exact path={menumap.ros_rbatriggers} component={RBATriggerComponent} />
                <Route exact path={menumap.ros_troubleshooting} component={TroubleshootingComponent} />
                <Route exact path={menumap.thudplugin} component={ThudPluginComponent} />
                <Route exact path={menumap.bluepost} component={BluePostComponent} />
                <Redirect to={menumap.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default Router;
