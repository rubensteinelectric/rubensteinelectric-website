function toggleBanner(num) {
    const arr = ["rubenstein_1024.jpg", "generator_1024_80.jpg"];
    const dv = document.getElementById('banner');
    dv.style.background = "url(images/" + arr[num] + ")";
    const ul = document.getElementById('banner_abstract');
    const li = ul.getElementsByTagName('li');

    for( let i = 0; i < 3; i++ ){
        if( i !== num ) {
            li[i].style.display = "none";
        } else {
            li[i].style.display = "block";
        }
    }
}

function generateEmailLink(){
    const ary = [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                    "u", "v", "w", "x", "y", "z", "@", ".", "6", "3"];
    const seq = [15,17,20,1,4,13,28,29,26,24,0,7,14,14,27,2,14,12];
    let em = "";

    for( let i = 0; i < seq.length; i++ ){
        em += ary[( seq[i] )];
    }

    return 'mailto:'+em;
}

let idx = 0;

function goToBanner(i){
    const eban = document.getElementById('elec_ban');
    const arr = ["elec_ban_a.jpg", "elec_ban_b.jpg", "elec_ban_c.jpg", "elec_ban_d.jpg"];
    eban.setAttribute( "src", "/assets/images/" + arr[i] );
}

function shiftBanner(){
    idx = ( idx + 1) % 4;
    goToBanner( idx );
}