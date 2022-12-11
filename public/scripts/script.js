// add bbcode 

const e_bold = document.getElementById('bold');
e_bold.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[b]your text in here[/b]"
})
const e_underline = document.getElementById('underline');
e_underline.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[u]your text in here[/u]"
})
const e_url = document.getElementById('url');
e_url.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[url]your link in here[/url]"
})
const e_inlinecode = document.getElementById('inlinecode');
e_inlinecode.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[il]your code in here[/il]"
})
const e_codeblock = document.getElementById('codeblock');
e_codeblock.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[cb]your code in here[/cb]"
})

const e_line = document.getElementById('line');
e_line.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[line]"
})
const e_list = document.getElementById('list');
e_list.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[list]title list [ul]first[/ul][ul]second[/ul][/list]"
})
const e_quote = document.getElementById('quote');
e_quote.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[quote]your text in here[/quote]"
})
const e_advice = document.getElementById('advice');
e_advice.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[advice]your code in here[/advice]"
})
const e_img = document.getElementById('img');
e_img.addEventListener('click',()=>{
    document.getElementById('content').innerHTML += "[img width='size']your link img in here[/img]"
})


// end add bbcode 