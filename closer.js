const closer = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

const getCount = closer();
console.log(getCount());
console.log(getCount());
console.log(getCount());
console.log(getCount());
console.log(getCount());

const getAgainCount = closer();
console.log(getAgainCount());
