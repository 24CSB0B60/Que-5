document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const value = button.textContent;

      if (value === 'C') {
        display.value = '';
      } else if (value === '=') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
      } else {
        display.value += value;
      }
    });
  });
});