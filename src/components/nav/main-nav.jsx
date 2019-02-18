import React from "react";
import ListNavItems from "./list-nav-items.jsx";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLevel: 1,
      navCategoryId: null, // integer to match main nav items to categories
      navPageId: null, // integer to match main nav items to categories
      navItemId: null,
      tertiarySelected: false,

      // level 1 **************************
      navItems: [
        {
          id: 0,
          name: "my schedule & biddings",
          navigate: true,
          icon: "fas fa-calendar-alt",
        },
        {
          id: 1,
          name: "saftey",
          navigate: true,
          icon: "fas fa-lock",
        },
        {
          id: 2,
          name: "training",
          navigate: false,
          icon: "fas fa-dumbbell",
        },
        {
          id: 3,
          name: "administration",
          navigate: true,
          icon: "fas fa-user-tie",
        },
        {
          id: 4,
          name: "catering & brand",
          navigate: true,
          icon: "fas fa-utensils",
        },
        {
          id: 5,
          name: "hotels",
          navigate: false,
          icon: "fas fa-hotel",
        },
        {
          id: 6,
          name: "my base",
          navigate: false,
          icon: "fas fa-home",
        },
        {
          id: 7,
          name: "recognition",
          navigate: false,
          icon: "fas fa-brain",
        },
        {
          id: 8,
          name: "my leadership team",
          navigate: false,
          icon: "fas fa-users",
        },
      ],

      // Level 2 **************************
      categories: [
        {
          referenceId: 0,
          id: 0,
          name: "my schedule",
          navigate: false,
        },
        {
          referenceId: 0,
          id: 1,
          name: "my biddings",
          navigate: false,
        },
        {
          referenceId: 1,
          id: 2,
          name: "reporting",
          navigate: true,
        },
        {
          referenceId: 1,
          id: 3,
          name: "agriculture and customs",
          navigate: true,
        },
        {
          referenceId: 1,
          id: 4,
          name: "known crewmember",
          navigate: false,
        },
        {
          referenceId: 1,
          id: 5,
          name: "product safety data search",
          navigate: false,
        },
        {
          referenceId: 3,
          id: 6,
          name: "OJI and leaves",
          navigate: true,
        },
        {
          referenceId: 3,
          id: 7,
          name: "pay and benefits",
          navigate: true,
        },
        {
          referenceId: 3,
          id: 8,
          name: "performance",
          navigate: true,
        },
        {
          referenceId: 3,
          id: 9,
          name: "inflight resource directory",
          navigate: false,
        },
        {
          referenceId: 3,
          id: 10,
          name: "mobile & web",
          navigate: true,
        },
        {
          referenceId: 3,
          id: 11,
          name: "AFA",
          navigate: false,
        },
        {
          referenceId: 4,
          id: 12,
          name: "catering",
          navigate: true,
        },
        {
          referenceId: 4,
          id: 13,
          name: "brand",
          navigate: true,
        },
      ],

      // Level 3 **************************
      pages: [
        {
          referenceId: 2,
          id: 0,
          name: "1-21 injury reporting",
        },
        {
          referenceId: 2,
          id: 1,
          name: "ASAP reporting",
        },
        {
          referenceId: 2,
          id: 2,
          name: "general ASAP information",
        },
        {
          referenceId: 2,
          id: 3,
          name: "flight attendant incident report",
        },
        {
          referenceId: 3,
          id: 4,
          name: "fruits and vegetables",
        },
        {
          referenceId: 6,
          id: 5,
          name: "1-21 injury reporting",
        },
        {
          referenceId: 6,
          id: 6,
          name: "ASAP reporting",
        },
        {
          referenceId: 6,
          id: 8,
          name: "general ASAP information",
        },
        {
          referenceId: 6,
          id: 9,
          name: "flight attendant incident report",
        },
        {
          referenceId: 7,
          id: 10,
          name: "pay",
        },
        {
          referenceId: 7,
          id: 11,
          name: "benefits",
        },
        {
          referenceId: 8,
          id: 12,
          name: "anaual performance review",
        },
        {
          referenceId: 10,
          id: 13,
          name: "mobile",
        },
        {
          referenceId: 10,
          id: 14,
          name: "web",
        },
        {
          referenceId: 12,
          id: 14,
          name: "food",
        },
        {
          referenceId: 12,
          id: 15,
          name: "beverage",
        },
        {
          referenceId: 13,
          id: 16,
          name: "uniform",
        },
        {
          referenceId: 13,
          id: 17,
          name: "mission & vision",
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  componentDidUpdate() {
    if (!this.props.navActive && this.state.navLevel != null) {
      this.setState({ navLevel: null, navCategoryId: null, navItemId: null, navPageId: null });
    }
  }
  handleClick(e, level, id = "", name = "", closeMenu = false, selected = false) {
    e.stopPropagation();
    e.preventDefault();
    if (level === 2) {
      this.setState({
        navLevel: level,
        navCategoryId: id,
        navItemId: id,

      });
    } else if (level === 3) {
      this.setState({
        navLevel: level,
        navPageId: id,
        tertiarySelected: selected
      });
    }
    if (closeMenu) {
      this.props.handleMenuOpenClose(this.setState({ navLevel: null, navCategoryId: null, navItemId: null, navPageId: null }));
    }
    this.props.getBreadcrumb(level, name);
  }
  toggleDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.navLevel === 3) {
      this.setState({
        navLevel: 2,
        tertiarySelected: false
      });
    } else{
      this.setState({
        navLevel: 3,
        tertiarySelected: true
      });
    }

  }

  render() {
    const { navActive } = this.props;
    return (
      <div style={{ height: window.innerHeight }} className="nav-container">
        <div className={`main-nav ${navActive ? "active" : "inactive"}`}>
          <div className="user-container">
            <img src="" alt="" />
            <p>Hello Donovan Beck</p>
          </div>
          <ul>
            <ListNavItems
              pages={this.state.pages}
              categories={this.state.categories}
              navItems={this.state.navItems}
              handleClick={this.handleClick}
              navLevel={this.state.navLevel}
              toggleDropdown={this.toggleDropdown}
              {...this.state}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default MainNav;


