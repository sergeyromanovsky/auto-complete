export const hightlightMatchedText = (text: string, searchedText: string) => {
  const regexp = new RegExp(searchedText, "gi");

  return text.replace(regexp, (match) => `<mark>${match}</mark>`);
};
