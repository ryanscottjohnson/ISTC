export const getCategories = (props) => {
  const filteredCategories = props.categories.filter((x)=>{
    if (x.referenceId == props.navCategory) {
      return x;
    }
    else{
      return false;
    }
  })
  .map((item, index) => {
    return item ;
  }
  );
  console.log("filteredCategories: ",filteredCategories);
  return filteredCategories;
}

export const getPages = (props) => {
  const filteredPages = props.pages.filter((x)=>{
    if (x.referenceId == props.navPages) {
      return x;
    }
    else{
      return false;
    }
  })
  .map((item, index) => {
    return item ;
  }
  );
  console.log("filteredCategories: ",filteredPages);
  return filteredPages;
}