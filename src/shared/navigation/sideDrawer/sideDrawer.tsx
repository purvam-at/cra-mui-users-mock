import React from 'react';
import { ILoggedInUser } from 'features/login/interface/login.interface';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import classes from './SideDrawer.module.css';
import appCss from 'App.module.css';
import { materialIcon } from 'shared/ui/iconButton/materialIcon';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IMenu } from '../../layout/layout.interface';

interface IProps {
  menu: IMenu[]; //menu list
  loggedInUser: ILoggedInUser; //logged in user
  accordianClick: (index: number) => void; //call accordianclick function in layout.tsx
}

const sideDrawer = (props: IProps): JSX.Element => {
  //check active route and return true/false.show highlighted in sidedrawer
  const isActive = (route: string): boolean => {
    const tmp = window.location.pathname;
    return tmp === route ? true : false;
  };

  const listItemClasses = { selected: classes.selected };

  /** Function render accordian menu list.
   * @param {menu} //menu which contain submenu array
   * @returns {React.ReactNode}
   */
  const renderSubMenu = (menu: IMenu): React.ReactNode => {
    let subMenuAccordian = null;
    //
    if (menu.sub_menu) {
      subMenuAccordian = menu.sub_menu.map((sub_menu: IMenu) => {
        return (
          <NavLink to={sub_menu.state} className={appCss.TxtDecoNone} key={sub_menu.id}>
            <ListItem
              button
              selected={isActive(sub_menu.state)}
              classes={listItemClasses}
              className={classes.DrawerItem}
            >
              <ListItemIcon>{materialIcon(menu.icon)}</ListItemIcon>
              <span className={classes.DrawerTitle}>{sub_menu.name}</span>
            </ListItem>
          </NavLink>
        );
      });
    }
    return subMenuAccordian;
  };
  /** Function render accordian menu list.
   * @param {menu}
   * @param{number}index
   * @returns {JSX.Element}
   */
  const accordianMenu = (menu: IMenu, index: number): JSX.Element | null => {
    const permission = checkPermission();
    let menuList = null;

    if (permission) {
      menuList = (
        <div id={`menu_${index}`}>
          <ListItem
            button
            selected={isActive(menu.state)}
            onClick={() => props.accordianClick(index)}
            classes={listItemClasses}
            className={classes.DrawerItem}
          >
            <ListItemIcon>{materialIcon(menu.icon)}</ListItemIcon>
            <ListItemText>
              <span className={classes.DrawerTitle}>{menu.name}</span>
            </ListItemText>
            {menu.isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={menu.isOpen} timeout="auto" unmountOnExit className={classes.PL7}>
            {renderSubMenu(menu)}
          </Collapse>
        </div>
      );
    }

    return menuList;
  };

  /** Function check permission for menu. return true and false.
   * @param {permission} permission array(string array)
   * @returns {boolean}
   */
  const checkPermission = (): boolean => {
    if (props.loggedInUser !== null) {
      //return permission.findIndex(ap => ap === props.user.usercode) !== -1 ? true : false;
      return true;
    }
    return false;
  };

  /** Function render non-accordian menu list.
   * @param {menu} menu
   * @param{number}index
   * @returns {JSX.Element}
   */
  const nonAccordianMenu = (menu: IMenu, index: number): JSX.Element | null => {
    const permission = checkPermission();
    let menuList = null;
    if (permission) {
      menuList = (
        <NavLink to={menu.state} className={appCss.TxtDecoNone} key={index}>
          <ListItem button selected={isActive(menu.state)} classes={listItemClasses} className={classes.DrawerItem}>
            <ListItemIcon className={classes.DrawerIcon}>{materialIcon(menu.icon)}</ListItemIcon>
            <span className={classes.DrawerTitle}>{menu.name}</span>
          </ListItem>
        </NavLink>
      );
    }
    return menuList;
  };
  /** Function check menu type and call his function accordingly.
   * @param menuobject //single menu object
   * @param index
   * @returns {React.ReactNode}
   */
  const menuType = (menuobject: IMenu, index: number): React.ReactNode => {
    if (menuobject.sub_menu) {
      return accordianMenu(menuobject, index);
    }
    return nonAccordianMenu(menuobject, index);
  };
  /** Function render menu list.
   * @returns {JSX.Element}
   */
  const createMenu = (): JSX.Element | null => {
    let menu = null;
    if (props.menu) {
      menu = (
        <List component="nav">
          {props.menu.map((menu, index) => {
            return <div key={menu.id}>{menuType(menu, index)}</div>;
          })}
        </List>
      );
    }
    return menu;
  };

  return (
    <div className={classes.DrawerWidth}>
      <div className={classes.DrawerPaper}>
        <div className={classes.DrawerContainer}>{createMenu()}</div>
      </div>
      <div className={classes.DrawerBackDrop} />
    </div>
  );
};

export default sideDrawer;
