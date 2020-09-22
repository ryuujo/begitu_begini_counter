let beginiCount = 0;
let begituCount = 0;
let begonohCount = 0;

this.addEventListener('keypress', (event) => {
  switch (event.key) {
    case 'w':
      begituCount++;
      break;
    case 'e':
      beginiCount++;
      break;
    case 'q':
      begonohCount++;
      break;
    case 'p':
      beginiCount = 0;
      begituCount = 0;
      begonohCount = 0;
      break;
  }
  document.getElementById('begini').innerHTML = beginiCount;
  document.getElementById('begitu').innerHTML = begituCount;
  document.getElementById('begonoh').innerHTML = begonohCount;
  console.log(beginiCount, begituCount, begonohCount);
});
