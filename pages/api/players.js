// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const responseObject = [
  { "name": "Pelé", "link": "https://futbin.com/21/player/28995/pele", "id": "246525" }
  ,
  { "name": "Pelé", "link": "https://futbin.com/21/player/87/pele", "id": "237067" }
  ,
  { "name": "Ronaldo", "link": "https://futbin.com/21/player/27750/cristiano-ronaldo", "id": "134238529" }
  ,
  { "name": "Lewandowski", "link": "https://futbin.com/21/player/27751/robert-lewandowski", "id": "134406273" }
  ,
  { "name": "Messi", "link": "https://futbin.com/21/player/27985/lionel-messi", "id": "117598535" }
  ,
  { "name": "Maradona", "link": "https://futbin.com/21/player/28897/diego-maradona", "id": "246514" }
  ,
  { "name": "Maradona", "link": "https://futbin.com/21/player/66/diego-maradona", "id": "190042" }
  ,
  { "name": "Mbappé", "link": "https://futbin.com/21/player/27752/kylian-mbappe", "id": "117672259" }
  ,
  { "name": "Fernandes", "link": "https://futbin.com/21/player/27755/bruno-fernandes", "id": "201538790" }
  ,
  { "name": "Ronaldo", "link": "https://futbin.com/21/player/28696/ronaldo", "id": "246497" }
  ,
  { "name": "Zidane", "link": "https://futbin.com/21/player/28996/zinedine-zidane", "id": "248451" }
  ,
  { "name": "Zidane", "link": "https://futbin.com/21/player/20/zinedine-zidane", "id": "1397" }
  ,
  { "name": "Ronaldo", "link": "https://futbin.com/21/player/52/ronaldo", "id": "37576" }
  ,
  { "name": "De Bruyne", "link": "https://futbin.com/21/player/27756/kevin-de-bruyne", "id": "84079065" }
  ,
  { "name": "Kimmich", "link": "https://futbin.com/21/player/27758/joshua-kimmich", "id": "151207566" }
  ,
  { "name": "Ramos", "link": "https://futbin.com/21/player/27945/sergio-ramos", "id": "100819158" }
  ,
  { "name": "Neuer", "link": "https://futbin.com/21/player/27946/manuel-neuer", "id": "100830791" }
  ,
  { "name": "van Dijk", "link": "https://futbin.com/21/player/27947/virgil-van-dijk", "id": "117643888" }
  ,
  { "name": "Messi", "link": "https://futbin.com/21/player/28993/lionel-messi", "id": "134375751" }
  ,
  { "name": "Pelé", "link": "https://futbin.com/21/player/88/pele", "id": "237068" }
  ,
  { "name": "Maradona", "link": "https://futbin.com/21/player/92/diego-maradona", "id": "237074" }
  ,
  { "name": "Messi", "link": "https://futbin.com/21/player/26795/lionel-messi", "id": "100821319" }
  ,
  { "name": "Benzema", "link": "https://futbin.com/21/player/27235/karim-benzema", "id": "134382881" }
  ,
  { "name": "Puskás", "link": "https://futbin.com/21/player/28697/ferenc-puskas", "id": "256015" }
  ,
  { "name": "Cruyff", "link": "https://futbin.com/21/player/28698/johan-cruyff", "id": "246516" }
  ,
  { "name": "Ronaldo", "link": "https://futbin.com/21/player/28859/cristiano-ronaldo", "id": "167792961" }
  ,
  { "name": "Yashin", "link": "https://futbin.com/21/player/28898/lev-yashin", "id": "246526" }
  ,
  { "name": "Ronaldinho", "link": "https://futbin.com/21/player/28899/ronaldinho", "id": "246472" }
  ,
  { "name": "Maldini", "link": "https://futbin.com/21/player/28997/paolo-maldini", "id": "246535" }
  ,
  { "name": "Garrincha", "link": "https://futbin.com/21/player/28998/garrincha", "id": "247554" }
  ,
  { "name": "Ronaldinho", "link": "https://futbin.com/21/player/50/ronaldinho", "id": "28130" }
  ,
  { "name": "Cruyff", "link": "https://futbin.com/21/player/69/johan-cruyff", "id": "190045" }
  ,
  { "name": "Ronaldo", "link": "https://futbin.com/21/player/84/ronaldo", "id": "237064" }
  ,
  { "name": "Yashin", "link": "https://futbin.com/21/player/95/lev-yashin", "id": "238380" }
  ,
  { "name": "Maldini", "link": "https://futbin.com/21/player/125/paolo-maldini", "id": "238439" }
  ,
  { "name": "Garrincha", "link": "https://futbin.com/21/player/246/mane-garrincha", "id": "247553" }
  ,
  { "name": "Zidane", "link": "https://futbin.com/21/player/262/zinedine-zidane", "id": "248450" }
  ,
  { "name": "Puskás", "link": "https://futbin.com/21/player/988/ferenc-puskas", "id": "254642" }
  ,
  { "name": "Salah", "link": "https://futbin.com/21/player/26551/mohamed-salah", "id": "67318195" }
  ,
  { "name": "Messi", "link": "https://futbin.com/21/player/26570/lionel-messi", "id": "67266887" }
  ,
  { "name": "Ronaldo", "link": "https://futbin.com/21/player/27206/cristiano-ronaldo", "id": "100684097" }
  ,
  { "name": "Alexander-Arnold", "link": "https://futbin.com/21/player/27948/trent-alexander-arnold", "id": "134449009" }
  ,
  { "name": "Best", "link": "https://futbin.com/21/player/28699/george-best", "id": "246524" }
  ,
  { "name": "Eusébio", "link": "https://futbin.com/21/player/28700/eusebio", "id": "246541" }
  ,
  { "name": "Capita", "link": "https://futbin.com/21/player/28701/carlos-alberto-torres", "id": "247326" }
  ,
  { "name": "Baggio", "link": "https://futbin.com/21/player/28748/roberto-baggio", "id": "246493" }
];


export default (req, res) => {
  const { start = 0, end = responseObject.length - 1 } = req.query;
  res.status(200).json(responseObject.slice(start - 1, end))
}
