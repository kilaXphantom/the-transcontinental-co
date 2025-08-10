ServerEvents.recipes(event => {
    // Output, Input
    event.recipes.create.splashing([Item.of('create:dough')], Item.of('farm_and_charm:flour'));

    // Output, Input
    event.shapeless( 'minecraft:dirt', '9x minecraft:wheat_seeds' )

    // Output, Input
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
    event.shaped( 'farm_and_charm:yellow_zinc_cage_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:torch',
        C: 'createaddition:zinc_sheet'
    })

    //Red Zinc Cage Lamp
    event.shaped( 'farm_and_charm:red_zinc_cage_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:redstone_torch',
        C: 'createaddition:zinc_sheet'
    })

    //Green Zinc Cage Lamp
    event.shaped( 'farm_and_charm:green_zinc_cage_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:glow_berries',
        C: 'createaddition:zinc_sheet'
    })

    //Blue Zinc Cage Lamp
    event.shaped( 'farm_and_charm:blue_zinc_cage_lamp', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'create:zinc_nugget',
        B: 'minecraft:soul_torch',
        C: 'createaddition:zinc_sheet'
    })


});

console.info('Loaded custom recipes from mia_CustomRecipes. Thank you for choosing the Transcontinental Express!');

//All recipes are made by Mia aka kilaXphantom. You may use these freely with no credit required