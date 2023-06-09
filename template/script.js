const character_info_block = document.getElementById('character_info');
const character_class_block = document.getElementById('character_profession')
const character_level_block = document.getElementById('character_level')
let playerClass = 'Blademaster';

const characters = [
    {character_class: 'Blademaster', id: 0},
    {character_class: 'Wizard', id: 1},
    {character_class: 'Barbarian', id: 2},
    {character_class: 'Venomancer', id: 3},
    {character_class: 'Archer', id: 4},
    {character_class: 'Cleric', id: 5},
    {character_class: 'Assassin', id: 6},
    {character_class: 'Psychic', id: 7},
    {character_class: 'Seeker', id: 8},
    {character_class: 'Mystic', id: 9},
]


const player = {
    current_level: Math.floor(character_level_block.value),
    current_sky: 0,
    current_reputation: 0,
    current_bonusLevel: 0,
    current_class: 0,
    current_hp: 0,
    current_mp:0,
    current_points: 0,
    current_weapon_damage_min: 0,
    current_weapon_damage_max: 0,
    current_stats: {
        str: 5,
        vit: 5,
        mag: 5,
        dex: 5
    },
    current_parameters: {
        physical_attack_min: 0,
        physical_attack_max: 0,
        magical_attack_min: 0,
        magical_attack_max: 0,
        critical_rate: 1,
        attack_rate: 1.25,
        channeling: 0,
        accuracy: 0,
        evasion: 0,
        attack_level: 0,
        physicalDamage_reduction: 0,
        speed: 5.0,
        spirit: 0,
        physical_penetration: 0,
        physical_defense: 0,
        magical_defense: 0,
        metal_defense: 0,
        wood_defense: 0,
        water_defense: 0,
        fire_defense: 0,
        earth_defense: 0,
        defense_level: 0,
        magical_damage_reduction: 0,
        rage_damage: 200,
        soulforce: 0,
        magic_penetration: 0,
    }
}
////////////////////////////////////////////////////////////////////////////
// Бонусы и коэффиценты класса персонажа
const physical_strMultiplier = 1 + (player.current_stats.str/150);
const physical_dexMultiplier = 1 + (player.current_stats.dex/150);
const physical_magMultiplier = 1 + (player.current_stats.mag/100);
let classBonus_hp = 0;
let classBonus_accuracy = 0;
let classBonus_evasion = 0;
let classBonus_speed = 0;
let classBonus_name = '';
let classBonus_id = 0;
let class_bonus = (profession) => {
    console.log(profession)
    if (profession === 'Blademaster' || profession === 'Воин') {classBonus_name = 'Воин';classBonus_id = 0; classBonus_hp = 15; classBonus_accuracy = 10; classBonus_evasion = 10; classBonus_speed = 5.0;}
    else if (profession === 'Wizard' || profession === 'Маг') {classBonus_name = 'Маг';classBonus_id = 1; classBonus_hp = 10; classBonus_accuracy = 5; classBonus_evasion = 2; classBonus_speed = 4.8;}
    else if (profession === 'Barbarian' || profession === 'Оборотень') {classBonus_name = 'Оборотень';classBonus_id = 2; classBonus_hp = 17; classBonus_accuracy = 8; classBonus_evasion = 8; classBonus_speed = 4.9;}
    else if (profession === 'Venomancer' || profession === 'Друид') {classBonus_name = 'Друид';classBonus_id = 3; classBonus_hp = 12; classBonus_accuracy = 7; classBonus_evasion = 6; classBonus_speed = 5.1;}
    else if (profession === 'Cleric' || profession === 'Жрец') {classBonus_name = 'Жрец';classBonus_id = 4; classBonus_hp = 10; classBonus_accuracy = 5; classBonus_evasion = 2; classBonus_speed = 4.8;}
    else if (profession === 'Archer' || profession === 'Лучник') {classBonus_name = 'Лучник';classBonus_id = 5; classBonus_hp = 13; classBonus_accuracy = 8; classBonus_evasion = 6; classBonus_speed = 5.2;}
    else if (profession === 'Assassin' || profession === 'Убийца') {classBonus_name = 'Убийца';classBonus_id = 6; classBonus_hp = 13; classBonus_accuracy = 8; classBonus_evasion = 6; classBonus_speed = 5.2;}
    else if (profession === 'Psychic' || profession === 'Шаман') {classBonus_name = 'Шаман';classBonus_id = 7; classBonus_hp = 10; classBonus_accuracy = 5; classBonus_evasion = 2; classBonus_speed = 4.8;}
    else if (profession === 'Seeker' || profession === 'Страж') {classBonus_name = 'Страж';classBonus_id = 8; classBonus_hp = 15; classBonus_accuracy = 10; classBonus_evasion = 10; classBonus_speed = 5.0;}
    else if (profession === 'Mystic' || profession === 'Мистик') {classBonus_name = 'Мистик';classBonus_id = 9; classBonus_hp = 10; classBonus_accuracy = 5; classBonus_evasion = 2; classBonus_speed = 4.8;}
}
////////////////////////////////////////////////////////////////////////////
let playerParams = () =>{

player.current_class = classBonus_name;
player.current_hp = player.current_stats.vit * classBonus_hp + item_bonus.bonus_hp + (item_bonus.bonus_vit * classBonus_hp);
player.current_points = (player.current_level - 1) * 5;
player.current_parameters.accuracy = player.current_stats.dex * classBonus_accuracy;
player.current_parameters.evasion = player.current_stats.dex * classBonus_evasion;
player.current_parameters.critical_rate = Math.floor(player.current_parameters.critical_rate + (player.current_stats.dex / 20));
player.current_parameters.physical_attack_min = Math.floor(physical_strMultiplier * (item_bonus.bonus_damage_min+player.current_level));
player.current_parameters.physical_attack_max = Math.floor(physical_strMultiplier * (item_bonus.bonus_damage_max+player.current_level));

player.current_parameters.soulforce = player.current_level * 150;
}
console.log(player.current_parameters.physical_attack_min + '-' + player.current_parameters.physical_attack_max)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Отрисовка текущих параметров персонажа
let paintParams = () => {

document.getElementById('hitpoint').innerHTML = `${player.current_hp}`
document.getElementById('physical_attack').innerHTML = `${player.current_parameters.physical_attack_min} - ${player.current_parameters.physical_attack_max}`
document.getElementById('magical_attack').innerHTML = `${player.current_parameters.magical_attack_min} - ${player.current_parameters.magical_attack_max}`
document.getElementById('critical_rate').innerHTML = `${player.current_parameters.critical_rate}`
document.getElementById('attack_rate').innerHTML = `${player.current_parameters.attack_rate}`
document.getElementById('accuracy').innerHTML = `${player.current_parameters.accuracy}`
document.getElementById('evasion').innerHTML = `${player.current_parameters.evasion}`
document.getElementById('attack_level').innerHTML = `${player.current_parameters.attack_level}`
document.getElementById('physicalDamage_reduction').innerHTML = `${player.current_parameters.physicalDamage_reduction}`
document.getElementById('speed').innerHTML = `${player.current_parameters.speed}`
document.getElementById('spirit').innerHTML = `${player.current_parameters.spirit}`
document.getElementById('physical_penetration').innerHTML = `${player.current_parameters.physical_penetration}`
document.getElementById('physical_defense').innerHTML = `${player.current_parameters.physical_defense}`
document.getElementById('magical_defense').innerHTML = `${player.current_parameters.magical_defense}`
document.getElementById('metal_defense').innerHTML = `${player.current_parameters.metal_defense}`
document.getElementById('wood_defense').innerHTML = `${player.current_parameters.wood_defense}`
document.getElementById('water_defense').innerHTML = `${player.current_parameters.water_defense}`
document.getElementById('fire_defense').innerHTML = `${player.current_parameters.fire_defense}`
document.getElementById('earth_defense').innerHTML = `${player.current_parameters.earth_defense}`
document.getElementById('defense_level').innerHTML = `${player.current_parameters.defense_level}`
document.getElementById('magical_damage_reduction').innerHTML = `${player.current_parameters.magical_damage_reduction}`
document.getElementById('rage_damage').innerHTML = `${player.current_parameters.rage_damage}`
document.getElementById('soulforce').innerHTML = `${player.current_parameters.soulforce}`
document.getElementById('magic_penetration').innerHTML = `${player.current_parameters.magic_penetration}`
}
paintParams()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////
// Предметы
const item_bonus = {
    bonus_hp : 0,
    bonus_mp: 0,
    bonus_vit: 0,
    bonus_mag: 0,
    bonus_str: 0,
    bonus_agi: 0,
    bonus_damage_min : 0,
    bonus_damage_max : 0,
    bonus_damage : 0,
}


