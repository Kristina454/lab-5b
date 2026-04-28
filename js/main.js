// ==================== БУРГЕР-МЕНЮ ====================
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
function toggleMobile() {
  const isOpen = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isOpen ? 'none' : 'flex';
  burgerBtn.classList.toggle('active', !isOpen);
}
burgerBtn?.addEventListener('click', (e) => { e.stopPropagation(); toggleMobile(); });
document.addEventListener('click', (e) => { if (window.innerWidth <= 820 && mobileMenu && !e.target.closest('.header') && mobileMenu.style.display === 'flex') { mobileMenu.style.display = 'none'; burgerBtn.classList.remove('active'); } });
window.addEventListener('resize', () => { if (window.innerWidth > 820 && mobileMenu) mobileMenu.style.display = 'none'; if (window.innerWidth > 820 && burgerBtn) burgerBtn.classList.remove('active'); });

// ==================== РЕЦЕПТЫ САЛАТОВ ====================
const fullRecipes = {
  "Классическое оливье": { img: "images/оливье.jfif", ingredients: ["4 картофелины", "3 моркови", "4 яйца", "300 г вареной колбасы", "3 соленых огурца", "1 банка зеленого горошка", "200 г майонеза", "соль, перец"], steps: ["Отварите картофель, морковь и яйца. Остудите.", "Нарежьте все ингредиенты кубиками.", "Добавьте горошек, посолите, поперчите.", "Заправьте майонезом и перемешайте.", "Подавайте охлажденным."] },
  "Крабовый салат": { img: "images/крабовый.png", ingredients: ["200 г крабовых палочек", "3 яйца", "100 г риса", "1 банка кукурузы", "1 огурец", "майонез", "зелень"], steps: ["Отварите рис и яйца.", "Нарежьте крабовые палочки, яйца и огурец кубиками.", "Смешайте с кукурузой и рисом.", "Заправьте майонезом, добавьте зелень."] },
  "Столичный салат": { img: "images/столичный.png", ingredients: ["300 г куриной грудки", "4 картофелины", "3 яйца", "2 соленых огурца", "1 банка горошка", "майонез", "соль"], steps: ["Отварите курицу, картофель, яйца.", "Нарежьте кубиками.", "Смешайте с горошком и огурцами.", "Заправьте майонезом."] },
  "Салат мимоза": { img: "images/мимоза.webp", ingredients: ["1 банка горбуши", "4 яйца", "2 моркови", "2 картофелины", "100 г сыра", "лук", "майонез"], steps: ["Отварите яйца, морковь, картофель. Разделите белки и желтки.", "Рыбу разомните вилкой.", "Выкладывайте слоями: рыба, лук, белки, морковь, картофель, сыр. Каждый слой промазывайте майонезом.", "Верх посыпьте желтками."] },
  "Салат легкий": { img: "images/легкий.png", ingredients: ["2 огурца", "2 помидора", "1 перец", "зелень", "оливковое масло", "сок лимона", "соль"], steps: ["Нарежьте овощи.", "Мелко порубите зелень.", "Смешайте, посолите.", "Заправьте маслом и лимоном."] },
  "Салат с креветками": { img: "images/креветки.jpg", ingredients: ["300 г креветок", "1 авокадо", "руккола", "150 г черри", "лимон", "масло", "чеснок"], steps: ["Обжарьте креветки с чесноком.", "Авокадо нарежьте кубиками, черри пополам.", "Выложите на рукколу креветки, авокадо, черри.", "Сбрызните лимоном и маслом."] }
};
const saladsRecipesList = [
  { name: "Классическое оливье", desc: "Традиционный салат с колбасой, огурцами, яйцами и горошком.", icon: "fa-egg", img: "images/оливье.jfif" },
  { name: "Крабовый салат", desc: "Нежный салат с крабовыми палочками, кукурузой и рисом.", icon: "fa-crab", img: "images/крабовый.png" },
  { name: "Столичный салат", desc: "Изысканное сочетание курицы, огурцов и яиц.", icon: "fa-utensils", img: "images/столичный.png" },
  { name: "Салат мимоза", desc: "Слоеный салат с рыбой, сыром и яйцом.", icon: "fa-fish", img: "images/мимоза.webp" },
  { name: "Салат легкий", desc: "Свежие овощи с оливковым маслом.", icon: "fa-leaf", img: "images/легкий.png" },
  { name: "Салат с креветками", desc: "Салат с креветками, авокадо и рукколой.", icon: "fa-shrimp", img: "images/креветки.jpg" }
];

// ==================== РЕЦЕПТЫ СУПОВ ====================
const soupsFullRecipes = {
  "Сырный суп с курицей и грибами": { img: "images/суп1.jpg", ingredients: ["300 г курицы", "200 г грибов", "2 сырка", "3 картофелины", "1 морковь", "1 луковица", "соль, перец"], steps: ["Обжарьте курицу с луком и морковью, добавьте грибы.", "В бульон добавьте картофель.", "Через 10 минут добавьте зажарку.", "Растворите сырки, варите 5 минут."] },
  "Грибной суп-пюре": { img: "images/суп2.jpg", ingredients: ["500 г грибов", "2 картофелины", "1 луковица", "200 мл сливок", "соль, перец"], steps: ["Обжарьте грибы с луком.", "Добавьте картофель, залейте водой.", "Варите до готовности.", "Измельчите блендером, добавьте сливки."] },
  "Тыквенный крем-суп": { img: "images/суп3.jpg", ingredients: ["500 г тыквы", "2 картофелины", "1 морковь", "1 луковица", "200 мл сливок", "имбирь"], steps: ["Нарежьте овощи, варите до мягкости.", "Измельчите блендером.", "Добавьте сливки и имбирь."] },
  "Борщ": { img: "images/суп4.webp", ingredients: ["300 г свеклы", "2 картофелины", "1 морковь", "1 луковица", "300 г капусты", "томатная паста"], steps: ["Натрите свеклу, обжарьте с томатом.", "В бульон добавьте картофель и капусту.", "Через 10 минут добавьте зажарку.", "Варите до готовности."] },
  "Солянка мясная": { img: "images/суп5.jpg", ingredients: ["300 г мяса", "2 огурца", "1 луковица", "100 г оливок", "томатная паста", "лимон"], steps: ["Обжарьте мясо с луком.", "Добавьте томат, огурцы.", "Залейте водой, добавьте оливки.", "Варите 20 минут, подавайте с лимоном."] },
  "Щи": { img: "images/суп6.jpg", ingredients: ["300 г капусты", "2 картофелины", "1 морковь", "1 луковица", "томатная паста"], steps: ["Нашинкуйте капусту.", "В бульон добавьте картофель и капусту.", "Обжарьте лук с морковью и томатом.", "Соедините, варите 15 минут."] }
};
const soupsList = [
  { name: "Сырный суп с курицей и грибами", desc: "Нежный сырный суп с курицей и грибами.", icon: "fa-cheese", img: "images/суп1.jpg" },
  { name: "Грибной суп-пюре", desc: "Бархатный суп-пюре с грибным вкусом.", icon: "fa-mushroom", img: "images/суп2.jpg" },
  { name: "Тыквенный крем-суп", desc: "Яркий крем-суп из тыквы с имбирем.", icon: "fa-pumpkin", img: "images/суп3.jpg" },
  { name: "Борщ", desc: "Классический украинский борщ.", icon: "fa-utensils", img: "images/суп4.webp" },
  { name: "Солянка мясная", desc: "Наваристая солянка с мясом.", icon: "fa-meat", img: "images/суп5.jpg" },
  { name: "Щи", desc: "Традиционные русские щи.", icon: "fa-cabbage", img: "images/суп6.jpg" }
];

