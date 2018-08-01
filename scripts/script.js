const  keyData = [

	{key: keyA = {
		element: document.getElementById("key-A"),
		sound: document.getElementById("clap"),
		keyCode: 65
	}},
	{key: keyS = {
		element: document.getElementById("key-S"),
		sound: document.getElementById("hihat"),
		keyCode: 83
	}},
	{key: keyD = {
		element: document.getElementById("key-D"),
		sound: document.getElementById("kick"),
		keyCode: 68
	}},
	{key: keyF = {
		element: document.getElementById("key-F"),
		sound: document.getElementById("openhat"),
		keyCode: 70
	}},
	{key: keyG = {
		element: document.getElementById("key-G"),
		sound: document.getElementById("boom"),
		keyCode: 71
	}},
	{key: keyH = {
		element: document.getElementById("key-H"),
		sound: document.getElementById("ride"),
		keyCode: 72
	}},
	{key: keyJ = {
		element: document.getElementById("key-J"),
		sound: document.getElementById("snare"),
		keyCode: 74
	}},
	{key: keyK = {
		element: document.getElementById("key-K"),
		sound: document.getElementById("tom"),
		keyCode: 75
	}},
	{key: keyL = {
		element: document.getElementById("key-L"),
		sound: document.getElementById("tink"),
		keyCode: 76
	}},
];

function playAudio(sound){
	sound.currentTime=0;
	sound.play();
}

function setDelay(pressedKey) {
	setTimeout(function() {
		pressedKey.key.element.classList.remove("key-pressed");
	},200);
};

function testKeyCode(e) {
for(let i=0; i < keyData.length; i++) {
		let pressedKey = keyData[i];
		if (e.keyCode == pressedKey.key.keyCode) {
			playAudio(pressedKey.key.sound);
			pressedKey.key.element.classList.add("key-pressed");
			setDelay(pressedKey);
		}

	}
};

document.addEventListener("keydown", testKeyCode, false);

 

