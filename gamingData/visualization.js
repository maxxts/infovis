'use strict';

// 1 - Load Data 
var games_data = [
	{"Title":"Age of Empires II: HD Edition","HoursPlayed":0,"Release":2013,"Aquired":"29-12-2014","Beta":"Release","Type":"Strategy","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":259,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Awesomenauts","HoursPlayed":2,"Release":2012,"Aquired":"07-01-2013","Beta":"Release","Type":"Plataformer MOBA","Finished":0,"Replayed":0,"Progress":14,"AchUnlocked":8,"AchTotal":58,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Batman: Arkham Asylum","HoursPlayed":2,"Release":2010,"Aquired":"28-06-2015","Beta":"Release","Type":"Superhero","Finished":0,"Replayed":0,"Progress":9,"AchUnlocked":4,"AchTotal":47,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Batman: Arkham City","HoursPlayed":0,"Release":2012,"Aquired":"25-06-2014","Beta":"Release","Type":"Superhero","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":58,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Batman: Arkham Origins","HoursPlayed":0,"Release":2013,"Aquired":"25-06-2014","Beta":"Release","Type":"Superhero","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":54,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Battlefield: Bad Company 2","HoursPlayed":60,"Release":2010,"Aquired":"19-05-2011","Beta":"Release","Type":"FPS","Finished":1,"Replayed":0,"Progress":75,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"BioShock Infinite","HoursPlayed":70,"Release":2013,"Aquired":"25-03-2014","Beta":"Release","Type":"FPS","Finished":1,"Replayed":1,"Progress":75,"AchUnlocked":60,"AchTotal":80,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Borderlands","HoursPlayed":45,"Release":2009,"Aquired":"03-11-2011","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":46,"AchUnlocked":37,"AchTotal":80,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Chaos on Deponia","HoursPlayed":17,"Release":2012,"Aquired":"26-12-2013","Beta":"Release","Type":"Point and Click","Finished":1,"Replayed":0,"Progress":47,"AchUnlocked":16,"AchTotal":34,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Demon Souls","HoursPlayed":2,"Release":2009,"Aquired":"01-06-2014","Beta":"Release","Type":"Action RPG","Finished":0,"Replayed":0,"Progress":5,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PS3","App":"Console","Payment":"Borrowed","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"Dark Souls I","HoursPlayed":20,"Release":2011,"Aquired":"20-03-2016","Beta":"Release","Type":"Action RPG","Finished":0,"Replayed":0,"Progress":50,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PS3","App":"Console","Payment":"Purchased","Digital":0,"Discount":1,"PreOrder":0},
	{"Title":"Dark Souls III","HoursPlayed":7,"Release":2016,"Aquired":"03-05-2016","Beta":"Release","Type":"Action RPG","Finished":0,"Replayed":0,"Progress":12,"AchUnlocked":5,"AchTotal":43,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"DayZ","HoursPlayed":50,"Release":2013,"Aquired":"17-12-2013","Beta":"Beta","Type":"Survival","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Deponia","HoursPlayed":14,"Release":2012,"Aquired":"22-12-2013","Beta":"Release","Type":"Adventure","Finished":1,"Replayed":0,"Progress":74,"AchUnlocked":14,"AchTotal":19,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Deus Ex: GOTY Edition","HoursPlayed":2,"Release":2000,"Aquired":"26-11-2012","Beta":"Release","Type":"FPS RPG","Finished":1,"Replayed":0,"Progress":5,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Deus Ex: Human Revolution","HoursPlayed":80,"Release":2011,"Aquired":"26-11-2012","Beta":"Release","Type":"FPS RPG","Finished":0,"Replayed":1,"Progress":82,"AchUnlocked":40,"AchTotal":49,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Deus Ex: The Missing Link","HoursPlayed":9,"Release":2011,"Aquired":"26-11-2012","Beta":"Release","Type":"FPS RPG","Finished":1,"Replayed":0,"Progress":80,"AchUnlocked":8,"AchTotal":10,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Deus Ex: Invisible War","HoursPlayed":0,"Release":2004,"Aquired":"26-11-2012","Beta":"Release","Type":"FPS RPG","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Dota 2","HoursPlayed":402,"Release":2012,"Aquired":"13-04-2012","Beta":"Beta","Type":"MOBA","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Free to Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Dragon Ball Xenoverse","HoursPlayed":20,"Release":2015,"Aquired":"22-07-2015","Beta":"Release","Type":"Fighting","Finished":0,"Replayed":0,"Progress":20,"AchUnlocked":10,"AchTotal":50,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Dungeon Defenders","HoursPlayed":20,"Release":2011,"Aquired":"25-01-2015","Beta":"Release","Type":"Tower Defense","Finished":0,"Replayed":0,"Progress":11,"AchUnlocked":11,"AchTotal":104,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"E.Y.E Divine Cybermancy","HoursPlayed":2,"Release":2011,"Aquired":"16-03-2012","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":2,"AchUnlocked":2,"AchTotal":100,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"The Elder Scrolls IV: Oblivion","HoursPlayed":450,"Release":2006,"Aquired":"23-05-2007","Beta":"Release","Type":"Action RPG","Finished":1,"Replayed":1,"Progress":90,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Cracked","Payment":"Pirated","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"The Elder Scrolls V: Skyrim","HoursPlayed":300,"Release":2011,"Aquired":"15-11-2012","Beta":"Release","Type":"Action RPG","Finished":1,"Replayed":1,"Progress":87,"AchUnlocked":65,"AchTotal":75,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Fallout 3","HoursPlayed":350,"Release":2008,"Aquired":"23-05-2009","Beta":"Release","Type":"FPS RPG","Finished":1,"Replayed":1,"Progress":85,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Cracked","Payment":"Pirated","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"Fallout 4","HoursPlayed":150,"Release":2015,"Aquired":"26-02-2016","Beta":"Release","Type":"FPS RPG","Finished":0,"Replayed":0,"Progress":47,"AchUnlocked":32,"AchTotal":68,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Far Cry 3","HoursPlayed":70,"Release":2012,"Aquired":"10-01-2014","Beta":"Release","Type":"FPS","Finished":1,"Replayed":1,"Progress":80,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Cracked","Payment":"Pirated","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"Far Cry 4","HoursPlayed":20,"Release":2014,"Aquired":"29-02-2016","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":25,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Goodbye Deponia","HoursPlayed":13,"Release":2013,"Aquired":"26-12-2013","Beta":"Release","Type":"Point and Click","Finished":1,"Replayed":0,"Progress":58,"AchUnlocked":29,"AchTotal":50,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"I Have No Mouth and I Must Scream","HoursPlayed":6,"Release":1996,"Aquired":"18-02-2016","Beta":"Release","Type":"Point and Click","Finished":0,"Replayed":0,"Progress":25,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Left 4 Dead 2","HoursPlayed":40,"Release":2009,"Aquired":"06-12-2010","Beta":"Beta","Type":"FPS","Finished":1,"Replayed":0,"Progress":37,"AchUnlocked":26,"AchTotal":70,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"The Legend of Korra","HoursPlayed":8,"Release":2014,"Aquired":"02-12-2014","Beta":"Release","Type":"Beat em Up","Finished":1,"Replayed":0,"Progress":50,"AchUnlocked":15,"AchTotal":30,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Madballs in Babo: Invasion","HoursPlayed":4,"Release":2009,"Aquired":"09-04-2012","Beta":"Release","Type":"Shooter","Finished":0,"Replayed":0,"Progress":6,"AchUnlocked":1,"AchTotal":17,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Magicka","HoursPlayed":25,"Release":2011,"Aquired":"19-05-2011","Beta":"Release","Type":"Comedy Adventure","Finished":1,"Replayed":0,"Progress":50,"AchUnlocked":44,"AchTotal":88,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Free to Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Metro 2033","HoursPlayed":1,"Release":2010,"Aquired":"13-12-2012","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":4,"AchUnlocked":2,"AchTotal":48,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Free to Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Monaco","HoursPlayed":1,"Release":2013,"Aquired":"22-06-2014","Beta":"Release","Type":"Action Stealth","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Orion: Prelude","HoursPlayed":0,"Release":2012,"Aquired":"21-06-2014","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":245,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Outlast","HoursPlayed":10,"Release":2013,"Aquired":"01-11-2015","Beta":"Release","Type":"Horror Survival","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":15,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Payday 2","HoursPlayed":20,"Release":2013,"Aquired":"27-07-2014","Beta":"Release","Type":"Stealth FPS","Finished":0,"Replayed":0,"Progress":6,"AchUnlocked":24,"AchTotal":408,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Planet Explorers","HoursPlayed":1,"Release":2014,"Aquired":"25-07-2014","Beta":"Beta","Type":"MMORPG","Finished":0,"Replayed":0,"Progress":5,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Portal","HoursPlayed":4,"Release":2007,"Aquired":"18-10-2007","Beta":"Release","Type":"Puzzle","Finished":1,"Replayed":1,"Progress":100,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Portal 2","HoursPlayed":15,"Release":2011,"Aquired":"24-12-2012","Beta":"Release","Type":"Puzzle","Finished":1,"Replayed":0,"Progress":70,"AchUnlocked":35,"AchTotal":51,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Red Orchestra 2","HoursPlayed":2,"Release":2011,"Aquired":"24-04-2014","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Risk of Rain","HoursPlayed":8,"Release":2013,"Aquired":"06-11-2014","Beta":"Release","Type":"Platform Survival","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":15,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Rogue Legacy","HoursPlayed":2,"Release":2013,"Aquired":"23-06-2014","Beta":"Release","Type":"Platform","Finished":0,"Replayed":0,"Progress":4,"AchUnlocked":1,"AchTotal":28,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Rust","HoursPlayed":50,"Release":2013,"Aquired":"02-08-2014","Beta":"Beta","Type":"Survival","Finished":0,"Replayed":0,"Progress":60,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Sanctum","HoursPlayed":1,"Release":2011,"Aquired":"07-07-2011","Beta":"Release","Type":"Tower Defense","Finished":0,"Replayed":0,"Progress":2,"AchUnlocked":2,"AchTotal":100,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Sonic & All-Star Racing Transformed","HoursPlayed":14,"Release":2013,"Aquired":"15-02-2016","Beta":"Release","Type":"Racing","Finished":1,"Replayed":0,"Progress":42,"AchUnlocked":21,"AchTotal":50,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Space Engineers","HoursPlayed":0,"Release":2013,"Aquired":"30-11-2015","Beta":"Beta","Type":"Survival","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"The Stanley Parable","HoursPlayed":2,"Release":2013,"Aquired":"21-06-2014","Beta":"Release","Type":"Exploration","Finished":1,"Replayed":1,"Progress":30,"AchUnlocked":3,"AchTotal":10,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Team Fortress 2","HoursPlayed":108,"Release":2007,"Aquired":"07-09-2011","Beta":"Release","Type":"FPS","Finished":0,"Replayed":0,"Progress":14,"AchUnlocked":72,"AchTotal":518,"Mode":"Multiplayer","Platform":"PC","App":"Steam","Payment":"Free to Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Terraria","HoursPlayed":100,"Release":2011,"Aquired":"10-07-2011","Beta":"Release","Type":"Platform Survival","Finished":1,"Replayed":0,"Progress":50,"AchUnlocked":44,"AchTotal":88,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Trine","HoursPlayed":15,"Release":2009,"Aquired":"22-12-2013","Beta":"Release","Type":"Platform Adventure","Finished":1,"Replayed":0,"Progress":46,"AchUnlocked":15,"AchTotal":33,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Trine 2","HoursPlayed":0,"Release":2013,"Aquired":"22-12-2013","Beta":"Release","Type":"Platform Adventure","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":97,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Undertale","HoursPlayed":1,"Release":2015,"Aquired":"18-02-2016","Beta":"Release","Type":"RPG","Finished":0,"Replayed":0,"Progress":5,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"The Witness","HoursPlayed":1,"Release":2016,"Aquired":"25-03-2016","Beta":"Release","Type":"Puzzle","Finished":0,"Replayed":0,"Progress":5,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Cracked","Payment":"Pirated","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Warhammer 40.000: Dawn of War II","HoursPlayed":6,"Release":2009,"Aquired":"30-03-2015","Beta":"Release","Type":"Strategy","Finished":0,"Replayed":0,"Progress":16,"AchUnlocked":12,"AchTotal":73,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"The Witcher 2","HoursPlayed":1,"Release":2011,"Aquired":"22-12-2013","Beta":"Release","Type":"Action RPG","Finished":0,"Replayed":0,"Progress":0,"AchUnlocked":0,"AchTotal":52,"Mode":"Singleplayer","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Worms Ultimate Mayhem","HoursPlayed":2,"Release":2011,"Aquired":"22-12-2013","Beta":"Release","Type":"Strategy","Finished":0,"Replayed":0,"Progress":5,"AchUnlocked":2,"AchTotal":38,"Mode":"Both","Platform":"PC","App":"Steam","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"League of Legends","HoursPlayed":1600,"Release":2009,"Aquired":"21-10-2009","Beta":"Beta","Type":"MOBA","Finished":0,"Replayed":0,"Progress":80,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Launcher","Payment":"Free To Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"World of Warcraft","HoursPlayed":320,"Release":2004,"Aquired":"20-12-2006","Beta":"Release","Type":"MMORPG","Finished":0,"Replayed":0,"Progress":70,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Battle.net","Payment":"Subcription","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Hearthstone","HoursPlayed":120,"Release":2014,"Aquired":"25-09-2014","Beta":"Release","Type":"Card Game","Finished":0,"Replayed":0,"Progress":40,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PC","App":"Battle.net","Payment":"Free to Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Diablo III","HoursPlayed":160,"Release":2012,"Aquired":"15-05-2012","Beta":"Release","Type":"Dungeon Crawler","Finished":1,"Replayed":1,"Progress":80,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PC","App":"Battle.net","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":1},
	{"Title":"Warcraft III","HoursPlayed":600,"Release":2002,"Aquired":"15-08-2005","Beta":"Release","Type":"Strategy","Finished":1,"Replayed":1,"Progress":100,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PC","App":"Battle.net","Payment":"Purchased","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"Heroes of the Storm","HoursPlayed":60,"Release":2015,"Aquired":"30-08-2015","Beta":"Release","Type":"MOBA","Finished":0,"Replayed":0,"Progress":20,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Battle.net","Payment":"Free to Play","Digital":1,"Discount":0,"PreOrder":0},
	{"Title":"Overwatch","HoursPlayed":20,"Release":2016,"Aquired":"24-05-2016","Beta":"Beta","Type":"FPS","Finished":0,"Replayed":0,"Progress":5,"AchUnlocked":0,"AchTotal":0,"Mode":"Multiplayer","Platform":"PC","App":"Battle.net","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":1},
	{"Title":"Dragon Age: Origins","HoursPlayed":400,"Release":2009,"Aquired":"26-12-2009","Beta":"Release","Type":"RPG","Finished":1,"Replayed":1,"Progress":90,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Origin","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Dragon Age II","HoursPlayed":60,"Release":2011,"Aquired":"30-12-2013","Beta":"Release","Type":"RPG","Finished":1,"Replayed":0,"Progress":70,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Origin","Payment":"Purchased","Digital":1,"Discount":1,"PreOrder":0},
	{"Title":"Dragon Age: Inquisition","HoursPlayed":60,"Release":2014,"Aquired":"18-11-2014","Beta":"Release","Type":"RPG","Finished":0,"Replayed":0,"Progress":30,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PC","App":"Origin","Payment":"Purchased","Digital":1,"Discount":0,"PreOrder":1},
	{"Title":"Watchdogs","HoursPlayed":45,"Release":2014,"Aquired":"02-01-2016","Beta":"Release","Type":"Action Adventure","Finished":0,"Replayed":0,"Progress":35,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PS3","App":"Console","Payment":"Purchased","Digital":0,"Discount":1,"PreOrder":0},
	{"Title":"Heavy Rain","HoursPlayed":80,"Release":2010,"Aquired":"01-06-2014","Beta":"Release","Type":"Interactive Drama","Finished":1,"Replayed":1,"Progress":85,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PS3","App":"Console","Payment":"Borrowed","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"L.A Noire","HoursPlayed":50,"Release":2011,"Aquired":"01-06-2014","Beta":"Release","Type":"Action Adventure","Finished":1,"Replayed":0,"Progress":85,"AchUnlocked":0,"AchTotal":0,"Mode":"Singleplayer","Platform":"PS3","App":"Console","Payment":"Borrowed","Digital":0,"Discount":0,"PreOrder":0},
	{"Title":"Adventure Time: Explore this Dungeon Because I Don't Know","HoursPlayed":4,"Release":2013,"Aquired":"02-01-2016","Beta":"Release","Type":"Dungeon Crawler","Finished":0,"Replayed":0,"Progress":10,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PS3","App":"Console","Payment":"Purchased","Digital":0,"Discount":1,"PreOrder":0},
	{"Title":"Grand Theft Auto V","HoursPlayed":80,"Release":2013,"Aquired":"01-06-2014","Beta":"Release","Type":"Action Adventure","Finished":1,"Replayed":0,"Progress":70,"AchUnlocked":0,"AchTotal":0,"Mode":"Both","Platform":"PS3","App":"Console","Payment":"Borrowed","Digital":0,"Discount":0,"PreOrder":0}
];

// 2 - Create Graphs
var topGamesTable = dc.dataTable("#dc-table-top-games");
var rowChartYears = dc.rowChart("#dc-row-graph-years");
var pieChartPlatforms = dc.pieChart("#dc-pie-chart-platform");
var pieChartDigital = dc.pieChart("#dc-pie-chart-digital");
var pieChartFinished = dc.pieChart("#dc-pie-chart-finished");
var pieChartReplayed = dc.pieChart("#dc-pie-chart-replayed");
var pieChartBeta = dc.pieChart("#dc-pie-chart-beta");
var pieChartMode = dc.pieChart("#dc-pie-chart-mode");



// 3 - Run Data thorugh crossfilters
var ndx = crossfilter(games_data);

// 4 - Create Dimensions for Visualizations

//For Total Games display
var totalGamesGroup = ndx.groupAll().reduceCount();

//For Total Achievments
var achUnlocked = ndx.groupAll().reduceSum(function(fact) { return fact.AchUnlocked; }).value();
var achTotal = ndx.groupAll().reduceSum(function(fact) { return fact.AchTotal; }).value();
console.log("Total Achievments: " + achUnlocked + " out of " + achTotal + ".");

//For Top Games
var topGamesDimension = ndx.dimension(function(d) { return d.HoursPlayed; });

//For Platform Pie Chart
var platformDimension = ndx.dimension(function(d) { return d.Platform; });
var platformGroup = platformDimension.group().reduceCount();

//For GameYear Row Chart
var gameYearDimension = ndx.dimension(function(d) { return d.Release; });
var gameYearGroup = gameYearDimension.group().reduceCount();

//For Digital Pie Chart
var gameDigitalDimension = ndx.dimension(function(d) { return d.Digital; });
var gameDigitalGroup = gameDigitalDimension.group().reduceCount();

//For Finished Pie Chart
var gameFinishedDimension = ndx.dimension(function(d) { return d.Finished; });
var gameFinishedGroup = gameFinishedDimension.group().reduceCount();

//For Replayed Pie Chart
var gameReplayedDimension = ndx.dimension(function(d) { return d.Replayed; });
var gameReplayedGroup = gameReplayedDimension.group().reduceCount();

//For Beta Pie Chart
var gameBetaDimension = ndx.dimension(function(d) { return d.Beta; });
var gameBetaGroup = gameBetaDimension.group().reduceCount();

//For Mode Pie Chart
var gameModeDimension = ndx.dimension(function(d) { return d.Mode; });
var gameModeGroup = gameModeDimension.group().reduceCount();

// 5 - Create Visualizations

topGamesTable
	.width(1200)
	.height(400)
    .dimension(topGamesDimension)
    .size(7)
    .group(function(d) { return "" })
    .columns([
        function(d) { return d.Title; },
        function(d) { return d.HoursPlayed; },
		function(d) { return d.Aquired; },
        function(d) { return d.Type; },
        function(d) { return d.Platform; },
        function(d) { return d.Payment; },
    ])
    .sortBy(function(d){ return d.HoursPlayed; })
    .order(d3.descending);

//For Platform Pie Chart
pieChartPlatforms
		.width(600)
		.height(375)
	    .dimension(platformDimension)
	    .group(platformGroup)
		.innerRadius(80)
	    .ordinalColors(['#009966','#000000']);

//For GameYear Row Chart
rowChartYears
		.width(1200)
        .height(400)
        .dimension(gameYearDimension)
        .group(gameYearGroup)
		.renderLabel(true)
        .title(function (d) {
            return d.value;
        })
        .ordinalColors(['#000000'])
        .elasticX(true);

//For Digital Pie Chart
pieChartDigital
		.width(600)
		.height(300)
	    .dimension(gameDigitalDimension)
	    .group(gameDigitalGroup)
	    .innerRadius(50)
		//.legend(dc.legend())
	    .renderLabel(true)
	    .label(function (d) {
            return d.key == 1 ? "Digital" : "Disc";
        })
	    .ordinalColors(['#000000','#009966']);

//For Finished Pie Chart
pieChartFinished
		.width(600)
		.height(300)
	    .dimension(gameFinishedDimension)
	    .group(gameFinishedGroup)
	    .innerRadius(50)
		//.legend(dc.legend())
	    .renderLabel(true)
	    .label(function (d) {
            return d.key == 1 ? "Yes" : "No";
        })
	    .ordinalColors(['#000000','#009966']);

//For Replayed Pie Chart
pieChartReplayed
		.width(600)
		.height(300)
	    .dimension(gameReplayedDimension)
	    .group(gameReplayedGroup)
	    .innerRadius(50)
		//.legend(dc.legend())
	    .renderLabel(true)
	    .label(function (d) {
            return d.key == 1 ? "Yes" : "No";
        })
	    .ordinalColors(['#000000','#009966']);

//For Beta Pie Chart
pieChartBeta
		.width(600)
		.height(375)
	    .dimension(gameBetaDimension)
	    .group(gameBetaGroup)
		.legend(dc.legend())
	    .renderLabel(false)
	    .ordinalColors(['#000000','#009966']);

//For Mode Pie Chart
pieChartMode
		.width(600)
		.height(375)
	    .dimension(gameModeDimension)
	    .group(gameModeGroup)
		.legend(dc.legend())
	    .renderLabel(false)
	    .ordinalColors(['#000000','#00ccff', '#009966']);

// 5 - Render Charts
dc.renderAll();            
