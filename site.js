const listing = "https://yandex.ru/maps/org/praktik/1292244940/";
const destinations = {
  org: listing,
  route: "https://yandex.ru/maps/?rtext=~56.280392%2C44.080611&rtt=auto",
  reviews: listing + "reviews/",
  gallery: listing + "gallery/",
  panorama: listing + "panorama/"
};

for (const link of document.querySelectorAll("[data-map]")) {
  link.href = destinations[link.dataset.map];
  link.target = "_blank";
  link.rel = "noopener";
}

const photos = [
  ["photo-1", "Фасад шиномонтажа на Казанском шоссе"],
  ["photo-3", "Вход в мастерскую и перечень работ"],
  ["photo-4", "Подъезд к мастерской вечером"],
  ["photo-5", "Вид на вход со стороны шоссе"],
  ["photo-6", "Вывеска над входом в сумерках"]
];
const gallery = document.querySelector("#gallery");
const viewer = document.querySelector("#viewer");
const large = document.querySelector("#large");
for (const [file, description] of photos) {
  const image = new Image();
  image.src = "assets/" + file + ".jpg";
  image.alt = description;
  image.loading = "lazy";
  const button = document.createElement("button");
  button.type = "button";
  button.append(image);
  button.addEventListener("click", () => {
    large.src = image.src;
    large.alt = description;
    viewer.showModal();
  });
  gallery.append(button);
}
document.querySelector("#close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});

