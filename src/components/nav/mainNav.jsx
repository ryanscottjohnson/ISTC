/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import SecondaryNav from './SecondaryNav.jsx';
import TertiaryNav from './TertiaryNav.jsx';
import ListItems from './ListItems.jsx';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLevel: 1,
      navCategory: null, // integer to match main nav items to categories
      navPages: null, // //integer to match main nav items to categories
      navItems: [{
        id: 0,
        name: 'my schedule & biddings',
        navigate: true,
        icon: 'fas fa-calendar-alt',
      },
      {
        id: 1,
        name: 'saftey',
        navigate: true,
        icon: 'fas fa-lock',
      },
      {
        id: 2,
        name: 'ryans stuff',
        navigate: false,
        icon: 'fas fa-lock',
      },

      ],
      categories: [
        {
          referenceId: 0,
          id: 0,
          name: 'my schedule',
          navigate: false,
        },
        {
          referenceId: 0,
          id: 1,
          name: 'my biddings',
          navigate: false,
        },
        {
          referenceId: 1,
          id: 2,
          name: 'reporting',
          navigate: true,
        },
        {
          referenceId: 1,
          id: 3,
          name: 'agriculture and customs',
          navigate: true,
        },
        {
          referenceId: 1,
          id: 4,
          name: 'known crewmember',
          navigate: false,
        },
        {
          referenceId: 1,
          id: 5,
          name: 'product safety data search',
          navigate: false,
        },
      ],
      pages: [
        {
          referenceId: 3,
          id: 0,
          name: 'item-1',
        },
        {
          referenceId: 3,
          id: 1,
          name: 'item-2',
        },
        {
          referenceId: 2,
          id: 0,
          name: '1-21 injury reporting',
        },
        {
          referenceId: 2,
          id: 1,
          name: 'ASAP reporting',
        },
        {
          referenceId: 2,
          id: 2,
          name: 'general ASAP information',
        },
        {
          referenceId: 2,
          id: 3,
          name: 'flight attendant incident report',
        },
      ],


      // navItemsTemp: [
      //   { id: 2, name: 'training', categories: [], icon: 'fas fa-dumbbell' },
      //   {
      //     id: 3,
      //     name: 'administration',
      //     categories: [
      //       {
      //         parentId: 3,
      //         id: 0,
      //         name: 'OJI and leaves',
      //         pages: [
      //           {
      //             grandparentId: 3,
      //             parentId: 0,
      //             id: 0,
      //             name: '1-21 injury reporting'
      //           },
      //           {
      //             grandparentId: 3,
      //             parentId: 0,
      //             id: 1,
      //             name: 'ASAP reporting'
      //           },
      //           {
      //             grandparentId: 3,
      //             parentId: 0,
      //             id: 2,
      //             name: 'general ASAP information'
      //           },
      //           {
      //             grandparentId: 3,
      //             parentId: 0,
      //             id: 3,
      //             name: 'flight attendant incident report'
      //           }
      //         ]
      //       },
      //       {
      //         parentId: 3,
      //         id: 1,
      //         name: 'Pay and Benefits',
      //         pages: [
      //           {
      //             grandparentId: 3,
      //             parentId: 1,
      //             id: 0,
      //             name: 'pay'
      //           },
      //           {
      //             grandparentId: 3,
      //             parentId: 1,
      //             id: 1,
      //             name: 'benefits'
      //           }
      //         ]
      //       },
      //       {
      //         parentId: 3,
      //         id: 2,
      //         name: 'preformance',
      //         pages: [
      //           {
      //             grandparentId: 3,
      //             parentId: 2,
      //             id: 0,
      //             name: 'good'
      //           },
      //           {
      //             grandparentId: 3,
      //             parentId: 2,
      //             id: 1,
      //             name: 'bad'
      //           }
      //         ]
      //       },
      //       {
      //         parentId: 3,
      //         id: 3,
      //         name: 'inflight resource directory',
      //         pages: []
      //       },
      //       {
      //         parentId: 3,
      //         id: 4,
      //         name: 'mobile & web',
      //         pages: [
      //           {
      //             grandparentId: 3,
      //             parentId: 4,
      //             id: 0,
      //             name: 'mobile'
      //           },
      //           {
      //             grandparentId: 3,
      //             parentId: 4,
      //             id: 1,
      //             name: 'web'
      //           }
      //         ]
      //       },
      //       {
      //         parentId: 3,
      //         id: 5,
      //         name: 'AFA',
      //         pages: []
      //       }
      //     ],
      //     icon: 'fas fa-user-tie'
      //   },
      //   {
      //     id: 4,
      //     name: 'catering & brand',
      //     categories: [
      //       {
      //         parentId: 4,
      //         id: 0,
      //         name: 'catering',
      //         pages: [
      //           {
      //             grandparentId: 4,
      //             parentId: 0,
      //             id: 0,
      //             name: 'food'
      //           },
      //           {
      //             grandparentId: 4,
      //             parentId: 0,
      //             id: 1,
      //             name: 'drink'
      //           },
      //           {
      //             grandparentId: 4,
      //             parentId: 0,
      //             id: 2,
      //             name: 'alcohol'
      //           }
      //         ]
      //       },
      //       {
      //         parentId: 4,
      //         id: 1,
      //         name: 'brand',
      //         pages: [
      //           {
      //             grandparentId: 4,
      //             parentId: 1,
      //             id: 0,
      //             name: 'company colors'
      //           },
      //           {
      //             grandparentId: 4,
      //             parentId: 1,
      //             id: 1,
      //             name: 'uniforms'
      //           },
      //           {
      //             grandparentId: 4,
      //             parentId: 1,
      //             id: 2,
      //             name: 'vision'
      //           }
      //         ]
      //       }
      //     ],
      //     icon: 'fas fa-utensils'
      //   },
      //   { id: 5, name: 'hotels', categories: [], icon: 'fas fa-hotel' },
      //   { id: 6, name: 'my base', categories: [], icon: 'fas fa-home' },
      //   { id: 7, name: 'recognition', categories: [], icon: 'fas fa-brain' },
      //   {
      //     id: 8,
      //     name: 'my leadership team',
      //     categories: [],
      //     icon: 'fas fa-users'
      //   }

      // ]
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e, level, id = '', name = '', closeMenu=false) {
    
    e.preventDefault();
    if (level === 2) {
      this.setState({
        navLevel: level,
        navCategory: id,
      });
    }
    else if (level === 3) {
      this.setState({
        navLevel: level,
        navPages: id,
      });
    }
    if(closeMenu){
      console.log("closeMenu", closeMenu);
      this.props.handleMenuOpenClose(closeMenu);
    }
    this.props.getBreadcrumb(level, name);
  }

  render() {
    const { navActive } = this.props;
    if (navActive) {
      return (
        <div>
          <ul>
            <ListItems navItems={this.state.navItems} handleClick={this.handleClick} level={2} />
          </ul>
          <SecondaryNav {...this.state} handleClick={this.handleClick} />
          <TertiaryNav {...this.state} handleClick={this.handleClick} />
        </div>
      );
    }
    return null;
  }
}
export default MainNav;
