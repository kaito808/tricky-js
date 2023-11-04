function curriedAdd() {
  let total = 0;

  function adder(value) {
    if (value === undefined) {
      return total;
    }

    total += value;
    return adder;
  }

  return adder;
}

module.exports = { curriedAdd };
