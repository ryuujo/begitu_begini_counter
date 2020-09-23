let beginiCount = 0;
let beginiTotal = 0;
let begituCount = 0;
let begituTotal = 0;
let begonohCount = 0;
let begonohTotal = 0;
let kazooCount = 0;
let kazooTotal = 0;

this.addEventListener('keypress', (event) => {
  switch (event.key) {
    case 'q':
      begonohCount++;
      begonohTotal++;
      break;
    case 'w':
      begituCount++;
      begituTotal++;
      break;
    case 'e':
      beginiCount++;
      beginiTotal++;
      break;
    case 'k':
      kazooCount++;
      kazooTotal++;
      break;
    case 'p':
      beginiCount = 0;
      begituCount = 0;
      begonohCount = 0;
      kazooCount = 0;
      break;
  }
  document.getElementById('begini').innerHTML = beginiCount;
  document.getElementById('begitu').innerHTML = begituCount;
  document.getElementById('begonoh').innerHTML = begonohCount;
  document.getElementById('kazoo').innerHTML = kazooCount;
  document.getElementById('beginitotal').innerHTML = beginiTotal;
  document.getElementById('begitutotal').innerHTML = begituTotal;
  document.getElementById('begonohtotal').innerHTML = begonohTotal;
  document.getElementById('kazoototal').innerHTML = kazooTotal;
});
