function displayCards(){
    let petDiv = $("#pets");
    petDiv.html=("");
    //travel the array
    let tmp="";
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        tmp=`
        <div class="pet">
        <h5>Name: ${pet.name}</h5>
        <p>Age: ${pet.age}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Breed: ${pet.breed}</p>
        <p>Service: ${pet.service}</p>
        </div>`;
    }
    petDiv.append(tmp);
}

// function displayTable(){

// }