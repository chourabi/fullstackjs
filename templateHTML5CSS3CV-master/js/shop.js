var marks=[
    { id:1,name:"YAMAHA" },
    { id:2,name:"DUCATI" }
];

var prods= [
    { name:"YAMAHA R6 2018", description:"this is a super description, yes it's a super one", price:34000, img:"https://images.carandbike.com/bike-images/large/yamaha/fz-25/yamaha-fz-25.jpg?v=24", mark: 1 },
    { name:"YAMAHA R1 2019", description:"this is a super description, yes it's a super one", price:40000, img:"https://imgd.aeplcdn.com/1200x900/bw/models/yamaha-mt-15-bs-vi20200204191522.jpg", mark: 1 },
    { name:"DUCATI XZF", description:"this is a super description, yes it's a super one", price:60000, img:"https://i1.wp.com/us.motorsactu.com/wp-content/uploads/2020/01/01_DUCATI_PANIGALE_V4S_UC143424_High.jpg?fit=1200%2C675&ssl=1", mark: 2 },
    

];

var keySearchGlobal = "";
var markId = -1;

function initListMark(){
    

    marks.map((mark)=>{
        var blocOption = '<option value="'+mark.id+'" >'+mark.name+'</option>';
        document.getElementById("mark-search").innerHTML = document.getElementById("mark-search").innerHTML + blocOption;
    })

}



function initListProds(mark,keySearch){
    console.log(mark,keySearch);

    var blocProds = document.getElementById("prod-list");
    var BlocProduitToAdd = "";

    prods.map((produit)=>{
        if (produit.name.toLowerCase().indexOf(keySearch) != -1) {
            if (mark === -1) {
                    var cardProd ='<div class="col-sm-4 my-2"><div class="card" style="width: 100%;"><img class="card-img-top" src="'+produit.img+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+produit.name;
                    cardProd += '</h5><p class="card-text">'+produit.description+'</p></div></div></div>';
                    BlocProduitToAdd+=cardProd;
                    
            }else{
                if (produit.mark === mark) {

                    var cardProd ='<div class="col-sm-4 my-2"><div class="card" style="width: 100%;"><img class="card-img-top" src="'+produit.img+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+produit.name;
                    cardProd += '</h5><p class="card-text">'+produit.description+'</p></div></div></div>';
                    BlocProduitToAdd+=cardProd;

                }
                
            }
        }


    });


    blocProds.innerHTML=BlocProduitToAdd;



}


document.getElementById("key-search").addEventListener('keyup', function(e){
    keySearchGlobal=e.target.value.toLowerCase();
    initListProds(markId,e.target.value.toLowerCase());
});


document.getElementById("mark-search").addEventListener('change',function(e){
    markId = Number.parseInt(e.target.value);
    initListProds(markId,keySearchGlobal);
})



initListMark();
initListProds(markId,keySearchGlobal);