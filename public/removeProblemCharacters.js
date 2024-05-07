function removeProblemCharacters(jsString) {
  return jsString.replace(/\u2019|\u00A0|\u2013/g, (match) => {
    switch (match) {
      case "\u2019":
        return '"';
      case "\u00A0":
        return " ";
      case "\u2013":
        return "-";
    }
  });
}
