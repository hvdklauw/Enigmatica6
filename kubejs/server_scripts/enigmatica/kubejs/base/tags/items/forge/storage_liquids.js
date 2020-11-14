events.listen('item.tags', function (event) {
    var items = [
        'chiselsandbits:bit_tank',
        'extradisks:1048576k_fluid_storage_disk',
        'extradisks:1048576k_fluid_storage_part',
        'extradisks:16384k_fluid_storage_disk',
        'extradisks:16384k_fluid_storage_part',
        'extradisks:262144k_fluid_storage_disk',
        'extradisks:262144k_fluid_storage_part',
        'extradisks:65536k_fluid_storage_disk',
        'extradisks:65536k_fluid_storage_part',
        'extradisks:infinite_fluid_storage_disk',
        'extradisks:infinite_fluid_storage_part',
        'mekanism:advanced_fluid_tank',
        'mekanism:basic_fluid_tank',
        'mekanism:creative_fluid_tank',
        'mekanism:dynamic_tank',
        'mekanism:dynamic_valve',
        'mekanism:elite_fluid_tank',
        'mekanism:ultimate_fluid_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:small_tank',
        'quantumstorage:tank',
        'refinedstorage:1024k_fluid_storage_block',
        'refinedstorage:1024k_fluid_storage_disk',
        'refinedstorage:1024k_fluid_storage_part',
        'refinedstorage:256k_fluid_storage_block',
        'refinedstorage:256k_fluid_storage_disk',
        'refinedstorage:256k_fluid_storage_part',
        'refinedstorage:4096k_fluid_storage_block',
        'refinedstorage:4096k_fluid_storage_disk',
        'refinedstorage:4096k_fluid_storage_part',
        'refinedstorage:64k_fluid_storage_block',
        'refinedstorage:64k_fluid_storage_disk',
        'refinedstorage:64k_fluid_storage_part',
        'rftoolsutility:tank'
    ];

    items.forEach(function (item) {
        event.get('forge:storage').add(item);
        event.get('forge:storage/liquids').add(item);
    });
});
