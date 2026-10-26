import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('sharp');
const assets = JSON.parse(await readFile('docs/official-home-assets.json','utf8'));
await mkdir('public/official',{recursive:true});
const unique = [...new Map(assets.map(a=>[a.src,a])).values()];
const manifest=[];
let photo=0,client=0;
for(const asset of unique){
  if(!asset.src.startsWith('https://alyamamagardens.com/')) continue;
  const isPhoto= /WhatsApp|whatsapp-image/.test(asset.src);
  const isBrand= /cropped-logo/.test(asset.src);
  const isClient= !isPhoto&&!isBrand&&!/myIcon|2025\/08\/(84|77|86|96|105|52)-|mohammed|2030/.test(asset.src);
  if(!isPhoto&&!isBrand&&!isClient) continue;
  const kind=isBrand?'brand':isPhoto?'photo':'client';
  const filename=isBrand?'brand.webp':isPhoto?`photo-${String(++photo).padStart(2,'0')}.webp`:`client-${String(++client).padStart(2,'0')}.webp`;
  try{
    const response=await fetch(asset.src);
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer=Buffer.from(await response.arrayBuffer());
    const output=await sharp(buffer,{density:150}).resize({width:isPhoto?1400:400,height:isPhoto?1400:240,fit:'inside',withoutEnlargement:true}).webp({quality:isPhoto?83:90}).toBuffer();
    await writeFile(`public/official/${filename}`,output);
    manifest.push({...asset,path:`/official/${filename}`,kind,bytes:output.length});
    console.log(`${filename} ${output.length}`);
  }catch(error){console.error(`Asset failed: ${asset.alt||filename}: ${error.message}`);process.exitCode=1;}
}
await writeFile('docs/asset-provenance.json',JSON.stringify({source:'https://alyamamagardens.com/',reviewed:'2026-10-26',assets:manifest},null,2));