const items = [
        // {id:0, name: "Топор кровавого упыря",image: 'link', physical_damage_min: 470, physical_damage_max: 972, bonus_hp: 110, bonus_vit: 11, extra_bonus: 'Жестокий воин', isActive: true},
        {id:0, name: "Без оружия",image: 'link', physical_damage_min: 0, physical_damage_max: 0, isActive: false ,bonusList : {},},
        {id:1, name: "Топор кровавого упыря",image: 'link', physical_damage_min: 467, physical_damage_max: 1089, isActive: false ,bonusList : {bonus_hp: 110, bonus_vit: 11, extra_bonus: 'Жестокий воин'},},
        {id:2, name: "Стальное сердце короля-льва",image: 'link', physical_damage_min: 967, physical_damage_max: 1689, isActive: false ,bonusList : {bonus_hp: 410, bonus_vit: 61, extra_bonus: 'Жестокий воин'},},

]





const changeParamsItems = () => {
    for(i=0; i<items.length; i++) {
        if(items[i].isActive) {
            item_bonus.bonus_hp = item_bonus.bonus_hp + items[i].bonusList.bonus_hp
            item_bonus.bonus_vit = item_bonus.bonus_vit + items[i].bonusList.bonus_vit
            item_bonus.bonus_damage_min = items[i].physical_damage_min
            item_bonus.bonus_damage_max = items[i].physical_damage_max
        }
    }
}





console.log(player.current_level)



















const weapon_slot = document.getElementById('weapon')
console.log(weapon_slot.value)
weapon_slot.onchange = () => {
    for (i=0; i<items.length; i++){
        if(weapon_slot.value == items[i].name){
            items[i].isActive = true
            console.log("Активированно оружие " + items[i].name)
        } else {items[i].isActive = false}
    }
    changeParamsItems()
    playerParams()
    paintParams()
}


character_level_block.onchange = () =>{
    player.current_level = Number((character_level_block.value))
    playerParams()
    paintParams()
}
character_class_block.onchange = () =>{
    playerClass = character_class_block.value
    class_bonus(playerClass)
    playerParams()
    paintParams()
}





