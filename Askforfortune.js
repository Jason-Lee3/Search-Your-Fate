window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams; 
    
    const text = params.get('text');
    console.log(text)
    document.getElementById('write').innerHTML = text;
})

function card(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
}

let deck = [
    new card('The Fool', "The Fool tarot card is the number 0 of the Major Arcana, which stands for the number of unlimited potentials. \
    To see the Fool tarot card generally indicates that you are on the verge of an unexpected and exciting new adventure. This may require you to take a blind leap of faith. \
    There will be a rewarding experience that will contribute to your growth as a human being. The new adventure could be a literal one and may involve traveling to a new land or territories you've never visited before.", 'the-fool'), 
    new card('The Magician', 'The Magician tarot card reveals how your wishes and desires can be realized through determination and willpower. \
    When this card shows up in your reading, you can be assured that you have the drive to make your dreams happen. Just remember that you are powerful and if you create your inner world, \
    the outer will follow. Yet, you have to focus and concentrate on achieving your dream. Get rid of any discretions and make a detailed plan to stay on track.', 'the-magician'),
    new card('The High Priestess', "When the High Priestess appears upright in a tarot reading she usually indicates a time for learning and listening to your intuition rather than prioritizing your intellect and conscious mind. \
    She tells you to slow down and reflect on what you've learned and to acquire even more knowledge before making a decision or taking action. Often being considered as the gatekeeper at the ancient temples, the High Priestess can also \
    show up in a tarot reading when you are facing a 'gatekeeper' in your daily life. Her advice is to stop worrying about the outcome and trust the decision of the gatekeepers.", 'the-high-priestess'), 
    new card('The Empress', "The upright Empress tarot card in a reading calls on you to connect with your feminine side. This can be translated in many ways - think of creativity, elegance, sensuality, \
    fertility, and nurturing. She tells you to be kind to yourself and search for beauty and happiness in your life. The Empress often brings strong bursts of creative or artistic energy. This creative energy may \
    not only be in the form of a painting or art project, but also in other forms of expressing yourself creatively, like music or drama.", 'the-empress'),
    new card('The Emperor', "As the counterpart of the Empress, the Emperor signifies the husband who is constant and trustworthy. He is confident, in control of his emotions, and an example of masculine energy. He is the paternal figure in life that brings structure and security, creates rules and systems, and conveys knowledge. As a ruler, he leads with a firm hand and demands respect and authority. With careful planning, a highly organized approach, and perseverance, the Emperor can overcome any problem that's thrown at him. \
    This new level of mastery won't just happen. You have to pursue your goals similar to the way that the Emperor does, structured, strategically, and with a lot of perseverance.", 'the-emperor'), 
    new card('The Hierophant', "When the Hierophant tarot card is upright in a reading, it represents a necessity to follow existing conventions, rules, or a well-established procedure. \
    It advises you to maintain conventional boundaries that are considered a standard method. Rather than being inventive and breaking norms, you will be familiarized with certain traditions, \
    beliefs, and systems which are existing already for quite a long time. The Hierophant tarot card embodies a customary set of spiritual beliefs and is frequently associated with religion and other formal ideologies. \
    Thus, this card suggests that you learn the necessary values from a trusted source such as a mentor or a spiritual counselor.", 'the-hierophant'),
    new card('The Lovers', "The Lovers tarot card in the upright position can imply that you have major life-changing choices to make or are faced with a dilemma. \
    Temptation is often part of that choice or dilemma. You may feel unsure about what direction you should take or who to trust. Or you may have to choose between \
    contradicting and equally unifying options. The Lovers in tarot advises you to don't automatically go for the easy road (temptation).", 'the-lovers'),
    new card('The Chariot', "When the upright Chariot tarot card shows up in a tarot reading, it tells you that now is the time to get what you want. Consider this card \
     as a sign of encouragement. The Chariot tarot card is all about overcoming obstacles and achieving your goal through determination, focus, and willpower. You will feel \
     motivated, ambitious, and in control. This will help you to get a stagnant situation moving again and overcome all the challenges that may be in your path. \
     Just keep focused and believe in your own abilities and you will achieve your goal. The Chariot tells you that a triumph is waiting for you and that you are fully \
     in control of making it happen. This may mean that you have to compete with others or that you find yourself in a situation that feels like a battle. You're pulled in \
     opposite directions or you feel like your strength and confidence are being tested.", 'the-chariot'),
    new card('The Strength', "The upright Strength tarot card represents - as the name already suggests - strength, courage, persuasion, and patience. It tells you that you have the power and strength to overcome any obstacle - just like the Chariot. \
    However, when pulling the strength, you'll need to act with grace and sensitivity, rather than just using brutal force. \
    The card also tells you that you have the capacity to stay positive and calm and think logically in stressful situations that test your patience and strength. \
    Be it through compassion, cunning, or understanding, Strength signifies that you can obtain true control of a situation, and not simply the power to forcefully impose your will. The Strength tarot card indicates that you are a \
    very persevering person and that you can achieve anything you set your mind to. You're confident and do not have problems being yourself and speaking up.\
    You are committed to what you need to do, and you go about it in a very balanced and mature way. Keep behaving this way and you will be successful in anything you want to accomplish.", 'strength'),
    new card('The Hermit', "In the upright position, the Hermit is a compelling card. Just as beacons of light often guide ships to the shore, this sage is ushering in a \
    period of personal growth and exploration. The Hermit represents wisdom earned by seeking the highest truth. Often, looking for answers within requires time alone with few \
    distractions. It requires introspection and concentrating less on the senses. Although this can seem a little scary at first, committing to a personal quest for truth can be \
    one of the most rewarding experiences of life.", 'the-hermit'),
    new card('The Wheel of Fortune', "The Wheel of Fortune is ruled by Jupiter, the planet of good fortune and expansion. If the Wheel of Fortune tarot card arrives upright, you are in luck.\
    Whether you believe in destiny or not, things are lining up for your benefit. Think of surprising offers and new opportunities. Your personal vision will also increase as life's \
    tempo cranks up. The Wheel of Fortune tarot card can also reveal psychic abilities, either within you or someone close. Consider this as a chance to discover more about yourself \
    and to listen to your gut. Manifest your dreams, now that your energy is aligning with your spirit guides, angels, and other helpers. You can't control the powers of the universe, \
    but you can definitely grow your understanding of your role in this life and the universe. Just remember that there is nothing to fear. Everything will work out according to \
    divine intervention and timing.", 'wheel-of-fortune'),
    new card('Justice', "In the upright position, the Justice tarot card represents cause and effect as well as balanced thought and action. \
    There are times when we find ourselves the victims of someone else's malicious intent. If you have been wronged in any way, Justice arrives to restore balance and order. \
    This isn't to say that things will work out the exact way that you would like them to. However, pulling this card in reading does give support to the adage 'All's well that ends well.'", 'justice'),
    new card('The Hanged Man', "The Hanged Man represents 'the waiting game' that is often a part of life progression. \
    Although we are rarely happy about being stuck in limbo, there are times when nothing else can be done, and we are forced to be still. This often requires the sacrifice of people and things that we would rather hold on to. \
    The Hanged Man tarot card wants you to know that sometimes, we have to accept a loss for the greater good. Acceptance and letting go are key if you ever want to move forward.", 'the-hanged-man'),
    new card('Death', "One of the reason's that the Death card is such a powerful one in the Upright position is because it carries so many different meanings.\
    For many readings, the Death tarot card signifies completing a chapter, putting the past behind you, and cutting out what is unnecessary. It can also signify a\
     transition or middle ground between one phase of life and the next. The key is to welcome the Death card in a tarot spread instead of avoiding it. What path is number \
     thirteen trying to point you toward? After all, there is no new beginning without an ending.", 'death'),
    new card('Temperance', "Avoid all extreme situations when pulling the Temperance card in your reading. Although there are times to 'go for the jugular,' this is not the angel's message. Some situations are complicated and require patience and special care, even when your emotions are telling you to react. Temperance is actually a skill, and like any other skill, practice makes perfect. Hold back from quick judgment. Resist the temptation to react immediately. Are there areas of your life in which you need to find balance? Could you benefit from learning to remain calm during moments of distress? Temperance has arrived to help you find the strength to do so.", 'temperance'),
    new card('The Devil', "The Devil is the card of illusion. Although you have total control of your life, beliefs, and choices, the Devil card symbolizes how addiction, depression, and unhealthy bonds can make you feel out of control. Even social media, exercise, and work can be embodied by the Devil when in excess. Regardless of the nature of your particular problem, the message of the Devil is clear: redirect your attention away from the satisfaction of desires and toward the things that really matter.", 'the-devil'),
    new card('The Tower', "If we had to redesign the Tower card to a more modern-day representation, a crashing airplane would be an accurate alternative image. \
    The Tower signifies total destruction. If you've received the Upright Tower tarot card, prepare for things to be leveled and dismantled.\
    As with all losses, this will probably be a painful process. It can also lead to a fresh start. Before you are able to make these positive changes, \
    you'll have first to face the truth about a situation. Are you prepared to take your blinders off take this personal crisis head-on? Seeing through illusions\
    and letting go of what you wish things to be is the very first step.", 'the-tower'),
    new card('The Star', "The universe abundantly blesses you (we). We are continually attracting what we desire through our beliefs and thoughts. \
    When the Star arrives in the upright position, it usually follows a difficult change or traumatic event. Going through something challenging can take the\
     wind out of our sails and cause us to feel like things will never be the same. This might be true. Death, loss, heartbreak, and other painful events can change who we are, forever. This doesn't mean we can't build something better. What is it that you are trying to heal from? The Upright \
     Star wants you to open your heart, realize your inner strength, and have faith that the best is yet to come.", 'the-star'),
    new card('The Moon', "When the Moon tarot card appears in a reading upright, it can mean that you are allowing your imagination and emotions \
    to take control of your life. This may be linked to anxieties, fears, or self-deception. The Moon falling in a reading is a warning in a sense. You are the crawfish rising from the sea. If you trust your intuition \
    and push forward, you will receive deliverance from what binds you. But first, you must be willing to face the reality of the situation. The upright Moon can also be some illusion. There may be a hidden truth in your life that you need to uncover. \
    The Moon cautions you from accepting what things seem to be. It may be time to dig a little deeper and allow the light to shine upon the fallacies in your life.", "the-moon"),
    new card('The Sun', "The Sun tarot card in the upright position shows positivity and fulfillment in your life. If you have been going through a hard time \
    and the Sun falls in an upright position, things will quickly improve. The Sun reminds us to look at the bright side of things and remind ourselves that hard times don't last forever. Even when we are faced with difficulties,\
    we can choose to 'make lemonade out of lemons' and embrace life lessons for what they are: learning tools. With these lessons under your belt, struggles and sadness will soon be left in the past, and you will be moving on to brighter and better days. \
    You can rest assured knowing that good things are in store for you if this Major Arcana card is front and center.", 'the-sun'), 
    new card('Judgement', "Now is the perfect time to weigh your actions and see to it that they are in line with your values and beliefs. \
    The things that you did in the past or are doing today - do they reflect your core values and belief? Do they direct you to your goals and purpose?\
    Without having the clarity of knowing who you truly are, you cannot answer these questions. Take time to ponder on things before going on with your life. In the end, this will be worth it.\
    Another possible indication is to remind you that there may be choices and vital changes that you will face and you cannot avoid them.\
    If you have made some in the past, there will be an effect on where you are right now. Moreover, you should face the consequences with an open mind. You cannot do anything about \
    the past - of what is done - and moving forward is your best bet.", 'judgement'),
    new card('The World', "To encounter the upright World card in a tarot reading is to encounter success and accomplishment. It means that a long-term project, period of study, or \
    any other major event in your life has come full circle and that you accomplished your goals and aspirations. Despite the difficulties and hardships you've encountered, you stood strong and persevered. The seeds you have planted are now blooming and you are \
    reaping the fruit of your labor. Everything has come together, and you are in the right place, doing the right thing, achieving what you have envisioned. Be proud of what you've learned along the way, the progression you've made, and your achievements so far. \
    Reflecting on what you've already accomplished, may just be what you need to bring your project to completion.", 'the-world')
];


function getRandom(num) {
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}


document.getElementById("draw").onclick = function() {
    let index = getRandom(deck.length);
    let currentCard = deck[index];
    
    document.getElementById('display').innerHTML = '<img src="Tarot card images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
    deck.splice(index, 1);
    deck.splice(index, 1);
    let index_1 = getRandom(deck.length);
    let secondCard = deck[index_1]; 
    
    document.getElementById('display_2').innerHTML = '<img src="Tarot card images/' + secondCard.image + '.jpg"><h3>' + secondCard.name + '</h3><p>' + secondCard.description + '</p>';
    deck.splice(index_1, 1);
    let index_2 = getRandom(deck.length);
    let thirdCard = deck[index_2];
    document.getElementById('display_3').innerHTML = '<img src="Tarot card images/' + thirdCard.image + '.jpg"><h3>' + thirdCard.name + '</h3><p>' + thirdCard.description + '</p>';
    console.log(deck.length)
}  

const btn = document.getElementById('draw');

btn.addEventListener('click', () => {btn.style.display = 'none';
})


