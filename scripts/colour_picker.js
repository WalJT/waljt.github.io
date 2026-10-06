function random_colour() {
  const colours = ["Red", "Green", "Blue"];
  colour = colours[Math.floor(Math.random() * 3)];
  document.getElementById("demo").innerHTML = colour;
}
