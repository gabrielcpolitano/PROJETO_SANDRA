function showInfo(weight) {
  let info = '';
  switch(weight) {
      case '500g':
          info = '<span class="pink">Serve 4 a 6 pessoas</span><br>R$ 50 reais';
          break;
      case '1kg':
          info = '<span class="pink">Serve 8 a 12 pessoas</span><br>R$ 80 reais';
          break;
      case '2kg':
          info = '<span class="pink">Serve 16 a 24 pessoas</span><br>R$ 160 reais';
          break;
      case '3kg':
          info = '<span class="pink">Serve 24 a 36 pessoas</span><br>R$ 240 reais';
          break;
      case '4kg':
          info = '<span class="pink">Serve 32 a 48 pessoas</span><br>R$ 320 reais';
          break;
      case '5kg':
          info = '<span class="pink">Serve 40 a 60 pessoas</span><br>R$ 400 reais';
          break;
      default:
          info = '';
  }
  document.getElementById('info').innerHTML = info;
}