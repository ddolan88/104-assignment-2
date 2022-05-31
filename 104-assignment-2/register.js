//object literal
let salon={
    name:"The Fashion Pet",
    address:{
        street:"Palomar",
        zip:"22345",
        city:"San Diego",
        number:"265-K"
    },
    hours:{
        open:"9:00 a.m.",
        close:"5:00 p.m."
    },
    phone:"555-555-5555",
    pets:[]
}

console.log(salon.pets[0]);

function displaySalonInfo(){
   let tmp=`<p>Welcome to ${salon.name} located in ${salon.address.city}</p>`;
   document.getElementById("Info").innerHTML=tmp;
}

displaySalonInfo();

//salon.pets.push([]);
function displayNames(){
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
    //document.getElementById("info").innerHTML=tmp;
}

displayNames();

//alert(`There is currently ${salon.pets.length} registered`);
//create a constructor
//name, age, gender, breed, service, owner, phone

function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone;
}

// creating a pet
let scooby = new Pet("Scooby", 11,"Male","Great Dane", "Grooming", "Shaggy", "999-999-9999");
let scrappy = new Pet("Scrappy",3,"Male","Mixed","Grooming","Shaggy","999-999-9999")

function isValid(aPet){
    let valid=true;
    if(aPet.name=="" && aPet.age=="" && aPet.gender=="" && aPet.breed=="" && aPet.service=="" && aPet.ownerName=="" && aPet.contactPhone==""){
        //if we arrive here the pet is not valid
        valid=false;
    }
}

//register new pets
function register(){
    console.log("Registering");
    //get the info from the inputs ***getElementById().value
    let petName=document.getElementById("txtName").value;
    let petAge=document.getElementById("txtAge").value;
    let petGender=document.getElementById("txtGender").value;
    let petBreed=document.getElementById("txtBreed").value;
    let petService=document.getElementById("selService").value;
    let petOwner=document.getElementById("txtOwner").value;
    let petPhone=document.getElementById("txtPhone").value;
    //create the object using the constructor
    let newPet = new Pet(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
    if(isValid(newPet)==true){
        //push the object into the array
        salon.pets.push(newPet);
        //display the new pet on the console
         console.log(newPet);
         console.log(salon.pets);
        //display in HTML
        displayCards();
        //clear the form
        clear();
    }
    // else{
    //     alert("Add a name for your pet");
    // }
}

function clear(){
    // let inputs=document.getElementsByTagName('input');
    // let inputs=document.querySelector("input");
    // for(let i=0;i<inputs.length;i++){
    //     inputs[i].value="";
    // }
    document.getElementById("selService").value="default";
    $("input").val("");
}

function init(){
    //hook events, triggered events
    displaySalonInfo();
    salon.pets.push(scooby,scrappy);
    console.log(scooby.scrappy);   
    displayCards();      
}

window.onload=init;