module.exports = function check(str, bracketsConfig) {
  let br;
  let com;
  let counter;

  while (counter !== bracketsConfig.length) {
    counter = 0;

    for (i = 0; i < bracketsConfig.length; i++) {
      br = bracketsConfig[i][0] + bracketsConfig[i][1];
      com = str.replace(br, "");
      if (str === com) {
        counter++;
      }else{
        str = com;
      }
    }
  }

  return (str.length === 0) ? true : false;
}
