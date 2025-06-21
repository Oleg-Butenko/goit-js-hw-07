const categoriesItems = document.querySelectorAll("#categories .item");

const message = `Number of categories: ${categoriesItems.length}`

console.log(message);

categoriesItems.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const items = item.querySelectorAll("li");
    console.log(`Categorie: ${title}`);
    console.log(`Elements: ${items.length}`);
})