const spinnerF = dstyle =>{
    document.getElementById('spennar').style.display =dstyle;
}
// const spinnerResult = dstyle =>{
//     document.getElementById('row').style.display =dstyle;
// }
// sport db 
const buttonSearch = () => {
    const buttonInput = document.getElementById('input-search');
    const buttonInputvalue = buttonInput.value;
   //show spinner
    spinnerF('block')
    // hedden spinner result 
    // spinnerResult('none')

    // console.log(buttonInput);
    buttonInput.value ='';
    if(buttonInputvalue == ''){
        document.getElementById('input-empty-error').style.display ='block';
    }else{
        const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${buttonInputvalue}` 
        fetch(url)
        .then(res => res.json())
        .then(data => palyerDetelse(data.player))
        document.getElementById('input-empty-error').style.display ='none';
    }
    
} 
const palyerDetelse = players =>{
    // console.log(player);
    const row = document.getElementById('row');
    row.textContent ='';
    players?.forEach(player => {
        // console.log(player);
        const div =document.createElement('div');
        div.classList.add('col-md-6')
        div.innerHTML =`
        <div id="player-List" class="text-center m-3 p-2">
            <img  class="rounded-3 img-fluid" src="${player?.strThumb ? player?.strThumb :'No Image' }" alt="">
            <h3>Name : ${player.strPlayer}</h3>
            <h4>Position : ${player.strPosition}</h4>
            <h5>Country : ${player.strNationality}</h5>
            <button id="delete" class="btn btn-danger">Delete</button>
            <button id="details" onclick="details('${player.idPlayer}')"  class="btn btn-info">Details</button>
        </div>
        `;
        row.appendChild(div)
    });
    ////hidden spinner
    spinnerF('none')

    // show spinner result 
    // spinnerResult('block')
}
const details = id => {
    // console.log(id);
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    // console.log(url);
    .then(res => res.json())
    .then(data =>setdetails(data.players[0]))
}
const setdetails = set =>{
    // console.log(set);
    const row2= document.getElementById('row2');
    row2.textContent ='';
    row2.innerHTML =`
        <div id="player-List" class="col-10 text-center m-3 p-2">
            <img  class="rounded-3 img-fluid" src="${set.strThumb}" alt="">
            <h3>Name : ${set.strPlayer}</h3>
            <h4>Position : ${set.strPosition}</h4>
            <h5>Country : ${set.strNationality}</h5>
        </div>`;
        
    
}