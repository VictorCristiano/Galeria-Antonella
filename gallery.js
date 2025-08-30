const photos = [
  { src: "https://i.postimg.cc/cLtYKmmr/a-5.jpg", category: "1m" },
  { src: "https://i.postimg.cc/HkvZmBLn/a-1.jpg", category: "1m" },
  { src: "https://i.postimg.cc/MGcspVcD/a-3.jpg", category: "1m" },
  { src: "https://i.postimg.cc/9Qyd8bqs/a-9.jpg", category: "1m" },
  { src: "https://i.postimg.cc/VsbW0zkY/a-22.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/Pf1RDWSV/a-4.jpg", category: "1m" },
  { src: "https://i.postimg.cc/FHGyXRDx/a-26.jpg", category: "1m" },
  { src: "https://i.postimg.cc/Qd8whFk4/a-2.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/d0B8v06B/a-10.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/GmDK0r67/a-8.jpg", category: "1m" },
  { src: "https://i.postimg.cc/gJt8XBfL/a-13.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/jjKzGfH2/a-12.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/vBZ5mdSd/a-11.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/D0tG54f2/a-16.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/yYZcxjnW/a-17.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/XYK5cvRb/a-18.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/SRX8WfhT/a-15.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/3wKvLThD/a-19.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/jd0QzBDy/a-25.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/PrQZ1Jsk/a-27.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/VNDbpVsZ/a-20.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/qgVt2fQq/a-21.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/fTd3vbGb/a-30.jpg", category: "1m" }, 
  { src: "https://i.postimg.cc/wB0g49jZ/20250809-203916-1.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/0Q4xxZmC/20250809-203823.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/rwG8W1X8/20250809-203806.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/jddBrWh8/a-6.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/9fGL9VpR/a-7.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/4N6vwwcq/a-24.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/fTF4jxGG/a23.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/JhsGYc0j/a-29.jpg", category: "1m" },    
  { src: "https://i.postimg.cc/4yLSL1BG/antonella1.jpg", category: "1m" },
  { src: "https://i.postimg.cc/1RJ239Pd/antonella2.png", category: "1m" },
  { src: "https://i.postimg.cc/wTrrD01c/antonella3.jpg", category: "1m" },
  { src: "https://i.postimg.cc/8Pc3Fqzz/antonella4.jpg", category: "1m" },
  { src: "https://i.postimg.cc/K8gHfBLX/antonella5.jpg", category: "1m" }
];

const gallery = document.getElementById("gallery");
const filterSelect = document.getElementById("filter");

let currentIndex = 0;
let filteredPhotos = photos;

// Função para carregar fotos
function loadPhotos(filter = "all") {
  gallery.innerHTML = ""; // limpa a galeria

  filteredPhotos =
    filter === "all" ? photos : photos.filter(photo => photo.category === filter);

  filteredPhotos.forEach((photo, index) => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = "Foto da Antonella";
    gallery.appendChild(img);

    // Evento para abrir em lightbox
    img.addEventListener("click", () => {
      currentIndex = index;
      openLightbox(photo.src);
    });
  });
}

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

// Selecionar elementos do lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// NOVO: botões prev/next
const prevBtn = document.querySelector(".lightbox .prev");
const nextBtn = document.querySelector(".lightbox .next");

// Fechar lightbox ao clicar no X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Fechar lightbox ao clicar fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Navegar para próxima/prev foto
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % filteredPhotos.length;
  lightboxImg.src = filteredPhotos[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
  lightboxImg.src = filteredPhotos[currentIndex].src;
});

// Também funciona com teclado ← → Esc
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % filteredPhotos.length;
      lightboxImg.src = filteredPhotos[currentIndex].src;
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      lightboxImg.src = filteredPhotos[currentIndex].src;
    }
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});

// Evento de filtro
filterSelect.addEventListener("change", (e) => {
  loadPhotos(e.target.value);
});

// Carrega todas as fotos no início
loadPhotos();
