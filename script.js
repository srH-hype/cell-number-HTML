console.log('ESTA');

const  metod1InputText = document.getElementById('metod-1-input-text');
const  metod2InputText = document.getElementById('metod-2-input-text');
const randomNumberBtn = document.getElementById('randomNumberBtn');

randomNumberBtn.addEventListener('click', () => {
	generateTenDigitNumber();
});

metod1InputText.addEventListener('input', () =>{
	if (metod1InputText.value.length > metod1InputText.maxLength) {
    metod1InputText.value = metod1InputText.value.slice(0, metod1InputText.maxLength);
  }
});

function generateTenDigitNumber() {
  const maxNumber = 9999999999;
  const randomNumber = Math.floor(Math.random() * maxNumber);
  const formattedNumber = String(randomNumber).padStart(10, '0');
  metod2InputText.value = formattedNumber;
}

generateTenDigitNumber();