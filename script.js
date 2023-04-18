const leftinput = document.querySelector('#left');
const rightinput = document.querySelector('#right');
const button = document.querySelector('#click');
const arrays = document.querySelector('.weights');

button.addEventListener('click', () => {
  const newArr = JSON.parse(arr.value);

  for(let i = 0; i < newArr.length; i++) {
    for(let j = 0; j < newArr.length; j++) {
      if((leftinput.value + newArr[i]) === (rightinput.value + newArr[j])) {
        document.querySelector('.displaynum')
        innerHTML = `${newArr[i]} and ${newArr[j]} are needed to balance ${leftinput.value} and ${rightinput} respectiively`
        return;
      }
      else if (i === newArr.length - 1) {
        document.querySelector('.displaynone')
      }
    }
  }
})

