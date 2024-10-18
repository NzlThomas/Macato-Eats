function createCard(restaurant) {
    let addCard = `
    <div class="card">
            <section class="recto">
                <div class="texte">
                <h3>
                ${restaurant.name}
                </h3>
                <p>${restaurant.type}</p>  
                <p>${restaurant.service}</p>
                </div>
                <div class="image">
                    <img src=${restaurant.img}>
                    <button class="button">En savoir plus</button>
                </div>
            </section>

            <section class ="verso verso-flip">
                <h3>
                Note : ${restaurant.etoiles}
                </h3>
                <p>${restaurant.address}</p>
                <p>${restaurant.distance}</p>   
                <p>Budget :${restaurant.budget}</p>
                <a href=${restaurant.siteweb}>Visitez le site web</a>
            </section>
        </div>`;
        
        return addCard;
}

export default createCard;