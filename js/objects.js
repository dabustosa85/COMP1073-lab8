function Hamburger(bun, garnish, cheese, sauce, meat, patties, toppings) {
    this.bun = bun;
    this.garnish = garnish;
    this.cheese = cheese;
    this.sauce = sauce;
    this.meat = meat;
    this.patties = patties;
    this.toppings = toppings;
}

function crearHamburguesa() {
    const bun = prompt("Type of Bread: (Pita, Focaccia, Multigrain, Brioche)");
    const garnish = prompt("Type of Garnish: (Lettuce, Tomato, Onion, Pickles, Hot Peppers, Olives)");
    const cheese = prompt("Type of Cheese: (Cheddar, Mozzarella, Gouda, No Cheese)");
    const sauce = prompt("Type of Sauce: (Ketchup, Mustard, Mayo, BBQ, Hot Sauce)");
    const meat = prompt("Type of Meat: (Beef, Chicken, Veggie)");
    const patties = prompt("Type of Patties: (single, double, triple)");
    const toppings = prompt("Type of Topping: (pickles, hot peppers, olives)");

    const miHamburguesa = new Hamburger(bun, garnish, cheese, sauce, meat, patties, toppings.split(', '));

    const resultado = `
    <h2>Your Burger:</h2>
    <ul>
      <li>Bread: ${miHamburguesa.bun}</li>
      <li>Garnish: ${miHamburguesa.garnish}</li>
      <li>Cheese: ${miHamburguesa.cheese}</li>
      <li>Sauce: ${miHamburguesa.sauce}</li>
      <li>Meat: ${miHamburguesa.meat}</li>
      <li>Patties: ${miHamburguesa.patties}</li>
      <li>Toppings: ${miHamburguesa.toppings.join(', ')}</li>
    </ul>
  `;

    document.getElementById("resultado").innerHTML = resultado;
}


