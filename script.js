const picknumbtn = document.getElementById("pickanumbutton");
const result = document.getElementById("result");
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smart Watch",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Power Bank",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Board Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "T-shirt",
  "Water Bottle",
  "Pen Drive",
  "Coffee Mug",
  "Mobile Stand",
  "Wireless Mouse",
  "Earbuds",
  "Notebook",
  "Lunch Box",
  "Fitness Band",
  "Wireless Charger",
  "Puzzle Box",
  "Mini Fan",
  "USB Lamp",
  "₹300 Cash",
  "Caps",
  "Poster",
  "Photo Frame",
  "Mini Speaker",
  "Desk Plant",
  "Keychain",
  "Pen Set",
  "Portable Light",
  "Travel Bag",
  "Gamepad",
  "Phone Case",
  "Alarm Clock",
  "Bottle Opener",
  "LED Strip",
  "Fidget Toy",
  "Tripod"
];
picknumbtn.addEventListener("click",function(){
    console.log(Math.random()*10)
    let randomnum = Math.floor(Math.random()*50+1);
    console.log(gifts[randomnum-1]);
    result.textContent = `you have got ${randomnum},and you won ${gifts[randomnum-1]}`;
})

