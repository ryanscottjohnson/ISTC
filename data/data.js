const navItems = navItems;
const categories = categories;
const pages = pages;

// export default [

  // level 1 **************************
  navItems, [
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
  categories, [
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
      name: "agriculture & customs",
      navigate: false,
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
      name: "oji and leave",
      navigate: true,
    },
    {
      referenceId: 3,
      id: 7,
      name: "pay & benefits",
      navigate: true,
    },
    {
      referenceId: 3,
      id: 8,
      name: "performance",
      navigate: false,
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
      navigate: false,
    },
    {
      referenceId: 3,
      id: 11,
      name: "AFA",
      navigate: false,
    },
  ],

  // Level 3 **************************
  pages, [
    {
      referenceId: 2,
      id: 3,
      name: "1-21 injury reporting",
    },
    {
      referenceId: 2,
      id: 4,
      name: "ASAP reporting",
    },
    {
      referenceId: 2,
      id: 5,
      name: "general ASAP information",
    },
    {
      referenceId: 2,
      id: 6,
      name: "flight attendant incident report",
    },
    {
      referenceId: 6,
      id: 7,
      name: "OJI",
    },
    {
      referenceId: 6,
      id: 8,
      name: "leave",
    },
    {
      referenceId: 7,
      id: 9,
      name: "pay",
    },
    {
      referenceId: 7,
      id: 10,
      name: "benefits",
    },
  ],
// ]