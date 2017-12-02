function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
            }

            showProgress();
        }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Which resident of Hamilton was once the Premier of the Province of Canada, and also known as one of the heroes of 1812? Hint: He lived in Dundurn Castle which was built in 1830.", ["Pierre Elliot Trudeau","Sir John A. MacDonald", "Alexander Mackenzie", "Sir Allen Napier MacNab"], "Sir Allen Napier MacNab"),
    new Question("This 30 km road race is a world famous event held annually in the City of Hamilton.  The first run was on Christmas Day in 1894, making it three years older than the Boston Marathon.  What is the name of this run?", ["Around The Bay Race","Around The City Race","Hamilton Bay Road Race", "Amazing Bay Road Race"], "Around The Bay Race"),
    new Question("Hamilton is located on the Western shores of which Great Lake?", ["Lake Michigan","Lake Ontario","Lake Eerie","Lake Superior"], "Lake Ontario"),
    new Question("Which university founded in 1887 is located in Hamilton and has ranked 4th in Canada and 94th in the world by times Higher Education Rankings 2015-16 and is also known as a well-known medial school?", ["Brock University","Barton University","Harvard Hamilton","McMaster University"], "McMaster University"),
    new Question("What multi-purpose stadium opened up in Hamilton September 2014?", ["Ivor Wynne Stadium","Ron Joyce Stadium","Tim Hortons Field","First Ontario Center Stadium"], "Tim Hortons Field"),
];

var quiz = new Quiz(questions);

populate();
