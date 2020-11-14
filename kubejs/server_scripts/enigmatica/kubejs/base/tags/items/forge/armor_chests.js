events.listen('item.tags', function (event) {
    var chests = [
        'aquaculture:neptunium_chestplate',
        'ars_nouveau:apprentice_robes',
        'ars_nouveau:archmage_robes',
        'ars_nouveau:novice_robes',
        'botania:elementium_chestplate',
        'botania:manasteel_chestplate',
        'botania:manaweave_chestplate',
        'botania:terrasteel_chestplate',
        'byg:ametrine_chestplate',
        'good_nights_sleep:candy_chestplate',
        'good_nights_sleep:negatite_chestplate',
        'good_nights_sleep:positite_chestplate',
        'good_nights_sleep:rainbow_chestplate',
        'good_nights_sleep:zitrite_chestplate',
        'immersiveengineering:armor_faraday_chest',
        'immersiveengineering:armor_steel_chest',
        'mapperbase:steel_chestplate',
        'mekanism:hazmat_gown',
        'mekanism:jetpack',
        'mekanism:jetpack_armored',
        'mekanism:mekasuit_bodyarmor',
        'mekanismtools:bronze_chestplate',
        'mekanismtools:lapis_lazuli_chestplate',
        'mekanismtools:osmium_chestplate',
        'mekanismtools:refined_glowstone_chestplate',
        'mekanismtools:refined_obsidian_chestplate',
        'minecraft:chainmail_chestplate',
        'minecraft:diamond_chestplate',
        'minecraft:golden_chestplate',
        'minecraft:iron_chestplate',
        'minecraft:leather_chestplate',
        'minecraft:netherite_chestplate',
        'naturesaura:infused_iron_chest',
        'naturesaura:sky_chest',
        'pneumaticcraft:pneumatic_chestplate',
        'thermal:beekeeper_chestplate',
        'thermal:diving_chestplate',
        'thermal:hazmat_chestplate'
    ];

    chests.forEach(function (chest) {
        event.get('forge:armor').add(chest);
        event.get('forge:armor/chests').add(chest);
    });
});
