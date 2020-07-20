var body = document.body;
  var socialCard = document.getElementsByClassName("social");
  var overviewCard = document.getElementsByClassName("overview");
  var background = document.getElementsByClassName("background-pattern");
  var h2 = document.querySelector("h2");
  var spans = document.getElementsByTagName("span");
  var ps = document.getElementsByTagName("p");


  function changeTheme() {
      body.classList.toggle("background-body");
      background[0].classList.toggle("background-pattern-light");
      for (var i = 0; i<overviewCard.length; i++) {
      overviewCard[i].classList.toggle("background-cards");
      }
      for(var i = 0; i<socialCard.length; i++) {
        socialCard[i].classList.toggle("background-cards");
      }
      h2.classList.toggle("dark-text");
      for(var i = 0; i<spans.length; i++) {
        spans[i].classList.toggle("dark-text");
      }
      for (var i=0; i<ps; i++) {
        ps[i].classList.toggle("paragraphs");
      }      
  }