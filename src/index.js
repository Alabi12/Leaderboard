import "./style.css";

const list = document.querySelector(".list-Items");

const Items = [
  {
    Name: "robert",
    score: 100,
  },
  {
    Name: "robert",
    score: 50,
  },
  {
    Name: "robert",
    score: 80,
  },
  {
    Name: "benjamin",
    score: 200,
  },
];

let listItems;
const populateTable = () => {
  const ulTag = document.createElement("ul");
  Items.forEach((item) => {
    listItems += `<li class="list-item">${item.Name}: ${item.score}
  </li>`;
  });
  ulTag.innerHTML = listItems;
  list.appendChild(ulTag);
};

populateTable();
