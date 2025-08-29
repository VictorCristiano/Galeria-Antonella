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

// Função para carregar fotos
function loadPhotos(filter = "all") {
  gallery.innerHTML = ""; // limpa a galeria

  const filteredPhotos =
    filter === "all"
      ? photos
      : photos.filter(photo => photo.category === filter);

  filteredPhotos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = "Foto da Antonella";
    gallery.appendChild(img);
  });
}

// Evento de filtro
filterSelect.addEventListener("change", (e) => {
  loadPhotos(e.target.value);
});

// Carrega todas as fotos no início
loadPhotos();

function loadPhotos(filter = "all") {
  gallery.innerHTML = ""; // limpa a galeria

  const filteredPhotos =
    filter === "all"
      ? photos
      : photos.filter(photo => photo.category === filter);

  filteredPhotos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = "Foto da Antonella";
    gallery.appendChild(img);

    // Evento para abrir em lightbox
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = photo.src;
    });
  });
}

// Selecionar elementos do lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

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