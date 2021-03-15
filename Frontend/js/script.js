// document.getElementById('expand').addEventListener('click',
//     function(){
//         var fill = document.querySelector('.form');
//         fill.classList.toggle('show');
//     });

//     document.getElementById('expand1').addEventListener('click',
//     function(){
//         var fill = document.querySelector('.form1');
//         fill.classList.toggle('show');
//     });

document.getElementById('alert').addEventListener('click', ()=>{
    console.log('send request')
    fetch(`https://alert-system-farmers.herokuapp.com/api/v1/alert`,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ 
            farmers: [],
        })})
        .then(res=> res.json())
        .then((res) => {
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
})