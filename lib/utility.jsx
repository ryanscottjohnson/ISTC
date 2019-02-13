export const renderWhen = (test, component, componentTwo) => 
  test ? component : componentTwo || undefined;

  export const toggler = options => 
    object
      .keys(options)
      .filter(keys => !!options[keys])
      .join(' ')