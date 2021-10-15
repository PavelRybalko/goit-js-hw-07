const listRef = document.querySelector('ul#categories');
const listCategoriesArr = Array.from(listRef.querySelectorAll('.item'));

console.log(`В списке ${listRef.children.length} категории.
	`);
Array.from(listRef.children).forEach((item) => {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  const secondListRef = item.lastElementChild;
  console.log(`Количество элементов: ${secondListRef.children.length}`);
});

export {};
// console.log(`В списке ${listCategoriesArr.length} категории.
// 	`);
// listCategoriesArr.forEach(item=>{
// 	const itemTitle = item.querySelector('h2').textContent;
// 	const itemListCount = item.querySelectorAll('ul>li').length;
// 	console.log(`Категория: ${itemTitle}`);
// 	console.log(`Количество элементов: ${itemListCount}
// 		`);
// });
