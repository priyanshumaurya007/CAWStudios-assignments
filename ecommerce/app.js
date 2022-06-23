const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 0
  },
  {
    name: 'Spaghetti Meat Sauce',
    price: 782,
    image: 'plate__spaghetti-meat-sauce.png',
    alt: 'Spaghetti with Meat Sauce',
    count: 0
  },
  {
    name: 'Bacon, Eggs, and Toast',
    price: 599,
    image: 'plate__bacon-eggs.png',
    alt: 'Bacon, Eggs, and Toast',
    count: 0
  },
  {
    name: 'Chicken Salad with Parmesan',
    price: 698,
    image: 'plate__chicken-salad.png',
    alt: 'Chicken Salad with Parmesan',
    count: 0
  },
  {
    name: 'Fish Sticks and Fries',
    price: 634,
    image: 'plate__fish-sticks-fries.png',
    alt: 'Fish Sticks and Fries',
    count: 0
  }
];

const addItems = document.querySelectorAll('.add');
const cartDetails = document.querySelector('.cart-summary');
const CheckForEmptyCart = document.querySelector('.empty');
const DivForSubTotal = document.querySelector('.amount.price.subtotal');
const amountOfTax = document.querySelector('.amount.price.tax');
const amountOfTotal = document.querySelector('.amount.price.total');
let taxValue = 0,
  subTotalValue = 0,
  totalValue = 0;

const updatePrice = () => {
  subTotalValue = 0;
  for (let i = 0; i < menuItems.length; i++) {
    subTotalValue += menuItems[i].price * menuItems[i].count;
  }
  taxValue = subTotalValue * 0.0975;
  taxValue = Math.round(taxValue * 100) / 100;
  subTotalValue = subTotalValue / 10;
  amountOfTax.innerText = '$' + Math.round(taxValue / 100);
  totalValue = subTotalValue + taxValue;
  totalValue = Math.round(totalValue * 100) / 100;
  DivForSubTotal.innerText = '$' + subTotalValue;
  amountOfTotal.innerText = '$' + totalValue;
  if (subTotalValue == 0) {
    CheckForEmptyCart.style.display = 'block';
  } else {
    CheckForEmptyCart.style.display = 'none';
  }
};

const updateItem = (item, quantity, subtotal) => {
  quantity.innerHTML = item.count;
  subtotal.innerHTML = '$' + (item.count * item.price) / 100;
  updatePrice();
};

const appendItem = (element, idx) => {
  let listOfItems = document.createElement('li');
  listOfItems.setAttribute('id', idx);
  let img = document.createElement('img');

  let divForPlateImage = document.createElement('div');
  divForPlateImage.setAttribute('class', 'plate');
  img.setAttribute('src', `images/${menuItems[idx].image}`);
  img.setAttribute('alt', menuItems[idx].alt);
  img.setAttribute('class', 'plate');
  divForPlateImage.append(img);
  let quantity = document.createElement('div');
  quantity.setAttribute('class', 'quantity');
  menuItems[idx].count += 1;
  quantity.innerHTML = menuItems[idx].count;
  divForPlateImage.append(quantity);
  listOfItems.append(divForPlateImage);

  let divForContent = document.createElement('div');
  divForContent.setAttribute('class', 'content');
  let name = document.createElement('p');
  name.setAttribute('class', 'menu-item');
  name.innerHTML = menuItems[idx].name;
  divForContent.append(name);
  let price = document.createElement('p');
  price.setAttribute('class', 'price');
  price.innerHTML = '$' + menuItems[idx].price / 100;
  divForContent.append(price);
  listOfItems.append(divForContent);

  let divForButton = document.createElement('div');
  divForButton.setAttribute('class', 'quantity__wrapper');
  let decrementButton = document.createElement('button');
  decrementButton.setAttribute('class', 'decrease');
  img = document.createElement('img');
  img.setAttribute('src', 'images/chevron.svg');
  decrementButton.append(img);
  divForButton.append(decrementButton);
  divForButton.append(quantity);
  let incrementButton = document.createElement('button');
  incrementButton.setAttribute('class', 'increase');
  img = document.createElement('img');
  img.setAttribute('src', 'images/chevron.svg');
  incrementButton.append(img);
  divForButton.append(incrementButton);
  listOfItems.append(divForButton);

  let divSubtotal = document.createElement('div');
  divSubtotal.setAttribute('class', 'subtotal');
  divSubtotal.innerHTML =
    '$' + (menuItems[idx].price * quantity.innerHTML) / 100;
  listOfItems.append(divSubtotal);

  decrementButton.addEventListener('click', () => {
    if (menuItems[idx].count == 1) {
      cartDetails.removeChild(listOfItems);
      element.classList.remove('in-cart');
      element.classList.add('add');
      element.disabled = false;
      element.innerText = 'Add to cart';
    }
    menuItems[idx].count--;
    updateItem(menuItems[idx], quantity, divSubtotal);
  });

  incrementButton.addEventListener('click', () => {
    menuItems[idx].count++;
    updateItem(menuItems[idx], quantity, divSubtotal);
  });

  cartDetails.append(listOfItems);
  updatePrice();
};

const addItemToCart = (element, idx) => {
  appendItem(element, idx);
  element.classList.remove('add');
  element.classList.add('in-cart');
  element.innerHTML = '';
  const img = document.createElement('img');
  img.setAttribute('src', 'images/check.svg');
  element.append(img);
  element.append('In Cart');
  element.disabled = true;
};

addItems.forEach((elem, idx) => {
  elem.addEventListener('click', () => {
    addItemToCart(elem, idx);
  });
});
