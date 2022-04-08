const text = document.getElementById("text");
const cardsContainer = document.getElementById("cards");

var list = [];

const addCard = () => {
  if (isValid(text.value)) {
    return alert("Preencha o campo corretamente para continuar! 😡");
  }
  list.push(text.value);
  renderCards(list);
  text.value = "";
};

const renderCards = (cardList) => {
  const items = cardList.map(
    (card, index) =>
      `
    <div id="cardContainer" key="${index}" onclick="increment(${index})" style="background-color:${generateColor()}">
      <p>${card}</p>
      <input readonly id="count${index}" value="0">
      <button onclick="clearCount(${index})">Limpar</button>
    </div>
    `
  );
  cardsContainer.innerHTML = items.join("");
};

const increment = (index) => {
  let count = document.getElementById(`count${index}`);
  count.value++;
};

const clearCount = (index) => {
  let clear = document.getElementById(`count${index}`);
  clear.value = -1;
};

const isValid = (string) => {
  return string.length < 1 || !string.match(/[a-z]/i);
};

const generateColor = () => {
  const possibilities = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += possibilities[Math.floor(Math.random() * 16)];
  }
  return color;
};
