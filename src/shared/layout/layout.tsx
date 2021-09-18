import React from 'react';
import classes from './Layout.module.css';
import MenuAppBar from 'shared/navigation/AppBar/AppBar';
import SideDrawer from 'shared/navigation/sideDrawer/sideDrawer';
import { ILoggedInUser } from 'features/login/interface/login.interface';
import { connect } from 'react-redux';
import { IAppState } from 'store/store';
import { IMenu } from './layout.interface';
import genericClasses from '../../App.module.css';
import LoadingSpinner from 'shared/ui/loader/loadingSpinner';

const menu = [
  // {
  //   code: '1',
  //   icon: 'PersonOutlined',
  //   id: 1,
  //   level: 1,
  //   name: 'Candidates',
  //   parent_id: null,
  //   sequence: 1,
  //   state: '/candidate',
  //   permissions: ['007'],
  //   isOpen: false,
  // },
  {
    code: '2',
    icon: 'PersonOutlined',
    id: 2,
    level: 1,
    name: 'Users',
    parent_id: null,
    sequence: 2,
    state: '/user',
    permissions: ['008'],
    isOpen: false,
  },
];

interface IProps {
  loggedInUser: ILoggedInUser;
  usersLoading: boolean;
  routes: (menu: IMenu[]) => JSX.Element;
}

interface IState {
  menu: IMenu[];
}

class Layout extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      menu: menu,
    };
  }

  // fetch menus by user roles
  componentDidMount() {
    this.getMenu();
  }

  render() {
    return (
      <div className={classes.AppBody}>
        {/*Top nav bar*/}
        <MenuAppBar loggedInUser={this.props.loggedInUser} />
        <SideDrawer
          menu={this.state.menu}
          loggedInUser={this.props.loggedInUser}
          accordianClick={this.onClickAccordianMenu}
        />
        <div className={[classes.ModuleContainer, genericClasses.PosRel].join(' ')}>
          {this.props.routes(this.state.menu)}
        </div>
      </div>
    );
  }

  displayLoader = (): JSX.Element | null => {
    // check loader bit from its respective props
    const loaderState = this.loaderState();

    return <LoadingSpinner status={loaderState} />;
  };

  loaderState = () => {
    if (this.props.usersLoading) {
      return true;
    } else {
      return false;
    }
  };

  //get menu array from api
  getMenu = (): IMenu[] => {
    return this.state.menu;
    //   httpService.get<{}>(configUrl.apiServer + "/menu/getByUser", {}).then(
    //     (res: any) => {
    //       this.setState({
    //         menu: res.data.menu,
    //       });
    //     },
    //     (rej: any) => {
    //       console.log(rej);
    //     }
    //   );
  };

  /** Function representing accordian button click event.
   * @param menu index
   * @returns {Void}
   * update isOpen state
   */
  onClickAccordianMenu = (index: number): void => {
    const openMenu = this.state.menu[index]; //get selected menu
    openMenu.isOpen = !openMenu.isOpen; //update it's isOpen property

    const menuArr = [...this.state.menu];
    menuArr[index] = openMenu; //replace select menu in menu state

    //update state
    this.setState({
      menu: menuArr,
    });
  };
}

const mapStateToProps = (state: IAppState) => {
  return {
    loggedInUser: state.login.loggedInUser as ILoggedInUser,
    usersLoading: state.users.loading,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
