function calculSandwiches() {
    let hamSandwichCount = 0;
    let tunaSandwichCount = 0;
    let vegetarianSandwichCount = 0;

    
    while (breadCount >= 2 && hamCount >= 1) {
        hamSandwichCount++;
        breadCount -= 2;
        hamCount -= 1;
    }

    
    while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
        tunaSandwichCount++;
        breadCount -= 2;
        tunaCount -= 1;
        saladCount -= 2;
    }

    
    while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
        vegetarianSandwichCount++;
        breadCount -= 2;
        saladCount -= 1;
        tomatoCount -= 2;
    }

     
    displayThisText(`Nombre de sandwichs au jambon : ${hamSandwichCount}`);
    displayThisText(`Nombre de sandwichs au thon : ${tunaSandwichCount}`);
    displayThisText(`Nombre de sandwichs végétariens :${vegetarianSandwichCount}`);

    
    displayIngredients();
}


calculSandwiches();
