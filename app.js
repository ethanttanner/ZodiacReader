function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
    var result = "Enter a valid date!";
    var birthdays = document.createElement("ol");
   
    
    
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data));
    

if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");
     document.getElementById("photo").innerHTML="<img src='aquarius-zodiac-sign-symbol.png' width=20%>";
   document.getElementById("characteristic").innerHTML="The quirky alternative of the Zodiac, Aquarius beats to the rhythm of its own drum. They are forward-thinkers, innovators, constantly looking towards the next big thing and deeply concerned with the collective. Humanitarians at heart, they may be a bit removed at times, not in touch with their emotions- too focussed on the whole rather than the individual parts. Aquarians are intellectual, offbeat individuals- who like to be known as such! They are progressive, independent, and idealistic. They’re comfortable on the fringes of society and have a unique vision of the world.";
  
    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");
       document.getElementById("photo").innerHTML="<img src='pisces-astrological-sign.png' width=20%>";
      document.getElementById("characteristic").innerHTML="The final Sign of the Zodiac is said to encompass elements of all the Signs that came before, and is symbolic of the time in the womb before being born, the gestation period. They are deeply mystical and connected to the ethers, big dreams and in touch with their emotions and intuition, people born under Pisces are boundary-less and formless, able to seamlessly adapt to those around them, often absorbing others’ energy unknowingly. They may be prone to losing themselves or getting duped by illusions or spending too much time in the clouds and dream world. They may also be prone to escapism, whether that be substances or daydreaming, not facing situations as they are. Incredibly empathetic and generous, they are willing to give of themselves greatly but need to beware of giving too much and being impressionable. Their imagination makes them highly creative, as well as being friendly, sensitive, kind, and caring.";
      
    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
      document.getElementById("photo").innerHTML="<img src='aries.png' width=20%>";
     document.getElementById("characteristic").innerHTML="Kicking off the start of the Astrological year, we have the bold and life path carving Aries. Like a newborn baby, Aries knows exactly what it needs and when, and is not afraid to demand it. They’re brave and fearless leaders, sure it what they want and deserve, courageously standing tall in their opinions. The first of the 6 inner-focussed Signs, Aries is concerned with the Self, not in a selfish way, but in a way that is unafraid to take up space. They are direct, passionate, and headstrong.";
   }
  
    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");
       document.getElementById("photo").innerHTML="<img src='taurus.png'width=20%>";
       document.getElementById("characteristic").innerHTML="The earthy bull is one of the most grounded Signs. It loves to indulge in earthly pleasures, being a sensualist, it enjoys all the finer things life has to offer- good food and drink, quality fabrics and objects, and luxurious experiences. That’s not to say they are extravagant, Taurus knows the true value of things, and while they are happy to pay for quality, they appreciate the balance with something that will last the test of time and earn them back their investment. Astute business people, they are hard-working and determined but may be overly fixated in their way of doing things. They are slow to move but have great stamina once they get started. They are practical, pragmatic, steadfast, dedicated, dependable, and stubborn.";
      
    }
  
    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");
       document.getElementById("photo").innerHTML="<img src='gemini-zodiac-sign-symbol.png'width=20%>";
      document.getElementById("characteristic").innerHTML="The flighty twins are quick-witted and quick-thinking, they are the bubbly socialite butterflies of the Zodiac. Able to adapt to a number of people and situations, they are enthusiastic and flexible, easily influenceable. They’re an intellectual Sign, constantly thinking about what they’re going to say next and analysing everything, coming up with new ideas and eager to share them. They’re chatty, amicable, and easy to get along with! A zesty personality, they may be somewhat of an entertainer but also flaky and indecisive. ";
     
    }
  
    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src='cancer.png'width=20%>";
      document.getElementById("characteristic").innerHTML="The homely crab is the nurturing, emotional Sign of the Zodiac. With a strong sense of family and taking care of those they love, Cancerians are highly in touch with their emotions and may be prone to moodiness. They have a warm, healing touch, caring deeply about others and desiring to show their love- especially through food if they can! Everything related to hearth and home is Cancer’s domain, from cooking to ancestry and the maternal figure. They are loyal, protective, and intuitive but may become too much creatures of comfort stuck in their routines.";
      
    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");
       document.getElementById("photo").innerHTML="<img src='leo-sign.png'width=20%>";
            document.getElementById("characteristic").innerHTML="Ruled by the centre of our solar system, the equally fiery Leo is the star of the show and the lover of the limelight. They like to roar bright and loud, great performers, they can be like the regal king themselves- generous servers but also the leaders of their kingdom. While they may be self-centred, their main ruse to gain adoration is to spread joy and charm, entertaining others and bringing sunny happiness all round. They are confident, extravagant (in gestures and money), loyal, and ambitious.";
      
    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
       document.getElementById("photo").innerHTML="<img src='virgo-astrological-symbol-sign.png'width=20%>";
        document.getElementById("characteristic").innerHTML="The earthy analyst can be seen as the nighttime ruler of Mercury, more concerned with the critical, detail-orientated analysis and perfectionism than Gemini. They are also practical, grounded, and sensible, as well as flexible and open to change. They believe they always know best because they often do! However, this is not done in an over-bearing way, as Leo may sometimes, but in a more quietly discerning way- like the editors in the background. Their keen eye and judgement don’t miss a thing. In their meticulousness, they may become singleminded or overly judgemental but this is always in a quest to help others and improve a situation, even if their healing nature doesn’t always land well!";
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
       document.getElementById("photo").innerHTML="<img src='libra-sign.png'width=20%>";
        document.getElementById("characteristic").innerHTML="The first of the next 6 outer-facing Signs, Libra is very concerned with its relationship to others. Ruled by the scales and Venus, the Planet of romance, they are in a constant search for balance, peace, and harmony with others. Ever the diplomat, Libra loves to bridge the gap between people and is keen not to offend, take sides, or make an extreme decision. Happy to go along with others, Libra sees itself as part of the whole, reflected in the other, and relationships are often an important part of their life (they may never be single)! They have a strong sense of fairness and justice, and are are eager mediators. They are idealistic and imaginative, but may be indecisive and self-pitying.";
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src='scorpio.png'width=20%>";
        document.getElementById("characteristic").innerHTML="Scorpions are the deepest, most mysterious Sign of the Zodiac, Scorpio is intense and magnetic, not afraid to plunge to its own depths and those of others. It does not shy away from the darker sides of life and is an expert and transformation. It has two other symbols other than the scorpion- the snake represents its evolved self once it has shed a layer, and the eagle or phoenix represents its highest expression once it has emerged transformed from its ashes. They are in touch with their emotions, intuition, subconscious, and the mystical side to life. They have a keen sense of perception but may keep themselves hidden, prone to secrecy. They are determined, ambitious, and obsessive.";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src='sagittarius.png'width=20%>";
        document.getElementById("characteristic").innerHTML="The expansive, optimist of the Zodiac, Sagittarius loves to explore far and wide- whether that be the actual world or the realms of the psyche. They are comfortable discussing matters from philosophy and spirituality to science and the bigger themes of life. They love to learn and experience new things and form many opinions which they love to share! An intellectual but sarcastic Sign, Sagittarius is truth-seeking, even if it is at the cost of the feelings of others. This is always well-intentioned, however, and their generally positive, infectious good vibes earns them plenty of favours! Their enthusiasm and excitement may mean they are already moving on to the next big thing before finishing the first. They are spontaneous lovers of freedom and loves to converse with a wide array of people.";
    }
  
  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
 
        result = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src='capricorn-sign.png'width=20%>";
     document.getElementById("characteristic").innerHTML="The sturdy mountain goat is hard-working, determined, motivated, practical, reliable, and ambitious. They don’t care how long it takes them to get to the top of the mountain, they will get there. Capricorn is concerned with the long-game, always looking to the future and not deterred by how long something will take, they have the patience. Mature and wise beyond their years, Capricorns have a responsible knowing. They are resilient, persistent, realistic, and disciplined. They may place an importance on career, social status or money, and have a strong work ethic. They are capable leaders and loyal team players but may be prone to stubbornness. They value tradition and may have a hidden spiritual side.";
    }else if (birthmonth>12||birthday>31){
       alert("Please enter a valid date!");
    }
    if (result != "Enter a valid date!") {
        var sign = document.createTextNode(birthmonth + "/"+ birthday + " - " + result);
        birthdays.appendChild(sign);
        document.getElementById("birthdays").appendChild(birthdays);
    }
 document.getElementById("output").innerHTML= result;
}

  
