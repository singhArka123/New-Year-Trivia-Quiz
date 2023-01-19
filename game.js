var sketchProc = function(processingInstance) {
	with(processingInstance) {
		size(600, 600);
		frameRate(65);

		// Variables
		var creator = "Arka S.";
		var questions = ["On New Year, people eat 12\n grapes in France", "January 1st is Cuba\n Independence Day", "On New Year, people bang\n potatoes on walls in Ireland", "January gets it's name from\nthe Roman god Janus", "New Year was celebrated on\nDec 31 by Romans", "Breaking plates on New Year's \nEve is good luck in Ireland", "Ethiopia uses the Julian and\nthe Gregorian calendar", "Saudi Arabia doesn't celebrate\nNew Year", "Time balls were invented to\nhelp sailors", "New Year's is terrifying for\nchildren in Akita, Japan."];
		var answers = [false, false, false, true, false, false, false, true, true, true];
		var mode = "normal";
		var timeSpeed = 2.5;
		var clicked = false;
		var scene = "home";
		var time = 250;
		var question = 0;
		var myTimer = 0;
		var playLogo = true;
		var font = createFont("Trebuchet MS");
		var wrong = 0;
		var correct = 0;

		// Button Function
		var Button = function(x, y, s, txt, txts, sceneSwitch) {
			this.x = x;
			this.y = y;
			this.s = s;
			this.txt = txt;
			this.txts = txts;
			this.sceneSwitch = sceneSwitch;
		};

		Button.prototype.display = function() {
			fill(56, 56, 56);
			strokeWeight(0.01);

			if (dist(mouseX, mouseY, this.x, this.y) < this.s / 2) {
				fill(82, 82, 82);
				strokeWeight(5);
				this.s += 15;
				this.txts += 5;
				cursor("pointer");
			}

			ellipse(this.x, this.y, this.s, this.s);
			fill(100, 100, 100);
			textSize(this.txts);
			textAlign(CENTER, CENTER);
			text(this.txt, this.x, this.y);
		};

		Button.prototype.whenClicked = function() {
			if (clicked && (dist(mouseX, mouseY, this.x, this.y) < this.s / 2)) {
				scene = this.sceneSwitch;
			}
		};

		var TrueButton = function(x, y, s) {
			this.x = x;
			this.y = y;
			this.s = s;
			this.txt = "True";
		};

		TrueButton.prototype.display = function() {
			fill(59, 59, 59);
			if (dist(mouseX, mouseY, this.x, this.y) < this.s / 2) {
				fill(50);
				cursor("pointer");
			}
			ellipse(this.x, this.y, this.s, this.s);
			fill(255, 255, 255);
			textAlign(CENTER, CENTER);
			textSize(27);
			text(this.txt, this.x, this.y);
		};

		TrueButton.prototype.whenClicked = function() {
			if (clicked && dist(mouseX, mouseY, this.x, this.y) < this.s / 2) {
				if (answers[question] === true) {
					question++;
					time = 450;
				} else {
					scene = "wrong";
				}
			}
		};

		var FalseButton = function(x, y, s) {
			this.x = x;
			this.y = y;
			this.s = s;
			this.txt = "False";
		};

		FalseButton.prototype.display = function() {
			fill(59, 59, 59);
			if (dist(mouseX, mouseY, this.x, this.y) < this.s / 2) {
				fill(50);
				cursor("pointer");
			}
			ellipse(this.x, this.y, this.s, this.s);
			fill(255);
			textAlign(CENTER, CENTER);
			textSize(27);
			text(this.txt, this.x, this.y);
		};

		FalseButton.prototype.whenClicked = function() {
			if (clicked && dist(mouseX, mouseY, this.x, this.y) < this.s / 2) {
				if (answers[question] === false) {
					question++;
					time = 450;
				} else {
					scene = "wrong";
				}
			}
		};

		// Screens
		var drawSceneHome = function() {
			background(33, 29, 29);
			fill(255, 255, 255);
			textFont(createFont("Trebuchet MS", 50));
			textAlign(CENTER, CENTER);
			text("New Year Trivia Quiz", 300, 75);

			textSize(20);
			text("Difficulty: " + mode, 300, 127);

			var startButton = new Button(296, 250, 150, "Play", 30, "play");
			textSize(20);
			startButton.display();
			startButton.whenClicked();

			var howButton = new Button(200, 421, 150, "How", 30, "how");
			howButton.display();
			howButton.whenClicked();

			var modeButton = new Button(410, 421, 150, "Mode", 30, "mode");
			modeButton.display();
			modeButton.whenClicked();
		};

		var drawScenePlay = function() {
			rectMode(CENTER);
			textAlign(CENTER, CENTER);

			background(0, 0, 0);
			fill(255);
			textSize(40);
			text(questions[question], 300, 175);
			textSize(12.5);
			text(question + 1 + "/" + questions.length, 50, 40);
			rect(300, 90, time, 15, 10);

			var trueButton = new TrueButton(173, 388, 150);
			trueButton.display();
			trueButton.whenClicked();

			var falseButton = new FalseButton(444, 388, 150);
			falseButton.display();
			falseButton.whenClicked();

			time -= timeSpeed;
			if (time < 0) {
				scene = "wrong";
			}
			if (question + 1 > questions.length) {
				scene = "win";
			}
		};

		var drawSceneGameOver = function() {
			background(0, 0, 0);
			fill(255, 255, 255);
			textSize(50);
			text("Game Over!", 300, 199);

			var backButton = new Button(300, 321, 120, "Menu", 20, "restart");
			backButton.display();
			backButton.whenClicked();
		};

		var drawSceneWin = function() {
			background(0, 0, 0);
			fill(255, 255, 255);
			textSize(50);
			text("You Win!", 300, 199);

			var backButton = new Button(300, 321, 120, "Menu", 20, "restart");
			backButton.display();
			backButton.whenClicked();
		};

		var drawSceneHow = function() {
			background(33, 29, 29);
			fill(255, 255, 255);
			textFont(createFont("Trebuchet MS", 50));
			textAlign(CENTER, CENTER);
			text("How To Play", 300, 75);

			textSize(20);
			text("Answer all the questions as fast as you can before the\n timer runs out. If you correctly answer all\n 10 questions, you win!", 300, 169);

			textFont(createFont("Trebuchet MS", 30));
			var backButton = new Button(495, 495, 150, "Back", 30, "home");
			backButton.display();
			backButton.whenClicked();
		};

		var drawSceneMode = function() {
			background(33, 29, 29);
			fill(255, 255, 255);
			textFont(createFont("Trebuchet MS", 50));
			textAlign(CENTER, CENTER);
			text("Game Difficulty Mode", 300, 75);

			textSize(20);
			text("Difficulty: " + mode, 300, 169);

			// textFont(createFont("Trebuchet MS", 30));

			var easyButton = new Button(175, 300, 100, "Easy", 19, "easy");
			easyButton.display();
			easyButton.whenClicked();

			var normalButton = new Button(300, 300, 100, "Normal", 19, "normal");
			normalButton.display();
			normalButton.whenClicked();

			var hardButton = new Button(425, 300, 100, "Hard", 19, "hard");
			hardButton.display();
			hardButton.whenClicked();

			var backButton = new Button(495, 495, 150, "Back", 30, "home");
			backButton.display();
		};
		// Logo
		var Logo = function() {
			if (playLogo === true) {
				noStroke();
				background(0, 0, 0);

				textFont(createFont("Trebuchet MS"));
				textSize(70);
				textAlign(CENTER, CENTER);
				fill(255, 255, 255);
				text("A R K A   S.", width / 2, width / 2.7);
				text("S T U D I O S", width / 2, width / 1.9);
				textSize(25);
				text("P R E S E N T S", width / 2, height / 2 + 75);

				textSize(20);
				text("Loading...", 300, 570);
			}
		};

		// Changing modes
		// {
		var changeModeEasy = function() {
			mode = "easy";
			drawSceneHome();
		};

		var changeModeNormal = function() {
			mode = "normal";
			drawSceneHome();
		};

		var changeModeHard = function() {
			mode = "hard";
			drawSceneHome();
		};

		// Draw Function 
		draw = function() {
			myTimer++;
			if (myTimer < 350) {
				Logo();
			} else if (myTimer > 350) {
				switch (scene) {
					case "home":
						drawSceneHome();
						break;
					case "play":
						drawScenePlay();
						break;
					case "how":
						drawSceneHow();
						break;
					case "wrong":
						drawSceneGameOver();
						break;
					case "win":
						drawSceneWin();
						break;
					case "mode":
						drawSceneMode();
						break;
					case "easy":
						changeModeEasy();
						break;
					case "normal":
						changeModeNormal();
						break;
					case "hard":
						changeModeHard();
						break;
					case "restart":
						window.location.reload();
						scene = "home";
						playLogo = false;
						break;
				}
			}
			textFont(font);
			clicked = false;

			if (mode === "easy") {
				timeSpeed = 0.45;
			} else if (mode === "normal") {
				timeSpeed = 0.75;
			} else if (mode === "hard") {
				timeSpeed = 2.5;
			}

			cursor("none");
			noStroke();
			fill(212, 175, 55);
			ellipse(mouseX, mouseY, 30, 30);
			strokeWeight(5);
			stroke(255, 255, 255);
			ellipse(mouseX, mouseY, 5, 5);
			noFill();
			strokeWeight(7);
			ellipse(mouseX, mouseY, 50, 50);
		};

		// MouseClicked Function
		mouseClicked = function() {
			clicked = true;
		};

	}
};

var canvas = document.getElementById("mycanvas");
var processingInstance = new Processing(canvas, sketchProc);
