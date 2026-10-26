const sharp=require('sharp');
const fs=require('fs');
const files=fs.readdirSync('public/official').filter(n=>n.startsWith('photo-'));
Promise.all(files.map(async(n,i)=>{
  const s=await sharp('public/official/'+n).resize(220,160,{fit:'cover'}).toBuffer();
  const label=Buffer.from(`<svg width="220" height="25"><rect width="220" height="25" fill="white"/><text x="8" y="18" font-size="15">${n}</text></svg>`);
  return [{input:s,left:(i%4)*220,top:Math.floor(i/4)*185},{input:label,left:(i%4)*220,top:Math.floor(i/4)*185+160}];
})).then(p=>sharp({create:{width:880,height:Math.ceil(files.length/4)*185,channels:3,background:'#eee'}}).composite(p.flat()).png().toFile('docs/photo-contact-sheet.png'));
