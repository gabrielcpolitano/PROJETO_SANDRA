        // Gera um número aleatório para o cupom
        function generateRandomNumber() {
          return Math.floor(100000 + Math.random() * 900000);
      }

      // Define o número do cupom no elemento HTML
      const couponNumber = generateRandomNumber();
      document.getElementById('coupon-number').innerText = "Cupom " + couponNumber;

      // Função para redirecionar o usuário ao clicar no botão
      function redirect() {
          const phoneNumber = "5516997677955";  // Número do WhatsApp com código do país e DDD
          const message = `Olá, vim pelo site gostaria de fazer o pedido com os descontos do site !! Esse é o meu cupom *🢡${couponNumber}🢠*`;
          const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.location.href = url;
      }





      document.addEventListener("DOMContentLoaded", function() {
        var emojiContainer = document.getElementById("emoji-container");
        var emojiCount = 0;
        var maxEmojis = 3;

        var emojiInterval = setInterval(function() {
            if (emojiCount < maxEmojis) {
                emojiContainer.textContent += "🍰";
                emojiCount++;
            }
        }, 1000);

        // Simula a geração do cupom com um atraso de 3 segundos
        setTimeout(function() {
            clearInterval(emojiInterval);
            
            // Gerar o código do cupom
            var couponCode = "DESCONTO10";
            
            // Esconde a animação de carregamento
            document.getElementById("loading").classList.add("hidden");
            
            // Mostra o cartão do cupom
            document.getElementById("coupon-card").style.display = "block";
            
            // Exibe o código do cupom
            document.getElementById("coupon-number").textContent = couponCode;
        }, 3500);
    });