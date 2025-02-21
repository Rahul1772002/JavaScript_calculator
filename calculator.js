let val = '';
let t_val = '';

function display(value) {
  val += value;
  document.getElementById('disp').innerHTML = val;
}

function show_val(sval) {
  document.getElementById('disp').innerHTML = sval;
}

function reset() {
  document.getElementById('disp').innerHTML = '';
  val = '';
  t_val = '';
  fact = '1';
}

function solve() {
  clear();
  let y = eval(val);
  val = y;
  document.getElementById('disp').innerHTML = y;
}

function back() {
  let new_val = val.substring(0, val.length - 1);
  val = new_val;
  document.getElementById('disp').innerHTML = val;
}

function clear() {
  document.getElementById('disp').innerHTML = '';
}

function toggle() {
  let x;
  for (x = 0; x < val.length; x++) {
    if (val[x] == '-') {
      t_val += '+';
    } else if (val[x] == '+') {
      t_val += '-';
    } else {
      t_val += val[x];
    }
  }

  solve_t(t_val);
}

function solve_t(val) {
  clear();
  let y = eval(val);
  val = y;
  document.getElementById('disp').innerHTML = y;
}

function base_ten_exponent() {
  bte = 10 ** val;
  show_val(bte);
}

function square() {
  sqr = val * val;
  document.getElementById('disp').innerHTML = sqr;
}

function sqr_root() {
  sqr_rt = Math.sqrt(val);
  document.getElementById('disp').innerHTML = sqr_rt;
}

function factorial() {
  let fact = 1;
  for (let x = 1; x <= val; x++) {
    fact = fact * x;
  }
  val = fact;
  show_val(val);
}

function show_sin() {
  val += 'sin(';
  show_val(val);
}

function cal_sin(val) {
  sin_val = Math.sin(val);
  show_val(sin_val);
}
