class Calculator {
  constructor() {
      let mem = '';

      this.operators = {
          '+' : (a,b) => a+b,
          '-' : (a,b) => a-b,
          '*' : (a,b) => a*b,
          '/' : (a,b) => (a-a%b)/b
      };

      Object.defineProperties(this, { 'value': {
          'get': ()=> mem,
          'set': (v) => {
              mem = v;
              document.getElementById('res').innerHTML = mem;
          }
      }});
  }
  click(event) {
      let fn = this[event.target.id + '_click'];
      if (typeof fn === 'function') {
          fn.call(this)
      }
      else {
          let btn = event.target.innerText;
          let trailingnum = this.value[this.value.length-1]*1;

          if (btn == 1 || !Number.isNaN(trailingnum))
              this.value += btn;
      }
  }
  btnClr_click() {
      this.value = '';
  }
  btnEql_click() {
      let exp = '+' + this.value;
      let rex = /[^\d]\d+/g, parsed = [], m;

      while (m = rex.exec(exp)) {
          parsed.push(m[0]);
      }

      let r = parsed.reduce((result, op) => {
         let operator = op[0];
         let operand = parseInt(op.substr(1), 2);
         return this.operators[operator](result, operand);
      }, 0);

      this.value = r.toString(2);
  }
}

let calc = new Calculator();
