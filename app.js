const $ = (e) => document.querySelector(e);
const $$ = (es) => Array.from(document.querySelector(es));

const productsWrap = $(".products");

const products = [
  {
    id: 1,
    image: "./images/skuter.png",
    title: "Kugoo",
    battery: "2000 mAh",
    speed: "60 km",
    price: "30 300 rub",
    power: "1,2 l.s",
    powerHour: "5 hours",
    discout: "29 900 rub",
    type: "Xit",
  },
  {
    id: 2,
    image: "./images/skuter.png",
    title: "Kugoo",
    battery: "2000 mAh",
    speed: "60 km",
    price: "30 300 rub",
    power: "1,2 l.s",
    powerHour: "5 hours",
    discout: "29 900 rub",
    type: "New",
  },
  {
    id: 3,
    image: "./images/skuter.png",
    title: "Kugoo",
    battery: "2000 mAh",
    speed: "60 km",
    price: "30 300 rub",
    power: "1,2 l.s",
    powerHour: "5 hours",
    discout: "29 900 rub",
    type: "Xit",
  },
  {
    id: 4,
    image: "./images/skuter.png",
    title: "Kugoo",
    battery: "2000 mAh",
    speed: "60 km",
    price: "30 300 rub",
    power: "1,2 l.s",
    powerHour: "5 hours",
    discout: "29 900 rub",
    type: "New",
  },
];

const print = () => {
  productsWrap.innerHTML = "";
  products.map(p => {
      productsWrap.innerHTML += `
        <div class="w-full border rounded-xl overflow-hidden border-black/10">
        <div class="w-full bg-[#F0F1F5] aspect-square relative">
          <img
            src="${p.image}"
            alt="${p.title}"
            class="w-full object-contain h-ful"
          />
          <span
            class="absolute top-2 left-2 inline-block px-2 py-0.5 rounded bg-[${p.type == "Xit" ? "#EE685F" : "#75D14A"}] text-sm text-white"
            >${p.type}</span
          >
        </div>
        <div class="p-4">
          <h3 class="text-lg font-[650]">Kugoo Kirin M4</h3>
          <ul class="text-black/60 grid grid-cols-2 gap-2 mt-3">
            <li>
              <i class="fa me-1 fa-car-battery"></i>
              <span>${[p.battery]}</span>
            </li>
            <li>
              <i class="fa me-1 fa-bolt"></i>
              <span>${p.power}</span>
            </li>
            <li>
              <i class="fa me-1 fa-gauge-high"></i>
              <span>${p.speed}</span>
            </li>
            <li>
              <i class="fa me-1 fa-stopwatch"></i>
              <span>${p.powerHour}</span>
            </li>
          </ul>
          <div class="flex justify-between mt-3 items-center">
            <div class="flex flex-col">
              ${p.discout ? `<del class="text-black/40">${p.price}</del>` : " "}
              <span class="font-semibold text-2xl">${p.discout ? p.discout : p.price}</span>
            </div>
            <button class="w-14 border text-[#6F73EE] text-xl border-black/20 rounded-full aspect-square flex items-center justify-center transition-all hover:bg-[#6F73EE] hover:text-white cursor-pointer">
              <i class="fa fas fa-shopping-basket"></i>
            </button>
          </div>
        </div>
      </div>
      `;
  })
};

print()