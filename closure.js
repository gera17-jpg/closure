function numberOfApples(){
    let Lisa = 2;
    let Yuki = 1;

    function numbersOfEatenApples(){
        console.log(`As the day goes by, Lisa ate ${Lisa} while Yuki finished ${Yuki} apples.`);
        Lisa++;
        Yuki++;
    }

    return numbersOfEatenApples;
}

const eatApples = numberOfApples();
eatApples();