// ==================== РЕЦЕПТЫ ГОРЯЧИХ БЛЮД ====================
const mainsFullRecipes = {
  "Лазанья": { img: "images/лазанья.webp", ingredients: ["500 г фарша", "9 листов лазаньи", "500 мл бешамели", "200 г пармезана", "300 г томатного соуса", "1 луковица"], steps: ["Обжарьте лук с фаршем, добавьте томатный соус.", "Выложите слоями: соус, листы, фарш, бешамель, сыр.", "Повторите 3-4 слоя.", "Запекайте при 180°C 40 минут."] },
  "Тушеные кабачки со сметаной": { img: "images/кабачки.jfif", ingredients: ["3 кабачка", "1 луковица", "2 моркови", "200 г сметаны", "чеснок", "укроп"], steps: ["Нарежьте кабачки, обжарьте с луком и морковью.", "Тушите 10 минут, добавьте сметану, чеснок, укроп.", "Тушите еще 5 минут."] },
  "Булгур на гарнир в мультиварке": { img: "images/булгур.png", ingredients: ["1 стакан булгура", "2 стакана воды", "1 луковица", "1 морковь", "масло", "соль"], steps: ["Обжарьте лук с морковью.", "Добавьте булгур, обжарьте 2 минуты.", "Залейте водой, посолите.", "Готовьте в режиме 'Крупы' 25 минут."] },
  "Рис басмати": { img: "images/басмати.webp", ingredients: ["1 стакан риса", "2 стакана воды", "соль", "масло"], steps: ["Промойте рис, замочите на 20 минут.", "Вскипятите воду, добавьте рис и соль.", "Варите 10-12 минут без крышки.", "Слейте воду, добавьте масло."] },
  "Рататуй": { img: "images/рататуй.jpg", ingredients: ["2 баклажана", "2 цукини", "2 перца", "3 помидора", "1 луковица", "чеснок", "травы"], steps: ["Нарежьте овощи кружочками.", "Выложите слоями в форму.", "Сбрызните маслом, посыпьте травами и чесноком.", "Запекайте при 180°C 40 минут."] },
  "Плов": { img: "images/плов.jpg", ingredients: ["500 г баранины", "500 г риса", "3 моркови", "3 луковицы", "чеснок", "зира"], steps: ["Обжарьте мясо, добавьте лук и морковь.", "Залейте водой, добавьте специи, тушите 30 минут.", "Засыпьте рис, залейте водой, добавьте чеснок.", "Варите 30 минут, дайте настояться."] },
  "Мясо по-французски с картофелем": { img: "images/франзуцски.jpg", ingredients: ["500 г свинины", "1 кг картофеля", "2 луковицы", "200 г сыра", "200 г майонеза"], steps: ["Нарежьте мясо отбивными, картофель кружочками.", "Выложите слоями: картофель, лук, мясо, картофель.", "Смажьте майонезом, посыпьте сыром.", "Запекайте при 200°C 50 минут."] },
  "Ленивые манты": { img: "images/манты.webp", ingredients: ["500 г фарша", "1 луковица", "500 г слоеного теста", "сметана"], steps: ["Смешайте фарш с луком, солью, перцем.", "Раскатайте тесто, нарежьте квадратами.", "Выложите начинку, защипните края.", "Варите в пароварке 40 минут, подавайте со сметаной."] },
  "Рыба по-царски": { img: "images/рыба.webp", ingredients: ["1 кг семги", "3 яйца", "200 мл сливок", "100 г сыра", "лимон"], steps: ["Нарежьте рыбу порционными кусками.", "Выложите в форму, посолите, поперчите, сбрызните лимоном.", "Смешайте яйца со сливками, залейте рыбу.", "Посыпьте сыром, запекайте при 180°C 30 минут."] }
};
const mainsList = [
  { name: "Лазанья", desc: "Итальянская запеканка с фаршем и сыром.", icon: "fa-utensils", img: "images/лазанья.webp" },
  { name: "Тушеные кабачки со сметаной", desc: "Нежные кабачки в сметанном соусе.", icon: "fa-leaf", img: "images/кабачки.jfif" },
  { name: "Булгур на гарнир в мультиварке", desc: "Рассыпчатый булгур в мультиварке.", icon: "fa-seedling", img: "images/булгур.png" },
  { name: "Рис басмати", desc: "Ароматный рассыпчатый рис.", icon: "fa-utensils", img: "images/басмати.webp" },
  { name: "Рататуй", desc: "Овощное рагу по-провансальски.", icon: "fa-leaf", img: "images/рататуй.jpg" },
  { name: "Плов", desc: "Ароматный узбекский плов.", icon: "fa-utensils", img: "images/плов.jpg" },
  { name: "Мясо по-французски", desc: "Сочное мясо с картофелем под сыром.", icon: "fa-drumstick-bite", img: "images/франзуцски.jpg" },
  { name: "Ленивые манты", desc: "Быстрые манты из слоеного теста.", icon: "fa-utensils", img: "images/манты.webp" },
  { name: "Рыба по-царски", desc: "Нежная рыба в сливочной заливке.", icon: "fa-fish", img: "images/рыба.webp" }
];

// ==================== РЕЦЕПТЫ ДЕСЕРТОВ ====================
const dessertsFullRecipes = {
  "ПП-чизкейк без выпечки": { img: "images/пп.jpg", ingredients: ["200 г овсяного печенья", "500 г творога 5%", "200 г йогурта", "10 г желатина", "сахарозаменитель", "ягоды"], steps: ["Измельчите печенье, смешайте с водой, выложите на дно формы.", "Замочите желатин.", "Взбейте творог с йогуртом и сахарозаменителем.", "Растворите желатин, добавьте к творожной массе.", "Вылейте на основу, уберите в холодильник на 4 часа.", "Украсьте ягодами."] },
  "Итальянский яблочный пирог": { img: "images/пирог.webp", ingredients: ["3 яйца", "150 г сахара", "150 г муки", "3 яблока", "цедра лимона", "разрыхлитель"], steps: ["Взбейте яйца с сахаром до пышности.", "Добавьте муку, разрыхлитель, цедру.", "Яблоки нарежьте дольками, выложите в форму.", "Залейте тестом, выпекайте при 180°C 35 минут."] },
  "Глазированные сырки": { img: "images/сырки1.jpg", ingredients: ["500 г творога", "100 г сливочного масла", "100 г сахарной пудры", "200 г шоколада", "ванилин"], steps: ["Смешайте творог, масло, пудру и ванилин.", "Сформируйте брусочки, заморозьте 30 минут.", "Растопите шоколад.", "Окуните сырки в шоколад, дайте застыть."] },
  "Тирамису": { img: "images/тирамису.webp", ingredients: ["500 г маскарпоне", "3 яйца", "100 г сахара", "200 мл кофе", "печенье савоярди", "какао"], steps: ["Отделите желтки от белков.", "Взбейте желтки с сахаром, добавьте маскарпоне.", "Взбейте белки в пену, аккуратно вмешайте.", "Обмакните печенье в кофе.", "Выложите слоями: печенье, крем, повторите.", "Посыпьте какао, уберите в холодильник на 4 часа."] },
  "Шоколадный фондан": { img: "images/фондан.png", ingredients: ["200 г темного шоколада", "100 г сливочного масла", "3 яйца", "100 г сахара", "50 г муки"], steps: ["Растопите шоколад с маслом.", "Взбейте яйца с сахаром.", "Смешайте с шоколадной массой, добавьте муку.", "Разлейте по формочкам, выпекайте при 200°C 7-8 минут.", "Подавайте горячим с мороженым."] },
  "Чизкейк Нью-Йорк": { img: "images/нью.webp", ingredients: ["200 г печенья", "100 г сливочного масла", "600 г сливочного сыра", "150 г сахара", "3 яйца", "200 мл сливок"], steps: ["Измельчите печенье, смешайте с маслом, утрамбуйте в форму.", "Взбейте сыр с сахаром, добавьте яйца по одному.", "Влейте сливки, перемешайте.", "Вылейте на основу, выпекайте 1 час при 160°C.", "Остудите в выключенной духовке, затем в холодильнике."] }
};
const dessertsList = [
  { name: "ПП-чизкейк без выпечки", desc: "Полезный чизкейк без выпечки и сахара.", icon: "fa-cake", img: "images/пп.jpg" },
  { name: "Итальянский яблочный пирог", desc: "Нежный пирог с яблоками и цедрой.", icon: "fa-apple-alt", img: "images/пирог.webp" },
  { name: "Глазированные сырки", desc: "Домашние сырки в шоколадной глазури.", icon: "fa-candy-cane", img: "images/сырки1.jpg" },
  { name: "Тирамису", desc: "Классический итальянский десерт.", icon: "fa-mug-hot", img: "images/тирамису.webp" },
  { name: "Шоколадный фондан", desc: "Десерт с жидкой шоколадной сердцевиной.", icon: "fa-chocolate-bar", img: "images/фондан.png" },
  { name: "Чизкейк Нью-Йорк", desc: "Нежный сливочный чизкейк.", icon: "fa-cheese", img: "images/нью.webp" }
];

// ==================== РЕЦЕПТЫ НАПИТКОВ ====================
const drinksFullRecipes = {
  "Матча латте": { img: "images/матча.jpg", ingredients: ["1 ч.л. порошка матча", "200 мл молока", "1 ч.л. меда или сиропа", "50 мл горячей воды"], steps: ["Просейте матча в чашку через ситечко.", "Залейте горячей водой (не кипятком, 70-80°C).", "Взбейте венчиком до однородности без комочков.", "Подогрейте молоко и взбейте до пены.", "Аккуратно влейте молоко в матча, добавьте мед или сироп.", "Можно украсить пенкой или посыпать матча."] },
  "Домашний лимонад": { img: "images/лимонад.jpg", ingredients: ["3 лимона", "1 апельсин", "100 г сахара", "1 л воды", "мята", "лед"], steps: ["Из лимонов и апельсина выжмите сок.", "Сварите сироп из сахара и 100 мл воды, остудите.", "Смешайте сок, сироп и оставшуюся воду в кувшине.", "Добавьте листья мяты и лед.", "Подавайте охлажденным."] },
  "Глинтвейн": { img: "images/глинтвейн.webp", ingredients: ["750 мл красного сухого вина", "2 апельсина", "1 лимон", "4 палочки корицы", "5 бутонов гвоздики", "3 ст.л. меда", "имбирь, бадьян"], steps: ["Апельсин и лимон нарежьте кружочками.", "В кастрюлю налейте вино, добавьте фрукты, специи и мед.", "Нагревайте на медленном огне до 70-80°C (не кипятите!).", "Снимите с огня, накройте крышкой, дайте настояться 10-15 минут.", "Процедите и подавайте горячим."] },
  "Смузи из киви": { img: "images/смузи.jpg", ingredients: ["3 киви", "1 банан", "1 зеленое яблоко", "100 мл йогурта", "50 мл сока яблочного", "мед по вкусу"], steps: ["Очистите киви и банан, нарежьте кусочками.", "Яблоко нарежьте, удалив сердцевину.", "Все ингредиенты поместите в блендер.", "Добавьте йогурт, сок и мед.", "Взбейте до однородной консистенции.", "Подавайте сразу со льдом."] },
  "Ржаной квас": { img: "images/квас.png", ingredients: ["500 г ржаных сухарей", "5 л воды", "200 г сахара", "20 г дрожжей", "изюм"], steps: ["Обжарьте сухари в духовке до темно-коричневатого цвета.", "Залейте сухари кипятком, настаивайте 6-8 часов.", "Процедите настой, добавьте сахар и дрожжи.", "Оставьте бродить при комнатной температуре на 8-10 часов.", "Разлейте по бутылкам, добавьте в каждую по 3-4 изюминки.", "Уберите в холодильник на 2-3 дня для газирования."] },
  "Кофейная гранита": { img: "images/гранита.webp", ingredients: ["500 мл крепкого черного кофе", "100 г сахара", "1 ч.л. ванильного сахара", "для подачи: взбитые сливки"], steps: ["Заварите крепкий кофе.", "Растворите в горячем кофе сахар и ванильный сахар.", "Охладите до комнатной температуры.", "Перелейте в широкую емкость и поставьте в морозилку.", "Каждые 30 минут перемешивайте вилкой, разбивая ледяные кристаллы.", "Через 3-4 часа гранита готова. Подавайте со взбитыми сливками."] }
};
const drinksList = [
  { name: "Матча латте", desc: "Тонизирующий японский чай с молоком.", icon: "fa-leaf", img: "images/матча.jpg" },
  { name: "Домашний лимонад", desc: "Освежающий напиток с лимоном и мятой.", icon: "fa-lemon", img: "images/лимонад.jpg" },
  { name: "Глинтвейн", desc: "Ароматный согревающий напиток с пряностями.", icon: "fa-mug-hot", img: "images/глинтвейн.webp" },
  { name: "Смузи из киви", desc: "Зеленый витаминный смузи с киви и бананом.", icon: "fa-apple-alt", img: "images/смузи.jpg" },
  { name: "Ржаной квас", desc: "Домашний квас из ржаных сухарей.", icon: "fa-beer", img: "images/квас.png" },
  { name: "Кофейная гранита", desc: "Итальянский кофейный десерт-напиток.", icon: "fa-mug-saucer", img: "images/гранита.webp" }
];

