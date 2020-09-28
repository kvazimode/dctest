const clickButtonHandler = (e, value) => {
  if (e.currentTarget.className == `increase`) {
    value++;
  } else {
    value--;
  }
  return value;
}

export default clickButtonHandler;
