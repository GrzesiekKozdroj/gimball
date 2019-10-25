function __canMove(teaMate,{options} = false){
    return Boolean(!teaMate.hasMoved && Gamer.active && 
        options === true ? true : distance(teaMate.posX, teaMate.posY, mouX, mouY) < (teaMate.baseRadius) &&
         !teaMate.moveAura && teaMate.drawAbilityAura === 0 &&
          teaMate.isActivating && !teaMate.isKnockedDown);
}

function __validMoveDeclaration(teaMate){
    return Boolean(teaMate.moveAura && distance (mouX,mouY,teaMate.posX,teaMate.posY)>teaMate.baseRadius*.42 /* &&
    distance(teaMate.posX, teaMate.posY, mouX, mouY) <= ((teaMate.infMin > 0 ? teaMate.remainingRun : teaMate.remainingSprint) - teaMate.baseRadius
    )*/)
}

function __chooseModelToActivate(teaMate){
    return Boolean(!Gamer.gp.hasBall && !teaMate.hasActivated && Gamer.squaddies.filter(el => el.isActivating).filter(el => el.name !== teaMate.name)
    .filter(el => el.hasMoved || el.hasAttacked || el.hasDropped || el.isKicking || el.hasKicked || el.isMoving || el.pressedAbutton || el.hasSnapped).length < 1 && 
    Gamer.active && distance(teaMate.posX, teaMate.posY, mouX, mouY) < (teaMate.baseRadius) && $('#app').find('.plajBookCell').length < 1)
}

function __hasLareadyActivated(teaMate){
    return Boolean(Gamer.active && distance(teaMate.posX, teaMate.posY, mouX, mouY) < (teaMate.baseRadius) && teaMate.hasActivated)
}

function __isInMelee(m1, m2){
    return Boolean(
        (distance(m1.posX, m1.posY, m2.posX, m2.posY) <= (m1.meleeRadius + m2.baseRadius) &&
        distance(mouX, mouY, m2.posX, m2.posY) < m2.baseRadius
    ))
}

















function atTheStartOfActivation(teaMate){

    
    if(hasActiveUnused(teaMate,"Natures Chill") )
    {
        teaMate.moveAura = false;
        idear = "Nature's Chill";
        commonPreInstruction({ m1: teaMate });
        const snaret = new Token(mouX, mouY, 1.5 * inch, "Nature's Chill", Gamer.guild.color);
        snaret.isInHand = true;
        Gamer.tokens.push(snaret);
        teaMate.drawAbilityAura = teaMate.baseRadius + 9.5 * inch;
        $("#players").on('click.usingAbility',  () => {
            if (distance(teaMate.posX, teaMate.posY, mouX, mouY) <= teaMate.baseRadius + 9.5 * inch && snaret.isPlacable) {
                commonAfterInstruction({ m1: teaMate });
                teaMate.moveAura = true;
            snaret.isInHand = false;
            Gamer.tokens.forEach(el=>el.isInHand=false);
            makeActiveOpt(teaMate,"Natures Chill");
            teaMate.drawAbilityAura = 0;
            teaMate.hasMoved = false;

            $('#players').on('click', function (e) { //drops a guy down after movement if possible
                if (__canMove(teaMate, {options:true}) /* 
                        //teaMate.moveAura && 
                        distance (mouX,mouY,teaMate.posX,teaMate.posY)>teaMate.baseRadius*.42 &&
                        distance(teaMate.posX, teaMate.posY, mouX, mouY) <= 
                            ((teaMate.infMin > 0 ? teaMate.remainingRun : teaMate.remainingSprint) - teaMate.baseRadius
                    )*/) {
                        defaultPreventer(e);
                        teaMate.dropper(teamz);
                }; //if
            } //if
            ); //mouseDown
            }
        });
    }

}
