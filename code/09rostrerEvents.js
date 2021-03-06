"use strict";
let allTheGuildsForMenu = [alchemists, blacksmiths, brewers, butchers, cooks, engineers, falconers, farmers, fishermen, hunters, masons, miners, morticians, navigators, solthecian, ratcatchers, union];
let totalNumberOfDuds = 0;
let
    Alchemists = new Guild(...alchemists), Blacksmiths = new Guild(...blacksmiths), Brewers = new Guild(...brewers),
    Butchers = new Guild(...butchers), Cooks = new Guild(...cooks), Engineers = new Guild(...engineers), Falconers = new Guild(...falconers),
    Farmers = new Guild(...farmers), Fishermen = new Guild(...fishermen), Hunters = new Guild(...hunters), Masons = new Guild(...masons),
    Miners = new Guild(...miners), Morticians = new Guild(...morticians), Navigators = new Guild(...navigators),
    Solthecian = new Guild(...solthecian), Ratcatchers = new Guild(...ratcatchers), Union = new Guild(...union);

    function displayPlaybook(m1){//used to display playbook while making a roster
        plajBookWraz();
        for(let i = 0;i< m1.playBook.length;i++){
                playbookStitcher(m1,m1, i, playBookWrap.noWrap, "attack");
            }
    }
let buildGuildsVar;

//$((e) => {
//below creAres actual team for each Gamer:

    function buildGamerTeam(matter){
       $("#teaMenuScreen").empty();
       if(counter === -2){
           buildGuilds();
           buildGuildsEvents();
           let bookOfLife = [];
           for(let sq = 0; sq<matter.length;sq++){
                let bobsko = new Player(...allPlayersAsArray.filter(el=>el[16]===($(matter[sq]).data("name") ) ) [0] );
                bookOfLife.push(bobsko)
                if(bookOfLife[0].theGuild.name==="Blacksmith"){bookOfLife[0].infMax=5;bookOfLife[0].identity.status="Captain"}
           }
            counter++;
            Gamer1 = new Gajmer(
                0,0,0,
                bookOfLife,
                addInfGen (bookOfLife),
                rnd > 0.5 ? true : false,//active?
                new Guild(bookOfLife[0].theGuild.color, bookOfLife[0].theGuild.name, bookOfLife[0].theGuild.icon, bookOfLife[0].theGuild.squaddies, bookOfLife[0].theGuild.fontColor, bookOfLife[0].theGuild.mercenaries),//bookOfLife[0].theGuild,
                rndDeploy > 0.5 ? [18 * inch, 6 * inch - 2.5 * cm] : [18 * inch, 30 * inch + 2.5 * cm],
                rndDeploy > 0.5 ?                [0, 10 * inch]    :    [26 * inch, 1080/*canvas.height*/],
                rndDeploy > 0.5 ?                       'top'      :        'bottom' 
            );
            } else if (counter === -1){
                buildGuilds();
                buildGuildsEvents();
                let bookOfLife = [];
                for(let sq = 0; sq<matter.length;sq++){
                     let bobsko = new Player(...allPlayersAsArray.filter(el=>el[16]===($(matter[sq]).data("name") ) ) [0] );
                     bookOfLife.push(bobsko)
                     if(bookOfLife[0].theGuild.name==="Blacksmiths"){bookOfLife[0].infMax=5;bookOfLife[0].identity.status="Captain"}
                }
                 counter++;
                 Gamer2 = new Gajmer(
                     0,0,0,
                     bookOfLife,
                     addInfGen (bookOfLife),
                     rnd > 0.5 ? false : true,//active?
                     new Guild(bookOfLife[0].theGuild.color, bookOfLife[0].theGuild.name, bookOfLife[0].theGuild.icon, bookOfLife[0].theGuild.squaddies, bookOfLife[0].theGuild.fontColor, bookOfLife[0].theGuild.mercenaries),//bookOfLife[0].theGuild,
                     rndDeploy > 0.5 ? [18 * inch, 30 * inch + 2.5 * cm] : [18 * inch, 6 * inch - 2.5 * cm],
                     rndDeploy > 0.5 ? [26 * inch, 1080 /*canvas.height*/ ] : [0, 10 * inch],
                     rndDeploy > 0.5 ? 'bottom'  : 'top'
                 );
                 Gamer1.oponent = Gamer2;
                 Gamer2.oponent = Gamer1;
                    $("#teaMenuScreen").remove();
                        teamz = [...Gamer1.squaddies, ...Gamer2.squaddies];
                        Gamer = rnd > 0.5 ? Gamer1 : Gamer2;
                        otherGamer = rnd > 0.5 ? Gamer2 : Gamer1;
                    bigBang();
       }
    }
    function buildGuilds(){//creates menu where I choose my guild
    $("#teaMenuScreen").css("background", `url(./icons/cursor/${Math.floor(Math.floor(Math.random() * (3 - 1 + 1)) + 1)}.jpg)`);

    allTheGuildsForMenu.forEach((el, i) => {
        let guildButton = `<div class="guildIco" id="${el[1]}Ico" data-title="${el[1]}" data-img=${el[2]} data-desc="${el[5]}" 
        data-footer="${el[6]}" data-mercenaries=${el[7]} style="background:url(${el[2]});    background-size:contain;    background-repeat:no-repeat;"/>`;
        $("#teaMenuScreen").append(guildButton);
    })};

    function buildGuildsEvents(){
    $(".guildIco").each(
        function () {
            const title = $(this).data("title");
            const merc = $(this).data("mercenaries");
            $(this).on("mouseenter", () => {
                $("#app").empty().append(
                    `<div class="guildInfo">
                    <h1 class="guildHeader">
                        <img id="${title}lilPic" class="rosterGuildPic" src="${$(this).data("img")}"/>
                        <p class="guildName" style="font-size:${1.5*wlem}">
                        ${title==="Union"?"The Union":title==="Solthecian"?"Solthecian Church":title+"'s Guild"}
                        </p>
                    </h1>
                    <p class="guildInfoP" style="font-size:${.9*wlem}">${$(this).data("desc")}</p>
                    <footer class="guildFoot">${$(this).data("footer")}</footer>
                    </div>`
                )
            })
            $(this).on("click", () => {
                squaddiesToDisplay = [...allPlayersAsArray.filter(el => el[19].name === title ), 
                                      ...allPlayersAsArray.filter(el => merc.includes(el[16], 0 ) 
                                      )]
                $(this).parent().empty();
                chooseTeam(squaddiesToDisplay,title);
            });
        })//each
    };

    buildGuildsVar =()=>{ $("#teaMenuScreen").empty();buildGuilds();buildGuildsEvents();}
