const cardClock = document.getElementById('card_clock');
setInterval(function() {
    function add (i){
        if(i<10){
            i='0'+i
        }
        return i;
    }
    const d = new Date();
    let txt = '';
    let hh = add(d.getHours());
    let mm = add(d.getMinutes());
    let ss = add(d.getSeconds());
    
    txt += `
    
    <div class="clock">${hh}:${mm}:${ss}</div>
    
    `
    cardClock.innerHTML=txt;
})
