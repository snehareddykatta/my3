/**
 * Created by snehareddy on 3/18/2016.
 */
function wonder(building){
    this.building = building;
}

function monument(design, construction){
    this.design=design;
    this.construction=construction;
}


monument.prototype=new wonder("Taj Mahal");


var north= new monument("agra","INDIA")
function hangout(){
    console.log(hello);
    var hello="helloworld";

}
function enjoy() {

    console.log("The "+north.building+" is in "+north.design+", "+north.construction);

}
