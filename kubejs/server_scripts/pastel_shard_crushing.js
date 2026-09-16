ServerEvents.recipes(event => {

  event.recipes.create.crushing([Item.of('pastel:topaz_powder', 2), CreateItem.of('pastel:topaz_powder', 0.5)], 'pastel:topaz_shard').processingTime(60)

  event.recipes.create.crushing([Item.of('pastel:citrine_powder', 2), CreateItem.of('pastel:citrine_powder', 0.5)], 'pastel:citrine_shard').processingTime(60)

  event.recipes.create.crushing([Item.of('pastel:amethyst_powder', 2), CreateItem.of('pastel:amethyst_powder', 0.5)], 'minecraft:amethyst_shard').processingTime(60)

  event.recipes.create.crushing([Item.of('pastel:onyx_powder', 2), CreateItem.of('pastel:onyx_powder', 0.5)], 'pastel:onyx_shard').processingTime(60)

  event.recipes.create.crushing([Item.of('pastel:moonstone_powder', 2), CreateItem.of('pastel:moonstone_powder', 0.5)], 'pastel:moonstone_shard').processingTime(60)

})