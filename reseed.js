import { writeFileSync, readFileSync} from 'fs';

const existingData = JSON.parse(readFileSync('db.json', 'utf-8'));

const newData = {
  "coffee": [
    {
      "title": "Oatmilk Latte ",
      "description": "Oatmilk with 2 espresso shots",
      "image": "https://perfectdailygrind.com/wp-content/uploads/2016/11/latte-art-@harshlight-1024x683.jpg",
      "instructions": "Mix coffee with Oatmilk",
      "id": 1
    },
    {
      "title": "Vanilla Creme Cold Brew ",
      "description": "Coffee that is brewed overnight with vanilla creme",
      "image": "https://coffeeaffection.com/wp-content/uploads/2021/05/Spanish-latte-milk-and-espresso.jpg",
      "instructions": "Brew cold brew coffee overnight and mix it with vanilla cream",
      "id": 2
    },
    {
      "title": "Brown Sugar Matcha Dream ",
      "description": "Matcha Latte with a pump of brown sugar",
      "image": "https://christieathome.com/wp-content/uploads/2020/12/Brown-Sugar-Boba-Matcha-Latte-10-460x460.jpg",
      "instructions": "Mix Matcha and brown sugar in a separate bowl. On a separate glass, add milk of choice then pour matcha mix",
      "id": 3
    },
    {
      "title": "Cappucinno",
      "description": "1 shot espresso, rest water",
      "image": "https://hips.hearstapps.com/hmg-prod/images/directly-above-shot-of-cappuccino-served-on-table-royalty-free-image-769817517-1564602749.jpg?resize=1200:*",
      "instructions": "Mix coffee with water",
      "id": 4
    },
    {
      "title": "testtt",
      "description": "description test",
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
      "instructions": "test instructions",
      "id": 5
    }
  ],
  "favorite": [
    {
      "userId": 5,
      "coffeeId": 1,
      "id": 5
    },
    {
      "userId": 5,
      "coffeeId": 4,
      "id": 6
    },
    {
      "userId": 1,
      "coffeeId": 4,
      "id": 7
    },
    {
      "userId": 1,
      "coffeeId": 5,
      "id": 8
    }
   ]
 }

existingData.coffee = newData.coffee;
existingData.favorite = newData.favorite;
writeFileSync('db.json', JSON.stringify(existingData), 'utf-8');