// ==================== РАЗДЕЛ: ВЫПЕЧКА ====================
const bakeryFullRecipes = {
  "Хачапури по-аджарски": { img: "images/хачапури.jpg", ingredients: ["500 г муки", "250 мл молока", "7 г дрожжей", "1 ч.л. сахара", "1 ч.л. соли", "50 г сливочного масла", "300 г сулугуни", "2 яйца"], steps: ["Замесите дрожжевое тесто на молоке, дайте подойти 1 час.", "Разделите тесто на 4 части, раскатайте в лепешки.", "Заверните края лодочкой, выложите натертый сыр.", "Выпекайте 15 минут при 200°C.", "Достаньте, вбейте в центр каждого по яйцу, верните в духовку на 3 минуты.", "Подавайте горячими, растопив в желтке кусочек масла."] },
  "Круассаны": { img: "images/круассан.jpg", ingredients: ["500 г слоеного теста", "200 г сливочного масла", "1 яйцо", "2 ст.л. сахара"], steps: ["Раскатайте тесто в прямоугольник, выложите пластины масла.", "Сложите конвертом, раскатайте, повторите 3 раза.", "Нарежьте треугольниками, сверните в рогалики.", "Выложите на противень, смажьте яйцом.", "Выпекайте 20 минут при 190°C."] },
  "Фокачча": { img: "images/фокачча.webp", ingredients: ["500 г муки", "350 мл воды", "7 г дрожжей", "2 ч.л. соли", "4 ст.л. оливкового масла", "розмарин", "морская соль"], steps: ["Замесите тесто, дайте подойти 1.5 часа.", "Растяните тесто в форме на противне, сделайте пальцами углубления.", "Сбрызните маслом, посыпьте розмарином и солью.", "Выпекайте 20-25 минут при 220°C до золотистого цвета."] },
  "Синнабон с корицей": { img: "images/синнабон.jpg", ingredients: ["500 г муки", "250 мл молока", "100 г сахара", "7 г дрожжей", "100 г сливочного масла", "2 ст.л. корицы", "200 г сливочного сыра", "150 г сахарной пудры"], steps: ["Замесите дрожжевое тесто, дайте подойти.", "Раскатайте в прямоугольник, смажьте растопленным маслом, посыпьте сахаром и корицей.", "Сверните рулет, нарежьте на 12 частей.", "Выложите в форму, выпекайте 25 минут при 180°C.", "Для глазури взбейте сыр с маслом и пудрой, полейте горячие булочки."] },
  "Печенье": { img: "images/печенье.webp", ingredients: ["250 г муки", "150 г сливочного масла", "100 г сахара", "1 яйцо", "1 ч.л. разрыхлителя", "ванилин"], steps: ["Взбейте масло с сахаром, добавьте яйцо.", "Добавьте муку с разрыхлителем, замесите тесто.", "Сформируйте шарики, выложите на противень.", "Выпекайте 15 минут при 180°C."] },
  "Чак-чак": { img: "images/чакчак.webp", ingredients: ["300 г муки", "3 яйца", "2 ст.л. сахара", "щепотка соли", "200 г меда", "200 мл масла для фритюра"], steps: ["Замесите крутое тесто из муки, яиц, сахара, соли.", "Раскатайте тонко, нарежьте тонкой соломкой.", "Обжарьте во фритюре до золотистого цвета.", "Растопите мед, залейте им жареные полоски.", "Выложите горкой, дайте застыть."] },
  "Бисквитный рулет": { img: "images/рулет.jfif", ingredients: ["4 яйца", "120 г сахара", "120 г муки", "1 ч.л. разрыхлителя", "200 г вареной сгущенки"], steps: ["Взбейте яйца с сахаром до пышности.", "Добавьте муку с разрыхлителем, аккуратно перемешайте.", "Вылейте на противень с бумагой, выпекайте 10 минут при 200°C.", "Горячий корж сверните с бумагой в рулет, дайте остыть.", "Разверните, смажьте сгущенкой, сверните заново."] },
  "Эчпочмак": { img: "images/эчпочмак.jpg", ingredients: ["500 г муки", "200 мл кефира", "100 г сливочного масла", "500 г баранины", "3 картофелины", "2 луковицы", "соль, перец"], steps: ["Замесите тесто на кефире с маслом.", "Нарежьте мясо, картофель и лук мелкими кубиками, посолите, поперчите.", "Раскатайте тесто, вырежьте круги, выложите начинку.", "Защипните треугольником, оставив отверстие сверху.", "Выпекайте 40 минут при 180°C, за 10 минут долейте в отверстия бульон."] },
  "Слойки с сыром и ветчиной": { img: "images/слойки.png", ingredients: ["500 г слоеного бездрожжевого теста", "200 г ветчины", "150 г сыра", "1 яйцо"], steps: ["Раскатайте тесто, нарежьте квадратами.", "Выложите на каждый квадрат нарезанную ветчину и сыр.", "Сложите пополам или конвертом, защипните края.", "Смажьте яйцом, выпекайте 15-20 минут при 200°C."] }
};
const bakeryList = [
  { name: "Хачапури по-аджарски", desc: "Грузинские лодочки с сыром и яйцом.", icon: "fa-cheese", img: "images/хачапури.jpg" },
  { name: "Круассаны", desc: "Нежные французские круассаны из слоеного теста.", icon: "fa-croissant", img: "images/круассан.jpg" },
  { name: "Фокачча", desc: "Итальянский плоский хлеб с розмарином.", icon: "fa-bread-slice", img: "images/фокачча.webp" },
  { name: "Синнабон с корицей", desc: "Пышные булочки с корицей и сливочной глазурью.", icon: "fa-candy-cane", img: "images/синнабон.jpg" },
  { name: "Печенье", desc: "Домашнее песочное печенье к чаю.", icon: "fa-cookie-bite", img: "images/печенье.webp" },
  { name: "Чак-чак", desc: "Татарское лакомство из теста с медом.", icon: "fa-honey-pot", img: "images/чакчак.webp" },
  { name: "Бисквитный рулет", desc: "Нежный рулет с вареной сгущенкой.", icon: "fa-cake", img: "images/рулет.jfif" },
  { name: "Эчпочмак", desc: "Татарские треугольники с мясом и картофелем.", icon: "fa-utensils", img: "images/эчпочмак.jpg" },
  { name: "Слойки с сыром и ветчиной", desc: "Хрустящие слойки с сырно-ветчинной начинкой.", icon: "fa-utensils", img: "images/слойки.png" }
];

