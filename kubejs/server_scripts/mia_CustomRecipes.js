ServerEvents.recipes(event => {
    //Dough
    event.recipes.create.splashing([Item.of('create:dough')], Item.of('farm_and_charm:flour'));

    //Dirt
    event.shapeless( 'minecraft:dirt', '9x minecraft:wheat_seeds' )

    //Bell
    event.shaped( 'minecraft:bell', [
        'BBB',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:stone',
        B: 'minecraft:stick',
        C: 'minecraft:gold_block',
        D: 'minecraft:gold_nugget'
    })

    event.shaped( 'minecraft:oak_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:oak_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:birch_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:birch_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:spruce_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:spruce_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:jungle_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:jungle_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:acacia_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:acacia_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:dark_oak_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:dark_oak_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:mangrove_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:mangrove_planks',
        B: 'minecraft:chain'
    })
    event.shaped( 'minecraft:cherry_hanging_sign', [
        'B B',
        'AAA',
        'AAA'
    ], {
        A: 'minecraft:cherry_planks',
        B: 'minecraft:chain'
    })

    //Yellow Zinc Cage Lamp
    event.shaped( 'createdeco:yellow_zinc_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:torch',
        C: 'createaddition:zinc_sheet'
    })

    //Red Zinc Cage Lamp
    event.shaped( 'createdeco:red_zinc_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:redstone_torch',
        C: 'createaddition:zinc_sheet'
    })

    //Green Zinc Cage Lamp
    event.shaped( 'createdeco:green_zinc_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:glow_berries',
        C: 'createaddition:zinc_sheet'
    })

    //Blue Zinc Cage Lamp
    event.shaped( 'createdeco:blue_zinc_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:soul_torch',
        C: 'createaddition:zinc_sheet'
    })

    //Shroomlight
    event.recipes.create.deploying( Item.of('minecraft:shroomlight'), [Item.of('minecraft:glowstone'), Item.of('minecraft:nether_wart_block') ] )

    //Rose Quartz
    event.recipes.create.crushing(['create:rose_quartz', Item.of('create:rose_quartz').withChance(0.5)], 'biomesoplenty:rose_quartz_block')
    event.recipes.create.crushing(['create:rose_quartz', Item.of('create:rose_quartz').withChance(0.5)], 'create:rose_quartz_block')

    //Corn Chowder
    event.shapeless( '1x minecolonies:corn_chowder', [
        'minecraft:bowl',
        'minecolonies:large_milk_bottle',
        '#forge:crops/corn',
        '#forge:crops/onion',
        'minecolonies:garlic'
    ])

    //Ammo for Point Blank
    //9mm           pointblank:ammo9mm
    event.recipes.create.mixing( '19x pointblank:ammo9mm', [
        'create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //.45 ACP       pointblank:ammo45acp
    event.recipes.create.mixing( '19x pointblank:ammo45acp', [
        'create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //4.6mm         pointblank:ammo46
    event.recipes.create.mixing( '19x pointblank:ammo46', [
        'create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //.357          pointblank:ammo357
    event.recipes.create.mixing( '19x pointblank:ammo357', [
        'create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //5.7mm         pointblank:ammo57
    event.recipes.create.mixing( '19x pointblank:ammo57', [
        'create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //.50 AE        pointblank:ammo50ae
    event.recipes.create.mixing( '19x pointblank:ammo50ae', [
        'create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //5.45mm        pointblank:ammo545
    event.recipes.create.mixing( '17x pointblank:ammo545', [
        '2x create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //5.56mm        pointblank:ammo556
    event.recipes.create.mixing( '17x pointblank:ammo556', [
        '2x create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //6.8mm         pointblank:ammo68
        event.recipes.create.mixing( '17x pointblank:ammo68', [
        '2x create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //7.62mm        pointblank:ammo762
    event.recipes.create.mixing( '17x pointblank:ammo762', [
        '2x create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //7.62x51mm     pointblank:ammo762x51
    event.recipes.create.deploying( '16x pointblank:ammo762x51' [
        '3x create:copper_sheet',
        'minecraft:gunpowder'
    ])

    //.338 Lapua    pointblank:ammo338lapua
    event.recipes.create.deploying( '10x pointblank:ammo338lapua', [
        '2x minecraft:gunpowder',
        '3x create:copper_sheet'
    ])

    //.50 BMG       pointblank:ammo50bmg
    event.recipes.create.deploying( '8x pointblank:ammo50bmg', [
        '4x create:copper_sheet',
        '3x minecraft:gunpowder'
    ])

    //12 Gauge      pointblank:ammo12gauge
    event.recipes.create.mixing( '10x pointblank:ammo12gauge', [
        '2x create:copper_sheet',
        '1x minecraft:gunpowder'
    ])

    //Laser Charge  pointblank:ammolasercharge
    event.recipes.create.mechanical_crafting( '5x pointblank:ammolasercharge', [
        ' R ',
        'CIC'
    ], {
        R: 'minecraft:repeater',
        C: 'create:copper_sheet',
        I: 'minecraft:iron_ingot'
    })

    //Grenade 40mm  pointblank:grenade40mm
    event.recipes.create.mechanical_crafting( 'pointblank:grenade40mm', [
        ' T ',
        'CTC',
        'I I'
    ], {
        T: 'minecraft:tnt',
        C: 'create:copper_sheet',
        I: 'minecraft:iron_ingot'
    })

    //Grenade 20mm  pointblank:grenade20mm
    event.recipes.create.mechanical_crafting( 'pointblank:grenade20mm', [
        ' T ',
        'ICI'
    ], {
        T: 'minecraft:tnt',
        C: 'create:copper_sheet',
        I: 'minecraft:iron_ingot'
    })

    //SMAW Rocket   pointblank:smaw_rocket
        event.recipes.create.mechanical_crafting( 'pointblank:smaw_rocket', [
        'GGG',
        'GGG',
        'GTG',
        'G G'
    ], {
        T: 'minecraft:tnt',
        G: 'pointblank:gunmetal_ingot'
    })

    //AT4 Rocket    pointblank:at4_rocket
    event.recipes.create.mechanical_crafting( 'pointblank:at4_rocket', [
        'GGG',
        'GTG',
        'GGG',
        'G G'
    ], {
        T: 'minecraft:tnt',
        G: 'pointblank:gunmetal_ingot'
    })

    //Javelin Missile   pointblank:javelin_rocket
    event.recipes.create.mechanical_crafting( 'pointblank:javelin_rocket', [
        ' P ',
        'GRG',
        'GTG',
        'GRG',
        'GRG',
        'G G'
    ], {
        P: 'pointblank:processor',
        R: 'minecraft:redstone_block',
        T: 'minecraft:tnt',
        G: 'pointblank:gunmetal_ingot'
    })
});

console.info('Loaded custom recipes from mia_CustomRecipes. Thank you for choosing the Transcontinental Express!');

//All recipes are made by Mia aka kilaXphantom. You may use these freely with no credit card required