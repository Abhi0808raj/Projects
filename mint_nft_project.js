let nft=[];
function mint_nft(name,desc,dev,year,rating)
{
    const games={
        Name:name,
        Description:desc,
        Developer:dev,
        Year:year,
        Rating:rating};

    nft.push(games);
}
function list_nft() {
    for (let i = 0; i < nft.length; i++) {
        console.log(`Name: ${nft[i].Name}`);
        console.log(`Description: ${nft[i].Description}`);
        console.log(`Developer: ${nft[i].Developer}`);
        console.log(`Year: ${nft[i].Year}`);
        console.log(`Rating: ${nft[i].Rating}`);
        console.log('\n');
    }
}
function Total_nft() {
    console.log(`Total NFTs minted: ${nft.length}`);

}
mint_nft('Devil May Cry 5','A Stylish Action Adventure Hack and Slash Game which is set in a modern-day, demon-infested world which features a fast-paced, combo-heavy combat system.','Capcom',2019,'9/10');
mint_nft('Sekiro: Shadows Die Twice','It is an action-adventure game which focuses heavily on stealth, exploration, and intense swordplay, requiring players to master precise timing and tactical combat.','FromSoftware',2019,'10/10');
mint_nft('Genshin Impact','It is an open-world action role-playing game that features an expansive, visually stunning open world, which players can explore freely. It incorporates a gacha system for obtaining new characters and weapons, each with unique abilities and elemental affinities.','Hoyoverse',2020,'8.5/10')
mint_nft('Elden Ring','It is an Action RPG featuring a vast, open-world environment with their signature challenging combat with deep lore and rich storytelling.','FromSoftware',2022,'9.2/10');
mint_nft('God of War','It is an action-adventure game emphasizing close quarter combat with the narrative heavily focusing on Father-Son relationship between Kratos and his Atreus as they embark on their journey.','Santa Monica',2018,'8.7/10');
mint_nft('Lies of P','It is an action RPG featuring challenging combat mechanics emphasizing precise timing, strategic use of weapons, and dodging enemy attacks.','Round8',2023,'9.5/10');
list_nft();
Total_nft();