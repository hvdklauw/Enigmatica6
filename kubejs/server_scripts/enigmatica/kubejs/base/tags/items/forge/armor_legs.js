events.listen('item.tags', function (event) {
    var leggings = [
        'aquaculture:neptunium_leggings',
        'ars_nouveau:apprentice_leggings',
        'ars_nouveau:archmage_leggings',
        'ars_nouveau:novice_leggings',
        'botania:elementium_leggings',
        'botania:manasteel_leggings',
        'botania:manaweave_leggings',
        'botania:terrasteel_leggings',
        'byg:ametrine_leggings',
        'good_nights_sleep:candy_leggings',
        'good_nights_sleep:negatite_leggings',
        'good_nights_sleep:positite_leggings',
        'good_nights_sleep:rainbow_leggings',
        'good_nights_sleep:zitrite_leggings',
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'mapperbase:steel_leggings',
        'mekanism:hazmat_pants',
        'mekanism:mekasuit_pants',
        'mekanismtools:bronze_leggings',
        'mekanismtools:lapis_lazuli_leggings',
        'mekanismtools:osmium_leggings',
        'mekanismtools:refined_glowstone_leggings',
        'mekanismtools:refined_obsidian_leggings',
        'minecraft:chainmail_leggings',
        'minecraft:diamond_leggings',
        'minecraft:golden_leggings',
        'minecraft:iron_leggings',
        'minecraft:leather_leggings',
        'minecraft:netherite_leggings',
        'naturesaura:infused_iron_pants',
        'naturesaura:sky_pants',
        'pneumaticcraft:pneumatic_leggings',
        'thermal:beekeeper_leggings',
        'thermal:diving_leggings',
        'thermal:hazmat_leggings'
    ];

    leggings.forEach(function (legging) {
        event.get('forge:armor').add(legging);
        event.get('forge:armor/leggings').add(legging);
    });
});
