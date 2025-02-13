const isCheckValue = (value) => {
  if (!value) {
    return false;
  } else {
    let obj = {};
    for (let key in value) {
      if (value[key] == "") {
        continue;
      } else {
        obj[key] = value[key];
      }
    }

    return obj;
  }
};

export { isCheckValue };
