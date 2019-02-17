export const getCategories = (props, categoryId) => {
  // console.log("categoryId: ", categoryId);
  const filteredCategories = props.categories.filter((x)=>{
    if (x.referenceId == categoryId) {
      return x;
    } else {
      return false;
    }
  })
  .map((item, index) => {
    return item ;
  });
  // console.log("filteredCategories: ",filteredCategories);
  return filteredCategories;
}

export const getPages = (props, pageId) => {
  // console.log("pageId: ", pageId);
  const filteredPages = props.pages.filter((x)=>{
    // console.log("referenceId: ", x.referenceId);
    if (x.referenceId == pageId) {
      // console.log("x: ", x);
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
  // console.log("filteredPages: ",filteredPages);
  return filteredPages;
}