function showInfo(weight) {
  let info = '';
  switch(weight) {
      case '500g':
          info = '<span class="pink">Serve 5 a 8 pessoas</span><br>R$ 50 reais';
          break;
      case '1kg':
          info = '<span class="pink">Serve 10 a 15 pessoas</span><br>R$ 80 reais';
          break;
      case '2kg':
          info = '<span class="pink">Serve 20 a 30 pessoas</span><br>R$ 160 reais';
          break;
      case '3kg':
          info = '<span class="pink">Serve 30 a 40 pessoas</span><br>R$ 250 reais';
          break;
      case '4kg':
          info = '<span class="pink">Serve 40 a 60 pessoas</span><br>R$ 350 reais';
          break;
      case '5kg':
          info = '<span class="pink">Serve 70 a 90 pessoas</span><br>R$ 450 reais';
          break;
      default:
          info = '';
  }
  document.getElementById('info').innerHTML = info;
}