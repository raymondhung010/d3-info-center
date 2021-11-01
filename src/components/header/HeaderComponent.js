import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from 'hooks/useSidebar';
import menumap from 'resources/menumap';

const useStyles = createUseStyles((theme) => ({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: `1px solid ${theme.color.lightGrayishBlue2}`
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        ...theme.typography.itemTitle,
        textAlign: 'right',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
}));

function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext);
    const theme = useTheme();
    const classes = useStyles({ theme });
    let title;
    switch (true) {
        case currentItem === menumap.dashboard:
            title = 'Dashboard';
            break;
        case [menumap.calculator_cdr, menumap.calculator_rcr, menumap.calculator_gems, menumap.calculator_paragon].includes(currentItem):
            title = 'Calculator';
            break;
        case [menumap.ros_followersettings, menumap.ros_efficiency_setting, menumap.ros_rbatriggers, menumap.ros_troubleshooting].includes(currentItem):
            title = 'ROS';
            break;
        case currentItem === menumap.thudplugin:
            title = 'TurboHUD Plugin';
            break;
        case currentItem === menumap.bluepost:
            title = 'Blue Post';
            break;
        default:
            title = '';
    }
    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
            <Row vertical='center'>
                <div className={classes.separator}></div>
                <Row vertical='center'>
                    <span className={[classes.name, classes.cursorPointer].join(' ')}>
                        Anonymous#0000
                    </span>
                </Row>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
