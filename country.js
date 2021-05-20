class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let benin = new Country("Benin","French","Bonjour Monde",["green","yellow","yed"]);
let cameroon = new Country("Cameroon","French","Bonjour Monde",["green", "red", "yellow"]);
let egypt = new Country("Egypt", "Modern Standard Arabic","salām 'alaykum",["red", "white", "black"]);
let nigeria = new Country("Nigeria", "Igbo","kedụ.",["green", "white", "green"]);
let senegal = new Country("Senegal", "French","Bonjour Monde",["green", "yellow", "red"]);
let mali = new Country("Mali", "French","Bonjour Monde",["green", "yellow", "red"]); 
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]) 





function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayColors(usa);
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayColors(mexico);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(algeria);
    }
    else if (input === "Benin") {
        country = benin;
        DisplayColors(benin);
    }
    
    else if (input === "Cameroon") {
        country = cameroon;
        DisplayColors(cameroon);
    }
    else if (input === "Egypt") {
        country = egypt;
        DisplayColors(egypt);
    }
    else if (input === "Nigeria") {
        country = nigeria;
        DisplayColors(nigeria);
    }
    else if (input === "Senegal") {
        country = senegal;
        DisplayColors(senegal);
    }
    else if (input === "Mali") {
        country = mali;
        DisplayColors(mali);
    }
    

}

function DisplayColors(country)
{
    let color1Node = document.getElementById("Color1");
    color1Node.style.backgroundColor = country.colors[0];
}