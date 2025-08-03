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
});

console.info('Loaded custom recipes from mia_CustomRecipes. Thank you for choosing the Transcontinental Express!');