// Playground

// Bai1
function total(a, b) {
  if(a === b) { 
    return 3 * (a + b);
  }
  return a + b;
}

// Bai2
function great(a, b = 19) {
  if(a > b) { 
    return 3 * (a - b);
  }
  return b - a;
}

// Bai3 
function devide3(a){
  var c = [], b;
  for(var i = 0; i <= 9; i++) {
    b = a.replace("*", i);
    if(parseInt(b) % 3 === 0)
    c.push(b);
  }
  return c;
}

// Bai4
function devide6(a) {
  var c = [], b;
  for (var i = 0; i <= 9; i++) {
    b = a.replace("*", i);
    if ((parseInt(b) % 6 == 0))
      c.push(b);
  }
  return c;
}
