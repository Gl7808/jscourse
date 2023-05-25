const btn = document.getElementById('btn')
const image = document.getElementById('image')
const title = document.getElementById('title')
const price = 1100000
const spent = document.getElementById('spent')
const opend = document.getElementById('opend')
const profit = document.getElementById('profit')
const chat = document.getElementById('chat_container')

//157 за 2к квестов
const items = [{
    name: 'Идеальный приз', dropChance: 87.855, img: 'assets/image/perfect-token.png', cost: 250000, counter:0
}, {
    name: 'Отличный приз', dropChance: 2.5, img: 'assets/image/TokenOfBestLuck.png', cost: 5000000, counter:0
}, {
    name: 'Платиновый амулет', dropChance: 1, img: 'assets/image/SpiritCharm.png', cost: 350000, counter:0
}, {
    name: 'Платиновый Идол', dropChance: 1, img: 'assets/image/GuardianCharm.png', cost: 850000, counter:0
}, {
    name: 'Печать светил', dropChance: 2, img: 'assets/image/Seal.png', cost: 250000, counter:0
}, {
    name: 'Выгравированнное лезвие', dropChance: 1, img: 'assets/image/SpiritChisel.png', cost: 250000, counter:0
}, {
    name: 'Бронзовая монета', dropChance: 2, img: 'assets/image/LuckyCoin.png', cost: 250000, counter:0
}, {
    name: 'Алмазная броня', dropChance: 0.08, img: 'assets/image/DiamondOfTiger.png', cost: 45000000, counter:0
}, {
    name: 'Каменная броня', dropChance: 0.08, img: 'assets/image/DiamondOfDragon.png', cost: 45000000, counter:0
}, {
    name: 'Камень нюйввы', dropChance: 0.08, img: 'assets/image/StoneSavant.png', cost: 45000000, counter:0
}, {
    name: 'Камень Сюань Юань', dropChance: 0.08, img: 'assets/image/PrimevalStone.png', cost: 15000000, counter:0
}, {
    name: 'Камень Пань Гу', dropChance: 0.08, img: 'assets/image/pangu.png', cost: 75000000, counter:0
}, {
    name: 'Красный глаз', dropChance: 0.08, img: 'assets/image/GarnetGem.png', cost: 45000000, counter:0
}, {
    name: 'Камень безбрежности', dropChance: 0.08, img: 'assets/image/CitrineGem.png', cost: 15000000, counter:0
}, {
    name: 'Камень морской лазури', dropChance: 0.08, img: 'assets/image/SapphireGem.png', cost: 15000000, counter:0
}, {
    name: 'Коробка таинственных фишек', dropChance: 0.5, img: 'assets/image/box.png', cost: 4500000, counter:0
}, {
    name: 'Эмблема Города Инея', dropChance: 0.15, img: 'assets/image/FrostcoveredSignForce.png', cost: 9000000, counter:0
}, {
    name: 'Украшение знак луны', dropChance: 0.15, img: 'assets/image/LunarGladeOrnament.png', cost: 45000000, counter:0
}, {
    name: 'Оружие знак луны', dropChance: 0.15, img: 'assets/image/LunarGladeWeapon.png', cost: 85000000, counter:0
}, {
    name: 'Крылья бога удачи', dropChance: 0.08, img: 'assets/image/WingLinarGlade.png', cost: 45000000, counter:0
}, {
    name: 'Крылья пегаса', dropChance: 0.1, img: 'assets/image/WingsOfCloudcharger.png', cost: 45000000, counter:0
}, {
    name: 'Награда истинному чемпиону', dropChance: 0.1, img: 'assets/image/ChampionshipScroll.png', cost: 45000000, counter:0
}, {
    name: 'Знак командира', dropChance: 0.1, img: 'assets/image/WarsongMarshalBadge.png', cost: 75000000, counter:0
}, {
    name: 'Печать куба', dropChance: 0.1, img: 'assets/image/CubeOfFate.png', cost: 75000000, counter:0
}, {
    name: 'Книга судьбы', dropChance: 0.06, img: 'assets/image/ScriptOfFate.png', cost: 45000000, counter:0
}, {
    name: 'Камень джунглей', dropChance: 0.1, img: 'assets/image/StoneJungle.png', cost: 1500000, counter:0
}, {
    name: 'Шкатулка таинственного света(воспр)', dropChance: 0.1, img: 'assets/image/RaptureChest.png', cost: 145000000, counter:0
}, {
    name: 'Загадочная шкатулка', dropChance: 0.2, img: 'assets/image/UncannyChest.png', cost: 45000000, counter:0
}, {
    name: 'Божественный свиток', dropChance: 0.006, img: 'assets/image/ScrollOfTome.png', cost: 185000000, counter:0
}, {
    name: 'Дух звездного неба', dropChance: 0.008, img: 'assets/image/SpiritStarSky.png', cost: 450000, counter:0
}, {
    name: 'Несравненный плащ', dropChance: 0.008, img: 'assets/image/godcape.png', cost: 450000000, counter:0
}, {
    name: 'Капюшон победителя', dropChance: 0.0001, img: 'assets/image/HeavenHat.png', cost: 450000000, counter:0
}, {
    name: 'Шлем победителя', dropChance: 0.0001, img: 'assets/image/HeavenHelm.png', cost: 450000000, counter:0
}, {
    name: 'Шлем победы', dropChance: 0.0001, img: 'assets/image/helmofwin.png', cost: 450000000, counter:0
}, {
    name: 'Загадочное ограбление', dropChance: 0.05, img: 'assets/image/mystRobb.png', cost: 450000, counter:0
}, {
    name: 'Свиток дракона', dropChance: 0.03, img: 'assets/image/DragonScroll.png', cost: 450000, counter:0
}, {
    name: 'Яшмовый осколок', dropChance: 0.01, img: 'assets/image/Splinter.png', cost: 450000, counter:0
}];

