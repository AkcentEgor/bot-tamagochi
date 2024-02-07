class Bot
{
    constructor(food) {
        this.food = food;
    }

    feed() {
        this.food += 10;
        if (this.food >= 100) {
            this.food = 100;
        }
        document.querySelector('.food').textContent = bot.food;
    }

    checkState() {
        if (bot.food > 50) {
            document.querySelector('.pet_img').src = '1.png';
        } else {
            document.querySelector('.pet_img').src = '2.png';
        }

        document.querySelector('.food').textContent = bot.food;
    }
}

const bot = new Bot(100);

let intervalId = setInterval(() => {
    bot.food -= Math.floor(Math.random() * 10);
    if (bot.food <= 0) {
        bot.food = 0;
        clearInterval(intervalId);
    }
    bot.checkState();
    console.log(bot.food);
}, 3000);

document.querySelector('.feed').addEventListener('click', () => {
    bot.feed();
    
    console.log(bot.food);
});
