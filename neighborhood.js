let restaurantArray = [{
        name: "Oregano's", 
        website: "https://oreganos.com/locations/tempe/"
    },
    {
        name: "Hangover Hoagie's", 
        website: "http://orderhangoverhoagies.com/"
    },
    {
        name: "Raising Cane's", 
        website: "https://www.raisingcanes.com/"
    }]


    
    let randomButton = document.querySelector(".randomizer");
    
function chooseRestaurant(event){
    event.preventDefault();
        
    const randomRestaurant = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];

    alert(`Restaurant: ${randomRestaurant.name}, Website: ${randomRestaurant.website}`);
        
}


randomButton.addEventListener('click', chooseRestaurant);
