const list = document.querySelector("#categories");
const li = list.children;

console.log(`Amount of categories: ${li.length}`);

let step = 0;

for (let el of li) {
  step += 1;

  console.group(step);
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Ampunt of li: ${el.children[1].children.length}`);
  console.groupEnd();
}
