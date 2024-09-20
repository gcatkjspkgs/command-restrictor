ServerEvents.command(event => {
    const {parseResults, server, input, commandName} = event
    let source = parseResults.getContext().getSource()
    if(!source.isPlayer()) return
    if(source.isCreative()) return

    if(commandMap[commandName]){
        let player = source.getPlayer()
        let command = commandMap[commandName]

        if(command.permissionLevel && !source.hasPermission(command.permissionLevel)){
            let message = "Your permission level is not high enough"
            player.sendSystemMessage({ text: "⚠ " + message, color: "red" }, true);
            event.cancel()
        }

        // Stage Check
        if(command.stage && !player.stages.has(command.stage)) {
            let message = "You do not have access to this command"
            player.sendSystemMessage({ text: "⚠ " + message, color: "red" }, true);
            event.cancel()
        }

        // Dimension Check
        let level = source.getLevel()
        if(command.dimension && command.dimension !== level.id){
            let message = "You are not in the correct dimension for this command"
            player.sendSystemMessage({ text: "⚠ " + message, color: "red" }, true);
            event.cancel()
        }

    }
})