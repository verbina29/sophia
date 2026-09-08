ServerEvents.recipes(event => {
	event.stonecutting('minecraft:enchanting_table', 'quark:matrix_enchanter')
	event.stonecutting('quark:matrix_enchanter', 'minecraft:enchanting_table')

	// make infinity booster recipes actually nice
	event.remove({ id: 'aeinfinitybooster:infinity_card' })
	event.remove({ id: 'aeinfinitybooster:dimension_card' })
	event.smithing(
		'aeinfinitybooster:infinity_card',
		'minecraft:netherite_upgrade_smithing_template',
		'ae2:wireless_booster',
		'minecraft:netherite_ingot'
	)
	event.shaped(
		Item.of('aeinfinitybooster:dimension_card', 1),
		[
			'ECE',
			'CSC',
			'NBN'
		],
		{
			E: 'minecraft:ender_eye',
			C: 'ae2:wireless_booster',
			S: 'minecraft:nether_star',
			N: 'minecraft:netherite_ingot',
			B: 'aeinfinitybooster:infinity_card'
		}
	)

})
