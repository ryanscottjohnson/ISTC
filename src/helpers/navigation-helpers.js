export const getCategories = (props, categoryId) => {
  const filteredCategories = props.categories.filter((x) => {
    if (x.referenceId == categoryId) {
      return x;
    } else {
      return false;
    }
  })
  .map((item, index) => {
    return item ;
  });
  return filteredCategories;
}

export const getPages = (props, pageId) => {
  const filteredPages = props.pages.filter((x)=>{
    if (x.referenceId == pageId) {
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
  return filteredPages;
}