const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('ul#ingredients');

const markupArr: Element[] = ingredients.reduce((acc, item) => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  return (acc = [...acc, listItemRef]);
}, []);

listRef.append(...markupArr);

export {};
// const createItemMarkup = ingredient => {
// 	const listItemRef = document.createElement('li');
// 	listItemRef.textContent = ingredient;
// 	return listItemRef;
// }

// const markupArr = ingredients.map(ingredient =>
// 	createItemMarkup(ingredient));

// listRef.append(...markupArr);