const lerp = (min, max, value) => ((1 - value) * min + value * max);

const drop = items => {
    const total = items.reduce((accumulator, item) => (accumulator + item.dropChance), 0);
    const chance = lerp(0, total, Math.random());
    let current = 0;
    for (const item of items) {
        if (current <= chance && chance < current + item.dropChance) {
            return item;
        }
        current += item.dropChance;
    }
};
let counter = 0;
let prof = 0;
let openF = () => {
    let data = new Date();
    let time = data.getHours() + ":" +  data.getMinutes() + ":" +  data.getSeconds();
    let obj = drop(items)
    let road = obj.img;
    let objcount = obj.counter + 1
    obj.counter = objcount
    prof += obj.cost
    counter++;
    console.log("Коробка №" + counter, obj)
    image.src = road;
    title.textContent = obj.name;
    opend.textContent = counter;
    spent.textContent = (counter * price) / 1000000 + ' млн.';
    if((counter * price) / 1000000 > 1000) {
        spent.textContent = ((counter * price) / 1000000000).toFixed(2) + ' млрд.';
    }
    profit.textContent = (prof - (counter * price)) / 1000000 + ' млн.';
    if((prof - (counter * price)) / 1000000 > 1000) {
        profit.textContent = ((prof - (counter * price)) / 1000000000).toFixed(2) + ' млрд.';
    }
    if (prof - (counter * price) > 0) {
        profit.style.color = '#52ff7a'
    } else {
        profit.style.color = 'red'
    }
    if (obj.cost > filterPrice.value) {
        title.style.color = 'gold'
        let p = document.createElement('p');
        let name = obj.name
        p.innerHTML = `<span class"chat_counter">${counter}</span>` + `<img src='${image.src}'/>` +  `<span class='chat_itemName'>${name}</span>`;
        chat.appendChild(p);
    } else {
        title.style.color = 'white'
    }
}


let counterTable = () => {
    document.querySelector('#itemlist').innerHTML = items.map(n => `
    <div class="itemlist_container">
        <div class="itemlist_title"><img src="${n.img}"> <span class="hidden_item_name">${n.name} <br> ${(n.cost*n.counter)/1000000 + ' млн.'}</span>
        <div class="itemlist_counter">${n.counter}</div>
        </div>
    </div>

`).join('');
}

btn.onclick = () => {
    let amount = document.getElementById("openamount").value;
    for (i=0; i<amount; i++){
        openF()
    }
    counterTable()

}

counterTable()


let changeVale = document.getElementById('openamount')

changeVale.oninput = () =>{
    let i = changeVale.value
    document.querySelector('#changeAmount').innerHTML = i  + ' шт.';
}

let resetBtn = document.getElementById('resetBtn')
resetBtn.onclick = () => {
    for (i=0; i<items.length;i++){
        items[i].counter = 0;
        changeVale.value = 1;
        prof = 0;
        counter = 0;
        filterPrice.value = 0;
    }
    document.querySelector('#changeAmount').innerHTML = changeVale.value;
    document.querySelector('#filterPriceAmount').innerHTML = filterPrice.value
    counterTable();
    opend.textContent = counter;
    spent.textContent = counter * price;
    profit.textContent = prof - (counter * price);
    profit.style.color = "white"
    let chatValue = chat.querySelectorAll("p")
    for(i=0;i<chatValue.length;i++){
        chatValue[i].remove()
    }
}

let filterPrice = document.getElementById('filterPrice')
filterPrice.oninput = () =>{
    let i = filterPrice.value
    if (i > 1000000 ) {
        i = i/1000000
        document.querySelector('#filterPriceAmount').innerHTML = i + ' млн.';
    } else {
        document.querySelector('#filterPriceAmount').innerHTML = i;
    }

}