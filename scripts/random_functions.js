function random_colour() {
  const colours = ["Red", "Green", "Blue", "Orange", "Purple", "Yellow"];
  colour = colours[Math.floor(Math.random() * colours.length)];
  document.getElementById("demo").innerHTML = colour;
}