//})//dom
let squaddiesToDisplay = [];

function chooseTeam(sTD,guild) {//builds and displays an array of players for each team

    $("#teaMenuScreen").append(`<div id="thePlayers"></div>`);

    sTD.forEach(el => {//below builds icon on roster for each player
        $("#thePlayers").append(`
        <div id="roster${el[16]}"class="rosterIco ${el[20][4]}" style="border-color:${el[19].color}; 
            background:url(${el[14]}); background-position:${el[22][0]}% ${el[22][1]}%; background-size:${el[22][2]}%" data-name=${el[16]} data-identity=${el[20][4]}
            data-attachment=${el[20][5]} data-dname="${el[21]}">
        </div>
        `)
    })
    //below builds page composition for roster
    const normalGuildsRoster = `
        <div class="rosterChosen">
            <div class="captainRoster" id="Captain" style="border-color:${sTD[0][19].color};color:${sTD[0][19].color};"><p>Captain</p></div>
            <div class="mascotRoster" id="Mascot" style="border-color:${sTD[0][19].color};color:${sTD[0][19].color};"><p>Mascot</p></div>
            <div class="squaddiesRoster" id="Squaddie" style="border-color:${sTD[0][19].color};color:${sTD[0][19].color};"><p>Squaddies</p></div>
        </div>`;
    const blacksmithsRoster = `
        <div class="rosterChosen">
            <div class="captainRoster" id="Captain" style="border-color:${sTD[0][19].color};color:${sTD[0][19].color};"><p>Captain</p></div>
            <div class="mastersRoster" id="Master" style="border-color:${sTD[0][19].color};color:${sTD[0][19].color};"><p>Masters</p></div>
            <div class="apprenticesRoster" id="Apprentice" style="border-color:${sTD[0][19].color};color:${sTD[0][19].color};"><p>Apprentices</p></div>
        </div>`;

    $("#teaMenuScreen").append(`
        ${guild==="Blacksmith"?blacksmithsRoster:normalGuildsRoster}
        <div class="guildRosterReverse" onClick="buildGuildsVar()"><--=</div>
    `)

    $("#thePlayers").find(".rosterIco").each(//generates actual player object on hover, and assigns events to its icon
        function () {
            let squaddieName = $(this).data("name");
            let chosenSquaddie = new Player(...allPlayersAsArray.filter(el => el[16] === squaddieName)[0] );
            $(this).on("mouseenter swipe", () => {
                displayPlaybook(chosenSquaddie);
                $("#app").empty().append(appMaker(chosenSquaddie));
                sendMessage(`${chosenSquaddie.identity.status}`)
            })
            $(this).on("click", ()=>{
                let type = $(this).data("identity");
                let displayName = $(this).data("dname");
                if( $("#"+type).children("."+type).length <
                    (type==="Captain" || type ==="Mascot"? 1 : type==="Master" ? 2 : type==="Apprentice" ? 3 : 4 )  
                    && //    BUGGED
                    $(".rosterChosen").find(`[data-dname="${displayName}"]`).length < 1 
                     ){
                    $(guild==="Blacksmith" && $("#Captain").children(".rosterIco").length < 1 && type==="Master" ? "#Captain" : "#"+chosenSquaddie.identity.status)
                        .append(this)
                        .on("click",()=>{
                            $("#thePlayers").append(this);
                            if(  $(this).data("attachment")==="Attachment"  ){
                                let attached = $("#teaMenuScreen").find(".Attachment")
                                $(this).parent().append(attached);
                            }
                        });
                    if(  $(this).data("attachment")==="Attachment"  ){
                        let attached = $("#teaMenuScreen").find(".Attachment")
                        $(this).parent().append(attached);
                    }

                if( $(".rosterChosen").find(".rosterIco").length === 7 ||
                ($(".rosterChosen").find(".rosterIco").length === 6 && $(".rosterChosen").find(".Attachment").length < 1 ) ){
                
                $("#teaMenuScreen")
                                .append(`<div class="guildRosterForward" 
                                    style="background-color:${chosenSquaddie.theGuild.color};">=--></div>`)
                                    $(".guildRosterForward").on("click", ()=>{
                                        buildGamerTeam($(".rosterChosen").find(".rosterIco"));
                                    })
            }
                }else if( $(".rosterChosen").find(".rosterIco").length === 7 || 
                    ($(".rosterChosen").find(".rosterIco").length === 6 && $(".rosterChosen").find(".Attachment").length < 1 ) ){
                    sendMessage("your team roster is now complete. Time to move on.")
                }else if($(".rosterChosen").find(`[data-dname="${displayName}"]`).length === 1){
                    sendMessage(`you can have only one ${displayName}`)
                }else if( $("#"+type).children("."+type).length ===
                (type==="Captain" || type ==="Mascot"? 1 : type==="Master" ? 2 : type==="Apprentice" ? 3 : 4 ) ){
                    sendMessage(`maximum number of ${type}'s reached.`)
                }
            })//this on click
        }//function
    )//each
        $(".rosterChosen").on("click",()=>{
            $(".guildRosterForward").off().remove();});

        
}//chooseTeam()
//    })//DOM

const alfa = ()=>{
    $("#gameScreen").find("form").remove();
    $("body").append(`<section id="teaMenuScreen" width='${canvaSqr}px'></section>`);
    buildGuilds();
    buildGuildsEvents();
}