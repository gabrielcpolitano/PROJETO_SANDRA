function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as imagens na galeria
    var images = document.querySelectorAll('.spotlight img');
    
    images.forEach(function(img) {
        var mc = new Hammer(img);
        // Habilita o reconhecimento de gestos de pinça
        mc.get('pinch').set({ enable: true });
        // Variáveis para rastrear a escala inicial e o zoom atual
        var initialScale = 1;
        var currentScale = 1;
        // Evento de pinça
        mc.on('pinchstart', function() {
            initialScale = currentScale;
        });
        mc.on('pinch', function(ev) {
            currentScale = initialScale * ev.scale;
            img.style.transform = 'scale(' + currentScale + ')';
        });
        // Evento de pinça finalizado para resetar a escala
        mc.on('pinchend', function() {
            if (currentScale < 1) {
                currentScale = 1;
                img.style.transform = 'scale(1)';
            }
        });
    });
});