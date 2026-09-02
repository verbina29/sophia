PlayerEvents.loggedIn(e=>{
    if (!e.player.stages.has('starting_items')) {
        e.player.stages.add('starting_items')
        e.server.scheduleInTicks(49, callback => {
            // I HATE ADVANCEMENTS I HATE ADVANCEMENTS
            e.player.inventory.clear('patchouli:guide_book[patchouli:book="hexcasting:thehexbook"]')
        })

        e.server.scheduleInTicks(50, callback => {
            e.player.give(Item.of('akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"hexcasting","patchouli:book":"hexcasting:thehexbook"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"ars_nouveau"},count:1,id:"ars_nouveau:worn_notebook"},{components:{"akashictome:defined_mod":"neovitae","modonomicon:book_id":"neovitae:guide"},count:1,id:"neovitae:guide_book"},{components:{"akashictome:defined_mod":"malum"},count:1,id:"malum:encyclopedia_arcana"},{components:{"akashictome:defined_mod":"pastel"},count:1,id:"pastel:guidebook"},{components:{"akashictome:defined_mod":"irons_spellbooks","patchouli:book":"irons_spellbooks:iss_guide_book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"psi","patchouli:book":"psi:encyclopaedia_psionica"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"ae2"},count:1,id:"ae2:guide"},{components:{"akashictome:defined_mod":"starcatcher"},count:1,id:"starcatcher:starcatcher_guide"},{components:{"akashictome:defined_mod":"pneumaticcraft","patchouli:book":"pneumaticcraft:book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"sushigocrafting","patchouli:book":"sushigocrafting:sushigocrafting"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"appliedcooking","patchouli:book":"appliedcooking:guide"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"immersiveengineering"},count:1,id:"immersiveengineering:manual"},{components:{"akashictome:defined_mod":"powah"},count:1,id:"powah:book"}]]'))
        });
    }
})

ServerEvents.commandRegistry(event =>{
    const {commands: Commands, arguments: Arguments} = event

    event.register(Commands.literal('i_lost_my_akashic_tome_verbina_please_help')
        .executes(ctx => { ctx.source.player.give(Item.of('akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"hexcasting","patchouli:book":"hexcasting:thehexbook"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"ars_nouveau"},count:1,id:"ars_nouveau:worn_notebook"},{components:{"akashictome:defined_mod":"neovitae","modonomicon:book_id":"neovitae:guide"},count:1,id:"neovitae:guide_book"},{components:{"akashictome:defined_mod":"malum"},count:1,id:"malum:encyclopedia_arcana"},{components:{"akashictome:defined_mod":"pastel"},count:1,id:"pastel:guidebook"},{components:{"akashictome:defined_mod":"irons_spellbooks","patchouli:book":"irons_spellbooks:iss_guide_book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"psi","patchouli:book":"psi:encyclopaedia_psionica"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"ae2"},count:1,id:"ae2:guide"},{components:{"akashictome:defined_mod":"starcatcher"},count:1,id:"starcatcher:starcatcher_guide"},{components:{"akashictome:defined_mod":"pneumaticcraft","patchouli:book":"pneumaticcraft:book"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"sushigocrafting","patchouli:book":"sushigocrafting:sushigocrafting"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"appliedcooking","patchouli:book":"appliedcooking:guide"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"immersiveengineering"},count:1,id:"immersiveengineering:manual"},{components:{"akashictome:defined_mod":"powah"},count:1,id:"powah:book"}]]'))
        return 1
        })
    )
})
