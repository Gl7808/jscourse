
const items = [{
    name: 'Идеальный приз', dropChance: 87.855, img: 'assets/image/perfect-token.png', cost: 500000, counter:0
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
    name: 'Несравненный плащ', dropChance: 0.008, img: 'assets/image/godcape.png', cost: 4500000000, counter:0
}, {
    name: 'Капюшон победителя', dropChance: 0.0001, img: 'assets/image/HeavenHat.png', cost: 450000000, counter:0
}, {
    name: 'Шлем победителя', dropChance: 0.0001, img: 'assets/image/HeavenHelm.png', cost: 450000000, counter:0
}, {
    name: 'Шлем победы', dropChance: 0.0001, img: 'assets/image/helmofwin.png', cost: 450000000, counter:0
}, {
    name: 'Загадочное ограбление', dropChance: 0.05, img: 'assets/image/SpiritCharm.png', cost: 450000, counter:0
}, {
    name: 'Свиток дракона', dropChance: 0.03, img: 'assets/image/SpiritCharm.png', cost: 450000, counter:0
}, {
    name: 'Яшмовый осколок', dropChance: 0.01, img: 'assets/image/SpiritCharm.png', cost: 450000, counter:0
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



const btn = document.getElementById('opencase')
const lootblock = document.getElementById('drop_container')
btn.onclick = () => {
    lootblock.style.right = 200 + 'px'
}