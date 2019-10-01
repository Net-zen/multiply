module.exports = function multiply(first, second) {
  const a = first.split('').reverse();
  const b = second.split('').reverse();
  const product = [];
  a.forEach((el, i) => {
    b.forEach((e, j) => {
      product.splice((i+j),1 ,((product[i+j]) 
                                ? product[i+j] + (el * e) 
                                : (el * e))
      );
    });
  });
  product.forEach((element, i) => {
    product.splice((i),1, product[i] %= 10);
    let stack = Math.floor(element / 10);
    if (product[i+1]){
      product.splice((i+1),1, product[i+1] += stack);
    } else if (stack){
      product.push(stack);
    }
  });
  return product.reverse().join('');
}
