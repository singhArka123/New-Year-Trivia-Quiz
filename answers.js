var sketchProc = function(processingInstance) {
	with(processingInstance) {
		size(600, 600);
		frameRate(65);

		var page = 1;

		var QuestionOne = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 1", 300, 120);
			textSize(20);
			text("Question: On New Year, do people eat 12 grapes in France?\nAnswer: No. In Spain, people try to eat 12 grapes in 12 seconds\nat midnight. If you manage to eat all the grapes, than you can\nexpect a year full of prosperity and luck.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionTwo = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 2", 300, 120);
			textSize(20);
			text("Question: Is January 1st Cuba Independence Day?\nAnswer: No. January 1, 1804 is Haiti Independence Day.\nThis day was set aside to commemorate Haiti's declaration of\n independence from French colonial rule.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionThree = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 3", 300, 120);
			textSize(20);
			text("Question: Do people bang potatoes on walls\nto celebrate the new year?\nAnswer: No. In Ireland, people bang bread against the walls\nand doors to ward off evil spirits.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionFour = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 4", 300, 120);
			textSize(20);
			text("Question: Does January gets its name from\nthe Roman god Janus?\nAnswer: Yes. January gets its name from the Roman god\nwho is the god of doors, gates, and transitions.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionFive = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 5", 300, 120);
			textSize(20);
			text("Question: Was the New Year celebrated on\nDec 31 by Romans?\nAnswer: No. The New Year was celebrate on March\n1st by Romans.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionSix = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 6", 300, 120);
			textSize(20);
			text("Question: Is breaking plates on New Year's \nEve good luck in Ireland?\nAnswer: No. In Denmark, breaking old plates\nis believed to be a sign of good luck.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionSeven = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 7", 300, 120);
			textSize(20);
			text("Question: Does Ethiopia use the Julian and\nthe Gregorian calendar?\nAnswer: No. Ethiopia uses it's own calendar called the Ge'ez\ncalendar and sometimes also uses the Gregorian calendar.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionEight = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 8", 300, 120);
			textSize(20);
			text("Question: Is it true that Saudi Arabia doesn't\ncelebrate New year?\nAnswer: Yes. Saudi Arabia celebrates its own New Year.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionNine = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 9", 300, 120);
			textSize(20);
			text("Question: Were time balls invented to help sailors?\nAnswer: Yes. Ship's navigators needed to know the time to\n plot their longitude. To do that, though, they had to \nhave a reference point - a point where they knew the time.", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		var QuestionTen = function() {
			background(26, 26, 26);
			textFont(createFont("Trebuchet MS"));
			textAlign(CENTER, CENTER);
			fill(255, 255, 255);
			textSize(50);
			text("New Year Trivia Quiz", 300, 75);
			textSize(40);
			text("Question 10", 300, 120);
			textSize(20);
			text("Question: Is the New Year terrifnying for children in Akita,\nJapan?\nAnswer: Yes. In Japan, people dress up as demons and terrify\nnaughty children (known as Namahage).", 300, 206);
			text("Click to move on >>>", 300, 576);
		};

		draw = function() {
			switch (page) {
				case 1:
					QuestionOne();
					break;
				case 2:
					QuestionTwo();
					break;
				case 3:
					QuestionThree();
					break;
				case 4:
					QuestionFour();
					break;
				case 5:
					QuestionFive();
					break;
				case 6:
					QuestionSix();
					break;
				case 7:
					QuestionSeven();
					break;
				case 8:
					QuestionEight();
					break;
				case 9:
					QuestionNine();
					break;
				case 10:
					QuestionTen();
					break;
			}
		};

		mouseClicked = function() {
			if (page === 1) {
				page = 2;
			} else if (page === 2) {
				page = 3;
			} else if (page === 3) {
				page = 4;
			} else if (page === 4) {
				page = 5;
			} else if (page === 5) {
				page = 6;
			} else if (page === 6) {
				page = 7;
			} else if (page === 7) {
				page = 8;
			} else if (page === 8) {
				page = 9;
			} else if (page === 9) {
				page = 10;
			} else if (page === 10) {
				page = 1;
			}
		};
	}
};

var canvas = document.getElementById("mycanvas");
var processingInstance = new Processing(canvas, sketchProc);