// ==================== РАЗДЕЛ: ЗАВТРАКИ ====================
const breakfastFullRecipes = {
  "Воздушный омлет": { img: "images/омлет.png", ingredients: ["3 яйца", "100 мл молока", "соль", "сливочное масло"], steps: ["Яйца взбейте с молоком и солью.", "Форму для запекания смажьте маслом.", "Залейте яичную смесь, выпекайте 20 минут при 180°C.", "Подавайте горячим."] },
  "Панкейки с кленовым сиропом": { img: "images/панкейки.jfif", ingredients: ["200 г муки", "2 яйца", "200 мл молока", "1 ст.л. сахара", "1 ч.л. разрыхлителя", "кленовый сироп"], steps: ["Смешайте муку, сахар, разрыхлитель.", "Отдельно взбейте яйца с молоком.", "Соедините сухие и жидкие ингредиенты.", "Жарьте панкейки на сухой сковороде с двух сторон.", "Подавайте с кленовым сиропом."] },
  "Овсяная каша с ягодами": { img: "images/каша.jpg", ingredients: ["200 г овсяных хлопьев", "500 мл молока", "100 г ягод", "1 ст.л. меда"], steps: ["Вскипятите молоко, добавьте хлопья.", "Варите 5-7 минут, помешивая.", "Добавьте мед и ягоды.", "Перемешайте, настаивайте под крышкой 2 минуты."] },
  "Яичные конвертики с сыром и ветчиной": { img: "images/конвертики.webp", ingredients: ["3 яйца", "50 г ветчины", "50 г сыра", "зелень"], steps: ["Яйца взбейте, пожарьте 2 тонких блина.", "На каждый положите нарезанную ветчину и сыр.", "Сверните конвертиком.", "Обжарьте с обеих до румяной корочки."] },
  "Горячие бутерброды с колбасой и яйцом на сковороде": { img: "images/бутерброды.webp", ingredients: ["4 ломтика хлеба", "50 г колбасы", "2 яйца", "сыр", "сливочное масло"], steps: ["В сковороде растопите масло, выложите хлеб.", "Сверху положите колбасу, вбейте яйцо.", "Посыпьте сыром, накройте крышкой.", "Готовьте 5 минут до готовности яйца.", "Подавайте горячими."] },
  "Манные биточки": { img: "images/биточки.jfif", ingredients: ["1 л молока", "200 г манной крупы", "2 яйца", "100 г панировочных сухарей"], steps: ["Сварите густую манную кашу, остудите.", "Добавьте яйца, сформируйте биточки.", "Обваляйте в сухарях, обжарьте до золотистого цвета.", "Подавайте со сметаной или вареньем."] },
  "Ленивая пицца на сковороде": { img: "images/пицца.webp", ingredients: ["3 яйца", "4 ст.л. сметаны", "6 ст.л. муки", "колбаса", "сыр", "томатный соус"], steps: ["Яйца взбейте со сметаной, добавьте муку.", "Вылейте тесто на сковороду.", "Смажьте томатным соусом, выложите колбасу и сыр.", "Накройте крышкой, готовьте 10 минут на медленном огне."] },
  "Закуска Дамский завтрак": { img: "images/дамский.webp", ingredients: ["4 ломтика батона", "творожный сыр", "лосось", "авокадо", "перепелиные яйца", "зелень"], steps: ["Батон подсушите на сковороде.", "Намажьте творожным сыром.", "Выложите ломтики авокадо и лосося.", "Украсьте половинками перепелиных яиц и зеленью."] },
  "Творожная запеканка с манкой и вишней (без муки)": { img: "images/запеканка.webp", ingredients: ["500 г творога", "3 яйца", "100 г манки", "200 г вишни", "100 г сахара"], steps: ["Взбейте творог с яйцами и сахаром.", "Добавьте манку, перемешайте.", "Выложите половину массы в форму, затем вишню, сверху оставшийся творог.", "Выпекайте 40 минут при 180°C."] }
};
const breakfastList = [
  { name: "Воздушный омлет", desc: "Нежный и пышный омлет в духовке.", icon: "fa-egg", img: "images/омлет.png" },
  { name: "Панкейки с кленовым сиропом", desc: "Пышные американские блинчики.", icon: "fa-pancakes", img: "images/панкейки.jfif" },
  { name: "Овсяная каша с ягодами", desc: "Полезный завтрак из овсянки.", icon: "fa-seedling", img: "images/каша.jpg" },
  { name: "Яичные конвертики с сыром и ветчиной", desc: "Яичные блины с начинкой.", icon: "fa-cheese", img: "images/конвертики.webp" },
  { name: "Горячие бутерброды с колбасой и яйцом на сковороде", desc: "Сытные бутерброды на сковороде.", icon: "fa-bread-slice", img: "images/бутерброды.webp" },
  { name: "Манные биточки", desc: "Нежные биточки из манной каши.", icon: "fa-utensils", img: "images/биточки.jfif" },
  { name: "Ленивая пицца на сковороде", desc: "Быстрая пицца за 10 минут.", icon: "fa-pizza-slice", img: "images/пицца.webp" },
  { name: "Закуска Дамский завтрак", desc: "Элегантная закуска с лососем.", icon: "fa-fish", img: "images/дамский.webp" },
  { name: "Творожная запеканка с манкой и вишней (без муки)", desc: "Нежная запеканка без муки.", icon: "fa-cake", img: "images/запеканка.webp" }
];

// ==================== РАЗДЕЛ: СОУСЫ И МАРИНАДЫ ====================
const saucesFullRecipes = {
  "Песто": { img: "images/песто.webp", ingredients: ["50 г базилика", "50 г кедровых орехов", "50 г пармезана", "1 зубчик чеснока", "100 мл оливкового масла", "соль"], steps: ["В блендер положите базилик, орехи, сыр, чеснок и соль.", "Измельчайте, постепенно добавляя масло.", "Доведите до однородной пастообразной консистенции.", "Используйте для пасты, пиццы или сэндвичей."] },
  "Соус Цезарь домашний": { img: "images/цезарь.webp", ingredients: ["2 яйца", "2 ст.л. лимонного сока", "1 ч.л. горчицы", "50 г пармезана", "100 мл оливкового масла", "2 зубчика чеснока"], steps: ["Яйца опустите на 1 минуту в кипяток.", "Взбейте яйца с горчицей и лимонным соком.", "Добавьте измельченный чеснок и тертый пармезан.", "Вливайте тонкой струйкой масло, постоянно взбивая.", "Соус должен загустеть."] },
  "Маринад для шашлыка": { img: "images/маринад.webp", ingredients: ["1 кг лука", "2 лимона", "100 мл растительного масла", "100 мл минеральной воды", "соль, перец, специи"], steps: ["Лук натрите на терке или измельчите в блендере.", "Добавьте сок лимона, масло, минералку и специи.", "Залейте маринадом мясо на 4-6 часов", "Мясо станет невероятно мягким и сочным."] },
  "Терияки": { img: "images/терияки.jpg", ingredients: ["100 мл соевого соуса", "50 мл мирина", "50 г сахара", "1 зубчик чеснока", "1 ч.л. имбиря"], steps: ["Смешайте соевый соус, мирин и сахар.", "Нагревайте на медленном огне до растворения сахара.", "Добавьте измельченные чеснок и имбирь.", "Варите 5 минут до загустения.", "Идеален для курицы и рыбы."] },
  "Соус Биг Тейсти": { img: "images/биг.webp", ingredients: ["100 г майонеза", "50 г кетчупа", "1 ст.л. горчицы", "1 ст.л. вустерского соуса", "паприка, чеснок"], steps: ["Смешайте майонез, кетчуп и горчицу.", "Добавьте вустерский соус и специи.", "Хорошо перемешайте.", "Соус как в известном бургере готов!"] },
  "Тартар": { img: "images/тартар.webp", ingredients: ["200 г майонеза", "3 соленых огурца", "2 ст.л. каперсов", "1 луковица", "зелень петрушки", "сок лимона"], steps: ["Огурцы, каперсы, лук и зелень мелко нарежьте.", "Смешайте с майонезом.", "Добавьте лимонный сок.", "Подавайте к рыбе или морепродуктам."] },
  "Ранч": { img: "images/ранч.webp", ingredients: ["200 г сметаны", "100 г майонеза", "50 мл молока", "чеснок", "лук", "укроп"], steps: ["Смешайте сметану, майонез и молоко.", "Добавьте измельченные чеснок, лук и укроп.", "Посолите, поперчите.", "Соус готов для салатов и куриных крыльев."] },
  "Бешамель": { img: "images/бешамель.jpg", ingredients: ["500 мл молока", "50 г сливочного масла", "50 г муки", "мускатный орех", "соль"], steps: ["Растопите масло, добавьте муку, обжарьте 2 минуты.", "Влейте горячее молоко, постоянно помешивая венчиком.", "Варите до загустения 5-7 минут.", "Добавьте мускатный орех и соль."] },
  "Томатный соус": { img: "images/томатный.jpg", ingredients: ["1 кг помидоров", "2 зубчика чеснока", "1 луковица", "базилик", "оливковое масло", "соль"], steps: ["Помидоры ошпарьте, снимите кожуру.", "Обжарьте лук и чеснок.", "Добавьте помидоры и тушите 30 минут.", "Измельчите блендером, добавьте базилик.", "Посолите по вкусу."] }
};
const saucesList = [
  { name: "Песто", desc: "Итальянский соус из базилика и орехов.", icon: "fa-leaf", img: "images/песто.webp" },
  { name: "Соус Цезарь домашний", desc: "Классическая заправка для салата Цезарь.", icon: "fa-utensils", img: "images/цезарь.webp" },
  { name: "Маринад для шашлыка", desc: "Для сочного и мягкого мяса.", icon: "fa-fire", img: "images/маринад.webp" },
  { name: "Терияки", desc: "Японский сладко-соленый соус.", icon: "fa-globe", img: "images/терияки.jpg" },
  { name: "Соус Биг Тейсти", desc: "Соус как в бургерной.", icon: "fa-burger", img: "images/биг.webp" },
  { name: "Тартар", desc: "Классический соус к рыбе.", icon: "fa-fish", img: "images/тартар.webp" },
  { name: "Ранч", desc: "Популярный американский соус.", icon: "fa-flag-usa", img: "images/ранч.webp" },
  { name: "Бешамель", desc: "Французский белый соус.", icon: "fa-french", img: "images/бешамель.jpg" },
  { name: "Томатный соус", desc: "Домашний томатный соус к пасте.", icon: "fa-tomato", img: "images/томатный.jpg" }
];

