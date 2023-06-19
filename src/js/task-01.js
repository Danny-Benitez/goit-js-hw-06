const categories = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${categories.length}`);

//For each li.item element in the ul#categories list, will find and display in
//the console the element header text(<h2> tag) and the number of
//elements in the category(all nested < li >).

categories.forEach((category) => {
  const header = category.querySelector(`h2`).textContent;
  const elements = category.querySelectorAll("li").length;

  console.log(`Category: ${header}`);
  console.log(`Elements: ${elements}`);
});
