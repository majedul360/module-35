function wish(name, wishHandler) {
  wishHandler(name);
}

function gdMorning(name) {
  console.log("gd morning", name);
}

function gdAfternon(name) {
  console.log("gd afternoon", name);
}
wish("majedul", gdMorning);
wish("ontor", gdAfternon);

function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32);
