import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import menumap from 'resources/menumap';
import {
    IconDashboard,
    IconCalculator,
    IconCalculatorCdr,
    IconCalculatorRcr,
    IconCalculatorGems,
    IconCalculatorParagon,
    IconRos,
    IconRosFollowerSetting,
    IconEfficiencySetting,
    IconRosRbaTrigger,
    IconRosTroubleshooting,
    IconThudPlugin,
    IconBluePost
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={menumap.dashboard}
                title='Dashboard'
                icon={IconDashboard}
                onClick={() => onClick(menumap.dashboard)}/>
            <MenuItem
                id={menumap.calculator}
                items={[menumap.calculator_cdr, menumap.calculator_rcr , menumap.calculator_gems, menumap.calculator_paragon]}
                title='Calculator'
                icon={IconCalculator}>
                <MenuItem
                    id={menumap.calculator_cdr}
                    title='Cooldown Reduction'
                    level={2}
                    icon={IconCalculatorCdr}
                    onClick={() => onClick(menumap.calculator_cdr)}/>
                <MenuItem
                    id={menumap.calculator_rcr}
                    title='Resources Cost Reduction'
                    level={2}
                    icon={IconCalculatorRcr}
                    onClick={() => onClick(menumap.calculator_rcr)}/>
                <MenuItem
                    id={menumap.calculator_gems}
                    title='Legendary Gems'
                    level={2}
                    icon={IconCalculatorGems}
                    onClick={() => onClick(menumap.calculator_gems)}/>
                <MenuItem
                    id={menumap.calculator_paragon}
                    title='Paragon'
                    level={2}
                    icon={IconCalculatorParagon}
                    onClick={() => onClick(menumap.calculator_paragon)}/>
            </MenuItem>
        
            <MenuItem
                id={menumap.ros}
                items={[menumap.ros_followersettings, menumap.ros_efficiency_setting, menumap.ros_rbatriggers, menumap.ros_troubleshooting]}
                title='ROS'
                icon={IconRos}>
                <MenuItem
                    id={menumap.ros_followersettings}
                    title='Follower Settings'
                    level={2}
                    icon={IconRosFollowerSetting}
                    onClick={() => onClick(menumap.ros_followersettings)}/>
                <MenuItem
                    id={menumap.ros_efficiency_setting}
                    title='Efficiency Settings'
                    level={2}
                    icon={IconEfficiencySetting}
                    onClick={() => onClick(menumap.ros_efficiency_setting)}/>
                <MenuItem
                    id={menumap.ros_rbatriggers}
                    title='RBA Triggers'
                    level={2}
                    icon={IconRosRbaTrigger}
                    onClick={() => onClick(menumap.ros_rbatriggers)}/>
                <MenuItem
                    id={menumap.ros_troubleshooting}
                    title='Troubleshooting'
                    level={2}
                    icon={IconRosTroubleshooting}
                    onClick={() => onClick(menumap.ros_troubleshooting)}/>
            </MenuItem>
            <MenuItem
                id={menumap.thudplugin}
                title='TurboHUD Plugin'
                icon={IconThudPlugin}
                onClick={() => onClick(menumap.thudplugin)}/>
            <MenuItem
                id={menumap.bluepost}
                title='Blue Post'
                icon={IconBluePost}
                onClick={() => onClick(menumap.bluepost)}/>
        </Menu>
    );
}

export default SidebarComponent;