// ==================== ЭЛЕМЕНТЫ СТРАНИЦ ====================
const homePage = document.getElementById('homePage');
const catalogPage = document.getElementById('catalogPage');
const saladsListPage = document.getElementById('saladsListPage');
const soupsListPage = document.getElementById('soupsListPage');
const mainsListPage = document.getElementById('mainsListPage');
const dessertsListPage = document.getElementById('dessertsListPage');
const drinksListPage = document.getElementById('drinksListPage');
const bakeryListPage = document.getElementById('bakeryListPage');
const breakfastListPage = document.getElementById('breakfastListPage');
const saucesListPage = document.getElementById('saucesListPage');
const saladDetailPage = document.getElementById('saladDetailPage');
const soupDetailPage = document.getElementById('soupDetailPage');
const mainDetailPage = document.getElementById('mainDetailPage');
const dessertDetailPage = document.getElementById('dessertDetailPage');
const drinkDetailPage = document.getElementById('drinkDetailPage');
const bakeryDetailPage = document.getElementById('bakeryDetailPage');
const breakfastDetailPage = document.getElementById('breakfastDetailPage');
const sauceDetailPage = document.getElementById('sauceDetailPage');
const travelPage = document.getElementById('travelPage');
const aboutPage = document.getElementById('aboutPage');
const countryDetailPage = document.getElementById('countryDetailPage');
const navLinks = document.querySelectorAll('[data-page]');

// ==================== ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ СТРАНИЦ ====================
function showPage(pageId) {
  homePage.classList.add('hidden-page');
  catalogPage.classList.add('hidden-page');
  saladsListPage.classList.add('hidden-page');
  soupsListPage.classList.add('hidden-page');
  mainsListPage.classList.add('hidden-page');
  dessertsListPage.classList.add('hidden-page');
  drinksListPage.classList.add('hidden-page');
  bakeryListPage.classList.add('hidden-page');
  breakfastListPage.classList.add('hidden-page');
  saucesListPage.classList.add('hidden-page');
  saladDetailPage.classList.add('hidden-page');
  soupDetailPage.classList.add('hidden-page');
  mainDetailPage.classList.add('hidden-page');
  dessertDetailPage.classList.add('hidden-page');
  drinkDetailPage.classList.add('hidden-page');
  bakeryDetailPage.classList.add('hidden-page');
  breakfastDetailPage.classList.add('hidden-page');
  sauceDetailPage.classList.add('hidden-page');
  travelPage.classList.add('hidden-page');
  aboutPage.classList.add('hidden-page');
  countryDetailPage.classList.add('hidden-page');
  
  if (pageId === 'home') homePage.classList.remove('hidden-page');
  if (pageId === 'catalog') catalogPage.classList.remove('hidden-page');
  if (pageId === 'saladsList') saladsListPage.classList.remove('hidden-page');
  if (pageId === 'soupsList') soupsListPage.classList.remove('hidden-page');
  if (pageId === 'mainsList') mainsListPage.classList.remove('hidden-page');
  if (pageId === 'dessertsList') dessertsListPage.classList.remove('hidden-page');
  if (pageId === 'drinksList') drinksListPage.classList.remove('hidden-page');
  if (pageId === 'bakeryList') bakeryListPage.classList.remove('hidden-page');
  if (pageId === 'breakfastList') breakfastListPage.classList.remove('hidden-page');
  if (pageId === 'saucesList') saucesListPage.classList.remove('hidden-page');
  if (pageId === 'saladDetail') saladDetailPage.classList.remove('hidden-page');
  if (pageId === 'soupDetail') soupDetailPage.classList.remove('hidden-page');
  if (pageId === 'mainDetail') mainDetailPage.classList.remove('hidden-page');
  if (pageId === 'dessertDetail') dessertDetailPage.classList.remove('hidden-page');
  if (pageId === 'drinkDetail') drinkDetailPage.classList.remove('hidden-page');
  if (pageId === 'bakeryDetail') bakeryDetailPage.classList.remove('hidden-page');
  if (pageId === 'breakfastDetail') breakfastDetailPage.classList.remove('hidden-page');
  if (pageId === 'sauceDetail') sauceDetailPage.classList.remove('hidden-page');
  if (pageId === 'travel') travelPage.classList.remove('hidden-page');
  if (pageId === 'about') aboutPage.classList.remove('hidden-page');
  if (pageId === 'countryDetail') countryDetailPage.classList.remove('hidden-page');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if ((pageId === 'saladsList' || pageId === 'soupsList' || pageId === 'mainsList' || pageId === 'dessertsList' || pageId === 'drinksList' || pageId === 'bakeryList' || pageId === 'breakfastList' || pageId === 'saucesList' || pageId === 'saladDetail' || pageId === 'soupDetail' || pageId === 'mainDetail' || pageId === 'dessertDetail' || pageId === 'drinkDetail' || pageId === 'bakeryDetail' || pageId === 'breakfastDetail' || pageId === 'sauceDetail') && link.getAttribute('data-page') === 'catalog') {
      link.classList.add('active');
    } else if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else if (pageId === 'countryDetail' && link.getAttribute('data-page') === 'travel') {
      link.classList.add('active');
    }
  });
  
  if (window.innerWidth <= 820 && mobileMenu) { mobileMenu.style.display = 'none'; burgerBtn.classList.remove('active'); }
}

