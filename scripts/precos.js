function showInfo(weight) {
  let info = '';
  switch(weight) {
      case '500g':
          info = '<span class="pink">Serve 4 a 6 pessoas</span><br><span class="riscado"> R$ 50 reais </span><span> <br> <span class="desconto"> R$ 45 reais </span>';
          break;
      case '1kg':
          info = '<span class="pink">Serve 8 a 12 pessoas</span><br><span class="riscado"> R$ 80 reais </span><span> <br> <span class="desconto"> R$ 72 reais </span>';
          break;
      case '2kg':
          info = '<span class="pink">Serve 16 a 24 pessoas</span><br><span class="riscado"> R$ 160 reais </span><span> <br> <span class="desconto"> R$ 144 reais </span>';
          break;
      case '3kg':
          info = '<span class="pink">Serve 24 a 36 pessoas</span><br><span class="riscado"> R$ 240 reais </span><span> <br> <span class="desconto"> R$ 216 reais </span>';
          break;
      case '4kg':
          info = '<span class="pink">Serve 32 a 48 pessoas</span><br><span class="riscado"> R$ 320 reais </span><span> <br> <span class="desconto"> R$ 288 reais </span>';
          break;
      case '5kg':
          info = '<span class="pink">Serve 40 a 60 pessoas</span><br><span class="riscado"> R$ 400 reais </span><span> <br> <span class="desconto"> R$ 360 reais </span>';
          break;
      default:
          info = '';
  }
  document.getElementById('info').innerHTML = info;
}
