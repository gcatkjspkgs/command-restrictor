onEvent('command.run', event => {
    const {parseResults, server} = event
    let ctx = parseResults.getContext()
    let source = ctx.getSource()

    if(!source.getPlayerOrException()) return
    if(source.getPlayerOrException().isCreative()) return
    
    let commandName = ctx.getNodes().isEmpty() ? "" : ctx.getNodes().get(0).getNode().getName();

    if(commandMap[commandName]){
        let player = source.getPlayerOrException()
        let command = commandMap[commandName]

        // Permission Check
        if(command.permissionLevel && !source.hasPermission(command.permissionLevel)){
            let message = "Your permission level is not high enough"
            server.runCommandSilent(`title ${player.name.text} actionbar {"text":"⚠ ${message}","color":"red"}`)
            event.cancel()
        }

        // Stage Check
        if(command.stage && !player.stages.has(command.stage)) {
            let message = "You do not have access to this command"
            server.runCommandSilent(`title ${player.name.text} actionbar {"text":"⚠ ${message}","color":"red"}`)
            event.cancel()
        }

        // Dimension Check
        let level = source.getLevel()
        if(command.dimension && command.dimension !== level.id){
            let message = "You are not in the correct dimension for this command"
            server.runCommandSilent(`title ${player.name.text} actionbar {"text":"⚠ ${message}","color":"red"}`)
            event.cancel()
        }

    }
})