// ==================== РЕНДЕР СПИСКОВ РЕЦЕПТОВ ====================
function renderSaladsList() {
  const grid = document.getElementById('saladsRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  saladsRecipesList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Салат'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showSaladDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderSoupsList() {
  const grid = document.getElementById('soupsRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  soupsList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Суп'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showSoupDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderMainsList() {
  const grid = document.getElementById('mainsRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  mainsList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Блюдо'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showMainDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderDessertsList() {
  const grid = document.getElementById('dessertsRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  dessertsList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Десерт'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showDessertDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderDrinksList() {
  const grid = document.getElementById('drinksRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  drinksList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Напиток'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showDrinkDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderBakeryList() {
  const grid = document.getElementById('bakeryRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  bakeryList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Выпечка'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showBakeryDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderBreakfastList() {
  const grid = document.getElementById('breakfastRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  breakfastList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Завтрак'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showBreakfastDetail(recipe.name));
    grid.appendChild(item);
  });
}

function renderSaucesList() {
  const grid = document.getElementById('saucesRecipesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  saucesList.forEach(recipe => {
    const item = document.createElement('div');
    item.className = 'recipe-item';
    item.innerHTML = `<img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=Соус'"><div class="recipe-content"><h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3><p>${recipe.desc}</p></div>`;
    item.addEventListener('click', () => showSauceDetail(recipe.name));
    grid.appendChild(item);
  });
}

// ==================== ПОКАЗ ДЕТАЛЬНЫХ РЕЦЕПТОВ ====================
function showSaladDetail(name) { const recipe = fullRecipes[name]; if (!recipe) return; document.getElementById('saladDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('saladDetail'); }
function showSoupDetail(name) { const recipe = soupsFullRecipes[name]; if (!recipe) return; document.getElementById('soupDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('soupDetail'); }
function showMainDetail(name) { const recipe = mainsFullRecipes[name]; if (!recipe) return; document.getElementById('mainDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('mainDetail'); }
function showDessertDetail(name) { const recipe = dessertsFullRecipes[name]; if (!recipe) return; document.getElementById('dessertDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('dessertDetail'); }
function showDrinkDetail(name) { const recipe = drinksFullRecipes[name]; if (!recipe) return; document.getElementById('drinkDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('drinkDetail'); }
function showBakeryDetail(name) { const recipe = bakeryFullRecipes[name]; if (!recipe) return; document.getElementById('bakeryDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('bakeryDetail'); }
function showBreakfastDetail(name) { const recipe = breakfastFullRecipes[name]; if (!recipe) { alert('Рецепт не найден: ' + name); return; } document.getElementById('breakfastDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('breakfastDetail'); }
function showSauceDetail(name) { const recipe = saucesFullRecipes[name]; if (!recipe) return; document.getElementById('sauceDetailContent').innerHTML = `<div class="recipe-detail-card"><img class="detail-img" src="${recipe.img}" alt="${name}"><h1><i class="fas fa-utensil-spoon"></i> ${name}</h1><h2>Ингредиенты:</h2><ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul><h2>Приготовление:</h2><ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol><p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p></div>`; showPage('sauceDetail'); }

// ==================== ДАННЫЕ О СТРАНАХ С РЕЦЕПТАМИ (по 3-4 рецепта в каждой) ====================
const countriesData = {
  italy: {
    name: "Италия",
    img: "images/италия.webp",
    description: "Итальянская кухня — это симфония простых, но гениальных сочетаний. Помидоры, базилик, оливковое масло и пармезан — основа многих блюд. Каждый регион Италии гордится своими традициями: на севере любят ризотто и поленту, на юге — пиццу и морепродукты.",
    recipes: [
      { name: "Пицца Маргарита", desc: "Классическая итальянская пицца с томатами, моцареллой и базиликом.", icon: "fa-pizza-slice", img: "images/пицца.jpg", ingredients: ["300 г теста для пиццы", "200 г томатного соуса", "200 г моцареллы", "свежий базилик", "оливковое масло"], steps: ["Раскатайте тесто в круг", "Смажьте томатным соусом", "Выложите моцареллу", "Запекайте 10-15 минут при 250°C", "Украсьте базиликом и сбрызните маслом"] },
      { name: "Паста Карбонара", desc: "Спагетти с яйцом, пармезаном и гуанчиале.", icon: "fa-utensils", img: "images/карбонара.webp", ingredients: ["400 г спагетти", "150 г гуанчиале или панчетты", "3 яйца", "100 г пармезана", "черный перец"], steps: ["Обжарьте гуанчиале до хруста", "Смешайте яйца с тёртым сыром", "Сварите спагетти в подсоленной воде", "Соедините всё, прогрейте на медленном огне", "Подавайте с большим количеством чёрного перца"] },
      { name: "Тирамису", desc: "Знаменитый итальянский десерт с маскарпоне и кофе.", icon: "fa-cake", img: "images/тирамису2.jpg", ingredients: ["500 г маскарпоне", "3 яйца", "100 г сахара", "200 мл крепкого кофе", "печенье савоярди", "какао-порошок"], steps: ["Отделите желтки от белков", "Взбейте желтки с сахаром, добавьте маскарпоне", "Взбейте белки в пену, аккуратно вмешайте", "Обмакните печенье в кофе", "Выложите слоями: печенье, крем, повторите", "Посыпьте какао, уберите в холодильник на 4 часа"] }
    ]
  },
  france: {
    name: "Франция",
    img: "images/франция.jpg",
    description: "Французская кухня — это изысканность и утончённость. Именно здесь родилась высокая кулинария. Свежие круассаны, сырная тарелка, утончённые соусы и, конечно, знаменитые улитки по-бургундски.",
    recipes: [
      { name: "Круассаны", desc: "Знаменитые французские круассаны из слоеного теста.", icon: "fa-bread-slice", img: "images/круассан2.webp", ingredients: ["500 г слоеного теста", "100 г сливочного масла", "1 яйцо"], steps: ["Раскатайте тесто в прямоугольник", "Сформируйте рогалики", "Смажьте взбитым яйцом", "Выпекайте 15 минут при 200°C до золотистого цвета"] },
      { name: "Луковый суп", desc: "Традиционный французский суп из карамелизованного лука.", icon: "fa-mug-hot", img: "images/луковый.jpg", ingredients: ["1 кг репчатого лука", "1 л говяжьего бульона", "100 г сыра грюйер", "багет"], steps: ["Карамелизуйте лук до золотистого цвета", "Добавьте бульон, варите 30 минут", "Разлейте по горшочкам", "Добавьте гренки из багета и тёртый сыр", "Запеките до румяной корочки"] },
      { name: "Рататуй", desc: "Овощное рагу из баклажанов, цукини и перца.", icon: "fa-leaf", img: "images/рататуй2.jpg", ingredients: ["2 баклажана", "2 цукини", "2 сладких перца", "3 помидора", "чеснок", "прованские травы"], steps: ["Нарежьте все овощи кружочками", "Выложите по кругу в форму", "Сбрызните оливковым маслом, посыпьте травами и чесноком", "Запекайте 40 минут при 180°C под фольгой, затем 10 минут без фольги"] }
    ]
  },
  japan: {
    name: "Япония",
    img: "images/япония.jpg",
    description: "Японская кухня — это баланс вкусов, текстур и эстетика подачи. Свежая рыба, рис, мисо-паста и соевый соус — основа.",
    recipes: [
      { name: "Суши роллы", desc: "Традиционные роллы с лососем и авокадо.", icon: "fa-fish", img: "images/суши.jpg", ingredients: ["300 г риса для суши", "200 г лосося", "1 авокадо", "листы нори", "рисовый уксус"], steps: ["Сварите рис, заправьте уксусом", "Нарежьте рыбу и авокадо", "Выложите рис на нори", "Добавьте начинку", "Скрутите ролл, нарежьте на кусочки"] },
      { name: "Рамен", desc: "Японский суп с лапшой и свининой.", icon: "fa-mug-hot", img: "images/рамен.jpg", ingredients: ["400 г свежей лапши", "300 г свинины", "4 яйца", "нори", "зеленый лук"], steps: ["Сварите яйца вкрутую", "Запеките свинину", "Сварите крепкий бульон", "Отварите лапшу", "Соберите рамен в глубокой миске", "Украсьте яйцом, нори и луком"] },
      { name: "Мисо суп", desc: "Традиционный японский суп с тофу и водорослями.", icon: "fa-mug-hot", img: "images/мисо.webp", ingredients: ["4 ст.л. пасты мисо", "1 л даси (рыбного бульона)", "150 г тофу", "2 ст.л. сушёных водорослей вакаме"], steps: ["Нагрейте даси до кипения", "Разведите пасту мисо в небольшом количестве бульона", "Добавьте в кастрюлю", "Положите нарезанный тофу и водоросли", "Прогрейте 2 минуты, не кипятите"] }
    ]
  },
  mexico: {
    name: "Мексика",
    img: "images/мексика.jpg",
    description: "Мексиканская кухня — это яркие краски, острые перцы и взрыв вкуса! Кукуруза, бобы, авокадо и острые соусы — основа.",
    recipes: [
      { name: "Такос", desc: "Кукурузные лепёшки с мясом, сальсой и гуакамоле.", icon: "fa-utensils", img: "images/тако.jpg", ingredients: ["8 кукурузных лепешек", "400 г фарша", "помидоры", "лук", "кинза", "соус сальса"], steps: ["Обжарьте фарш со специями", "Разогрейте лепешки", "Выложите фарш на лепешку", "Добавьте нарезанные помидоры, лук и кинзу", "Полейте сальсой"] },
      { name: "Гуакамоле", desc: "Мексиканский соус из авокадо.", icon: "fa-leaf", img: "images/гуакамоле.webp", ingredients: ["3 авокадо", "1 лайм", "1 помидор", "1/2 лука", "кинза", "перец чили"], steps: ["Разомните авокадо вилкой", "Добавьте сок лайма", "Добавьте нарезанные помидор, лук, кинзу и чили", "Посолите и перемешайте"] },
      { name: "Чуррос", desc: "Хрустящие палочки из заварного теста с корицей.", icon: "fa-cookie-bite", img: "images/чуррос.webp", ingredients: ["250 г муки", "250 мл воды", "50 г сливочного масла", "2 яйца", "сахар", "корица"], steps: ["Вскипятите воду с маслом", "Добавьте муку, заварите тесто", "Вбейте яйца", "Отсадите чуррос в кипящее масло", "Обжарьте до золотистого цвета", "Посыпьте сахаром с корицей"] }
    ]
  },
  greece: {
    name: "Греция",
    img: "images/греция.webp",
    description: "Греческая кухня — это средиземноморское здоровье и солнечный вкус. Оливковое масло, фета, оливки, свежие овощи и морепродукты.",
    recipes: [
      { name: "Греческий салат", desc: "Салат из овощей с фетой и оливками.", icon: "fa-leaf", img: "images/греческий.png", ingredients: ["огурцы", "помидоры", "сладкий перец", "лук", "маслины", "фета", "оливковое масло"], steps: ["Нарежьте овощи крупными кусками", "Добавьте маслины", "Сверху выложите кубики феты", "Заправьте оливковым маслом"] },
      { name: "Мусака", desc: "Запеканка из баклажанов с мясным фаршем и соусом бешамель.", icon: "fa-utensils", img: "images/мусака.png", ingredients: ["3 баклажана", "500 г фарша", "лук", "томатная паста", "для соуса: молоко, мука, масло, сыр"], steps: ["Обжарьте баклажаны до мягкости", "Обжарьте фарш с луком и томатом", "Приготовьте соус бешамель", "Выложите слоями: баклажаны, фарш, соус", "Запекайте 40 минут при 180°C"] },
      { name: "Дзадзыки", desc: "Греческий соус из йогурта, огурца и чеснока.", icon: "fa-leaf", img: "images/дзадзыки.webp", ingredients: ["500 г греческого йогурта", "1 огурец", "2 зубчика чеснока", "оливковое масло", "укроп"], steps: ["Натрите огурец и отожмите лишнюю жидкость", "Смешайте с йогуртом, измельчённым чесноком и укропом", "Добавьте соль и оливковое масло", "Охладите перед подачей"] }
    ]
  },
  thailand: {
    name: "Таиланд",
    img: "images/тайланд.webp",
    description: "Тайская кухня — это идеальный баланс пяти вкусов: сладкого, кислого, солёного, горького и острого. Кокосовое молоко, лемонграсс, имбирь и чили создают неповторимые сочетания.",
    recipes: [
      { name: "Том Ям", desc: "Острый кисло-сладкий суп с креветками.", icon: "fa-mug-hot", img: "images/томям.webp", ingredients: ["500 г креветок", "1 л кокосового молока", "лемонграсс", "имбирь", "чили", "грибы", "лайм"], steps: ["Вскипятите кокосовое молоко", "Добавьте лемонграсс, имбирь, чили", "Добавьте креветки и грибы", "Варите 5 минут", "Добавьте сок лайма"] },
      { name: "Пад Тай", desc: "Рисовая лапша с креветками и арахисом.", icon: "fa-utensils", img: "images/падтай.png", ingredients: ["200 г рисовой лапши", "300 г креветок", "ростки фасоли", "арахис", "яйцо", "рыбный соус"], steps: ["Замочите лапшу в тёплой воде", "Обжарьте креветки", "Добавьте яйцо и лапшу", "Заправьте рыбным соусом", "Посыпьте арахисом и ростками"] },
      { name: "Тайский салат Сом Там", desc: "Острый салат из зелёной папайи.", icon: "fa-leaf", img: "images/сомтам.webp", ingredients: ["1 зелёная папайя", "2 помидора", "стручковая фасоль", "арахис", "чеснок", "чили", "лайм"], steps: ["Натрите папайю соломкой", "Разомните в ступке чеснок с чили", "Добавьте папайю, помидоры, фасоль и арахис", "Заправьте соком лайма и рыбным соусом"] }
    ]
  },
  india: {
    name: "Индия",
    img: "images/индия.avif",
    description: "Индийская кухня — это царство специй. Кардамон, куркума, кумин, кориандр, гвоздика — каждая специя на своём месте. Вегетарианские блюда здесь настоящие шедевры.",
    recipes: [
      { name: "Чикен Карри", desc: "Курица в ароматном соусе из специй.", icon: "fa-utensils", img: "images/карри2.webp", ingredients: ["500 г курицы", "лук", "чеснок", "имбирь", "помидоры", "специи карри", "кокосовое молоко"], steps: ["Обжарьте лук, чеснок, имбирь", "Добавьте специи", "Добавьте курицу, обжарьте", "Добавьте помидоры и кокосовое молоко", "Тушите 20 минут"] },
      { name: "Наан", desc: "Традиционный индийский хлеб.", icon: "fa-bread-slice", img: "images/наан.jpg", ingredients: ["500 г муки", "200 мл йогурта", "7 г дрожжей", "сахар", "соль"], steps: ["Замесите тесто", "Дайте подойти 1 час", "Раскатайте лепешки", "Выпекайте в раскалённой сковороде или тандыре"] },
      { name: "Бирьяни", desc: "Ароматный плов с курицей или бараниной.", icon: "fa-utensils", img: "images/бирьяни.webp", ingredients: ["500 г басмати", "500 г курицы", "лук", "пряности", "шафран", "йогурт"], steps: ["Обжарьте лук и курицу", "Засыпьте рис, добавьте пряности и шафран", "Залейте кипятком на 2 см выше риса", "Варите 20 минут, затем дайте настояться 10 минут"] }
    ]
  },
  spain: {
    name: "Испания",
    img: "images/испания.webp",
    description: "Испанская кухня — это страсть и флейвор. Тапас, паэлья, хамон и морепродукты. Каждый регион удивляет своими блюдами, а сангрия и херес дополняют впечатление.",
    recipes: [
      { name: "Паэлья", desc: "Знаменитое испанское блюдо из риса с морепродуктами.", icon: "fa-utensils", img: "images/паэлья.webp", ingredients: ["400 г риса", "500 г морепродуктов", "шафран", "оливковое масло", "перец", "помидоры"], steps: ["Обжарьте морепродукты", "Добавьте рис и шафран", "Залейте бульоном", "Варите 20 минут без перемешивания", "Дайте постоять 5 минут перед подачей"] },
      { name: "Тортилья", desc: "Испанский омлет с картофелем.", icon: "fa-egg", img: "images/тартилья.jpg", ingredients: ["6 яиц", "4 картофелины", "1 луковица", "оливковое масло", "соль"], steps: ["Нарежьте картофель тонкими кружочками", "Обжарьте картофель с луком", "Взбейте яйца с солью", "Смешайте с картофелем", "Жарьте на сковороде с двух сторон до золотистой корочки"] },
      { name: "Гаспачо", desc: "Холодный суп из помидоров и овощей.", icon: "fa-mug-hot", img: "images/госпачо.webp", ingredients: ["спелые помидоры", "огурец", "перец", "чеснок", "оливковое масло"], steps: ["Нарежьте все овощи", "Измельчите в блендере до однородности", "Добавьте масло, соль по вкусу", "Поставьте в холодильник на 2 часа"] }
    ]
  },
  turkey: {
    name: "Турция",
    img: "images/турция.jpg",
    description: "Турецкая кухня — это наследие Османской империи. Мясо на вертеле, сладкая баклава, крепкий чай и дружелюбие. Блюда щедрые и ароматные.",
    recipes: [
      { name: "Кебаб", desc: "Мясо, жаренное на вертеле.", icon: "fa-utensils", img: "images/кебаб.webp", ingredients: ["500 г баранины", "лук", "специи для кебаба"], steps: ["Замаринуйте мясо на 4 часа", "Нанижите на шампуры", "Жарьте на гриле до готовности", "Подавайте с лепёшкой и овощами"] },
      { name: "Баклава", desc: "Сладкое слойное пирожное с орехами и сиропом.", icon: "fa-cake", img: "images/баклава.webp", ingredients: ["тесто фило", "грецкие орехи", "сахар", "мёд", "сливочное масло"], steps: ["Выложите слои теста, смазывая маслом", "Посыпьте измельчёнными орехами", "Нарежьте ромбиками", "Выпекайте до золотистого цвета", "Залейте медовым сиропом"] },
      { name: "Дёнер", desc: "Мясо, запечённое на вращающемся вертеле.", icon: "fa-utensils", img: "images/дёнер.avif", ingredients: ["1 кг куриного филе", "йогурт", "чеснок", "паприка", "кумин", "лепёшка"], steps: ["Замаринуйте курицу в йогурте со специями", "Обжарьте или запеките", "Нарежьте тонкими полосками", "Подавайте в лепёшке с овощами и соусом"] }
    ]
  },
  morocco: {
    name: "Марокко",
    img: "images/марокко.jpg",
    description: "Марокканская кухня — это восточная сказка. Тажин, кускус, ароматные специи (кумин, кориандр, шафран) и знаменитый мятный чай. Еда здесь — ритуал.",
    recipes: [
      { name: "Тажин", desc: "Мясо, тушеное с овощами и фруктами.", icon: "fa-utensils", img: "images/тажин.webp", ingredients: ["500 г баранины", "лук", "чернослив", "миндаль", "специи", "мед"], steps: ["Обжарьте мясо со специями", "Добавьте лук, чернослив, миндаль", "Тушите 1.5 часа на медленном огне", "Добавьте мёд за 10 минут до готовности", "Подавайте с кускусом"] },
      { name: "Кускус", desc: "Манная крупа на пару с овощами.", icon: "fa-utensils", img: "images/кускус.png", ingredients: ["500 г кускуса", "овощи", "баранина или курица"], steps: ["Приготовьте кускус на пару", "Отдельно приготовьте рагу из овощей с мясом", "Подавайте кускус с рагу сверху"] },
      { name: "Мятный чай", desc: "Знаменитый марокканский чай со свежей мятой.", icon: "fa-mug-hot", img: "images/чай.webp", ingredients: ["зеленый чай", "свежая мята", "сахар"], steps: ["Заварите зеленый чай", "Добавьте много свежей мяты", "Добавьте сахар", "Перелейте несколько раз из чайника в стакан для пенообразования"] }
    ]
  },
  vietnam: {
    name: "Вьетнам",
    img: "images/вьетнам.webp",
    description: "Вьетнамская кухня — это свежесть и легкость. Рисовая лапша, овощи, мята, креветки и нежные бульоны. Блюда полны ароматов, но не перегружены жиром.",
    recipes: [
      { name: "Фо Бо", desc: "Рисовый суп с говядиной.", icon: "fa-mug-hot", img: "images/фо.webp", ingredients: ["300 г рисовой лапши", "400 г говядины", "звёздчатый анис", "корица", "имбирь", "лук", "зелень"], steps: ["Сварите бульон со специями", "Отварите лапшу", "Нарежьте говядину тонкими ломтиками", "Залейте кипящим бульоном", "Добавьте зелень и сок лайма"] },
      { name: "Нэмы (спринг-роллы)", desc: "Рисовые рулетики с начинкой.", icon: "fa-utensils", img: "images/нэмы.jpg", ingredients: ["рисовая бумага", "креветки", "свинина", "морковь", "огурец", "вермишель", "мята"], steps: ["Замочите рисовую бумагу", "Выложите начинку: креветки, свинину, овощи, зелень", "Скрутите плотный рулет", "Подавайте с арахисовым соусом"] },
      { name: "Вьетнамский кофе", desc: "Крепкий кофе со сгущенным молоком.", icon: "fa-mug-hot", img: "images/кофе.webp", ingredients: ["молотый кофе", "сгущенное молоко", "кипяток"], steps: ["Налейте сгущенку в стакан", "Сверху поставьте металлический фильтр с кофе", "Залейте кипятком", "Дождитесь, пока кофе стечет", "Перемешайте, подавайте со льдом"] }
    ]
  },
  georgia: {
    name: "Грузия",
    img: "images/грузия.jfif",
    description: "Грузинская кухня — это гостеприимство и размах. Хачапури, хинкали, сациви, орехи, сыры и вино, которое здесь считают почти святым. Застолье — это философия.",
    recipes: [
      { name: "Хачапури по-аджарски", desc: "Лодочка с сыром и яйцом.", icon: "fa-cheese", img: "images/хачапури2.jpg", ingredients: ["500 г дрожжевого теста", "300 г сулугуни", "1 яйцо", "сливочное масло"], steps: ["Раскатайте тесто в лепёшку", "Сформируйте лодочку с бортиками", "Выложите натёртый сыр", "Выпекайте 15 минут при 200°C", "Вбейте яйцо в центр, запекайте ещё 3 минуты"] },
      { name: "Хинкали", desc: "Грузинские мясные мешочки.", icon: "fa-utensils", img: "images/хинкали.webp", ingredients: ["500 г муки", "500 г фарша (баранина+говядина)", "лук", "кинза", "специи", "вода"], steps: ["Замесите тесто, дайте отдохнуть", "Приготовьте начинку из фарша, лука, кинзы, специй и воды", "Раскатайте тесто, вырежьте круги", "Слепите хинкали", "Варите 10 минут в кипящей подсоленной воде"] },
      { name: "Сациви", desc: "Курица в грецком орехе с пряностями.", icon: "fa-utensils", img: "images/сациви.webp", ingredients: ["1 курица", "300 г грецких орехов", "чеснок", "кинза", "хмели-сунели", "кориандр"], steps: ["Сварите курицу до готовности", "Измельчите орехи с чесноком и специями", "Разведите куриным бульоном до консистенции густой сметаны", "Залейте курицу соусом, дайте настояться"] }
    ]
  }
};

// ==================== ФУНКЦИЯ ПОКАЗА РЕЦЕПТОВ СТРАНЫ ====================
let currentCountryId = '';

function showCountryDetail(countryId) {
  currentCountryId = countryId;
  const country = countriesData[countryId];
  if (!country) return;
  
  let recipesHtml = '';
  if (country.recipes && country.recipes.length > 0) {
    recipesHtml = `<h2><i class="fas fa-utensils"></i> Национальные рецепты:</h2>
                   <div class="recipes-grid" style="margin-top:20px">`;
    country.recipes.forEach((recipe, index) => {
      recipesHtml += `
        <div class="recipe-item" data-recipe="${recipe.name}" data-country="${countryId}">
          <img class="recipe-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=${recipe.name}'">
          <div class="recipe-content">
            <h3><i class="fas ${recipe.icon} recipe-icon"></i> ${recipe.name}</h3>
            <p>${recipe.desc}</p>
          </div>
        </div>
      `;
    });
    recipesHtml += `</div>`;
  }
  
  document.getElementById('countryDetailContent').innerHTML = `
    <div class="country-detail-card">
      <h1><i class="fas fa-flag-checkered"></i> ${country.name}</h1>
      <img class="detail-img" src="${country.img}" alt="${country.name}" onerror="this.src='https://via.placeholder.com/800x400?text=${country.name}'">
      <p>${country.description}</p>
      ${recipesHtml}
      <p style="margin-top:30px; font-style:italic;">Вдохновляйтесь и готовьте блюда ${country.name} дома с СтильВкуса! 🌍</p>
    </div>
  `;
  
  showPage('countryDetail');
  
  // Добавляем обработчики на рецепты страны
  setTimeout(() => {
    const countryRecipes = document.querySelectorAll('#countryDetailContent .recipe-item');
    countryRecipes.forEach(item => {
      item.addEventListener('click', () => {
        const recipeName = item.getAttribute('data-recipe');
        const recipe = country.recipes.find(r => r.name === recipeName);
        if (recipe) {
          showCountryRecipeDetail(recipe, country.name);
        }
      });
    });
  }, 100);
}

// ==================== ФУНКЦИЯ ПОКАЗА ДЕТАЛЬНОГО РЕЦЕПТА СТРАНЫ ====================
function showCountryRecipeDetail(recipe, countryName) {
  document.getElementById('countryDetailContent').innerHTML = `
    <div class="recipe-detail-card">
      <button class="back-to-country" id="backToCountryBtn"><i class="fas fa-arrow-left"></i> Назад к ${countryName}</button>
      <h1><i class="fas fa-utensil-spoon"></i> ${recipe.name}</h1>
      <img class="detail-img" src="${recipe.img}" alt="${recipe.name}" onerror="this.src='https://via.placeholder.com/600x400?text=${recipe.name}'">
      <h2><i class="fas fa-list"></i> Ингредиенты:</h2>
      <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h2><i class="fas fa-clipboard-list"></i> Приготовление:</h2>
      <ol>${recipe.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <p style="margin-top:30px; font-style:italic;">Приятного аппетита от СтильВкуса! 🍽️</p>
    </div>
  `;
  
  showPage('countryDetail');
  
  document.getElementById('backToCountryBtn')?.addEventListener('click', () => {
    showCountryDetail(currentCountryId);
  });
}

// ==================== РЕНДЕР СТРАН ====================
function renderCountriesList() {
  const countryCards = document.querySelectorAll('.country-card');
  countryCards.forEach(card => {
    card.removeEventListener('click', card.clickHandler);
    const handler = () => {
      const country = card.getAttribute('data-country');
      showCountryDetail(country);
    };
    card.clickHandler = handler;
    card.addEventListener('click', handler);
  });
}

// ==================== НАВИГАЦИЯ ====================
navLinks.forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  const page = link.dataset.page;
  if (page === 'catalog') showPage('catalog');
  else if (page === 'home') showPage('home');
  else if (page === 'travel') showPage('travel');
  else if (page === 'about') showPage('about');
}));

document.querySelectorAll('.catalog-nav-trigger').forEach(btn => btn.addEventListener('click', () => showPage('catalog')));
document.querySelectorAll('.about-nav-trigger').forEach(btn => btn.addEventListener('click', () => showPage('about')));
document.querySelectorAll('.travel-nav-trigger').forEach(btn => btn.addEventListener('click', () => showPage('travel')));
document.getElementById('heroCatalogBtn')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('logoHomeLink')?.addEventListener('click', (e) => { e.preventDefault(); showPage('home'); });
document.getElementById('backToTravelList')?.addEventListener('click', () => { showPage('travel'); });

// ==================== КНОПКИ НАЗАД В РАЗДЕЛАХ РЕЦЕПТОВ ====================
document.getElementById('backToCatalogFromSalads')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromSoups')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromMains')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromDesserts')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromDrinks')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromBakery')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromBreakfast')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToCatalogFromSauces')?.addEventListener('click', () => showPage('catalog'));
document.getElementById('backToSaladsList')?.addEventListener('click', () => showPage('saladsList'));
document.getElementById('backToSoupsList')?.addEventListener('click', () => showPage('soupsList'));
document.getElementById('backToMainsList')?.addEventListener('click', () => showPage('mainsList'));
document.getElementById('backToDessertsList')?.addEventListener('click', () => showPage('dessertsList'));
document.getElementById('backToDrinksList')?.addEventListener('click', () => showPage('drinksList'));
document.getElementById('backToBakeryList')?.addEventListener('click', () => showPage('bakeryList'));
document.getElementById('backToBreakfastList')?.addEventListener('click', () => showPage('breakfastList'));
document.getElementById('backToSaucesList')?.addEventListener('click', () => showPage('saucesList'));

// ==================== КАТЕГОРИИ КАТАЛОГА ====================
function bindCategoryCards() {
  document.querySelectorAll('.category-card').forEach(card => {
    card.removeEventListener('click', categoryClickHandler);
    card.addEventListener('click', categoryClickHandler);
  });
}

function categoryClickHandler(e) {
  const category = this.dataset.category;
  if (category === 'salads') { renderSaladsList(); showPage('saladsList'); }
  else if (category === 'soups') { renderSoupsList(); showPage('soupsList'); }
  else if (category === 'mains') { renderMainsList(); showPage('mainsList'); }
  else if (category === 'desserts') { renderDessertsList(); showPage('dessertsList'); }
  else if (category === 'drinks') { renderDrinksList(); showPage('drinksList'); }
  else if (category === 'bakery') { renderBakeryList(); showPage('bakeryList'); }
  else if (category === 'breakfast') { renderBreakfastList(); showPage('breakfastList'); }
  else if (category === 'sauces') { renderSaucesList(); showPage('saucesList'); }
  else { alert(`Раздел "${this.querySelector('h3')?.innerText || category}" в разработке. Скоро появятся рецепты!`); }
}

const catalogPageObserver = new MutationObserver(() => {
  if (!catalogPage.classList.contains('hidden-page')) bindCategoryCards();
});
catalogPageObserver.observe(catalogPage, { attributes: true, attributeFilter: ['class'] });

// ==================== ПОИСК ====================
const searchBtn = document.getElementById('searchButton');
const searchInputElem = document.getElementById('searchInput');
function performSearch() { 
  const q = searchInputElem.value.trim(); 
  if (!q) alert("Введите запрос"); 
  else alert(`🔍 Результаты по "${q}": найдено несколько рецептов. Попробуйте открыть разделы каталога!`); 
}
searchBtn?.addEventListener('click', performSearch);
searchInputElem?.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });

// ==================== ФУТЕР ====================
document.querySelectorAll('.footer-col a[data-page]').forEach(link => link.addEventListener('click', (e) => { 
  e.preventDefault(); 
  const page = link.dataset.page; 
  if (page) showPage(page); 
}));

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
showPage('home');
bindCategoryCards();
renderSaladsList();
renderSoupsList();
renderMainsList();
renderDessertsList();
renderDrinksList();
renderBakeryList();
renderBreakfastList();
renderSaucesList();
renderCountriesList();

// ==================== ДОПОЛНИТЕЛЬНАЯ ИНИЦИАЛИЗАЦИЯ ДЛЯ ГАРАНТИИ КЛИКАБЕЛЬНОСТИ ====================
setTimeout(() => {
  const allCategoryCards = document.querySelectorAll('.category-card');
  allCategoryCards.forEach(card => {
    const cat = card.getAttribute('data-category');
    if (cat === 'salads' || cat === 'soups' || cat === 'mains' || cat === 'desserts' || cat === 'drinks' || cat === 'bakery' || cat === 'breakfast' || cat === 'sauces') {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (cat === 'salads') { renderSaladsList(); showPage('saladsList'); }
        else if (cat === 'soups') { renderSoupsList(); showPage('soupsList'); }
        else if (cat === 'mains') { renderMainsList(); showPage('mainsList'); }
        else if (cat === 'desserts') { renderDessertsList(); showPage('dessertsList'); }
        else if (cat === 'drinks') { renderDrinksList(); showPage('drinksList'); }
        else if (cat === 'bakery') { renderBakeryList(); showPage('bakeryList'); }
        else if (cat === 'breakfast') { renderBreakfastList(); showPage('breakfastList'); }
        else if (cat === 'sauces') { renderSaucesList(); showPage('saucesList'); }
      });
    }
  });
  if (!catalogPage.classList.contains('hidden-page')) bindCategoryCards();
}, 100);