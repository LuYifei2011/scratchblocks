/**
 * scratchblocks v3.6.4
 * https://scratchblocks.github.io/
 * Make pictures of Scratch blocks from text.
 *
 * Copyright 2013–2025, Tim Radvan
 * @license MIT
 */

var commands$g = {
	MOTION_MOVESTEPS: "gehe %1 er Schritt",
	MOTION_TURNRIGHT: "drehe dich @turnRight um %1 Grad",
	MOTION_TURNLEFT: "drehe dich @turnLeft um %1 Grad",
	MOTION_POINTINDIRECTION: "setze Richtung auf %1 Grad",
	MOTION_POINTTOWARDS: "drehe dich zu %1",
	MOTION_GOTOXY: "gehe zu x: %1 y: %2",
	MOTION_GOTO: "gehe zu %1",
	MOTION_GLIDESECSTOXY: "gleite in %1 Sek. zu x:%2  y:%3",
	MOTION_GLIDETO: "gleite in %1 Sek. zu %2",
	MOTION_CHANGEXBY: "ändere x um %1",
	MOTION_SETX: "setze x auf %1",
	MOTION_CHANGEYBY: "ändere y um %1",
	MOTION_SETY: "setze y auf %1",
	MOTION_SETROTATIONSTYLE: "setze Drehtyp auf %1",
	LOOKS_SAYFORSECS: "sage %1 für %2 Sekunden",
	LOOKS_SAY: "sage %1",
	LOOKS_THINKFORSECS: "denke %1 für %2 Sekunden",
	LOOKS_THINK: "denke %1",
	LOOKS_SHOW: "zeige dich",
	LOOKS_HIDE: "verstecke dich",
	LOOKS_SWITCHCOSTUMETO: "wechsle zu Kostüm %1",
	LOOKS_NEXTCOSTUME: "wechsle zum nächsten Kostüm",
	LOOKS_NEXTBACKDROP_BLOCK: "wechsle zum nächsten Bühnenbild",
	LOOKS_SWITCHBACKDROPTO: "wechsle zu Bühnenbild %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "wechsle zu Bühnenbild %1 und warte",
	LOOKS_CHANGEEFFECTBY: "ändere Effekt %1 um %2",
	LOOKS_SETEFFECTTO: "setze Effekt %1 auf %2",
	LOOKS_CLEARGRAPHICEFFECTS: "schalte Grafikeffekte aus",
	LOOKS_CHANGESIZEBY: "ändere Größe um %1",
	LOOKS_SETSIZETO: "setze Größe auf %1",
	LOOKS_GOTOFRONTBACK: "gehe zu %1 Ebene",
	LOOKS_GOFORWARDBACKWARDLAYERS: "gehe %2 Ebenen %1",
	SOUND_PLAY: "spiele Klang %1",
	SOUND_CHANGEEFFECTBY: "ändere Effekt %1 um %2",
	SOUND_SETEFFECTO: "setze Effekt %1 auf %2",
	SOUND_CLEAREFFECTS: "schalte Klangeffekte aus",
	SOUND_PLAYUNTILDONE: "spiele Klang %1 ganz",
	SOUND_STOPALLSOUNDS: "stoppe alle Klänge",
	"music.playDrumForBeats": "spiele Schlaginstrument %1 für %2 Schläge",
	"music.restForBeats": "pausiere %1 Schläge",
	"music.playNoteForBeats": "spiele Ton %1 für %2 Schläge",
	"music.setInstrument": "setze Instrument auf %1",
	SOUND_CHANGEVOLUMEBY: "ändere Lautstärke um %1",
	SOUND_SETVOLUMETO: "setze Lautstärke auf %1%",
	"music.changeTempo": "ändere Tempo um %1",
	"music.setTempo": "setze Tempo auf %1",
	"pen.clear": "lösche alles",
	"pen.stamp": "hinterlasse Abdruck",
	"pen.penDown": "schalte Stift ein",
	"pen.penUp": "schalte Stift aus",
	"pen.setColor": "setze Stiftfarbe auf %1",
	"pen.changeHue": "ändere Stiftfarbe um %1",
	"pen.setColorParam": "setze Stift %1 auf %2",
	"pen.changeColorParam": "ändere Stift %1 um %2",
	"pen.setHue": "setze Stiftfarbe auf %1",
	"pen.changeShade": "ändere Farbstärke um %1",
	"pen.setShade": "setze Farbstärke auf %1",
	"pen.changeSize": "ändere Stiftdicke um %1",
	"pen.setSize": "setze Stiftdicke auf %1",
	EVENT_WHENFLAGCLICKED: "Wenn @greenFlag angeklickt wird",
	EVENT_WHENKEYPRESSED: "Wenn Taste %1 gedrückt wird",
	EVENT_WHENTHISSPRITECLICKED: "Wenn diese Figur angeklickt wird",
	EVENT_WHENSTAGECLICKED: "Wenn die Bühne angeklickt wird",
	EVENT_WHENBACKDROPSWITCHESTO: "Wenn das Bühnenbild zu %1 wechselt",
	EVENT_WHENGREATERTHAN: "Wenn %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "Wenn ich %1 empfange",
	EVENT_BROADCAST: "sende %1 an alle",
	EVENT_BROADCASTANDWAIT: "sende %1 an alle und warte",
	CONTROL_WAIT: "warte %1 Sekunden",
	CONTROL_REPEAT: "wiederhole %1 mal",
	CONTROL_FOREVER: "wiederhole fortlaufend",
	CONTROL_IF: "falls %1, dann",
	CONTROL_WAITUNTIL: "warte bis %1",
	CONTROL_REPEATUNTIL: "wiederhole bis %1",
	CONTROL_STOP: "stoppe %1",
	CONTROL_STARTASCLONE: "Wenn ich als Klon entstehe",
	CONTROL_CREATECLONEOF: "erzeuge Klon von %1",
	CONTROL_DELETETHISCLONE: "lösche diesen Klon",
	SENSING_ASKANDWAIT: "frage %1 und warte",
	"videoSensing.videoToggle": "schalte Video %1",
	"videoSensing.setVideoTransparency": "setze Video-Transparenz auf %1",
	"videoSensing.whenMotionGreaterThan": "Wenn Video-Bewegung > %1",
	SENSING_RESETTIMER: "setze Stoppuhr zurück",
	DATA_SETVARIABLETO: "setze %1 auf %2",
	DATA_CHANGEVARIABLEBY: "ändere %1 um %2",
	DATA_SHOWVARIABLE: "zeige Variable %1",
	DATA_HIDEVARIABLE: "verstecke Variable %1",
	DATA_ADDTOLIST: "füge %1 zu %2 hinzu",
	DATA_DELETEOFLIST: "lösche %1 aus %2",
	DATA_DELETEALLOFLIST: "lösche alles aus %1",
	MOTION_IFONEDGEBOUNCE: "pralle vom Rand ab",
	DATA_INSERTATLIST: "füge %1 bei %2 in %3 ein",
	DATA_REPLACEITEMOFLIST: "ersetze Element %1 von %2 durch %3",
	DATA_SHOWLIST: "zeige Liste %1",
	DATA_HIDELIST: "verstecke Liste %1",
	SENSING_OF_XPOSITION: "x-Position",
	SENSING_OF_YPOSITION: "y-Position",
	SENSING_OF_DIRECTION: "Richtung",
	SENSING_OF_COSTUMENUMBER: "Kostümnummer",
	LOOKS_COSTUMENUMBERNAME: "Kostüm %1",
	SENSING_OF_SIZE: "Größe",
	SENSING_OF_BACKDROPNAME: "Bühnenbildname",
	LOOKS_BACKDROPNUMBERNAME: "Bühnenbild %1",
	SENSING_OF_BACKDROPNUMBER: "Bühnenbildnummer",
	SOUND_VOLUME: "Lautstärke",
	"music.getTempo": "Tempo",
	SENSING_TOUCHINGOBJECT: "wird %1 berührt?",
	SENSING_TOUCHINGCOLOR: "wird Farbe %1 berührt?",
	SENSING_COLORISTOUCHINGCOLOR: "Farbe %1 berührt %2?",
	SENSING_DISTANCETO: "Entfernung von %1",
	SENSING_ANSWER: "Antwort",
	SENSING_KEYPRESSED: "Taste %1 gedrückt?",
	SENSING_MOUSEDOWN: "Maustaste gedrückt?",
	SENSING_MOUSEX: "Maus x-Position",
	SENSING_MOUSEY: "Maus y-Position",
	SENSING_SETDRAGMODE: "setze Ziehbarkeit auf %1",
	SENSING_LOUDNESS: "Lautstärke",
	"videoSensing.videoOn": "Video-%1 von %2",
	SENSING_TIMER: "Stoppuhr",
	SENSING_OF: "%1 von %2",
	SENSING_CURRENT: "%1 im Moment",
	SENSING_DAYSSINCE2000: "Tage seit 2000",
	SENSING_USERNAME: "Benutzername",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "Zufallszahl von %1 bis %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 und %2",
	OPERATORS_OR: "%1 oder %2",
	OPERATORS_NOT: "nicht %1",
	OPERATORS_JOIN: "verbinde %1 und %2",
	OPERATORS_LETTEROF: "Zeichen %1 von %2",
	OPERATORS_LENGTH: "Länge von %1",
	OPERATORS_MOD: "%1 mod %2",
	OPERATORS_ROUND: "%1 gerundet",
	OPERATORS_MATHOP: "%1 von %2",
	OPERATORS_CONTAINS: "%1 enthält %2?",
	DATA_ITEMOFLIST: "Element %1 von %2",
	DATA_ITEMNUMOFLIST: "Nummer von %1 in %2",
	DATA_LENGTHOFLIST: "Länge von %1",
	DATA_LISTCONTAINSITEM: "%1 enthält %2?",
	CONTROL_ELSE: "sonst",
	SENSING_USERID: "Benutzer-ID",
	SENSING_LOUD: "laut?",
	"text2speech.speakAndWaitBlock": "sage %1",
	"text2speech.setVoiceBlock": "ändere die Stimme zu %1",
	"text2speech.setLanguageBlock": "setze Sprache auf %1",
	"translate.translateBlock": "übersetze %1 nach %2",
	"translate.viewerLanguage": "Sprache",
	"makeymakey.whenKeyPressed": "Wenn Taste %1 gedrückt",
	"makeymakey.whenKeysPressedInOrder": "Wenn %1 der Reihe nach gedrückt",
	"microbit.whenButtonPressed": "Wenn Knopf %1gedrückt wird",
	"microbit.isButtonPressed": "Knopf %1 gedrückt?",
	"microbit.whenGesture": "Wenn %1",
	"microbit.displaySymbol": "zeige %1 an",
	"microbit.displayText": "zeige Text %1 an",
	"microbit.clearDisplay": "zeige nichts an",
	"microbit.whenTilted": "Wenn %1 geneigt",
	"microbit.isTilted": "%1 geneigt?",
	"microbit.tiltAngle": "Neigungswinkel %1",
	"microbit.whenPinConnected": "Wenn Pin %1 angeschlossen ist",
	"ev3.motorTurnClockwise": "drehe Motor %1 für %2Sekunden rechtsherum",
	"ev3.motorTurnCounterClockwise": "drehe Motor %1für %2Sekunden linksherum",
	"ev3.motorSetPower": "setze Leistung von Motor %1 auf %2%",
	"ev3.getMotorPosition": "Position von Motor %1",
	"ev3.whenButtonPressed": "Wenn der Knopf %1 gedrückt wird",
	"ev3.whenDistanceLessThan": "Wenn Abstand < %1",
	"ev3.whenBrightnessLessThan": "Wenn Helligkeit < %1",
	"ev3.buttonPressed": "Knopf %1 gedrückt?",
	"ev3.getDistance": "Abstand",
	"ev3.getBrightness": "Helligkeit",
	"ev3.beepNote": "piepse Note %1 für %2 Sek.",
	"wedo2.motorOn": "schalte %1 an",
	"wedo2.motorOff": "schalte %1 aus",
	"wedo2.startMotorPower": "setze Leistung von %1 auf %2",
	"wedo2.setMotorDirection": "setze Richtung von %1 auf %2",
	"wedo2.whenDistance": "Wenn Abstand %1 %2",
	"wedo2.getDistance": "Abstand",
	"wedo2.motorOnFor": "schalte %1 für %2 Sekunden an",
	"wedo2.setLightHue": "setze Lichtfarbe auf %1",
	"wedo2.playNoteFor": "spiele Note %1 für %2 Sekunden",
	"wedo2.whenTilted": "Wenn %1 geneigt",
	"wedo2.isTilted": "%1 geneigt?",
	"wedo2.getTiltAngle": "Neigungswinkel %1",
	"gdxfor.whenGesture": "Wenn %1",
	"gdxfor.whenForcePushedOrPulled": "Wenn Kraftsensor %1",
	"gdxfor.getForce": "Kraft",
	"gdxfor.whenTilted": "Wenn geneigt %1",
	"gdxfor.isTilted": "geneigt %1?",
	"gdxfor.getTilt": "Neigungswinkel %1",
	"gdxfor.isFreeFalling": "fallend?",
	"gdxfor.getSpin": "Rotationsgeschwindigkeit %1",
	"gdxfor.getAcceleration": "Beschleunigung %1",
	"boost.motorOnFor": "Schalte Motor %1 für %2 Sekunden ein",
	"boost.motorOnForRotation": "Schalte Motor %1 für %2 Umdrehungen ein",
	"boost.motorOn": "Schalte Motor %1 ein",
	"boost.motorOff": "Schalte Motor %1 aus",
	"boost.setMotorPower": "Setze von Motor %1 die Geschwindigkeit auf %2%",
	"boost.setMotorDirection": "Setze Richtung von Motor %1 auf %2",
	"boost.getMotorPosition": "Position des Motors %1",
	"boost.whenColor": "Wenn %1 gesehen wird",
	"boost.seeingColor": "Sehe Farbe %1?",
	"boost.whenTilted": "Wenn %1 geneigt",
	"boost.getTiltAngle": "Neigungswinkel %1",
	"boost.setLightHue": "setze Lichtfarbe auf %1"
};
var dropdowns$g = {
	MOTION_GOTO_POINTER: {
		value: "Mauszeiger",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "Zufallsposition",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "Mauszeiger",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "Zufallsposition",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "Mauszeiger",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "Zufallsrichtung",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "links-rechts",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "nicht drehen",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "rundherum",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "nächstes Bühnenbild",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "vorheriges Bühnenbild",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "zufälliges Bühnenbild",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "Farbe",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "Fischauge",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "Wirbel",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "Pixel",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "Mosaik",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "Helligkeit",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "Durchsichtigkeit",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "vorderster",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "hinterster",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "nach vorne",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "nach hinten",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "Nummer",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "Name",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "Höhe",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "Aussteuern links/rechts",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "Leertaste",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "Pfeil nach links",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "Pfeil nach rechts",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "Pfeil nach unten",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "Pfeil nach oben",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "beliebiges",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "Stoppuhr",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "Lautstärke",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "alles",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "dieses Skript",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "andere Skripte der Figur",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "mir selbst",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "Mauszeiger",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "Rand",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "Mauszeiger",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "ziehbar",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "nicht ziehbar",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x-Position",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y-Position",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "Richtung",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "Kostümnummer",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "Kostümname",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "Größe",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "Lautstärke",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "Bühnenbildnummer",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "Bühnenbildname",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Bühne",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "Jahr",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "Monat",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "Datum",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "Wochentag",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "Stunde",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "Minute",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "Sekunde",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "Betrag",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "abrunden",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "aufrunden",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "Wurzel",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Snare-Drum",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Basstrommel",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Side-Stick",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Crash-Becken",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Offene Hi-Hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Geschlossene Hi-Hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamburin",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Klatschen",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Klangstäbe",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Holzblock",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Kuhglocke",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangel",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Konga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Güiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuíca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Klavier",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) E-Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Orgel",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Gitarre",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) E-Gitarre",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Bass-Gitarre",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Cello",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Posaune",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Klarinette",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saxophon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Querflöte",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Blockflöte",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagott",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Chor",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibraphon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Musikbox",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Steel-Drum",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Lead-Synthesizer",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Pad-Synthesizer",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "Farbe",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "Sättigung",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "Helligkeit",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "Transparenz",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "Richtung",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "Bewegung",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "Figur",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "Bühne",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "aus",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "an",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "auf gespiegelt",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "Alt",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "Tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "Quietschen",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "Riese",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "Kätzchen",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "nach oben",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "nach unten",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "nach links",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "nach rechts",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "beliebiger",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "hochgehüpft",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "bewegt",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "geschüttelt",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "beliebig",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "nach hinten",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "nach vorne",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "nach links",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "nach rechts",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "linksherum",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "rechtsherum",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "andersherum",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "Irgendeine Farbe",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "Schwarz",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "Blau",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "Grün",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "Rot",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "Weiss",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "Gelb",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "irgendwohin",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "nach oben",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "nach unten",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "nach links",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "nach rechts",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "Motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "Motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "alle Motoren",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "Motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "rechtsherum",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "linksherum",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "andersherum",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "beliebig",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "nach oben",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "nach unten",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "nach links",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "nach rechts",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "gezogen",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "gedrückt",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "geschüttelt",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "begonnen zu fallen",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "nach unten gerichtet",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "nach oben gerichtet",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "nach vorne",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "nach hinten",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "nach links",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "nach rechts",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "irgendwohin",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "nach links nach oben nach rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "nach rechts nach oben nach links",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "nach links nach rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "nach rechts nach links",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "nach oben nach unten",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "nach unten nach oben",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "nach oben nach rechts nach unten nach links",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "nach oben nach links nach unten nach rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "nach oben nach oben nach unten nach unten nach links nach rechts nach links nach rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.am": {
		value: "Amharisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Arabisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Aserbaidschanisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Baskisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Bulgarisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Chinesisch (traditionell)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Chinesisch (vereinfacht)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Dänisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "Deutsch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "Englisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estnisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Finnisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Französisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galizisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Griechisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Hebräisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonesisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Irisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Isländisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Italienisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Japanisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Katalanisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Koreanisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Kroatisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Kurdisch (Sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Lettisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Litauisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Niederländisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Norwegisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Persisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Polnisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portugiesisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Rumänisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Russisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Schottisch-Gälisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Schwedisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Serbisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Slowakisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Slowenisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Spanisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Thailändisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Tschechisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Türkisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ukrainisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Ungarisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamesisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Walisisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arabisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Walisisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Dänisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Deutsch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Englisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Spanisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Spanisch (Lateinamerika)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Französisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Koreanisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Isländisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italienisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Niederländisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japanisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norwegisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polnisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugiesisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugiesisch (Brasilianisch)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Rumänisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Russisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Schwedisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Türkisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Chinesisch (Mandarin)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$g = [
];
var soundEffects$g = [
	"Höhe",
	"Aussteuern links/rechts"
];
var microbitWhen$g = [
	"bewegt",
	"geschüttelt",
	"hochgehüpft"
];
var osis$g = [
	"andere Skripte der Figur"
];
var definePrefix$g = [
	"Definiere"
];
var defineSuffix$g = [
];
var palette$g = {
	Motion: "Bewegung",
	Looks: "Aussehen",
	Sound: "Klang",
	Events: "Ereignisse",
	Control: "Steuerung",
	Sensing: "Fühlen",
	Operators: "Operatoren",
	Variables: "Variablen",
	"My Blocks": "Meine Blöcke"
};
var math$g = [
	"Betrag",
	"abrunden",
	"aufrunden",
	"Wurzel",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e^",
	"10^"
];
var aliases$g = {
	"drehe dich nach links um %1 Grad": "MOTION_TURNLEFT",
	"drehe dich nach rechts um %1 Grad": "MOTION_TURNRIGHT",
	"Wenn die grüne Flagge angeklickt": "EVENT_WHENFLAGCLICKED",
	Ende: "scratchblocks:end"
};
var name$g = "Deutsch";
var percentTranslated$g = 100;
var de = {
	commands: commands$g,
	dropdowns: dropdowns$g,
	ignorelt: ignorelt$g,
	soundEffects: soundEffects$g,
	microbitWhen: microbitWhen$g,
	osis: osis$g,
	definePrefix: definePrefix$g,
	defineSuffix: defineSuffix$g,
	palette: palette$g,
	math: math$g,
	aliases: aliases$g,
	name: name$g,
	percentTranslated: percentTranslated$g
};

var commands$f = {
	MOTION_MOVESTEPS: "mover %1 pasos",
	MOTION_TURNRIGHT: "girar @turnRight %1 grados",
	MOTION_TURNLEFT: "girar @turnLeft %1 grados",
	MOTION_POINTINDIRECTION: "apuntar en dirección %1",
	MOTION_POINTTOWARDS: "apuntar hacia %1",
	MOTION_GOTOXY: "ir a x: %1 y: %2",
	MOTION_GOTO: "ir a %1",
	MOTION_GLIDESECSTOXY: "deslizar en %1 segs a x: %2 y: %3",
	MOTION_GLIDETO: "deslizar en %1 segs a %2",
	MOTION_CHANGEXBY: "sumar a x %1",
	MOTION_SETX: "dar a x el valor %1",
	MOTION_CHANGEYBY: "sumar a y %1",
	MOTION_SETY: "dar a y el valor %1",
	MOTION_SETROTATIONSTYLE: "fijar estilo de rotación a %1",
	LOOKS_SAYFORSECS: "decir %1 durante %2 segundos",
	LOOKS_SAY: "decir %1",
	LOOKS_THINKFORSECS: "pensar %1 durante %2 segundos",
	LOOKS_THINK: "pensar %1",
	LOOKS_SHOW: "mostrar",
	LOOKS_HIDE: "esconder",
	LOOKS_SWITCHCOSTUMETO: "cambiar disfraz a %1",
	LOOKS_NEXTCOSTUME: "siguiente disfraz",
	LOOKS_NEXTBACKDROP_BLOCK: "siguiente fondo",
	LOOKS_SWITCHBACKDROPTO: "cambiar fondo a %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "cambiar fondo a %1 y esperar",
	LOOKS_CHANGEEFFECTBY: "sumar al efecto %1 %2",
	LOOKS_SETEFFECTTO: "dar al efecto %1 el valor %2",
	LOOKS_CLEARGRAPHICEFFECTS: "quitar efectos gráficos",
	LOOKS_CHANGESIZEBY: "cambiar tamaño por %1",
	LOOKS_SETSIZETO: "fijar tamaño al %1 %",
	LOOKS_GOTOFRONTBACK: "ir a capa %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "ir %2 capas hacia %1",
	SOUND_PLAY: "iniciar sonido %1",
	SOUND_CHANGEEFFECTBY: "sumar al efecto %1 %2",
	SOUND_SETEFFECTO: "dar al efecto %1 el valor %2",
	SOUND_CLEAREFFECTS: "quitar efectos de sonido",
	SOUND_PLAYUNTILDONE: "tocar sonido %1 hasta que termine",
	SOUND_STOPALLSOUNDS: "detener todos los sonidos",
	"music.playDrumForBeats": "tocar tambor %1 durante %2 tiempos",
	"music.restForBeats": "silencio de %1 tiempos",
	"music.playNoteForBeats": "tocar nota %1 durante %2 tiempos",
	"music.setInstrument": "fijar instrumento a %1",
	SOUND_CHANGEVOLUMEBY: "cambiar volumen por %1",
	SOUND_SETVOLUMETO: "fijar volumen al %1%",
	"music.changeTempo": "cambiar tempo por %1",
	"music.setTempo": "dar al tempo el valor %1",
	"pen.clear": "borrar todo",
	"pen.stamp": "sellar",
	"pen.penDown": "bajar lápiz",
	"pen.penUp": "subir lápiz",
	"pen.setColor": "fijar color de lápiz a %1",
	"pen.changeHue": "cambiar color de lápiz por %1",
	"pen.setColorParam": "fijar %1 de lápiz a %2",
	"pen.changeColorParam": "cambiar %1 de lápiz por %2",
	"pen.setHue": "fijar color de lápiz a %1",
	"pen.changeShade": "cambiar sombra de lápiz por %1",
	"pen.setShade": "fijar sombra de lápiz a %1",
	"pen.changeSize": "cambiar tamaño de lápiz por %1",
	"pen.setSize": "fijar tamaño de lápiz a %1",
	EVENT_WHENFLAGCLICKED: "al hacer clic en @greenFlag",
	EVENT_WHENKEYPRESSED: "al presionar tecla %1",
	EVENT_WHENTHISSPRITECLICKED: "al hacer clic en este objeto",
	EVENT_WHENSTAGECLICKED: "al hacer clic en el escenario",
	EVENT_WHENBACKDROPSWITCHESTO: "cuando el fondo cambie a %1",
	EVENT_WHENGREATERTHAN: "cuando %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "al recibir %1",
	EVENT_BROADCAST: "enviar %1",
	EVENT_BROADCASTANDWAIT: "enviar %1 y esperar",
	CONTROL_WAIT: "esperar %1 segundos",
	CONTROL_REPEAT: "repetir %1",
	CONTROL_FOREVER: "por siempre",
	CONTROL_IF: "si %1 entonces",
	CONTROL_WAITUNTIL: "esperar hasta que %1",
	CONTROL_REPEATUNTIL: "repetir hasta que %1",
	CONTROL_STOP: "detener %1",
	CONTROL_STARTASCLONE: "al comenzar como clon",
	CONTROL_CREATECLONEOF: "crear clon de %1",
	CONTROL_DELETETHISCLONE: "eliminar este clon",
	SENSING_ASKANDWAIT: "preguntar %1 y esperar",
	"videoSensing.videoToggle": "%1 vídeo",
	"videoSensing.setVideoTransparency": "fijar transparencia de vídeo a %1",
	"videoSensing.whenMotionGreaterThan": "cuando movimiento de vídeo > %1",
	SENSING_RESETTIMER: "reiniciar cronómetro",
	DATA_SETVARIABLETO: "dar a %1 el valor %2",
	DATA_CHANGEVARIABLEBY: "sumar a %1 %2",
	DATA_SHOWVARIABLE: "mostrar variable %1",
	DATA_HIDEVARIABLE: "esconder variable %1",
	DATA_ADDTOLIST: "añadir %1 a %2",
	DATA_DELETEOFLIST: "eliminar %1 de %2",
	DATA_DELETEALLOFLIST: "eliminar todos de %1",
	MOTION_IFONEDGEBOUNCE: "si toca un borde, rebotar",
	DATA_INSERTATLIST: "insertar %1 en %2 de %3",
	DATA_REPLACEITEMOFLIST: "reemplazar elemento %1 de %2 con %3",
	DATA_SHOWLIST: "mostrar lista %1",
	DATA_HIDELIST: "esconder lista %1",
	SENSING_OF_XPOSITION: "posición en x",
	SENSING_OF_YPOSITION: "posición en y",
	SENSING_OF_DIRECTION: "dirección",
	SENSING_OF_COSTUMENUMBER: "# de disfraz",
	LOOKS_COSTUMENUMBERNAME: "%1 de disfraz",
	SENSING_OF_SIZE: "tamaño",
	SENSING_OF_BACKDROPNAME: "nombre de fondo",
	LOOKS_BACKDROPNUMBERNAME: "%1 de fondo",
	SENSING_OF_BACKDROPNUMBER: "# de fondo",
	SOUND_VOLUME: "volumen",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "¿tocando %1?",
	SENSING_TOUCHINGCOLOR: "¿tocando el color %1?",
	SENSING_COLORISTOUCHINGCOLOR: "¿color %1 tocando %2?",
	SENSING_DISTANCETO: "distancia a %1",
	SENSING_ANSWER: "respuesta",
	SENSING_KEYPRESSED: "¿tecla %1 presionada?",
	SENSING_MOUSEDOWN: "¿ratón presionado?",
	SENSING_MOUSEX: "posición x del ratón",
	SENSING_MOUSEY: "posición y del ratón",
	SENSING_SETDRAGMODE: "fijar modo de arrastre a %1",
	SENSING_LOUDNESS: "volumen del sonido",
	"videoSensing.videoOn": "%1 de vídeo en %2",
	SENSING_TIMER: "cronómetro",
	SENSING_OF: "%1 de %2",
	SENSING_CURRENT: "%1 actual",
	SENSING_DAYSSINCE2000: "días desde el 2000",
	SENSING_USERNAME: "nombre de usuario",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "número aleatorio entre %1 y %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 y %2",
	OPERATORS_OR: "%1 o %2",
	OPERATORS_NOT: "no %1",
	OPERATORS_JOIN: "unir %1 %2",
	OPERATORS_LETTEROF: "letra %1 de %2",
	OPERATORS_LENGTH: "longitud de %1",
	OPERATORS_MOD: "%1 módulo %2",
	OPERATORS_ROUND: "redondear %1",
	OPERATORS_MATHOP: "%1 de %2",
	OPERATORS_CONTAINS: "¿%2 está en %1?",
	DATA_ITEMOFLIST: "elemento %1 de %2",
	DATA_ITEMNUMOFLIST: "# de elemento de %1 en %2",
	DATA_LENGTHOFLIST: "longitud de %1",
	DATA_LISTCONTAINSITEM: "¿%2 está en %1?",
	CONTROL_ELSE: "si no",
	SENSING_USERID: "id de usuario",
	SENSING_LOUD: "¿ruidoso?",
	"text2speech.speakAndWaitBlock": "decir %1",
	"text2speech.setVoiceBlock": "asignar voz a %1",
	"text2speech.setLanguageBlock": "fijar idioma a %1",
	"translate.translateBlock": "traducir %1 al %2",
	"translate.viewerLanguage": "idioma",
	"makeymakey.whenKeyPressed": "al presionar tecla %1",
	"makeymakey.whenKeysPressedInOrder": "al presionar %1 en orden",
	"microbit.whenButtonPressed": "al presionar botón %1",
	"microbit.isButtonPressed": "¿botón %1 presionado?",
	"microbit.whenGesture": "al %1",
	"microbit.displaySymbol": "mostrar %1",
	"microbit.displayText": "mostrar texto %1",
	"microbit.clearDisplay": "limpiar pantalla",
	"microbit.whenTilted": "al inclinar hacia %1",
	"microbit.isTilted": "¿inclinado hacia %1?",
	"microbit.tiltAngle": "ángulo de inclinación hacia %1",
	"microbit.whenPinConnected": "al conectar pin %1",
	"ev3.motorTurnClockwise": "motor %1 girar a un lado %2 segundos",
	"ev3.motorTurnCounterClockwise": "motor %1 girar al otro lado %2 segundos",
	"ev3.motorSetPower": "motor %1 fijar potencia a %2 %",
	"ev3.getMotorPosition": "posición del motor %1",
	"ev3.whenButtonPressed": "al presionar botón %1",
	"ev3.whenDistanceLessThan": "cuando distancia < %1",
	"ev3.whenBrightnessLessThan": "cuando brillo < %1",
	"ev3.buttonPressed": "¿botón %1 presionado?",
	"ev3.getDistance": "distancia",
	"ev3.getBrightness": "brillo",
	"ev3.beepNote": "tocar nota %1 durante %2 segundos",
	"wedo2.motorOn": "encender %1",
	"wedo2.motorOff": "apagar %1",
	"wedo2.startMotorPower": "fijar potencia de %1 a %2",
	"wedo2.setMotorDirection": "fijar dirección de %1 a %2",
	"wedo2.whenDistance": "cuando distancia %1 %2",
	"wedo2.getDistance": "distancia",
	"wedo2.motorOnFor": "encender %1 durante %2 segundos",
	"wedo2.setLightHue": "fijar color de la luz a %1",
	"wedo2.playNoteFor": "tocar nota %1 durante %2 segundos",
	"wedo2.whenTilted": "al inclinar hacia %1",
	"wedo2.isTilted": "¿inclinado hacia %1?",
	"wedo2.getTiltAngle": "ángulo de inclinación hacia %1",
	"gdxfor.whenGesture": "al %1",
	"gdxfor.whenForcePushedOrPulled": "cuando el sensor de fuerza %1",
	"gdxfor.getForce": "fuerza",
	"gdxfor.whenTilted": "al inclinar %1",
	"gdxfor.isTilted": "¿inclinado %1?",
	"gdxfor.getTilt": "ángulo de inclinación %1",
	"gdxfor.isFreeFalling": "¿cayendo?",
	"gdxfor.getSpin": "velocidad de giro %1",
	"gdxfor.getAcceleration": "aceleración %1",
	"boost.motorOnFor": "girar motor %1 %2 segundos",
	"boost.motorOnForRotation": "girar motor %1 %2 vueltas",
	"boost.motorOn": "encender motor %1",
	"boost.motorOff": "apagar motor %1",
	"boost.setMotorPower": "fijar velocidad del motor %1 al %2 %",
	"boost.setMotorDirection": "fijar dirección del motor %1 %2",
	"boost.getMotorPosition": "posición del motor %1",
	"boost.whenColor": "cuando vea pieza %1",
	"boost.seeingColor": "¿ve pieza %1?",
	"boost.whenTilted": "al inclinar hacia %1",
	"boost.getTiltAngle": "ángulo de inclinación hacia %1",
	"boost.setLightHue": "fijar color de la luz a %1"
};
var dropdowns$f = {
	MOTION_GOTO_POINTER: {
		value: "puntero del ratón",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "posición aleatoria",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "puntero del ratón",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "posición aleatoria",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "puntero del ratón",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "dirección aleatoria",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "izquierda-derecha",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "no rotar",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "en todas direcciones",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "siguiente fondo",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "fondo anterior",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "fondo aleatorio",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "color",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "ojo de pez",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "remolino",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pixelar",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaico",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "brillo",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "desvanecer",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "delantera",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "trasera",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "delante",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "atrás",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "número",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "nombre",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "altura",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "balance izquierda/derecha",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "espacio",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "flecha izquierda",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "flecha derecha",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "flecha abajo",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "flecha arriba",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "cualquiera",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "cronómetro",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "volumen del sonido",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "todos",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "este programa",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "otros programas en el objeto",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "mí mismo",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "puntero del ratón",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "borde",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "puntero del ratón",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "arrastrable",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "no arrastrable",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "posición en x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "posición en y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "dirección",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "# de disfraz",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "nombre de disfraz",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "tamaño",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volumen",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "# de fondo",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "nombre de fondo",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Escenario",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "año",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "mes",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "día",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "día de la semana",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "hora",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minuto",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "segundo",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "valor absoluto",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "suelo",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "techo",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "raíz cuadrada",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sen",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "arcsen",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "arccos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "arctan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Caja",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Bombo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Golpe lateral",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Platillo crash",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Charles abierto",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Charles cerrado",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Pandereta",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Palmada",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Claves",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Caja china",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Cencerro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triángulo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Güiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuica",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Piano eléctrico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Órgano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Guitarra",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Guitarra eléctrica",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Bajo",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Violonchelo",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombón",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Clarinete",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saxofón",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flauta",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Flauta de madera",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagot",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Coro",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibráfono",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Caja de música",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Tambor metálico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Sintetizador melódico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Sintetizador de fondo",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "color",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "saturación",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "brillo",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "transparencia",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "dirección",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "movimiento",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "objeto",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "escenario",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "apagar",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "encender",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "invertir",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "contralto",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "chillido",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "gigante",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "gatito",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "arriba",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "abajo",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "izquierda",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "derecha",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "cualquiera",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "saltar",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "mover",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "agitar",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "cualquiera",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "atrás",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "delante",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "izquierda",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "derecha",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "a un lado",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "al otro lado",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "a la inversa",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "de cualquier color",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "negra",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "azul",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "verde",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "roja",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "blanca",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "amarilla",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "cualquiera",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "arriba",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "abajo",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "izquierda",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "derecha",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "todos los motores",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "otro lado",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "un lado",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "inversa",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "cualquier",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "arriba",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "abajo",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "izquierda",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "derecha",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "empuje",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "tire",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "agitar",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "comenzar a caer",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "girar hacia abajo",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "girar hacia arriba",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "adelante",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "atrás",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "a la izquierda",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "a la derecha",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "en cualquier dirección",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "izquierda arriba derecha",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "derecha arriba izquierda",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "izquierda derecha",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "derecha izquierda",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "arriba abajo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "abajo arriba",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "arriba derecha abajo izquierda",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "arriba izquierda abajo derecha",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "arriba arriba abajo abajo izquierda derecha izquierda derecha",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.de": {
		value: "Alemán",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "amhárico",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "árabe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azerí",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Búlgaro",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Catalán",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Checo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Chino (simplificado)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Chino (tradicional)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Coreano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Croata",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Danés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "eslovaco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Esloveno",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "español",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estonio",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "euskera",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "finlandés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "francés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Gaélico escocés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "galés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Gallego",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "griego",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "hebreo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Húngaro",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonesio",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "inglés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "irlandés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Islandés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "italiano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Japonés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Kurdo (sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "letón",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Lituano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maorí",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "neerlandés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Noruego",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "persa",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "polaco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portugués",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Rumano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "ruso",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Serbio",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Sueco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "tailandés",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "turco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ucraniano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamita",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zulú",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Árabe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Galés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Danés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Alemán",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Inglés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Español",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Español (Latinoamérica)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Francés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Coreano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italiano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Neerlandés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japonés",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Noruego",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polaco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugués",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugués (brasileño)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Rumano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Ruso",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Sueco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Chino (mandarín)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$f = [
];
var soundEffects$f = [
	"altura",
	"balance izquierda/derecha"
];
var microbitWhen$f = [
	"mover",
	"agitar",
	"saltar"
];
var osis$f = [
	"otros programas en el objeto"
];
var definePrefix$f = [
	"definir"
];
var defineSuffix$f = [
];
var palette$f = {
	Motion: "Movimiento",
	Looks: "Apariencia",
	Sound: "Sonido",
	Events: "Eventos",
	Control: "Control",
	Sensing: "Sensores",
	Operators: "Operadores",
	Variables: "Variables",
	"My Blocks": "Mis bloques"
};
var math$f = [
	"valor absoluto",
	"suelo",
	"techo",
	"raíz cuadrada",
	"sen",
	"cos",
	"tan",
	"arcsen",
	"arccos",
	"arctan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$f = {
	"girar a la izquierda %1 grados": "MOTION_TURNLEFT",
	"girar a la derecha %1 grados": "MOTION_TURNRIGHT",
	"al presionar bandera verde": "EVENT_WHENFLAGCLICKED",
	fin: "scratchblocks:end"
};
var name$f = "Español (España)";
var percentTranslated$f = 100;
var es = {
	commands: commands$f,
	dropdowns: dropdowns$f,
	ignorelt: ignorelt$f,
	soundEffects: soundEffects$f,
	microbitWhen: microbitWhen$f,
	osis: osis$f,
	definePrefix: definePrefix$f,
	defineSuffix: defineSuffix$f,
	palette: palette$f,
	math: math$f,
	aliases: aliases$f,
	name: name$f,
	percentTranslated: percentTranslated$f
};

var commands$e = {
	MOTION_MOVESTEPS: "avancer de %1 pas",
	MOTION_TURNRIGHT: "tourner @turnRight de %1 degrés",
	MOTION_TURNLEFT: "tourner @turnLeft de %1 degrés",
	MOTION_POINTINDIRECTION: "s'orienter à %1",
	MOTION_POINTTOWARDS: "s'orienter vers %1",
	MOTION_GOTOXY: "aller à x: %1 y: %2",
	MOTION_GOTO: "aller à %1",
	MOTION_GLIDESECSTOXY: "glisser en %1 secondes à x: %2 y: %3",
	MOTION_GLIDETO: "glisser en %1 secondes à %2",
	MOTION_CHANGEXBY: "ajouter %1 à x",
	MOTION_SETX: "mettre x à %1",
	MOTION_CHANGEYBY: "ajouter %1 à y",
	MOTION_SETY: "mettre y à %1",
	MOTION_SETROTATIONSTYLE: "fixer le sens de rotation %1",
	LOOKS_SAYFORSECS: "dire %1 pendant %2 secondes",
	LOOKS_SAY: "dire %1",
	LOOKS_THINKFORSECS: "penser à %1 pendant %2 secondes",
	LOOKS_THINK: "penser à %1",
	LOOKS_SHOW: "montrer",
	LOOKS_HIDE: "cacher",
	LOOKS_SWITCHCOSTUMETO: "basculer sur le costume %1",
	LOOKS_NEXTCOSTUME: "costume suivant",
	LOOKS_NEXTBACKDROP_BLOCK: "arrière-plan suivant",
	LOOKS_SWITCHBACKDROPTO: "basculer sur l'arrière-plan %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "basculer sur l'arrière-plan %1 et attendre",
	LOOKS_CHANGEEFFECTBY: "ajouter %2 à l'effet %1",
	LOOKS_SETEFFECTTO: "mettre l'effet %1 à %2",
	LOOKS_CLEARGRAPHICEFFECTS: "annuler les effets graphiques",
	LOOKS_CHANGESIZEBY: "ajouter %1 à la taille",
	LOOKS_SETSIZETO: "mettre la taille à %1 % de la taille initiale",
	LOOKS_GOTOFRONTBACK: "aller à l'%1 plan",
	LOOKS_GOFORWARDBACKWARDLAYERS: "déplacer de %2 plans vers l'%1",
	SOUND_PLAY: "jouer le son %1",
	SOUND_CHANGEEFFECTBY: "ajouter %2 à l'effet %1",
	SOUND_SETEFFECTO: "mettre l'effet %1 à %2",
	SOUND_CLEAREFFECTS: "annuler tous les effets sonores",
	SOUND_PLAYUNTILDONE: "jouer le son %1 jusqu'au bout",
	SOUND_STOPALLSOUNDS: "arrêter tous les sons",
	"music.playDrumForBeats": "jouer du tambour %1 pendant %2 temps",
	"music.restForBeats": "faire une pause pendant %1 temps",
	"music.playNoteForBeats": "jouer la note %1 pendant %2 temps",
	"music.setInstrument": "choisir l'instrument n° %1",
	SOUND_CHANGEVOLUMEBY: "ajouter %1 au volume",
	SOUND_SETVOLUMETO: "mettre le volume à %1%",
	"music.changeTempo": "ajouter %1 au tempo",
	"music.setTempo": "mettre le tempo à %1",
	"pen.clear": "effacer tout",
	"pen.stamp": "estampiller",
	"pen.penDown": "stylo en position d'écriture",
	"pen.penUp": "relever le stylo",
	"pen.setColor": "mettre la couleur du stylo à %1",
	"pen.changeHue": "ajouter %1 à la couleur du stylo",
	"pen.setColorParam": "mettre la %1 du stylo à %2",
	"pen.changeColorParam": "ajouter %2 à la %1 du stylo",
	"pen.setHue": "mettre la couleur du stylo à %1",
	"pen.changeShade": "ajouter %1 à l'intensité du stylo",
	"pen.setShade": "mettre l'intensité du stylo à %1",
	"pen.changeSize": "ajouter %1 à la taille du stylo",
	"pen.setSize": "mettre la taille du stylo à %1",
	EVENT_WHENFLAGCLICKED: "quand @greenFlag est cliqué",
	EVENT_WHENKEYPRESSED: "quand la touche %1 est pressée",
	EVENT_WHENTHISSPRITECLICKED: "quand ce sprite est cliqué",
	EVENT_WHENSTAGECLICKED: "quand la scène est cliquée",
	EVENT_WHENBACKDROPSWITCHESTO: "quand l'arrière-plan bascule sur %1",
	EVENT_WHENGREATERTHAN: "quand le %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "quand je reçois %1",
	EVENT_BROADCAST: "envoyer à tous %1",
	EVENT_BROADCASTANDWAIT: "envoyer à tous %1 et attendre",
	CONTROL_WAIT: "attendre %1 secondes",
	CONTROL_REPEAT: "répéter %1 fois",
	CONTROL_FOREVER: "répéter indéfiniment",
	CONTROL_IF: "si %1 alors",
	CONTROL_WAITUNTIL: "attendre jusqu'à ce que %1",
	CONTROL_REPEATUNTIL: "répéter jusqu'à ce que %1",
	CONTROL_STOP: "stop %1",
	CONTROL_STARTASCLONE: "quand je commence comme un clone",
	CONTROL_CREATECLONEOF: "créer un clone de %1",
	CONTROL_DELETETHISCLONE: "supprimer ce clone",
	SENSING_ASKANDWAIT: "demander %1 et attendre",
	"videoSensing.videoToggle": "%1 la vidéo",
	"videoSensing.setVideoTransparency": "mettre la transparence de la vidéo à %1",
	"videoSensing.whenMotionGreaterThan": "quand le mouvement de la vidéo > %1",
	SENSING_RESETTIMER: "réinitialiser le chronomètre",
	DATA_SETVARIABLETO: "mettre %1 à %2",
	DATA_CHANGEVARIABLEBY: "ajouter %2 à %1",
	DATA_SHOWVARIABLE: "montrer la variable %1",
	DATA_HIDEVARIABLE: "cacher la variable %1",
	DATA_ADDTOLIST: "ajouter %1 à %2",
	DATA_DELETEOFLIST: "supprimer l'élément %1 de %2",
	DATA_DELETEALLOFLIST: "supprimer tous les éléments de la liste %1",
	MOTION_IFONEDGEBOUNCE: "rebondir si le bord est atteint",
	DATA_INSERTATLIST: "insérer %1 en position %2 de %3",
	DATA_REPLACEITEMOFLIST: "remplacer l'élément %1 de la liste %2 par %3",
	DATA_SHOWLIST: "montrer la liste %1",
	DATA_HIDELIST: "cacher la liste %1",
	SENSING_OF_XPOSITION: "abscisse x",
	SENSING_OF_YPOSITION: "ordonnée y",
	SENSING_OF_DIRECTION: "direction",
	SENSING_OF_COSTUMENUMBER: "numéro de costume",
	LOOKS_COSTUMENUMBERNAME: "%1 du costume",
	SENSING_OF_SIZE: "taille",
	SENSING_OF_BACKDROPNAME: "nom de l'arrière-plan",
	LOOKS_BACKDROPNUMBERNAME: "%1 de l'arrière-plan",
	SENSING_OF_BACKDROPNUMBER: "numéro de l'arrière-plan",
	SOUND_VOLUME: "volume",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "touche le %1 ?",
	SENSING_TOUCHINGCOLOR: "couleur %1 touchée ?",
	SENSING_COLORISTOUCHINGCOLOR: "couleur %1 touche %2 ?",
	SENSING_DISTANCETO: "distance de %1",
	SENSING_ANSWER: "réponse",
	SENSING_KEYPRESSED: "touche %1 pressée ?",
	SENSING_MOUSEDOWN: "souris pressée ?",
	SENSING_MOUSEX: "souris x",
	SENSING_MOUSEY: "souris y",
	SENSING_SETDRAGMODE: "mettre mode de glissement à %1",
	SENSING_LOUDNESS: "volume sonore",
	"videoSensing.videoOn": "%1 de la vidéo de %2",
	SENSING_TIMER: "chronomètre",
	SENSING_OF: "%1 de %2",
	SENSING_CURRENT: "%1 actuelle",
	SENSING_DAYSSINCE2000: "jours depuis 2000",
	SENSING_USERNAME: "nom d'utilisateur",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "nombre aléatoire entre %1 et %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 et %2",
	OPERATORS_OR: "%1 ou %2",
	OPERATORS_NOT: "non %1",
	OPERATORS_JOIN: "regrouper %1 et %2",
	OPERATORS_LETTEROF: "lettre %1 de %2",
	OPERATORS_LENGTH: "longueur de %1",
	OPERATORS_MOD: "%1 modulo %2",
	OPERATORS_ROUND: "arrondi de %1",
	OPERATORS_MATHOP: "%1 de %2",
	OPERATORS_CONTAINS: "%1 contient %2 ?",
	DATA_ITEMOFLIST: "élément %1 de %2",
	DATA_ITEMNUMOFLIST: "position de %1 dans %2",
	DATA_LENGTHOFLIST: "longueur de %1",
	DATA_LISTCONTAINSITEM: "%1 contient %2 ?",
	CONTROL_ELSE: "sinon",
	SENSING_USERID: "id de l'utilisateur",
	SENSING_LOUD: "fort ?",
	"text2speech.speakAndWaitBlock": "prononcer %1",
	"text2speech.setVoiceBlock": "choisir la voix du %1",
	"text2speech.setLanguageBlock": "mettre la langue à %1",
	"translate.translateBlock": "traduire %1 en %2",
	"translate.viewerLanguage": "langue",
	"makeymakey.whenKeyPressed": "quand la touche %1 pressée",
	"makeymakey.whenKeysPressedInOrder": "quand %1 sont pressés dans l'ordre",
	"microbit.whenButtonPressed": "quand le bouton %1 est appuyé",
	"microbit.isButtonPressed": "bouton %1 appuyé ?",
	"microbit.whenGesture": "quand %1",
	"microbit.displaySymbol": "afficher %1",
	"microbit.displayText": "afficher le texte %1",
	"microbit.clearDisplay": "effacer l'écran",
	"microbit.whenTilted": "quand incliné %1",
	"microbit.isTilted": "incliné %1 ?",
	"microbit.tiltAngle": "angle d'inclinaison %1",
	"microbit.whenPinConnected": "quand la broche %1 est connectée",
	"ev3.motorTurnClockwise": "faire tourner le moteur %1 dans ce sens-ci pendant %2 secondes",
	"ev3.motorTurnCounterClockwise": "faire tourner le moteur %1 dans ce sens-là pendant %2 secondes",
	"ev3.motorSetPower": "mettre la puissance du moteur %1 à %2 %",
	"ev3.getMotorPosition": "position du moteur %1",
	"ev3.whenButtonPressed": "quand le bouton %1 est appuyé",
	"ev3.whenDistanceLessThan": "quand la distance < %1",
	"ev3.whenBrightnessLessThan": "quand la luminosité < %1",
	"ev3.buttonPressed": "bouton %1 appuyé ?",
	"ev3.getDistance": "distance",
	"ev3.getBrightness": "luminosité",
	"ev3.beepNote": "jouer la note %1 pendant %2 secondes",
	"wedo2.motorOn": "allumer %1",
	"wedo2.motorOff": "éteindre %1",
	"wedo2.startMotorPower": "mettre la puissance du %1 à %2",
	"wedo2.setMotorDirection": "mettre la direction de %1 à %2",
	"wedo2.whenDistance": "quand la distance %1 %2",
	"wedo2.getDistance": "distance",
	"wedo2.motorOnFor": "allumer %1 pendant %2 secondes",
	"wedo2.setLightHue": "mettre la couleur de la lampe à %1",
	"wedo2.playNoteFor": "jouer la note %1 pendant %2 secondes",
	"wedo2.whenTilted": "quand incliné %1",
	"wedo2.isTilted": "incliné %1 ?",
	"wedo2.getTiltAngle": "angle d'inclinaison %1",
	"gdxfor.whenGesture": "quand %1",
	"gdxfor.whenForcePushedOrPulled": "quand le capteur de force est %1",
	"gdxfor.getForce": "force",
	"gdxfor.whenTilted": "quand incliné %1",
	"gdxfor.isTilted": "incliné %1 ?",
	"gdxfor.getTilt": "angle d'inclinaison %1",
	"gdxfor.isFreeFalling": "tombe ?",
	"gdxfor.getSpin": "vitesse de rotation %1",
	"gdxfor.getAcceleration": "accélération %1",
	"boost.motorOnFor": "faire tourner le moteur %1 pendant %2 secondes",
	"boost.motorOnForRotation": "faire tourner le moteur %1 de %2 rotations",
	"boost.motorOn": "allumer le moteur %1",
	"boost.motorOff": "éteindre le moteur %1",
	"boost.setMotorPower": "mettre la vitesse du moteur %1 à %2 %",
	"boost.setMotorDirection": "mettre la direction du moteur %1 à %2",
	"boost.getMotorPosition": "position du moteur %1",
	"boost.whenColor": "quand une brique %1 est vue",
	"boost.seeingColor": "brique %1 vue ?",
	"boost.whenTilted": "quand incliné %1",
	"boost.getTiltAngle": "angle d'inclinaison %1",
	"boost.setLightHue": "mettre la couleur de la lampe à %1"
};
var dropdowns$e = {
	MOTION_GOTO_POINTER: {
		value: "pointeur de souris",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "position aléatoire",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "pointeur de souris",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "position aléatoire",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "pointeur de souris",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "direction aléatoire",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "gauche-droite",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "ne tourne pas",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "à 360°",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "arrière-plan suivant",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "arrière-plan précédent",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "arrière-plan aléatoire",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "couleur",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "fisheye",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "tourbillon",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pixeliser",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaïque",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "luminosité",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "fantôme",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "avant",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "arrière",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "avant",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "arrière",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "numéro",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "nom",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "hauteur",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "stéréo gauche/droite",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "espace",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "flèche gauche",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "flèche droite",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "flèche bas",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "flèche haut",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "n'importe laquelle",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "chronomètre",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "volume sonore",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "tout",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "ce script",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "autres scripts dans sprite",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "moi-même",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "pointeur de souris",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "bord",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "pointeur de souris",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "glissable",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "non glissable",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "abscisse x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "ordonnée y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "direction",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "numéro de costume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "nom du costume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "taille",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "numéro de l'arrière-plan",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "nom de l'arrière-plan",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "la scène",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "année",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "mois",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "date",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "jour de la semaine",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "heure",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minute",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "seconde",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "abs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "plancher",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "plafond",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "racine",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Caisse claire",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Grosse caisse",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Side Stick",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Cymbale crash",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Charleston ouvert",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Charleston fermé",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tambourin",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Claquement de main",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Claves",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Wood-block",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Sonnaille",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangle",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Guiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuíca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Piano électrique",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Orgue",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Guitare",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Guitare électrique",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Basse",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Violoncelle",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Clarinette",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saxophone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flûte",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Flûte en bois",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Basson",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Chorale",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibraphone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Boîte à musique",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Steel Drum",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Lead synthétisé",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Pad synthétisé",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "couleur",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "saturation",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "luminosité",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "transparence",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "direction",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "mouvement",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "sprite",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "scène",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "désactiver",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "activer",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "inverser",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "alto",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "ténor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "piailler",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "géant",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "chaton",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "haut",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "bas",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "gauche",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "droite",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "n'importe lequel",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "sauté",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "bougé",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "secoué",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "dans n'importe quelle direction",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "en arrière",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "en avant",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "à gauche",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "à droite",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "par là",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "par ici",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "inversée",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "de n'importe quelle couleur",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "noire",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "bleue",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "verte",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "rouge",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "blanche",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "jaune",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "n'importe laquelle",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "vers le haut",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "vers le bas",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "à gauche",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "à droite",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "moteur A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "moteur B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "tous les moteurs",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "moteur",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "par ici",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "par là",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "inversé",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "dans n'importe quelle direction",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "vers le haut",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "vers le bas",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "à gauche",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "à droite",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "tiré",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "poussé",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "secoué",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "commençant à tomber",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "tourné vers le bas",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "tourné vers le haut",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "en avant",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "en arrière",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "à gauche",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "à droite",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "n'importe laquelle",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "gauche haut droite",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "droite haut gauche",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "gauche droite",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "droite gauche",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "haut bas",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "bas haut",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "haut droite bas gauche",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "haut gauche bas droite",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "haut haut bas bas gauche droite gauche droite",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.de": {
		value: "Allemand",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "Amharique",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "Anglais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Arabe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azéri",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Basque",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Bulgare",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Catalan",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Chinois (simplifié)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Chinois (traditionnel)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Coréen",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Croate",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Danois",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Espagnol",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estonien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Finnois",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Français",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Gaélique (Écosse)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galicien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Gallois",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Grec",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Hébreu",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Hongrois",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonésien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Irlandais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Islandais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Italien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Japonais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Kurde (Sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Letton",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Lituanien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Néerlandais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Norvégien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Persan",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Polonais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portugais",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Roumain",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Russe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Serbe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Slovaque",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Slovène",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Suédois",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Tchèque",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Thaï",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Turc",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ukrainien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamien",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zoulou",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arabe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Gallois",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Danois",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Allemand",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Anglais",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Espagnol",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Espagnol (Amérique latine)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Français",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Coréen",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandais",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italien",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Néerlandais",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japonais",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norvégien",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polonais",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugais",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugais (brésilien)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Roumain",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Russe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Suédois",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turc",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Chinois (mandarin)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$e = [
];
var soundEffects$e = [
	"hauteur",
	"stéréo gauche/droite"
];
var microbitWhen$e = [
	"bougé",
	"secoué",
	"sauté"
];
var osis$e = [
	"autres scripts dans sprite"
];
var definePrefix$e = [
	"définir"
];
var defineSuffix$e = [
];
var palette$e = {
	Motion: "Mouvement",
	Looks: "Apparence",
	Sound: "Son",
	Events: "Événements",
	Control: "Contrôle",
	Sensing: "Capteurs",
	Operators: "Opérateurs",
	Variables: "Variables",
	"My Blocks": "Mes Blocs"
};
var math$e = [
	"abs",
	"plancher",
	"plafond",
	"racine",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e^",
	"10^"
];
var aliases$e = {
	"tourner gauche de %1 degrés": "MOTION_TURNLEFT",
	"tourner droite de %1 degrés": "MOTION_TURNRIGHT",
	"quand le drapeau vert pressé": "EVENT_WHENFLAGCLICKED",
	fin: "scratchblocks:end"
};
var name$e = "Français";
var percentTranslated$e = 100;
var fr = {
	commands: commands$e,
	dropdowns: dropdowns$e,
	ignorelt: ignorelt$e,
	soundEffects: soundEffects$e,
	microbitWhen: microbitWhen$e,
	osis: osis$e,
	definePrefix: definePrefix$e,
	defineSuffix: defineSuffix$e,
	palette: palette$e,
	math: math$e,
	aliases: aliases$e,
	name: name$e,
	percentTranslated: percentTranslated$e
};

var commands$d = {
	MOTION_MOVESTEPS: "移动 %1 步",
	MOTION_TURNRIGHT: "右转 @turnRight %1 度",
	MOTION_TURNLEFT: "左转 @turnLeft %1 度",
	MOTION_POINTINDIRECTION: "面向 %1 方向",
	MOTION_POINTTOWARDS: "面向 %1",
	MOTION_GOTOXY: "移到 x: %1 y: %2",
	MOTION_GOTO: "移到 %1",
	MOTION_GLIDESECSTOXY: "在 %1 秒内滑行到 x: %2 y: %3",
	MOTION_GLIDETO: "在 %1 秒内滑行到 %2",
	MOTION_CHANGEXBY: "将x坐标增加 %1",
	MOTION_SETX: "将x坐标设为 %1",
	MOTION_CHANGEYBY: "将y坐标增加 %1",
	MOTION_SETY: "将y坐标设为 %1",
	MOTION_SETROTATIONSTYLE: "将旋转方式设为 %1",
	LOOKS_SAYFORSECS: "说 %1 %2 秒",
	LOOKS_SAY: "说 %1",
	LOOKS_THINKFORSECS: "思考 %1 %2 秒",
	LOOKS_THINK: "思考 %1",
	LOOKS_SHOW: "显示",
	LOOKS_HIDE: "隐藏",
	LOOKS_SWITCHCOSTUMETO: "换成 %1 造型",
	LOOKS_NEXTCOSTUME: "下一个造型",
	LOOKS_NEXTBACKDROP_BLOCK: "下一个背景",
	LOOKS_SWITCHBACKDROPTO: "换成 %1 背景",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "换成 %1 背景并等待",
	LOOKS_CHANGEEFFECTBY: "将 %1 特效增加 %2",
	LOOKS_SETEFFECTTO: "将 %1 特效设定为 %2",
	LOOKS_CLEARGRAPHICEFFECTS: "清除图形特效",
	LOOKS_CHANGESIZEBY: "将大小增加 %1",
	LOOKS_SETSIZETO: "将大小设为 %1",
	LOOKS_GOTOFRONTBACK: "移到最 %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "%1 %2 层",
	SOUND_PLAY: "播放声音 %1",
	SOUND_CHANGEEFFECTBY: "将 %1 音效增加 %2",
	SOUND_SETEFFECTO: "将 %1 音效设为 %2",
	SOUND_CLEAREFFECTS: "清除音效",
	SOUND_PLAYUNTILDONE: "播放声音 %1 等待播完",
	SOUND_STOPALLSOUNDS: "停止所有声音",
	"music.playDrumForBeats": "击打 %1 %2 拍",
	"music.restForBeats": "休止%1拍",
	"music.playNoteForBeats": "演奏音符%1%2拍",
	"music.setInstrument": "将乐器设为 %1",
	SOUND_CHANGEVOLUMEBY: "将音量增加 %1",
	SOUND_SETVOLUMETO: "将音量设为 %1%",
	"music.changeTempo": "将演奏速度增加%1",
	"music.setTempo": "将演奏速度设定为%1",
	"pen.clear": "全部擦除",
	"pen.stamp": "图章",
	"pen.penDown": "落笔",
	"pen.penUp": "抬笔",
	"pen.setColor": "将笔的颜色设为%1",
	"pen.changeHue": "将笔的颜色增加%1",
	"pen.setColorParam": "将笔的 %1 设为%2",
	"pen.changeColorParam": "将笔的 %1 增加%2",
	"pen.setHue": "将笔的颜色设为%1",
	"pen.changeShade": "将笔的亮度增加%1",
	"pen.setShade": "将笔的亮度设为%1",
	"pen.changeSize": "将笔的粗细增加%1",
	"pen.setSize": "将笔的粗细设为%1",
	EVENT_WHENFLAGCLICKED: "当 @greenFlag 被点击",
	EVENT_WHENKEYPRESSED: "当按下 %1 键",
	EVENT_WHENTHISSPRITECLICKED: "当角色被点击",
	EVENT_WHENSTAGECLICKED: "当舞台被点击",
	EVENT_WHENBACKDROPSWITCHESTO: "当背景换成 %1",
	EVENT_WHENGREATERTHAN: "当 %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "当接收到 %1",
	EVENT_BROADCAST: "广播 %1",
	EVENT_BROADCASTANDWAIT: "广播 %1 并等待",
	CONTROL_WAIT: "等待 %1 秒",
	CONTROL_REPEAT: "重复执行 %1 次",
	CONTROL_FOREVER: "重复执行",
	CONTROL_IF: "如果 %1 那么",
	CONTROL_WAITUNTIL: "等待 %1",
	CONTROL_REPEATUNTIL: "重复执行直到 %1",
	CONTROL_STOP: "停止 %1",
	CONTROL_STARTASCLONE: "当作为克隆体启动时",
	CONTROL_CREATECLONEOF: "克隆 %1",
	CONTROL_DELETETHISCLONE: "删除此克隆体",
	SENSING_ASKANDWAIT: "询问 %1 并等待",
	"videoSensing.videoToggle": "%1摄像头",
	"videoSensing.setVideoTransparency": "将视频透明度设为%1",
	"videoSensing.whenMotionGreaterThan": "当视频运动 > %1",
	SENSING_RESETTIMER: "计时器归零",
	DATA_SETVARIABLETO: "将 %1 设为 %2",
	DATA_CHANGEVARIABLEBY: "将 %1 增加 %2",
	DATA_SHOWVARIABLE: "显示变量 %1",
	DATA_HIDEVARIABLE: "隐藏变量 %1",
	DATA_ADDTOLIST: "将 %1 加入 %2",
	DATA_DELETEOFLIST: "删除 %2 的第 %1 项",
	DATA_DELETEALLOFLIST: "删除 %1 的全部项目",
	MOTION_IFONEDGEBOUNCE: "碰到边缘就反弹",
	DATA_INSERTATLIST: "在 %3 的第 %2 项前插入 %1",
	DATA_REPLACEITEMOFLIST: "将 %2 的第 %1 项替换为 %3",
	DATA_SHOWLIST: "显示列表 %1",
	DATA_HIDELIST: "隐藏列表 %1",
	SENSING_OF_XPOSITION: "x 坐标",
	SENSING_OF_YPOSITION: "y 坐标",
	SENSING_OF_DIRECTION: "方向",
	SENSING_OF_COSTUMENUMBER: "造型编号",
	LOOKS_COSTUMENUMBERNAME: "造型 %1",
	SENSING_OF_SIZE: "大小",
	SENSING_OF_BACKDROPNAME: "背景名称",
	LOOKS_BACKDROPNUMBERNAME: "背景 %1",
	SENSING_OF_BACKDROPNUMBER: "背景编号",
	SOUND_VOLUME: "音量",
	"music.getTempo": "演奏速度",
	SENSING_TOUCHINGOBJECT: "碰到 %1 ?",
	SENSING_TOUCHINGCOLOR: "碰到颜色 %1 ?",
	SENSING_COLORISTOUCHINGCOLOR: "颜色 %1 碰到 %2 ?",
	SENSING_DISTANCETO: "到 %1 的距离",
	SENSING_ANSWER: "回答",
	SENSING_KEYPRESSED: "按下 %1 键?",
	SENSING_MOUSEDOWN: "按下鼠标?",
	SENSING_MOUSEX: "鼠标的x坐标",
	SENSING_MOUSEY: "鼠标的y坐标",
	SENSING_SETDRAGMODE: "将拖动模式设为 %1",
	SENSING_LOUDNESS: "响度",
	"videoSensing.videoOn": "相对于%2的视频%1",
	SENSING_TIMER: "计时器",
	SENSING_OF: "%2 的 %1",
	SENSING_CURRENT: "当前时间的 %1",
	SENSING_DAYSSINCE2000: "2000年至今的天数",
	SENSING_USERNAME: "用户名",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "在 %1 和 %2 之间取随机数",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 与 %2",
	OPERATORS_OR: "%1 或 %2",
	OPERATORS_NOT: "%1 不成立",
	OPERATORS_JOIN: "连接 %1 和 %2",
	OPERATORS_LETTEROF: "%2 的第 %1 个字符",
	OPERATORS_LENGTH: "%1 的字符数",
	OPERATORS_MOD: "%1 除以 %2 的余数",
	OPERATORS_ROUND: "四舍五入 %1",
	OPERATORS_MATHOP: "%1 %2",
	OPERATORS_CONTAINS: "%1 包含 %2 ?",
	DATA_ITEMOFLIST: "%2 的第 %1 项",
	DATA_ITEMNUMOFLIST: "%2 中第一个 %1 的编号",
	DATA_LENGTHOFLIST: "%1 的项目数",
	DATA_LISTCONTAINSITEM: "%1 包含 %2 ?",
	CONTROL_ELSE: "否则",
	SENSING_USERID: "用户id",
	SENSING_LOUD: "响声？",
	"text2speech.speakAndWaitBlock": "朗读 %1",
	"text2speech.setVoiceBlock": "使用 %1 嗓音",
	"text2speech.setLanguageBlock": "将朗读语言设置为%1",
	"translate.translateBlock": "将 %1 译为 %2",
	"translate.viewerLanguage": "访客语言",
	"makeymakey.whenKeyPressed": "当按下 %1 键",
	"makeymakey.whenKeysPressedInOrder": "当依次按下%1键时",
	"microbit.whenButtonPressed": "当按下%1按钮",
	"microbit.isButtonPressed": "按下%1按钮？",
	"microbit.whenGesture": "当被%1",
	"microbit.displaySymbol": "显示%1",
	"microbit.displayText": "显示文本%1",
	"microbit.clearDisplay": "清空屏幕",
	"microbit.whenTilted": "当向%1倾斜",
	"microbit.isTilted": "向%1倾斜？",
	"microbit.tiltAngle": "向%1倾角",
	"microbit.whenPinConnected": "当引脚%1接地",
	"ev3.motorTurnClockwise": "马达%1正转%2秒",
	"ev3.motorTurnCounterClockwise": "马达%1反转%2秒",
	"ev3.motorSetPower": "马达%1功率设为%2%",
	"ev3.getMotorPosition": "马达%1的位置",
	"ev3.whenButtonPressed": "当按下按钮%1",
	"ev3.whenDistanceLessThan": "当距离 < %1",
	"ev3.whenBrightnessLessThan": "当亮度 < %1",
	"ev3.buttonPressed": "按下按钮%1？",
	"ev3.getDistance": "距离",
	"ev3.getBrightness": "亮度",
	"ev3.beepNote": "鸣笛%1%2秒",
	"wedo2.motorOn": "开启%1",
	"wedo2.motorOff": "关闭%1",
	"wedo2.startMotorPower": "将%1功率设为%2",
	"wedo2.setMotorDirection": "将%1转向设为%2",
	"wedo2.whenDistance": "当距离%1%2",
	"wedo2.getDistance": "距离",
	"wedo2.motorOnFor": "开启%1%2秒",
	"wedo2.setLightHue": "将灯光颜色设为%1",
	"wedo2.playNoteFor": "演奏音符%1%2秒",
	"wedo2.whenTilted": "当向%1倾斜",
	"wedo2.isTilted": "向%1倾斜？",
	"wedo2.getTiltAngle": "向%1倾角",
	"gdxfor.whenGesture": "当传感器%1",
	"gdxfor.whenForcePushedOrPulled": "当力传感器被%1",
	"gdxfor.getForce": "受力",
	"gdxfor.whenTilted": "当向%1倾斜",
	"gdxfor.isTilted": "向%1倾斜？",
	"gdxfor.getTilt": "向%1倾角",
	"gdxfor.isFreeFalling": "自由落体？",
	"gdxfor.getSpin": "向%1的旋转速度",
	"gdxfor.getAcceleration": "向%1的加速度",
	"boost.motorOnFor": "使马达 %1转动 %2 秒",
	"boost.motorOnForRotation": "使马达 %1转动 %2 圈",
	"boost.motorOn": "开启马达 %1",
	"boost.motorOff": "关闭马达 %1",
	"boost.setMotorPower": "将马达 %1 速度设为 %2%",
	"boost.setMotorDirection": "将马达%1 方向设为 %2",
	"boost.getMotorPosition": "马达 %1 位置",
	"boost.whenColor": "当看到%1积木",
	"boost.seeingColor": "看到 %1积木 ?",
	"boost.whenTilted": "当向%1倾斜",
	"boost.getTiltAngle": "向%1倾角",
	"boost.setLightHue": "将灯光颜色设为%1"
};
var dropdowns$d = {
	MOTION_GOTO_POINTER: {
		value: "鼠标指针",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "随机位置",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "鼠标指针",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "随机位置",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "鼠标指针",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "随机方向",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "左右翻转",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "不可旋转",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "任意旋转",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "下一个背景",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "上一个背景",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "随机背景",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "颜色",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "鱼眼",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "漩涡",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "像素化",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "马赛克",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "亮度",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "虚像",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "前面",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "后面",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "前移",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "后移",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "编号",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "名称",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "音调",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "左右平衡",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "空格",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "←",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "→",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "↓",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "↑",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "任意",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "计时器",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "响度",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "全部脚本",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "这个脚本",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "该角色的其他脚本",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "自己",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "鼠标指针",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "舞台边缘",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "鼠标指针",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "可拖动",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "不可拖动",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x 坐标",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y 坐标",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "方向",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "造型编号",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "造型名称",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "大小",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "音量",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "背景编号",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "背景名称",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "舞台",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "年",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "月",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "日",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "星期",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "时",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "分",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "秒",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "绝对值",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "向下取整",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "向上取整",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "平方根",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) 小军鼓",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) 低音鼓",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) 敲鼓边",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) 碎音钹",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) 开击踩镲",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) 闭击踩镲",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) 铃鼓",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) 手掌",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) 音棒",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) 木鱼",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) 牛铃",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) 三角铁",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) 邦戈鼓",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) 康加鼓",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) 卡巴萨",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) 刮瓜",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) 颤音器",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) 锯加鼓",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) 钢琴",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) 电钢琴",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) 风琴",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) 吉他",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) 电吉他",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) 贝斯",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) 拨弦",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) 大提琴",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) 长号",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) 单簧管",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) 萨克斯管",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) 长笛",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) 木长笛",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) 巴松管",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) 唱诗班",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) 颤音琴",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) 八音盒",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) 钢鼓",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) 马林巴琴",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) 合成主音",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) 合成柔音",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "颜色",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "饱和度",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "亮度",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "透明度",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "方向",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "运动",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "角色",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "舞台",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "关闭",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "开启",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "镜像开启",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "中音",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "男高音",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "尖细",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "巨人",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "小猫",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "上",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "下",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "左",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "右",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "任意",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "抛起",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "移动",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "晃动",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "任意",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "后",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "前",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "左",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "右",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "逆时针",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "顺时针",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "反转",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "任何颜色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "黑色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "蓝色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "绿色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "黄色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "白色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "黄色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "任意方向",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "上",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "下",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "左",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "右",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "马达A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "马达B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "所有马达",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "马达",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "顺时针",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "逆时针",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "反转",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "任意方向",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "上",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "下",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "左",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "右",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "拉扯",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "挤压",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "被晃动",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "开始自由落体",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "正面向下",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "正面向上",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "前",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "后",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "左",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "右",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "任意方向",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "左 上 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "右 上 左",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "左 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "右 左",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "上 下",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "下 上",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "上 右 下 左",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "上 左 下 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "上 上 下 下 左 右 左 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.ar": {
		value: "阿拉伯语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "阿姆哈拉语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "阿塞拜疆语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "爱尔兰语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "爱沙尼亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "巴斯克语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "保加利亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "冰岛语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "波兰语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "波斯语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "丹麦语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "德语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "俄语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "法语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "芬兰语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "韩语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "荷兰语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "加利西亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "加泰罗尼亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "捷克语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "克罗地亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "库尔德语（索拉尼）",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "拉脱维亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "立陶宛语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "罗马尼亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "毛利语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "挪威语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "葡萄牙语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "日语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "瑞典语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "塞尔维亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "斯洛伐克语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "斯洛文尼亚语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "苏格兰盖尔语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "泰语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "土耳其语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "威尔士语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "乌克兰语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "西班牙语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "希伯来语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "希腊语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "匈牙利语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "意大利语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "印尼语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "英语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "越南语",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "中文（繁体）",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "中文（简体）",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "祖鲁语",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "阿拉伯语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "威尔士语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "丹麦语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "德语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "英语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "西班牙语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "西班牙语（拉丁美洲）",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "法语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "韩语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "印地语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "冰岛语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "意大利语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "荷兰语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "日语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "挪威语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "波兰语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "葡萄牙语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "葡萄牙语（巴西）",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "罗马尼亚语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "俄语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "瑞典语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "土耳其语",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "中文",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$d = [
];
var soundEffects$d = [
	"音调",
	"左右平衡"
];
var microbitWhen$d = [
	"移动",
	"晃动",
	"抛起"
];
var osis$d = [
	"该角色的其他脚本"
];
var definePrefix$d = [
	"定义"
];
var defineSuffix$d = [
];
var palette$d = {
	Motion: "运动",
	Looks: "外观",
	Sound: "声音",
	Events: "事件",
	Control: "控制",
	Sensing: "侦测",
	Operators: "运算",
	Variables: "变量",
	"My Blocks": "自制积木"
};
var math$d = [
	"绝对值",
	"向下取整",
	"向上取整",
	"平方根",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$d = {
	"左转 %1 度": "MOTION_TURNLEFT",
	"右转 %1 度": "MOTION_TURNRIGHT",
	"当绿旗被点击": "EVENT_WHENFLAGCLICKED",
	"点击绿旗时": "EVENT_WHENFLAGCLICKED",
	"结束": "scratchblocks:end"
};
var name$d = "简体中文";
var percentTranslated$d = 100;
var zh_cn = {
	commands: commands$d,
	dropdowns: dropdowns$d,
	ignorelt: ignorelt$d,
	soundEffects: soundEffects$d,
	microbitWhen: microbitWhen$d,
	osis: osis$d,
	definePrefix: definePrefix$d,
	defineSuffix: defineSuffix$d,
	palette: palette$d,
	math: math$d,
	aliases: aliases$d,
	name: name$d,
	percentTranslated: percentTranslated$d
};

var commands$c = {
	MOTION_MOVESTEPS: "przesuń o %1 kroków",
	MOTION_TURNRIGHT: "obróć @turnRight o %1 stopni",
	MOTION_TURNLEFT: "obróć @turnLeft o %1 stopni",
	MOTION_POINTINDIRECTION: "ustaw kierunek na %1",
	MOTION_POINTTOWARDS: "ustaw w kierunku duszka %1",
	MOTION_GOTOXY: "Idź do x: %1 y: %2",
	MOTION_GOTO: "idź do %1",
	MOTION_GLIDESECSTOXY: "leć przez %1 sekund do x: %2 y: %3",
	MOTION_GLIDETO: "leć przez %1 sekund do %2",
	MOTION_CHANGEXBY: "zmień x o %1",
	MOTION_SETX: "ustaw x na %1",
	MOTION_CHANGEYBY: "zmień y o %1",
	MOTION_SETY: "ustaw y na %1",
	MOTION_SETROTATIONSTYLE: "ustaw styl obrotu na %1",
	LOOKS_SAYFORSECS: "powiedz %1 przez %2 sekund",
	LOOKS_SAY: "powiedz %1",
	LOOKS_THINKFORSECS: "pomyśl %1 przez %2 sekund",
	LOOKS_THINK: "pomyśl %1",
	LOOKS_SHOW: "pokaż",
	LOOKS_HIDE: "ukryj",
	LOOKS_SWITCHCOSTUMETO: "zmień kostium na %1",
	LOOKS_NEXTCOSTUME: "następny kostium",
	LOOKS_NEXTBACKDROP_BLOCK: "następne tło",
	LOOKS_SWITCHBACKDROPTO: "zmień tło na %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "zmień tło na %1 i czekaj",
	LOOKS_CHANGEEFFECTBY: "zmień efekt %1 o %2",
	LOOKS_SETEFFECTTO: "ustaw efekt %1 na %2",
	LOOKS_CLEARGRAPHICEFFECTS: "wyczyść efekty graficzne",
	LOOKS_CHANGESIZEBY: "zmień rozmiar o %1",
	LOOKS_SETSIZETO: "ustaw rozmiar na %1 %",
	LOOKS_GOTOFRONTBACK: "przesuń na %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "przesuń %1 o %2 warstw",
	SOUND_PLAY: "zagraj dźwięk %1",
	SOUND_CHANGEEFFECTBY: "zmień efekt %1 o %2",
	SOUND_SETEFFECTO: "ustaw efekt %1 na %2",
	SOUND_CLEAREFFECTS: "usuń efekty dźwiękowe",
	SOUND_PLAYUNTILDONE: "graj dźwięk %1 aż się skończy",
	SOUND_STOPALLSOUNDS: "zakończ wszystkie dźwięki",
	"music.playDrumForBeats": "graj na %1 przez %2 taktów",
	"music.restForBeats": "pauzuj przez %1 taktów",
	"music.playNoteForBeats": "zagraj nutę %1 przez %2 taktów",
	"music.setInstrument": "ustaw instrument na %1",
	SOUND_CHANGEVOLUMEBY: "zmień głośność o %1",
	SOUND_SETVOLUMETO: "ustaw głośność na %1%",
	"music.changeTempo": "zmień tempo na %1",
	"music.setTempo": "ustaw tempo na %1",
	"pen.clear": "wyczyść wszystko",
	"pen.stamp": "Stempluj",
	"pen.penDown": "Przyłóż pisak",
	"pen.penUp": "Podnieś pisak",
	"pen.setColor": "Ustaw kolor pisaka na %1",
	"pen.changeHue": "Zmień kolor pisaka o %1",
	"pen.setColorParam": "Ustaw %1pisaka na %2",
	"pen.changeColorParam": "Zmień %1pisaka o%2",
	"pen.setHue": "Ustaw kolor pisaka na %1",
	"pen.changeShade": "Zmień odcień pisaka o %1",
	"pen.setShade": "Ustaw odcień pisaka na %1",
	"pen.changeSize": "Zmień rozmiar pisaka o %1",
	"pen.setSize": "Ustaw rozmiar pisaka na %1",
	EVENT_WHENFLAGCLICKED: "kiedy kliknięto @greenFlag",
	EVENT_WHENKEYPRESSED: "kiedy klawisz %1 naciśnięty",
	EVENT_WHENTHISSPRITECLICKED: "kiedy ten duszek kliknięty",
	EVENT_WHENSTAGECLICKED: "kiedy scena kliknięta",
	EVENT_WHENBACKDROPSWITCHESTO: "kiedy tło zmieni się na %1",
	EVENT_WHENGREATERTHAN: "kiedy %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "kiedy otrzymam %1",
	EVENT_BROADCAST: "nadaj komunikat %1",
	EVENT_BROADCASTANDWAIT: "nadaj komunikat %1 i czekaj",
	CONTROL_WAIT: "czekaj %1 sekund",
	CONTROL_REPEAT: "powtórz %1 razy",
	CONTROL_FOREVER: "zawsze",
	CONTROL_IF: "jeżeli %1 to",
	CONTROL_WAITUNTIL: "czekaj aż %1",
	CONTROL_REPEATUNTIL: "powtarzaj aż %1",
	CONTROL_STOP: "zatrzymaj %1",
	CONTROL_STARTASCLONE: "gdy zaczynam jako klon",
	CONTROL_CREATECLONEOF: "utwórz klona z %1",
	CONTROL_DELETETHISCLONE: "usuń tego klona",
	SENSING_ASKANDWAIT: "zapytaj %1 i czekaj",
	"videoSensing.videoToggle": "%1 nagranie wideo",
	"videoSensing.setVideoTransparency": "ustaw transparentność wideo na %1",
	"videoSensing.whenMotionGreaterThan": "kiedy ruch wideo > %1",
	SENSING_RESETTIMER: "resetuj stoper",
	DATA_SETVARIABLETO: "ustaw %1 na %2",
	DATA_CHANGEVARIABLEBY: "zmień %1 o %2",
	DATA_SHOWVARIABLE: "pokaż zmienną %1",
	DATA_HIDEVARIABLE: "ukryj zmienną %1",
	DATA_ADDTOLIST: "dodaj %1 do %2",
	DATA_DELETEOFLIST: "usuń %1 z %2",
	DATA_DELETEALLOFLIST: "usuń wszystko z %1",
	MOTION_IFONEDGEBOUNCE: "jeżeli na brzegu, odbij się",
	DATA_INSERTATLIST: "wstaw %1 na %2 pozycji z %3",
	DATA_REPLACEITEMOFLIST: "zamień %1 z %2 na %3",
	DATA_SHOWLIST: "pokaż listę %1",
	DATA_HIDELIST: "ukryj listę %1",
	SENSING_OF_XPOSITION: "pozycja x",
	SENSING_OF_YPOSITION: "pozycja y",
	SENSING_OF_DIRECTION: "kierunek",
	SENSING_OF_COSTUMENUMBER: "indeks kostiumu",
	LOOKS_COSTUMENUMBERNAME: "kostium %1",
	SENSING_OF_SIZE: "rozmiar",
	SENSING_OF_BACKDROPNAME: "nazwa tła",
	LOOKS_BACKDROPNUMBERNAME: "tło %1",
	SENSING_OF_BACKDROPNUMBER: "indeks tła",
	SOUND_VOLUME: "głośność",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "dotyka %1 ?",
	SENSING_TOUCHINGCOLOR: "dotyka koloru %1 ?",
	SENSING_COLORISTOUCHINGCOLOR: "kolor %1 dotyka %2 ?",
	SENSING_DISTANCETO: "odległość od %1",
	SENSING_ANSWER: "odpowiedź",
	SENSING_KEYPRESSED: "klawisz %1 naciśnięty ?",
	SENSING_MOUSEDOWN: "kliknięto myszką?",
	SENSING_MOUSEX: "x myszy",
	SENSING_MOUSEY: "y myszy",
	SENSING_SETDRAGMODE: "ustaw tryb przeciągania na %1",
	SENSING_LOUDNESS: "głośność",
	"videoSensing.videoOn": "nagranie wideo %1 na %2",
	SENSING_TIMER: "stoper",
	SENSING_OF: "%1 z %2",
	SENSING_CURRENT: "obecny %1",
	SENSING_DAYSSINCE2000: "dni od 2000",
	SENSING_USERNAME: "nazwa użytkownika",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "losuj liczbę od %1 do %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 i %2",
	OPERATORS_OR: "%1 lub %2",
	OPERATORS_NOT: "nie %1",
	OPERATORS_JOIN: "połącz %1 i %2",
	OPERATORS_LETTEROF: "litera %1 z %2",
	OPERATORS_LENGTH: "długość %1",
	OPERATORS_MOD: "reszta z dzielenia %1 przez %2",
	OPERATORS_ROUND: "zaokrąglij %1",
	OPERATORS_MATHOP: "%1 z %2",
	OPERATORS_CONTAINS: "Czy %1 zawiera %2 ?",
	DATA_ITEMOFLIST: "element %1 z %2",
	DATA_ITEMNUMOFLIST: "pozycja %1 na liście %2",
	DATA_LENGTHOFLIST: "długość %1",
	DATA_LISTCONTAINSITEM: "%1 zawiera %2?",
	CONTROL_ELSE: "w przeciwnym razie",
	SENSING_USERID: "ID użytkownika",
	SENSING_LOUD: "głośno?",
	"text2speech.speakAndWaitBlock": "Powiedz %1",
	"text2speech.setVoiceBlock": "Ustaw głos na %1",
	"text2speech.setLanguageBlock": "ustaw język na %1",
	"translate.translateBlock": "tłumacz %1 na %2",
	"translate.viewerLanguage": "język",
	"makeymakey.whenKeyPressed": "kiedy naciśnięto klawisz %1",
	"makeymakey.whenKeysPressedInOrder": "kiedy naciśnięto kolejno %1",
	"microbit.whenButtonPressed": "Gdy %1naciśnięty",
	"microbit.isButtonPressed": "%1 przycisk naciśnięty?",
	"microbit.whenGesture": "kiedy %1",
	"microbit.displaySymbol": "wyświetl %1",
	"microbit.displayText": "wyświetl tekst %1",
	"microbit.clearDisplay": "wyczyść wyświetlacz",
	"microbit.whenTilted": "gdy nachylony%1",
	"microbit.isTilted": "nachylony %1",
	"microbit.tiltAngle": "kąt nachylenia %1",
	"microbit.whenPinConnected": "kiedy pin%1połączony",
	"ev3.motorTurnClockwise": "Obróć silnik %1 do ruchu wskazówek zegara na %2 sekund",
	"ev3.motorTurnCounterClockwise": "obracaj silnik %1 w tę stronę przez %2 sekund",
	"ev3.motorSetPower": "ustaw moc silnika %1 na %2 %",
	"ev3.getMotorPosition": "pozycja silnika %1",
	"ev3.whenButtonPressed": "Gdy klawisz %1 naciśnięty",
	"ev3.whenDistanceLessThan": "Gdy odległość < %1",
	"ev3.whenBrightnessLessThan": "Gdy jasność < %1",
	"ev3.buttonPressed": "Klawisz %1 naciśnięty?",
	"ev3.getDistance": "odległość",
	"ev3.getBrightness": "jasność",
	"ev3.beepNote": "graj nutę %1 przez %2 sekund",
	"wedo2.motorOn": "Włącz silnik %1",
	"wedo2.motorOff": "Wyłącz silnik %1",
	"wedo2.startMotorPower": "Ustaw moc silnika %1 na %2",
	"wedo2.setMotorDirection": "Ustaw kierunek silnika %1 na %2",
	"wedo2.whenDistance": "Gdy dystans %1 %2",
	"wedo2.getDistance": "odległość",
	"wedo2.motorOnFor": "Włącz silnik %1 na %2 sekund",
	"wedo2.setLightHue": "Ustaw kolor światła na %1",
	"wedo2.playNoteFor": "Graj nutę %1 przez %2 sekund",
	"wedo2.whenTilted": "Gdy pochylony %1",
	"wedo2.isTilted": "Pochylony %1",
	"wedo2.getTiltAngle": "Kąt pochylenia %1",
	"gdxfor.whenGesture": "kiedy %1",
	"gdxfor.whenForcePushedOrPulled": "kiedy czujnik siły %1",
	"gdxfor.getForce": "siła",
	"gdxfor.whenTilted": "kiedy nachylony %1",
	"gdxfor.isTilted": "nachylony %1?",
	"gdxfor.getTilt": "kąt nachylenia %1",
	"gdxfor.isFreeFalling": "spada?",
	"gdxfor.getSpin": "prędkość wirowania %1",
	"gdxfor.getAcceleration": "przyśpieszenie %1",
	"boost.motorOnFor": "włącz silnik %1 na %2 sekund",
	"boost.motorOnForRotation": "włącz silnik %1 na %2 obrotów",
	"boost.motorOn": "włącz silnik %1",
	"boost.motorOff": "wyłącz silnik %1",
	"boost.setMotorPower": "ustaw moc silnika %1 na %2 %",
	"boost.setMotorDirection": "ustaw kierunek obrotu silnika %1 na %2",
	"boost.getMotorPosition": "pozycja silnika %1",
	"boost.whenColor": "kiedy widzi %1 klocek",
	"boost.seeingColor": "widzi %1 klocek?",
	"boost.whenTilted": "Gdy pochylony %1",
	"boost.getTiltAngle": "Kąt pochylenia %1",
	"boost.setLightHue": "Ustaw kolor światła na %1"
};
var dropdowns$c = {
	MOTION_GOTO_POINTER: {
		value: "wskaźnik myszy",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "losowa pozycja",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "wskaźnik myszy",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "losowa pozycja",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "wskaźnik myszy",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "losowy kierunek",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "lewo-prawo",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "nie obracaj",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "dookoła",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "następne tło",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "poprzednie tło",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "losowo wybrane tło",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "kolor",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "rybie oko",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "wir",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "zniekształć",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mozaika",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "jasność",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "duch",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "wierzch",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "spód",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "do przodu",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "do tyłu",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "liczba",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "nazwa",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "płynność dźwięku",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "przesuń w lewo/prawo",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "spacja",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "strzałka w lewo",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "strzałka w prawo",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "strzałka w dół",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "strzałka w górę",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "dowolny",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "stoper",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "głośność",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "wszystko",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "ten skrypt",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "inne skrypty duszka",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "siebie",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "wskaźnik myszy",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "krawędź",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "wskaźnik myszy",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "z przeciąganiem",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "bez przeciągania",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "pozycja x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "pozycja y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "kierunek",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "indeks kostiumu",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "nazwa kostiumu",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "rozmiar",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "głośność",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "indeks tła",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "nazwa tła",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "scena",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "rok",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "miesiąc",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "dzień",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "dzień tygodnia",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "godzina",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minuta",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "sekunda",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "wartość bezwzględna",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "podłoga",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "sufit",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "pierwiastek kwadratowy",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sinus",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cosinus",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tangens",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "arcus sinus",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "arcus cosinus",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "arcus tangens",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "logarytm naturalny",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Werbel",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Bęben basowy",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Uderzenie o obręcz",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) talerz uderzany pałeczką",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Otwarty hi-hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Zamknięty hi-hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamburyn",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Klaśnięcie",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Klawesy",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Drewniany klocek",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Krowi dzwonek",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Trójkąt",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) bęben Konga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Güiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuíca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Pianino",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Pianino elektroniczne",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Organy",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Gitara",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Gitara elektryczna",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Bas",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Wiolonczela",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Puzon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Klarnet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saksofon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Drewniany flet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagot",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Chór",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Wibrafon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Pozytywka",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Stalowy bęben",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(26) Wiodący dźwięk syntezatora",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Pad syntezatora",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "Kolor",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "nasycenie",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "Jasność",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "przezroczystość",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "Kierunek",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "ruch",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "duszek",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "scena",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "wyłączony",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "włączony",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "na odwróconym",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "kobiecy",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "męski",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "dziecięcy",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "zmodyfikowany",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "kociątko",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "góra",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "dół",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "lewo",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "prawo",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "Dowolny",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "podrzucony",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "poruszony",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "potrząśnięty",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "Dowolny",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "do tyłu",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "do przodu",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "w lewo",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "w prawo",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "w tamten sposób",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "w ten sposób",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "odwróć",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "dowolny kolor",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "czarny",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "niebieski",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "zielony",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "czerwony",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "biały",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "żółty",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "dowolnie",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "w górę",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "w dół",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "w lewo",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "w prawo",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "silnik A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "silnik B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "wszystkie silniki",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "silnik",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "w ten sposób",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "w tamten sposób",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "odwróć",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "Dowolny",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "góra",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "dół",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "lewo",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "prawo",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "pociągnięty",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "wciśnięty",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "potrząśnięty",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "zaczęło spadać",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "odwrócony w dół",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "odwrócony do góry",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "na wierzch",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "na spód",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "lewo",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "prawo",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "dowolny",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "lewo góra prawo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "prawo góra lewo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "lewo prawo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "prawo lewo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "góra dół",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "dół góra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "góra prawo dół lewo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "góra lewo dół prawo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "góra góra dół dół lewo prawo lewo prawo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.am": {
		value: "amharski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "angielski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "arabski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "azerski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "baskijski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "bułgarski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "chiński (tradycyjny)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "chiński (uproszczony)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "chorwacki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "czeski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "duński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "estoński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "fiński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "francuski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "galicyjski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "grecki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "hebrajski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "hiszpański",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "indonezyjski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "irlandzki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "islandzki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "japoński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "kataloński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "koreański",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "kurdyjski (sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "litewski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "łotewski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "maoryski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "niderlandzki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "niemiecki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "norweski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "perski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "polski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "portugalski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "rosyjski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "rumuński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "serbski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "słowacki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "słoweński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "szkocki gaelicki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "szwedzki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "tajski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "turecki",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "ukraiński",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "walijski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "węgierski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "wietnamski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "włoski",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arabski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Walijski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Duński",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Niemiecki",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Angielski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Hiszpański",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Hiszpański (Ameryka Łacińska)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Francuski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Koreański",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hinduski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandzki",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Włoski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Niderlandzki",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japoński",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norweski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugalski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugalski (brazylijski)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Rumuński",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Rosyjski",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Szwedzki",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turecki",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Chiński (mandaryński)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$c = [
];
var soundEffects$c = [
	"płynność dźwięku",
	"przesuń w lewo/prawo"
];
var microbitWhen$c = [
	"poruszony",
	"potrząśnięty",
	"podrzucony"
];
var osis$c = [
	"inne skrypty duszka"
];
var definePrefix$c = [
	"definiuj"
];
var defineSuffix$c = [
];
var palette$c = {
	Motion: "Ruch",
	Looks: "Wygląd",
	Sound: "Dźwięk",
	Events: "Zdarzenia",
	Control: "Kontrola",
	Sensing: "Czujniki",
	Operators: "Wyrażenia",
	Variables: "Zmienne",
	"My Blocks": "Moje bloki"
};
var math$c = [
	"wartość bezwzględna",
	"podłoga",
	"sufit",
	"pierwiastek kwadratowy",
	"sinus",
	"cosinus",
	"tangens",
	"arcus sinus",
	"arcus cosinus",
	"arcus tangens",
	"logarytm naturalny",
	"log",
	"e ^",
	"10 ^"
];
var aliases$c = {
	"obróć w lewo o %1 stopni": "MOTION_TURNLEFT",
	"obróć w prawo o %1 stopni": "MOTION_TURNRIGHT",
	"kiedy kliknięto zieloną flagę": "EVENT_WHENFLAGCLICKED",
	koniec: "scratchblocks:end"
};
var name$c = "Polski";
var percentTranslated$c = 100;
var pl = {
	commands: commands$c,
	dropdowns: dropdowns$c,
	ignorelt: ignorelt$c,
	soundEffects: soundEffects$c,
	microbitWhen: microbitWhen$c,
	osis: osis$c,
	definePrefix: definePrefix$c,
	defineSuffix: defineSuffix$c,
	palette: palette$c,
	math: math$c,
	aliases: aliases$c,
	name: name$c,
	percentTranslated: percentTranslated$c
};

var commands$b = {
	MOTION_MOVESTEPS: "%1 歩動かす",
	MOTION_TURNRIGHT: "@turnRight %1 度回す",
	MOTION_TURNLEFT: "@turnLeft %1 度回す",
	MOTION_POINTINDIRECTION: "%1 度に向ける",
	MOTION_POINTTOWARDS: "%1 へ向ける",
	MOTION_GOTOXY: "x座標を %1 、y座標を %2 にする",
	MOTION_GOTO: "%1 へ行く",
	MOTION_GLIDESECSTOXY: "%1 秒でx座標を %2 に、y座標を %3 に変える",
	MOTION_GLIDETO: "%1 秒で %2 へ行く",
	MOTION_CHANGEXBY: "x座標を %1 ずつ変える",
	MOTION_SETX: "x座標を %1 にする",
	MOTION_CHANGEYBY: "y座標を %1 ずつ変える",
	MOTION_SETY: "y座標を %1 にする",
	MOTION_SETROTATIONSTYLE: "回転方法を %1 にする",
	LOOKS_SAYFORSECS: "%1 と %2 秒言う",
	LOOKS_SAY: "%1 と言う",
	LOOKS_THINKFORSECS: "%1 と %2 秒考える",
	LOOKS_THINK: "%1 と考える",
	LOOKS_SHOW: "表示する",
	LOOKS_HIDE: "隠す",
	LOOKS_SWITCHCOSTUMETO: "コスチュームを %1 にする",
	LOOKS_NEXTCOSTUME: "次のコスチュームにする",
	LOOKS_NEXTBACKDROP_BLOCK: "次の背景にする",
	LOOKS_SWITCHBACKDROPTO: "背景を %1 にする",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "背景を %1 にして待つ",
	LOOKS_CHANGEEFFECTBY: "%1 の効果を %2 ずつ変える",
	LOOKS_SETEFFECTTO: "%1 の効果を %2 にする",
	LOOKS_CLEARGRAPHICEFFECTS: "画像効果をなくす",
	LOOKS_CHANGESIZEBY: "大きさを %1 ずつ変える",
	LOOKS_SETSIZETO: "大きさを %1 %にする",
	LOOKS_GOTOFRONTBACK: "%1 へ移動する",
	LOOKS_GOFORWARDBACKWARDLAYERS: "%2 層 %1",
	SOUND_PLAY: "%1 の音を鳴らす",
	SOUND_CHANGEEFFECTBY: "%1 の効果を %2 ずつ変える",
	SOUND_SETEFFECTO: "%1 の効果を %2 にする",
	SOUND_CLEAREFFECTS: "音の効果をなくす",
	SOUND_PLAYUNTILDONE: "終わるまで %1 の音を鳴らす",
	SOUND_STOPALLSOUNDS: "すべての音を止める",
	"music.playDrumForBeats": "%1のドラムを%2拍鳴らす",
	"music.restForBeats": "%1拍休む",
	"music.playNoteForBeats": "%1の音符を%2拍鳴らす",
	"music.setInstrument": "楽器を%1にする",
	SOUND_CHANGEVOLUMEBY: "音量を %1 ずつ変える",
	SOUND_SETVOLUMETO: "音量を %1 %にする",
	"music.changeTempo": "テンポを%1ずつ変える",
	"music.setTempo": "テンポを%1にする",
	"pen.clear": "全部消す",
	"pen.stamp": "スタンプ",
	"pen.penDown": "ペンを下ろす",
	"pen.penUp": "ペンを上げる",
	"pen.setColor": "ペンの色を%1にする",
	"pen.changeHue": "ペンの色を%1ずつ変える",
	"pen.setColorParam": "ペンの%1を%2にする",
	"pen.changeColorParam": "ペンの%1を%2ずつ変える",
	"pen.setHue": "ペンの色を%1にする",
	"pen.changeShade": "ペンの濃さを%1ずつ変える",
	"pen.setShade": "ペンの濃さを%1にする",
	"pen.changeSize": "ペンの太さを%1ずつ変える",
	"pen.setSize": "ペンの太さを%1にする",
	EVENT_WHENFLAGCLICKED: "@greenFlag が押されたとき",
	EVENT_WHENKEYPRESSED: "%1 キーが押されたとき",
	EVENT_WHENTHISSPRITECLICKED: "このスプライトが押されたとき",
	EVENT_WHENSTAGECLICKED: "ステージが押されたとき",
	EVENT_WHENBACKDROPSWITCHESTO: "背景が %1 になったとき",
	EVENT_WHENGREATERTHAN: "%1 > %2 のとき",
	EVENT_WHENBROADCASTRECEIVED: "%1 を受け取ったとき",
	EVENT_BROADCAST: "%1 を送る",
	EVENT_BROADCASTANDWAIT: "%1 を送って待つ",
	CONTROL_WAIT: "%1 秒待つ",
	CONTROL_REPEAT: "%1 回繰り返す",
	CONTROL_FOREVER: "ずっと",
	CONTROL_IF: "もし %1 なら",
	CONTROL_WAITUNTIL: "%1 まで待つ",
	CONTROL_REPEATUNTIL: "%1 まで繰り返す",
	CONTROL_STOP: " %1",
	CONTROL_STARTASCLONE: "クローンされたとき",
	CONTROL_CREATECLONEOF: "%1 のクローンを作る",
	CONTROL_DELETETHISCLONE: "このクローンを削除する",
	SENSING_ASKANDWAIT: "%1 と聞いて待つ",
	"videoSensing.videoToggle": "ビデオを%1にする",
	"videoSensing.setVideoTransparency": "ビデオの透明度を%1にする",
	"videoSensing.whenMotionGreaterThan": "ビデオモーション > %1のとき",
	SENSING_RESETTIMER: "タイマーをリセット",
	DATA_SETVARIABLETO: "%1 を %2 にする",
	DATA_CHANGEVARIABLEBY: "%1 を %2 ずつ変える",
	DATA_SHOWVARIABLE: "変数 %1 を表示する",
	DATA_HIDEVARIABLE: "変数 %1 を隠す",
	DATA_ADDTOLIST: "%1 を %2 に追加する",
	DATA_DELETEOFLIST: "%2 の %1 番目を削除する",
	DATA_DELETEALLOFLIST: "%1のすべてを削除する",
	MOTION_IFONEDGEBOUNCE: "もし端に着いたら、跳ね返る",
	DATA_INSERTATLIST: "%3 の %2 番目に %1 を挿入する",
	DATA_REPLACEITEMOFLIST: "%2 の %1 番目を %3 で置き換える",
	DATA_SHOWLIST: "リスト %1 を表示する",
	DATA_HIDELIST: "リスト %1 を隠す",
	SENSING_OF_XPOSITION: "x座標",
	SENSING_OF_YPOSITION: "y座標",
	SENSING_OF_DIRECTION: "向き",
	SENSING_OF_COSTUMENUMBER: "コスチューム #",
	LOOKS_COSTUMENUMBERNAME: "コスチュームの %1",
	SENSING_OF_SIZE: "大きさ",
	SENSING_OF_BACKDROPNAME: "背景の名前",
	LOOKS_BACKDROPNUMBERNAME: "背景の %1",
	SENSING_OF_BACKDROPNUMBER: "背景 #",
	SOUND_VOLUME: "音量",
	"music.getTempo": "テンポ",
	SENSING_TOUCHINGOBJECT: "%1 に触れた",
	SENSING_TOUCHINGCOLOR: "%1 色に触れた",
	SENSING_COLORISTOUCHINGCOLOR: "%1 色が %2 色に触れた",
	SENSING_DISTANCETO: "%1 までの距離",
	SENSING_ANSWER: "答え",
	SENSING_KEYPRESSED: "%1 キーが押された",
	SENSING_MOUSEDOWN: "マウスが押された",
	SENSING_MOUSEX: "マウスのx座標",
	SENSING_MOUSEY: "マウスのy座標",
	SENSING_SETDRAGMODE: "ドラッグ %1 ようにする",
	SENSING_LOUDNESS: "音量",
	"videoSensing.videoOn": "%2のビデオの%1",
	SENSING_TIMER: "タイマー",
	SENSING_OF: "%2 の %1",
	SENSING_CURRENT: "現在の %1",
	SENSING_DAYSSINCE2000: "2000年からの日数",
	SENSING_USERNAME: "ユーザー名",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "%1 から %2 までの乱数",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 かつ %2",
	OPERATORS_OR: "%1 または %2",
	OPERATORS_NOT: "%1 ではない",
	OPERATORS_JOIN: "%1 と %2",
	OPERATORS_LETTEROF: "%2 の %1 番目の文字",
	OPERATORS_LENGTH: "%1 の長さ",
	OPERATORS_MOD: "%1 を %2 で割った余り",
	OPERATORS_ROUND: "%1 を四捨五入",
	OPERATORS_MATHOP: "%2 の %1",
	OPERATORS_CONTAINS: "%1 に %2 が含まれる",
	DATA_ITEMOFLIST: "%2 の %1 番目",
	DATA_ITEMNUMOFLIST: "%2中の%1の場所",
	DATA_LENGTHOFLIST: "%1 の長さ",
	DATA_LISTCONTAINSITEM: "%1 に %2 が含まれる",
	CONTROL_ELSE: "でなければ",
	SENSING_USERID: "ユーザーID",
	SENSING_LOUD: "うるさい",
	"text2speech.speakAndWaitBlock": "%1としゃべる",
	"text2speech.setVoiceBlock": "声を%1にする",
	"text2speech.setLanguageBlock": "言語を%1にする",
	"translate.translateBlock": "%1を%2に翻訳する",
	"translate.viewerLanguage": "言語",
	"makeymakey.whenKeyPressed": "%1キーが押されたとき",
	"makeymakey.whenKeysPressedInOrder": "%1が順番に押されたとき",
	"microbit.whenButtonPressed": "ボタン%1が押されたとき",
	"microbit.isButtonPressed": "ボタン%1が押された",
	"microbit.whenGesture": "%1とき",
	"microbit.displaySymbol": "%1を表示する",
	"microbit.displayText": "%1を表示する",
	"microbit.clearDisplay": "画面を消す",
	"microbit.whenTilted": "%1に傾いたとき",
	"microbit.isTilted": "%1に傾いた",
	"microbit.tiltAngle": "%1方向の傾き",
	"microbit.whenPinConnected": "ピン%1がつながったとき",
	"ev3.motorTurnClockwise": "モーター%1をこちら向きに%2秒間回す",
	"ev3.motorTurnCounterClockwise": "モーター%1をあちら向きに%2秒間回す",
	"ev3.motorSetPower": "モーター%1のパワーを%2%にする",
	"ev3.getMotorPosition": "モーター%1の位置",
	"ev3.whenButtonPressed": "ボタン%1が押されたとき",
	"ev3.whenDistanceLessThan": "距離 < %1のとき",
	"ev3.whenBrightnessLessThan": "明るさ < %1のとき",
	"ev3.buttonPressed": "ボタン%1が押された",
	"ev3.getDistance": "距離",
	"ev3.getBrightness": "明るさ",
	"ev3.beepNote": "%1の音符を%2秒鳴らす",
	"wedo2.motorOn": "%1をオンにする",
	"wedo2.motorOff": "%1をオフにする",
	"wedo2.startMotorPower": "%1のパワーを%2にする",
	"wedo2.setMotorDirection": "%1の方向を%2にする",
	"wedo2.whenDistance": "距離%1%2のとき",
	"wedo2.getDistance": "距離",
	"wedo2.motorOnFor": "%1を%2秒間オンにする",
	"wedo2.setLightHue": "ライトの色を%1にする",
	"wedo2.playNoteFor": "%1の音符を%2秒間鳴らす",
	"wedo2.whenTilted": "%1に傾いたとき",
	"wedo2.isTilted": "%1に傾いた",
	"wedo2.getTiltAngle": "%1方向の傾き",
	"gdxfor.whenGesture": "%1とき",
	"gdxfor.whenForcePushedOrPulled": "force sensorが%1とき",
	"gdxfor.getForce": "force",
	"gdxfor.whenTilted": "%1に傾いたとき",
	"gdxfor.isTilted": "%1に傾いた",
	"gdxfor.getTilt": "%1方向の傾き",
	"gdxfor.isFreeFalling": "落下中",
	"gdxfor.getSpin": "%1回転のはやさ",
	"gdxfor.getAcceleration": "%1方向への加速度",
	"boost.motorOnFor": "モーター%1を%2秒間オンにする",
	"boost.motorOnForRotation": "モーター%1を%2回転させる",
	"boost.motorOn": "モーター%1をオンにする",
	"boost.motorOff": "モーター%1をオフにする",
	"boost.setMotorPower": "モーター%1の速さを%2%にする",
	"boost.setMotorDirection": "モーター%1の向きを%2にする",
	"boost.getMotorPosition": "モーター%1の位置",
	"boost.whenColor": "%1 を見たとき",
	"boost.seeingColor": "%1 を見ている？",
	"boost.whenTilted": "%1に傾いたとき",
	"boost.getTiltAngle": "%1方向の傾き",
	"boost.setLightHue": "ライトの色を%1にする"
};
var dropdowns$b = {
	MOTION_GOTO_POINTER: {
		value: "マウスのポインター",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "どこかの場所",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "マウスのポインター",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "どこかの場所",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "マウスのポインター",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "どれかの向き",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "左右のみ",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "回転しない",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "自由に回転",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "次の背景",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "前の背景",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "どれかの背景",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "色",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "魚眼レンズ",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "渦巻き",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "ピクセル化",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "モザイク",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "明るさ",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "幽霊",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "最前面",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "最背面",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "手前に出す",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "奥に下げる",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "番号",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "名前",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "ピッチ",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "左右にパン",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "スペース",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "左向き矢印",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "右向き矢印",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "下向き矢印",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "上向き矢印",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "どれかの",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "タイマー",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "音量",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "すべてを止める",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "このスクリプトを止める",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "スプライトの他のスクリプトを止める",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "自分自身",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "マウスのポインター",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "端",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "マウスのポインター",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "できる",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "できない",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x座標",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y座標",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "向き",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "コスチューム #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "コスチューム名",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "大きさ",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "音量",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "背景 #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "背景の名前",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "ステージ",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "年",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "月",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "日",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "曜日",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "時",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "分",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "秒",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "絶対値",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "切り下げ",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "切り上げ",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "平方根",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) スネアドラム",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) バスドラム",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) サイドスティック",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) クラッシュシンバル",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) オープンハイハット",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) クローズハイハット",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) タンバリン",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) 手拍子",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) クラーベ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) ウッドブロック",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) カウベル",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) トライアングル",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) ボンゴ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) コンガ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) カバサ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) ギロ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) ビブラスラップ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) クイーカ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) ピアノ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) 電子ピアノ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) オルガン",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) ギター",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) エレキギター",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) ベース",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) ピチカート",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) チェロ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) トロンボーン",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) クラリネット",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) サクソフォン",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) フルート",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) 木管フルート",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) バスーン",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) 合唱団",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) ビブラフォン",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) ミュージックボックス",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) スチールドラム",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) マリンバ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) シンセリード",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) シンセパッド",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "色",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "鮮やかさ",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "明るさ",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "透明度",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "向き",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "モーション",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "スプライト",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "ステージ",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "切",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "入",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "左右反転",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "アルト",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "テノール",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "ねずみ",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "巨人",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "子猫",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "上",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "下",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "左",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "右",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "どれかの",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "ジャンプした",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "動いた",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "振られた",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "どれかの向き",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "後ろ",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "前",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "左",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "右",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "あちら向き",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "こちら向き",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "逆向き",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "どれかの色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "黒",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "青",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "緑",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "赤",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "白",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "黄色",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "どれかの向き",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "上",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "下",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "左",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "右",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "モーターA",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "モーターB",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "すべてのモーター",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "モーター",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "こちら向き",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "あちら向き",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "逆向き",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "どれかの向き",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "上",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "下",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "左",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "右",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "引かれた",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "押された",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "振られた",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "落下を始めた",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "表面が下",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "表面が上",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "前",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "後ろ",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "左",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "右",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "どれかの向き",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "左 上 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "右 上 左",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "左 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "右 左",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "上 下",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "下 上",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "上 右 下 左",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "上 左 下 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "上 上 下 下 左 右 左 右",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.is": {
		value: "アイスランド語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "アイルランド語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "アゼルバイジャン語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "アムハラ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "アラビア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "イタリア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "インドネシア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "ウェールズ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "ウクライナ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "エストニア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "オランダ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "カタルーニャ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "ガリシア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "ギリシャ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "クルド語（ソラニー）",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "クロアチア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "スウェーデン語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "ズールー語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "スコットランド ゲール語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "スペイン語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "スロバキア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "スロベニア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "セルビア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "タイ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "チェコ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "デンマーク語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "ドイツ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "トルコ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "ノルウェー語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "バスク語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "ハンガリー語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "フィンランド語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "フランス語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "ブルガリア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "ベトナム語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "ヘブライ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "ペルシャ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "ポーランド語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "ポルトガル語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "マオリ語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "ラトビア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "リトアニア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "ルーマニア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "ロシア語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "英語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "韓国語",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "中国語（簡体）",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "中国語（繁体）",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "日本語",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "アラビア語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "ウェールズ語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "デンマーク語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "ドイツ語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "英語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "スペイン語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "スペイン語（ラテンアメリカ）",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "フランス語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "韓国語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "ヒンディー語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "アイスランド語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "イタリア語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "オランダ語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "日本語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "ノルウェー語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "ポーランド語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "ポルトガル語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "ポルトガル語（ブラジル）",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "ルーマニア語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "ロシア語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "スウェーデン語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "トルコ語",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "中国語（北京語）",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$b = [
];
var soundEffects$b = [
	"ピッチ",
	"左右にパン"
];
var microbitWhen$b = [
	"動いた",
	"振られた",
	"ジャンプした"
];
var osis$b = [
	"スプライトの他のスクリプトを止める"
];
var definePrefix$b = [
	"定義"
];
var defineSuffix$b = [
];
var palette$b = {
	Motion: "動き",
	Looks: "見た目",
	Sound: "音",
	Events: "イベント",
	Control: "制御",
	Sensing: "調べる",
	Operators: "演算",
	Variables: "変数",
	"My Blocks": "ブロック定義"
};
var math$b = [
	"絶対値",
	"切り下げ",
	"切り上げ",
	"平方根",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$b = {
	"左に %1 度回す": "MOTION_TURNLEFT",
	"反時計回りに %1 度回す": "MOTION_TURNLEFT",
	"右に %1 度回す": "MOTION_TURNRIGHT",
	"時計回りに %1 度回す": "MOTION_TURNRIGHT",
	"緑の旗が押されたとき": "EVENT_WHENFLAGCLICKED",
	"緑の旗がクリックされたとき": "EVENT_WHENFLAGCLICKED"
};
var name$b = "日本語";
var percentTranslated$b = 100;
var ja = {
	commands: commands$b,
	dropdowns: dropdowns$b,
	ignorelt: ignorelt$b,
	soundEffects: soundEffects$b,
	microbitWhen: microbitWhen$b,
	osis: osis$b,
	definePrefix: definePrefix$b,
	defineSuffix: defineSuffix$b,
	palette: palette$b,
	math: math$b,
	aliases: aliases$b,
	name: name$b,
	percentTranslated: percentTranslated$b
};

var commands$a = {
	MOTION_MOVESTEPS: "neem %1 stappen",
	MOTION_TURNRIGHT: "draai @turnRight %1 graden",
	MOTION_TURNLEFT: "draai @turnLeft %1 graden",
	MOTION_POINTINDIRECTION: "richt naar %1 graden",
	MOTION_POINTTOWARDS: "richt naar %1",
	MOTION_GOTOXY: "ga naar x: %1 y: %2",
	MOTION_GOTO: "ga naar %1",
	MOTION_GLIDESECSTOXY: "schuif in %1 sec. naar x: %2 y: %3",
	MOTION_GLIDETO: "schuif in %1 sec. naar %2",
	MOTION_CHANGEXBY: "verander x met %1",
	MOTION_SETX: "maak x %1",
	MOTION_CHANGEYBY: "verander y met %1",
	MOTION_SETY: "maak y %1",
	MOTION_SETROTATIONSTYLE: "maak draaistijl %1",
	LOOKS_SAYFORSECS: "zeg %1 %2 sec.",
	LOOKS_SAY: "zeg %1",
	LOOKS_THINKFORSECS: "denk %1 %2 sec.",
	LOOKS_THINK: "denk %1",
	LOOKS_SHOW: "verschijn",
	LOOKS_HIDE: "verdwijn",
	LOOKS_SWITCHCOSTUMETO: "verander uiterlijk naar %1",
	LOOKS_NEXTCOSTUME: "volgend uiterlijk",
	LOOKS_NEXTBACKDROP_BLOCK: "volgende achtergrond",
	LOOKS_SWITCHBACKDROPTO: "verander achtergrond naar %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "verander achtergrond naar %1 en wacht",
	LOOKS_CHANGEEFFECTBY: "verander %1 effect met %2",
	LOOKS_SETEFFECTTO: "zet %1 effect op %2",
	LOOKS_CLEARGRAPHICEFFECTS: "zet alle effecten uit",
	LOOKS_CHANGESIZEBY: "verander grootte met %1",
	LOOKS_SETSIZETO: "maak grootte %1 %",
	LOOKS_GOTOFRONTBACK: "ga naar laag %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "ga %1 %2 lagen",
	SOUND_PLAY: "start geluid %1",
	SOUND_CHANGEEFFECTBY: "verander %1-effect met %2",
	SOUND_SETEFFECTO: "zet effect %1 op %2",
	SOUND_CLEAREFFECTS: "zet alle effecten uit",
	SOUND_PLAYUNTILDONE: "start geluid %1 en wacht",
	SOUND_STOPALLSOUNDS: "stop alle geluiden",
	"music.playDrumForBeats": "speel drum %1gedurende%2 maten",
	"music.restForBeats": "%1maten rust",
	"music.playNoteForBeats": "speel noot %1 gedurende %2maten",
	"music.setInstrument": "maak instrument %1",
	SOUND_CHANGEVOLUMEBY: "verander volume met %1",
	SOUND_SETVOLUMETO: "zet volume op %1%",
	"music.changeTempo": "verander tempo met %1",
	"music.setTempo": "maak tempo %1",
	"pen.clear": "wis alles",
	"pen.stamp": "stempel",
	"pen.penDown": "pen neer",
	"pen.penUp": "pen op",
	"pen.setColor": "maak penkleur %1",
	"pen.changeHue": "verander penkleur met %1",
	"pen.setColorParam": "maak pen %1 %2",
	"pen.changeColorParam": "verander pen %1met %2",
	"pen.setHue": "maak penkleur %1",
	"pen.changeShade": "verander penhelderheid met %1",
	"pen.setShade": "maak penhelderheid %1",
	"pen.changeSize": "verander pendikte met %1",
	"pen.setSize": "maak pendikte %1",
	EVENT_WHENFLAGCLICKED: "wanneer op @greenFlag wordt geklikt",
	EVENT_WHENKEYPRESSED: "wanneer %1 is ingedrukt",
	EVENT_WHENTHISSPRITECLICKED: "wanneer op deze sprite wordt geklikt",
	EVENT_WHENSTAGECLICKED: "wanneer op het speelveld wordt geklikt",
	EVENT_WHENBACKDROPSWITCHESTO: "wanneer achtergrond verandert naar %1",
	EVENT_WHENGREATERTHAN: "wanneer %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "wanneer ik signaal %1 ontvang",
	EVENT_BROADCAST: "zend signaal %1",
	EVENT_BROADCASTANDWAIT: "zend signaal %1 en wacht",
	CONTROL_WAIT: "wacht %1 sec.",
	CONTROL_REPEAT: "herhaal %1",
	CONTROL_FOREVER: "herhaal",
	CONTROL_IF: "als %1 dan",
	CONTROL_WAITUNTIL: "wacht tot %1",
	CONTROL_REPEATUNTIL: "herhaal tot %1",
	CONTROL_STOP: "stop %1",
	CONTROL_STARTASCLONE: "wanneer ik als kloon start",
	CONTROL_CREATECLONEOF: "maak een kloon van %1",
	CONTROL_DELETETHISCLONE: "verwijder deze kloon",
	SENSING_ASKANDWAIT: "vraag %1 en wacht",
	"videoSensing.videoToggle": "zet video %1",
	"videoSensing.setVideoTransparency": "zet video transparantie op %1",
	"videoSensing.whenMotionGreaterThan": "wanneer video beweging > %1",
	SENSING_RESETTIMER: "zet klok op 0",
	DATA_SETVARIABLETO: "maak %1 %2",
	DATA_CHANGEVARIABLEBY: "verander %1 met %2",
	DATA_SHOWVARIABLE: "toon variabele %1",
	DATA_HIDEVARIABLE: "verberg variabele %1",
	DATA_ADDTOLIST: "voeg %1 toe aan %2",
	DATA_DELETEOFLIST: "verwijder %1 van %2",
	DATA_DELETEALLOFLIST: "verwijder alle van %1",
	MOTION_IFONEDGEBOUNCE: "keer om aan de rand",
	DATA_INSERTATLIST: "voeg %1 toe op %2 van %3",
	DATA_REPLACEITEMOFLIST: "vervang item %1 van %2 door %3",
	DATA_SHOWLIST: "toon lijst %1",
	DATA_HIDELIST: "verberg lijst %1",
	SENSING_OF_XPOSITION: "x-positie",
	SENSING_OF_YPOSITION: "y-positie",
	SENSING_OF_DIRECTION: "richting",
	SENSING_OF_COSTUMENUMBER: "uiterlijk #",
	LOOKS_COSTUMENUMBERNAME: "uiterlijk %1",
	SENSING_OF_SIZE: "grootte",
	SENSING_OF_BACKDROPNAME: "achtergrond naam",
	LOOKS_BACKDROPNUMBERNAME: "achtergrond %1",
	SENSING_OF_BACKDROPNUMBER: "achtergrond #",
	SOUND_VOLUME: "volume",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "raak ik %1?",
	SENSING_TOUCHINGCOLOR: "raak ik kleur %1?",
	SENSING_COLORISTOUCHINGCOLOR: "raakt kleur %1 kleur %2?",
	SENSING_DISTANCETO: "afstand tot %1",
	SENSING_ANSWER: "antwoord",
	SENSING_KEYPRESSED: "toets %1 ingedrukt?",
	SENSING_MOUSEDOWN: "muis ingedrukt?",
	SENSING_MOUSEX: "muis x",
	SENSING_MOUSEY: "muis y",
	SENSING_SETDRAGMODE: "zet sleepbaar op %1",
	SENSING_LOUDNESS: "volume",
	"videoSensing.videoOn": "video %1van%2",
	SENSING_TIMER: "klok",
	SENSING_OF: "%1 van %2",
	SENSING_CURRENT: "huidige %1",
	SENSING_DAYSSINCE2000: "dagen sinds 2000",
	SENSING_USERNAME: "gebruikersnaam",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "willekeurig getal tussen %1 en %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 en %2",
	OPERATORS_OR: "%1 of %2",
	OPERATORS_NOT: "niet %1",
	OPERATORS_JOIN: "voeg %1 en %2 samen",
	OPERATORS_LETTEROF: "letter %1 van %2",
	OPERATORS_LENGTH: "lengte van %1",
	OPERATORS_MOD: "%1 modulo %2",
	OPERATORS_ROUND: "afgerond %1",
	OPERATORS_MATHOP: "%1 van %2",
	OPERATORS_CONTAINS: "%1 bevat %2?",
	DATA_ITEMOFLIST: "item %1 van %2",
	DATA_ITEMNUMOFLIST: "item # van %1 in %2",
	DATA_LENGTHOFLIST: "lengte van %1",
	DATA_LISTCONTAINSITEM: "%1 bevat %2?",
	CONTROL_ELSE: "anders",
	SENSING_USERID: "gebruiker id",
	SENSING_LOUD: "luid?",
	"text2speech.speakAndWaitBlock": "zeg %1",
	"text2speech.setVoiceBlock": "zet stem op %1",
	"text2speech.setLanguageBlock": "stel de taal in op %1",
	"translate.translateBlock": "vertaal %1 naar %2",
	"translate.viewerLanguage": "taal",
	"makeymakey.whenKeyPressed": "wanneer %1toets ingedrukt wordt",
	"makeymakey.whenKeysPressedInOrder": "wanneer %1in deze volgorde wordt ingedrukt",
	"microbit.whenButtonPressed": "als knop %1ingedrukt is",
	"microbit.isButtonPressed": "knop %1ingedrukt?",
	"microbit.whenGesture": "als %1",
	"microbit.displaySymbol": "display %1",
	"microbit.displayText": "toon tekst %1",
	"microbit.clearDisplay": "wis het display",
	"microbit.whenTilted": "als gekanteld naar %1",
	"microbit.isTilted": "gekanteld naar%1?",
	"microbit.tiltAngle": "kantelhoek %1",
	"microbit.whenPinConnected": "wanneer pin %1 is verbonden",
	"ev3.motorTurnClockwise": "draai motor %1%2 seconde hierheen",
	"ev3.motorTurnCounterClockwise": "draai motor %1%2seconde daarheen",
	"ev3.motorSetPower": "zet motor %1op %2%",
	"ev3.getMotorPosition": "motor %1positie",
	"ev3.whenButtonPressed": "als knop %1ingedrukt is",
	"ev3.whenDistanceLessThan": "als afstand < %1",
	"ev3.whenBrightnessLessThan": "als helderheid < %1",
	"ev3.buttonPressed": "knop %1ingedrukt?",
	"ev3.getDistance": "afstand",
	"ev3.getBrightness": "helderheid",
	"ev3.beepNote": "speel noot %1%2seconde",
	"wedo2.motorOn": "zet %1aan",
	"wedo2.motorOff": "zet %1uit",
	"wedo2.startMotorPower": "zet %1kracht op %2",
	"wedo2.setMotorDirection": "zet %1richting op %2",
	"wedo2.whenDistance": "als afstand %1%2",
	"wedo2.getDistance": "afstand",
	"wedo2.motorOnFor": "zet %1%2seconde aan",
	"wedo2.setLightHue": "zet lichtkleur op %1",
	"wedo2.playNoteFor": "speel noot %1%2seconde",
	"wedo2.whenTilted": "als gekanteld naar %1",
	"wedo2.isTilted": "gekanteld %1?",
	"wedo2.getTiltAngle": "kantelhoek %1",
	"gdxfor.whenGesture": "wanneer %1",
	"gdxfor.whenForcePushedOrPulled": "wanneer krachtsensor %1",
	"gdxfor.getForce": "kracht",
	"gdxfor.whenTilted": "als %1gekanteld",
	"gdxfor.isTilted": "gekanteld %1",
	"gdxfor.getTilt": "kantelhoek %1",
	"gdxfor.isFreeFalling": "vallend?",
	"gdxfor.getSpin": "draaisnelheid %1",
	"gdxfor.getAcceleration": "versnelling %1",
	"boost.motorOnFor": "zet motor %1%2 seconde aan",
	"boost.motorOnForRotation": "zet motor %1 aan voor %2 omwentelingen",
	"boost.motorOn": "zet motor %1 aan",
	"boost.motorOff": "zet motor %1 uit",
	"boost.setMotorPower": "zet motor %1 snelheid op %2%",
	"boost.setMotorDirection": "zet motor %1 richting op %2",
	"boost.getMotorPosition": "motor %1 positie",
	"boost.whenColor": "als %1 steen gezien",
	"boost.seeingColor": "is steen %1?",
	"boost.whenTilted": "als gekanteld naar %1",
	"boost.getTiltAngle": "kantelhoek %1",
	"boost.setLightHue": "zet lichtkleur op %1"
};
var dropdowns$a = {
	MOTION_GOTO_POINTER: {
		value: "muisaanwijzer",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "willekeurige positie",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "muisaanwijzer",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "willekeurige positie",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "muisaanwijzer",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "willekeurige richting",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "links-rechts",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "niet draaien",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "helemaal rond",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "volgende achtergrond",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "vorige achtergrond",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "willekeurige achtergrond",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "kleur",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "vissenoog",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "draaikolk",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pixeleren",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mozaïek",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "helderheid",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "transparant",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "voorgrond",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "achtergrond",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "naar voren",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "naar achteren",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "nummer",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "naam",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "toonhoogte",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "kanaal links/rechts",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "spatiebalk",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "pijltje links",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "pijltje rechts",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "pijltje omlaag",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "pijltje omhoog",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "willekeurig",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "klok",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "volume",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "alle",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "dit script",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "andere scripts in sprite",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "mijzelf",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "muisaanwijzer",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "rand",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "muisaanwijzer",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "sleepbaar",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "niet sleepbaar",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x-positie",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y-positie",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "richting",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "uiterlijk #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "naam uiterlijk",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "grootte",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "achtergrond #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "achtergrond naam",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Speelveld",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "jaar",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "maand",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "datum",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "dag van de week",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "uur",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minuut",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "seconde",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "absoluut",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "beneden",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "boven",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "wortel",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "arcsin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "arccos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "arctan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Snarentrom",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Basdrum",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Side Stick",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Crashbekken",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Open Hihat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Gesloten Hihat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamboerijn",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Handklap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Claves",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Wood Block",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Koebel",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangel",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Kabassa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Güiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuíca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Elektrische Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Orgel",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Gitaar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Elektrische Gitaar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Bas",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Cello",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Klarinet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saxofoon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Fluit",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Blokfluit",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagot",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Koor",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibrafoon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Speeldoos",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Steeldrum",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Synth Lead",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Synth Pad",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "kleur",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "verzadiging",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "helderheid",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "doorzichtigheid",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "richting",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "beweging",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "sprite",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "speelveld",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "uit",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "aan",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "aan gespiegeld",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "alt",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "piep",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "reus",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "katje",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "omhoog",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "omlaag",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "links",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "rechts",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "willekeurig",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "gesprongen",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "bewogen",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "geschud",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "willekeurig",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "achter",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "voor",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "links",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "rechts",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "daarheen",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "hierheen",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "omkeren",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "willekeurige kleur",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "zwart",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "blauw",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "groen",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "rood",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "wit",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "geel",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "willekeurig",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "omhoog",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "omlaag",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "links",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "rechts",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "alle motoren",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "hierheen",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "daarheen",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "omkeren",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "willekeurig",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "omhoog",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "omlaag",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "links",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "rechts",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "getrokken",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "gedrukt",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "geschud",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "begonnen te vallen",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "gericht naar beneden",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "gericht naar boven",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "voor",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "achter",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "links",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "rechts",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "willekeurig",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "links omhoog rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "rechts omhoog links",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "links rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "rechts links",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "omhoog omlaag",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "omlaag omhoog",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "omhoog rechts omlaag links",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "omhoog links omlaag rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "omhoog omhoog omlaag omlaag links rechts links rechts",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.am": {
		value: "Amharisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Arabisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azerbeidzjaans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Baskisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Bulgaars",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Catalaans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Chinees (traditioneel)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Chinees (vereenvoudigd)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Deens",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "Duits",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "Engels",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Ests",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Fins",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Frans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galicisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Grieks",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Hebreeuws",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Hongaars",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Iers",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "IJslands",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonesisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Italiaans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Japans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Koerdisch (Sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Koreaans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Kroatisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Lets",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Litouws",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Nederlands",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Noors",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Oekraïens",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Perzisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Pools",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portugees",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Roemeens",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Russisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Schots-Gaelisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Servisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Slovaaks",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Sloveens",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Spaans",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Thai",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Tsjechisch",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Turks",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamees",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Welsh",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zoeloe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Zweeds",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arabisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Welsh",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Deens",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Duits",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Engels",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Spaans",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Spaans (Latijns-Amerikaans)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Frans",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Koreaans",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "IJslands",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italiaans",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Nederlands",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japans",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Noors",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Pools",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugees",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugees (Braziliaans)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Roemeens",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Russisch",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Zweeds",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turks",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Chinees (Mandarijn)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$a = [
];
var soundEffects$a = [
	"toonhoogte",
	"kanaal links/rechts"
];
var microbitWhen$a = [
	"bewogen",
	"geschud",
	"gesprongen"
];
var osis$a = [
	"andere scripts in sprite"
];
var definePrefix$a = [
	"definieer"
];
var defineSuffix$a = [
];
var palette$a = {
	Motion: "Beweging",
	Looks: "Uiterlijken",
	Sound: "Geluid",
	Events: "Gebeurtenissen",
	Control: "Besturen",
	Sensing: "Waarnemen",
	Operators: "Functies",
	Variables: "Variabelen",
	"My Blocks": "Mijn blokken"
};
var math$a = [
	"absoluut",
	"beneden",
	"boven",
	"wortel",
	"sin",
	"cos",
	"tan",
	"arcsin",
	"arccos",
	"arctan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$a = {
	"draai %1 graden naar links": "MOTION_TURNLEFT",
	"draai %1 graden naar rechts": "MOTION_TURNRIGHT",
	"wanneer groene vlag wordt aangeklikt": "EVENT_WHENFLAGCLICKED",
	einde: "scratchblocks:end"
};
var name$a = "Nederlands";
var percentTranslated$a = 100;
var nl = {
	commands: commands$a,
	dropdowns: dropdowns$a,
	ignorelt: ignorelt$a,
	soundEffects: soundEffects$a,
	microbitWhen: microbitWhen$a,
	osis: osis$a,
	definePrefix: definePrefix$a,
	defineSuffix: defineSuffix$a,
	palette: palette$a,
	math: math$a,
	aliases: aliases$a,
	name: name$a,
	percentTranslated: percentTranslated$a
};

var commands$9 = {
	MOTION_MOVESTEPS: "anda %1 passos",
	MOTION_TURNRIGHT: "gira @turnRight %1 °",
	MOTION_TURNLEFT: "gira @turnLeft %1 °",
	MOTION_POINTINDIRECTION: "altera a tua direcção para %1 °",
	MOTION_POINTTOWARDS: "aponta em direcção a %1",
	MOTION_GOTOXY: "vai para a posição x: %1 y: %2",
	MOTION_GOTO: "vai para %1",
	MOTION_GLIDESECSTOXY: "desliza em %1 s para a posição x: %2 y: %3",
	MOTION_GLIDETO: "desliza em %1 s em direcção a%2",
	MOTION_CHANGEXBY: "adiciona %1 ao teu x",
	MOTION_SETX: "altera o teu x para %1",
	MOTION_CHANGEYBY: "adiciona %1 ao teu y",
	MOTION_SETY: "altera o teu y para %1",
	MOTION_SETROTATIONSTYLE: "altera o teu estilo de rotação para %1",
	LOOKS_SAYFORSECS: "diz %1 durante %2 s",
	LOOKS_SAY: "diz %1",
	LOOKS_THINKFORSECS: "pensa %1 durante %2 s",
	LOOKS_THINK: "pensa %1",
	LOOKS_SHOW: "mostra-te",
	LOOKS_HIDE: "esconde-te",
	LOOKS_SWITCHCOSTUMETO: "muda o teu traje para %1",
	LOOKS_NEXTCOSTUME: "passa para o teu próximo traje",
	LOOKS_NEXTBACKDROP_BLOCK: "passa para o teu próximo cenário",
	LOOKS_SWITCHBACKDROPTO: "muda o cenário para %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "muda o cenário para %1 e espera",
	LOOKS_CHANGEEFFECTBY: "adiciona ao teu efeito %1 o valor %2",
	LOOKS_SETEFFECTTO: "altera o teu efeito %1 para %2",
	LOOKS_CLEARGRAPHICEFFECTS: "cancela os teus efeitos gráficos",
	LOOKS_CHANGESIZEBY: "adiciona %1 ao teu tamanho",
	LOOKS_SETSIZETO: "altera o teu tamanho para %1 %",
	LOOKS_GOTOFRONTBACK: "vai para a camada %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "%1 %2 camadas",
	SOUND_PLAY: "toca o som %1",
	SOUND_CHANGEEFFECTBY: "adiciona ao teu efeito %1 o valor %2",
	SOUND_SETEFFECTO: "altera o teu efeito %1 para %2",
	SOUND_CLEAREFFECTS: "cancela todos os teus efeitos sonoros",
	SOUND_PLAYUNTILDONE: "toca o som %1 até terminar",
	SOUND_STOPALLSOUNDS: "pára todos os sons",
	"music.playDrumForBeats": "toca a percussão %1 durante %2 tempos",
	"music.restForBeats": "faz uma pausa de %1 tempos",
	"music.playNoteForBeats": "toca a nota %1 durante %2 tempos",
	"music.setInstrument": "altera a teu instrumento para %1",
	SOUND_CHANGEVOLUMEBY: "adiciona %1 % ao teu volume",
	SOUND_SETVOLUMETO: "altera o teu volume para %1%",
	"music.changeTempo": "adiciona %1 bpm ao teu andamento",
	"music.setTempo": "altera o teu andamento para %1 bpm",
	"pen.clear": "apaga tudo do palco",
	"pen.stamp": "carimba-te",
	"pen.penDown": "baixa a tua caneta",
	"pen.penUp": "levanta a tua caneta",
	"pen.setColor": "altera a cor da tua caneta para %1",
	"pen.changeHue": "adiciona %1 à cor da tua caneta",
	"pen.setColorParam": "altera %1 da tua caneta para %2",
	"pen.changeColorParam": "adiciona a %1 da tua caneta o valor %2",
	"pen.setHue": "altera a cor da tua caneta para %1",
	"pen.changeShade": "adiciona %1 ao tom da tua caneta",
	"pen.setShade": "altera o tom da tua caneta para %1",
	"pen.changeSize": "adiciona %1 à espessura da tua caneta",
	"pen.setSize": "altera a espessura da tua caneta para %1",
	EVENT_WHENFLAGCLICKED: "Quando alguém clicar em @greenFlag",
	EVENT_WHENKEYPRESSED: "Quando alguém pressionar a tecla %1",
	EVENT_WHENTHISSPRITECLICKED: "Quando alguém clicar em ti",
	EVENT_WHENSTAGECLICKED: "Quando alguém clicar no palco",
	EVENT_WHENBACKDROPSWITCHESTO: "Quando o cenário mudar para %1",
	EVENT_WHENGREATERTHAN: "Quando o valor do sensor %1 exceder %2",
	EVENT_WHENBROADCASTRECEIVED: "Quando receberes a mensagem %1",
	EVENT_BROADCAST: "difunde a mensagem %1",
	EVENT_BROADCASTANDWAIT: "difunde a mensagem %1 e espera",
	CONTROL_WAIT: "espera %1 s",
	CONTROL_REPEAT: "repete %1 vezes",
	CONTROL_FOREVER: "repete para sempre",
	CONTROL_IF: "se %1 , então",
	CONTROL_WAITUNTIL: "espera até que %1",
	CONTROL_REPEATUNTIL: "até que %1 , repete",
	CONTROL_STOP: "pára %1",
	CONTROL_STARTASCLONE: "Quando fores criado como um clone",
	CONTROL_CREATECLONEOF: "cria um clone de %1",
	CONTROL_DELETETHISCLONE: "remove-te como clone",
	SENSING_ASKANDWAIT: "pergunta %1 e espera pela resposta",
	"videoSensing.videoToggle": "altera o estado do vídeo para %1",
	"videoSensing.setVideoTransparency": "altera a transparência do vídeo para %1 %",
	"videoSensing.whenMotionGreaterThan": "Quando o movimento do vídeo exceder %1",
	SENSING_RESETTIMER: "reinicia o cronómetro",
	DATA_SETVARIABLETO: "altera %1 para %2",
	DATA_CHANGEVARIABLEBY: "adiciona a %1 o valor %2",
	DATA_SHOWVARIABLE: "mostra a variável %1",
	DATA_HIDEVARIABLE: "esconde a variável %1",
	DATA_ADDTOLIST: "acrescenta %1 a %2",
	DATA_DELETEOFLIST: "remove %1 de %2",
	DATA_DELETEALLOFLIST: "remove tudo de %1",
	MOTION_IFONEDGEBOUNCE: "se estiveres a bater na borda, ressalta",
	DATA_INSERTATLIST: "insere %1 como %2 de %3",
	DATA_REPLACEITEMOFLIST: "substitui %1 de %2 por %3",
	DATA_SHOWLIST: "mostra a lista %1",
	DATA_HIDELIST: "esconde a lista %1",
	SENSING_OF_XPOSITION: "o x da posição",
	SENSING_OF_YPOSITION: "o y da posição",
	SENSING_OF_DIRECTION: "a direcção",
	SENSING_OF_COSTUMENUMBER: "o número do traje",
	LOOKS_COSTUMENUMBERNAME: "%1 do traje",
	SENSING_OF_SIZE: "o tamanho",
	SENSING_OF_BACKDROPNAME: "o nome do cenário",
	LOOKS_BACKDROPNUMBERNAME: "%1 do cenário",
	SENSING_OF_BACKDROPNUMBER: "o número do cenário",
	SOUND_VOLUME: "o volume",
	"music.getTempo": "o andamento",
	SENSING_TOUCHINGOBJECT: "estás a tocar em %1",
	SENSING_TOUCHINGCOLOR: "estás a tocar na cor %1",
	SENSING_COLORISTOUCHINGCOLOR: "a cor %1 está a tocar na cor %2",
	SENSING_DISTANCETO: "a distância até %1",
	SENSING_ANSWER: "a resposta",
	SENSING_KEYPRESSED: "a tecla %1 está a ser pressionada",
	SENSING_MOUSEDOWN: "o botão do rato está pressionado",
	SENSING_MOUSEX: "o x da posição do rato",
	SENSING_MOUSEY: "o y da posição do rato",
	SENSING_SETDRAGMODE: "altera o teu modo de arrasto para %1",
	SENSING_LOUDNESS: "o volume no microfone",
	"videoSensing.videoOn": "%1 do vídeo em %2",
	SENSING_TIMER: "o valor do cronómetro",
	SENSING_OF: "%1 de %2",
	SENSING_CURRENT: "%1 actual",
	SENSING_DAYSSINCE2000: "o número de dias desde 2000",
	SENSING_USERNAME: "o nome de utilizador",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 − %2",
	OPERATORS_MULTIPLY: "%1 × %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "um valor ao acaso entre %1 e %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 e %2",
	OPERATORS_OR: "%1 ou %2",
	OPERATORS_NOT: "é falso que %1",
	OPERATORS_JOIN: "a junção de %1 com %2",
	OPERATORS_LETTEROF: "o caractere %1 de %2",
	OPERATORS_LENGTH: "o comprimento de %1",
	OPERATORS_MOD: "o resto de %1 a dividir por %2",
	OPERATORS_ROUND: "o arredondamento de %1",
	OPERATORS_MATHOP: "%1 de %2",
	OPERATORS_CONTAINS: "%1 contém %2",
	DATA_ITEMOFLIST: "%1 de %2",
	DATA_ITEMNUMOFLIST: "o número do item %1 em %2",
	DATA_LENGTHOFLIST: "o comprimento de %1",
	DATA_LISTCONTAINSITEM: "%1 contém %2",
	CONTROL_ELSE: "senão,",
	SENSING_USERID: "o ID de utilizador",
	SENSING_LOUD: "o som é forte",
	"text2speech.speakAndWaitBlock": "fala %1",
	"text2speech.setVoiceBlock": "altera a voz para %1",
	"text2speech.setLanguageBlock": "altera a língua para %1",
	"translate.translateBlock": "a tradução de %1 para %2",
	"translate.viewerLanguage": "a língua",
	"makeymakey.whenKeyPressed": "Quando a tecla %1 for pressionada",
	"makeymakey.whenKeysPressedInOrder": "Quando %1 forem pressionadas por ordem",
	"microbit.whenButtonPressed": "Quando o botão %1 for pressionado",
	"microbit.isButtonPressed": "o botão %1 está a ser pressionado",
	"microbit.whenGesture": "Quando %1",
	"microbit.displaySymbol": "mostra %1",
	"microbit.displayText": "mostra o texto %1",
	"microbit.clearDisplay": "apaga o ecrã",
	"microbit.whenTilted": "Quando for inclinado %1",
	"microbit.isTilted": "está inclinado %1",
	"microbit.tiltAngle": "o ângulo da inclinação %1",
	"microbit.whenPinConnected": "Quando o pino %1 for ligado",
	"ev3.motorTurnClockwise": "roda o motor %1 para aqui durante %2 s",
	"ev3.motorTurnCounterClockwise": "roda o motor %1para ali durante %2 s",
	"ev3.motorSetPower": "altera a potência do motor %1 para %2%",
	"ev3.getMotorPosition": "a posição do motor %1",
	"ev3.whenButtonPressed": "Quando o botão %1 for pressionado",
	"ev3.whenDistanceLessThan": "Quando a distância for menor que %1",
	"ev3.whenBrightnessLessThan": "Quando o brilho for menor que %1",
	"ev3.buttonPressed": "o botão %1 está a ser pressionado",
	"ev3.getDistance": "a distância",
	"ev3.getBrightness": "o brilho",
	"ev3.beepNote": "toca a nota %1 durante %2s",
	"wedo2.motorOn": "liga %1",
	"wedo2.motorOff": "desliga %1",
	"wedo2.startMotorPower": "altera a potência de %1 para %2",
	"wedo2.setMotorDirection": "altera a direcção de %1 para %2",
	"wedo2.whenDistance": "Quando a distância for %1 %2",
	"wedo2.getDistance": "a distância",
	"wedo2.motorOnFor": "liga %1 durante %2 s",
	"wedo2.setLightHue": "altera a cor da luz para %1",
	"wedo2.playNoteFor": "toca a nota %1 durante %2 s",
	"wedo2.whenTilted": "Quando for inclinado %1",
	"wedo2.isTilted": "está inclinado %1",
	"wedo2.getTiltAngle": "o ângulo da inclinação %1",
	"gdxfor.whenGesture": "Quando %1",
	"gdxfor.whenForcePushedOrPulled": "Quando o sensor de força %1",
	"gdxfor.getForce": "a força",
	"gdxfor.whenTilted": "Quando for inclinado %1",
	"gdxfor.isTilted": "está inclinado %1",
	"gdxfor.getTilt": "o ângulo de inclinação %1",
	"gdxfor.isFreeFalling": "a cair",
	"gdxfor.getSpin": "a velocidade de rotação %1",
	"gdxfor.getAcceleration": "a aceleração %1",
	"boost.motorOnFor": "roda o motor %1 durante %2 s",
	"boost.motorOnForRotation": "roda o motor %1 %2 rotações",
	"boost.motorOn": "liga o motor %1",
	"boost.motorOff": "desliga o motor %1",
	"boost.setMotorPower": "altera a velocidade do motor %1 para %2 %",
	"boost.setMotorDirection": "altera a direcção do motor %1 para %2",
	"boost.getMotorPosition": "a posição do motor %1",
	"boost.whenColor": "Quando vir o tijolo %1",
	"boost.seeingColor": "está a ver um tijolo %1",
	"boost.whenTilted": "Quando for inclinado %1",
	"boost.getTiltAngle": "o ângulo da inclinação %1",
	"boost.setLightHue": "altera a cor da luz para %1"
};
var dropdowns$9 = {
	MOTION_GOTO_POINTER: {
		value: "o ponteiro do rato",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "uma posição ao acaso",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "o ponteiro do rato",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "uma posição ao acaso",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "ponteiro do rato",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "uma direcção ao acaso",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "olha apenas para a esquerda e para a direita",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "não gires",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "gira a toda a volta",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "passa para o teu próximo cenário",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "o cenário anterior",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "um cenário ao acaso",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "cor",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "olho de peixe",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "remoinho",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pixelização",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaico",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "brilho",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "fantasma",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "frontal",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "traseira",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "avança",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "recua",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "o número",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "o nome",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "tom",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "canal esquerdo/direito",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "espaço",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "seta para a esquerda",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "seta para a direita",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "seta para baixo",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "seta para cima",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "qualquer",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "o valor do cronómetro",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "o volume no microfone",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "tudo",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "este guião",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "os teus outros guiões",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "ti mesmo",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "o ponteiro do rato",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "a borda",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "o ponteiro do rato",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "arrastável",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "não arrastável",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "o x da posição",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "o y da posição",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "a direcção",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "o número do traje",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "o nome do traje",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "o tamanho",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "o volume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "o número do cenário",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "o nome do cenário",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "o palco",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "o ano",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "o mês",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "a data",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "o dia da semana",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "a hora",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "o minuto",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "o segundo",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "o valor absoluto",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "o chão (o maior inteiro não superior)",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "o tecto (menor inteiro não inferior)",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "a raiz quadrada",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "o seno",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "o cosseno",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "a tangente",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "o arco-seno",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "o arco-cosseno",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "o arco-tangente",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "o logaritmo natural",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "o logaritmo",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "a exponencial",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Caixa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Bombo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Golpe no Fuste da Tarola",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Prato de Ataque",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Pratos de Choque Abertos",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Pratos de Choque Fechados",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Pandeireta",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Palmas",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Clavas",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Bloco Sonoro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Caneca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triângulo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabaça",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Reco-Reco",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuíca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Piano Eléctrico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Órgão",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Guitarra",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Guitarra Eléctrica",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Baixo",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Violoncelo",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Clarinete",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saxofone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flauta Transversal",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Flauta de Madeira",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagote",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Coro",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibrafone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Caixa de Música",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Tambor de Aço",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Sintetizador Melódico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Sintetizador de Fundo",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "o matiz",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "a saturação",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "o brilho",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "a transparência",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "a direcção",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "o movimento",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "ti mesmo",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "o palco",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "desligado",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "ligado",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "ligado e espelhado",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "alto",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "guincho",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "gigante",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "gatinho",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "cima",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "baixo",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "esquerda",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "direita",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "qualquer",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "saltar",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "se mover",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "for abanado",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "para qualquer lado",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "para trás",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "para a frente",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "para a esquerda",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "para a direita",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "para ali",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "para aqui",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "ao contrário",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "de qualquer cor",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "preto",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "azul",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "verde",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "vermelho",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "branco",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "amarelo",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "para qualquer lado",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "cima",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "para baixo",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "para a esquerda",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "para a direita",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "o motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "o motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "todos os motores",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "o motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "para aqui",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "para ali",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "para trás",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "para qualquer lado",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "para cima",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "para baixo",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "para a esquerda",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "para a direita",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "for puxado",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "for empurrado",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "for abanado",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "começar a cair",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "está com a face para baixo",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "está com a face para cima",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "para a frente",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "para trás",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "para a esquerda",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "para a direita",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "para qualquer lado",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "esquerda cima direita",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "direita cima esquerda",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "esquerda direita",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "direita esquerda",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "cima baixo",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "baixo cima",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "cima direita baixo esquerda",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "cima esquerda baixo direita",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "cima cima baixo baixo esquerda direita esquerda direita",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.de": {
		value: "Alemão",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "Amárico",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Árabe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azerbaijano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Basco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Búlgaro",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Catalão",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Chinês (simplificado)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Chinês (tradicional)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Coreano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Croata",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Curdo (sorâni)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Dinamarquês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Eslovaco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Esloveno",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Espanhol",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estoniano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Finlandês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Francês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Gaélico escocês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galego",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Galês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Grego",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Hebraico",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Holandês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Húngaro",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonésio",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "Inglês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Irlandês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Islandês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Italiano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Japonês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Letão",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Lituano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Norueguês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Persa",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Polonês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Português",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Romeno",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Russo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Sérvio",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Sueco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Tailandês",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Tcheco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Turco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ucraniano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamita",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Árabe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Galês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Dinamarquês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Alemão",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Inglês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Espanhol",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Espanhol (latino-americano)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Francês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Coreano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italiano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Holandês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japonês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norueguês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polonês",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Português",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Português (Brasileiro)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Romeno",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Russo",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Sueco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Chinês (Mandarim)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$9 = [
];
var soundEffects$9 = [
	"tom",
	"canal esquerdo/direito"
];
var microbitWhen$9 = [
	"se mover",
	"for abanado",
	"saltar"
];
var osis$9 = [
	"os teus outros guiões"
];
var definePrefix$9 = [
	"Define"
];
var defineSuffix$9 = [
];
var palette$9 = {
	Motion: "Movimento",
	Looks: "Aparência",
	Sound: "Som",
	Events: "Eventos",
	Control: "Controlo",
	Sensing: "Sensores",
	Operators: "Operadores",
	Variables: "Variáveis",
	"My Blocks": "Os Meus Blocos"
};
var math$9 = [
	"o valor absoluto",
	"o chão (o maior inteiro não superior)",
	"o tecto (menor inteiro não inferior)",
	"a raiz quadrada",
	"o seno",
	"o cosseno",
	"a tangente",
	"o arco-seno",
	"o arco-cosseno",
	"o arco-tangente",
	"o logaritmo natural",
	"o logaritmo",
	"a exponencial",
	"10 ^"
];
var aliases$9 = {
	"gira para a esquerda %1 º": "MOTION_TURNLEFT",
	"gira para a direita %1 º": "MOTION_TURNRIGHT",
	"Quando alguém clicar na bandeira verde": "EVENT_WHENFLAGCLICKED",
	fim: "scratchblocks:end"
};
var name$9 = "Português";
var percentTranslated$9 = 100;
var pt = {
	commands: commands$9,
	dropdowns: dropdowns$9,
	ignorelt: ignorelt$9,
	soundEffects: soundEffects$9,
	microbitWhen: microbitWhen$9,
	osis: osis$9,
	definePrefix: definePrefix$9,
	defineSuffix: defineSuffix$9,
	palette: palette$9,
	math: math$9,
	aliases: aliases$9,
	name: name$9,
	percentTranslated: percentTranslated$9
};

var commands$8 = {
	MOTION_MOVESTEPS: "fai %1 passi",
	MOTION_TURNRIGHT: "ruota @turnRight di %1 gradi",
	MOTION_TURNLEFT: "ruota @turnLeft di %1 gradi",
	MOTION_POINTINDIRECTION: "punta in direzione %1",
	MOTION_POINTTOWARDS: "punta verso %1",
	MOTION_GOTOXY: "vai a x: %1 y: %2",
	MOTION_GOTO: "raggiungi %1",
	MOTION_GLIDESECSTOXY: "scivola in %1 secondi a x: %2 y: %3",
	MOTION_GLIDETO: "scivola in %1 secondi a %2",
	MOTION_CHANGEXBY: "cambia x di %1",
	MOTION_SETX: "vai dove x è %1",
	MOTION_CHANGEYBY: "cambia y di %1",
	MOTION_SETY: "vai dove y è %1",
	MOTION_SETROTATIONSTYLE: "usa stile rotazione %1",
	LOOKS_SAYFORSECS: "dire %1 per %2 secondi",
	LOOKS_SAY: "dire %1",
	LOOKS_THINKFORSECS: "pensa %1 per %2 secondi",
	LOOKS_THINK: "pensa %1",
	LOOKS_SHOW: "mostra",
	LOOKS_HIDE: "nascondi",
	LOOKS_SWITCHCOSTUMETO: "passa al costume %1",
	LOOKS_NEXTCOSTUME: "passa al costume seguente",
	LOOKS_NEXTBACKDROP_BLOCK: "passa allo sfondo seguente",
	LOOKS_SWITCHBACKDROPTO: "passa allo sfondo %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "passa allo sfondo %1 e attendi",
	LOOKS_CHANGEEFFECTBY: "cambia effetto %1 di %2",
	LOOKS_SETEFFECTTO: "porta effetto %1 a %2",
	LOOKS_CLEARGRAPHICEFFECTS: "rimuovi effetti grafici",
	LOOKS_CHANGESIZEBY: "cambia dimensione di %1",
	LOOKS_SETSIZETO: "porta dimensione a %1 %",
	LOOKS_GOTOFRONTBACK: "vai in %1 piano",
	LOOKS_GOFORWARDBACKWARDLAYERS: "vai %1 di %2 livelli",
	SOUND_PLAY: "avvia riproduzione suono %1",
	SOUND_CHANGEEFFECTBY: "cambia effetto %1 di %2",
	SOUND_SETEFFECTO: "porta effetto %1 a %2",
	SOUND_CLEAREFFECTS: "rimuovi effetti audio",
	SOUND_PLAYUNTILDONE: "riproduci suono %1 e attendi la fine",
	SOUND_STOPALLSOUNDS: "ferma tutti i suoni",
	"music.playDrumForBeats": "suona il tamburo %1 per %2 battute",
	"music.restForBeats": "pausa di %1 battute",
	"music.playNoteForBeats": "suona la nota %1 per %2 battute",
	"music.setInstrument": "passa a strumento %1",
	SOUND_CHANGEVOLUMEBY: "cambia volume di %1",
	SOUND_SETVOLUMETO: "porta volume a %1%",
	"music.changeTempo": "cambia tempo di %1",
	"music.setTempo": "imposta tempo a %1 bpm",
	"pen.clear": "pulisci",
	"pen.stamp": "timbra",
	"pen.penDown": "penna giù",
	"pen.penUp": "penna su",
	"pen.setColor": "usa penna di colore %1",
	"pen.changeHue": "cambia colore penna di %1",
	"pen.setColorParam": "porta %1 penna a %2",
	"pen.changeColorParam": "cambia %1 penna di %2",
	"pen.setHue": "usa penna di colore %1",
	"pen.changeShade": "cambia luminosità penna di %1",
	"pen.setShade": "porta luminosità penna a %1",
	"pen.changeSize": "cambia spessore penna di %1",
	"pen.setSize": "usa penna di spessore %1",
	EVENT_WHENFLAGCLICKED: "quando si clicca su @greenFlag",
	EVENT_WHENKEYPRESSED: "quando si preme il tasto %1",
	EVENT_WHENTHISSPRITECLICKED: "quando si clicca questo sprite",
	EVENT_WHENSTAGECLICKED: "quando si clicca sullo Stage",
	EVENT_WHENBACKDROPSWITCHESTO: "quando lo sfondo passa a %1",
	EVENT_WHENGREATERTHAN: "quando %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "quando ricevo %1",
	EVENT_BROADCAST: "invia a tutti %1",
	EVENT_BROADCASTANDWAIT: "invia a tutti %1 e attendi",
	CONTROL_WAIT: "attendi %1 secondi",
	CONTROL_REPEAT: "ripeti %1  volte",
	CONTROL_FOREVER: "per sempre",
	CONTROL_IF: "se %1 allora",
	CONTROL_WAITUNTIL: "attendi fino a quando %1",
	CONTROL_REPEATUNTIL: "ripeti fino a quando %1",
	CONTROL_STOP: "ferma %1",
	CONTROL_STARTASCLONE: "quando vengo clonato",
	CONTROL_CREATECLONEOF: "crea clone di %1",
	CONTROL_DELETETHISCLONE: "elimina questo clone",
	SENSING_ASKANDWAIT: "chiedi %1 e attendi",
	"videoSensing.videoToggle": "%1 il video della webcam",
	"videoSensing.setVideoTransparency": "porta trasparenza webcam a %1",
	"videoSensing.whenMotionGreaterThan": "quando movimento video è > %1",
	SENSING_RESETTIMER: "azzera cronometro",
	DATA_SETVARIABLETO: "porta %1 a %2",
	DATA_CHANGEVARIABLEBY: "cambia %1 di %2",
	DATA_SHOWVARIABLE: "mostra la variabile %1",
	DATA_HIDEVARIABLE: "nascondi la variabile %1",
	DATA_ADDTOLIST: "aggiungi %1 a %2",
	DATA_DELETEOFLIST: "cancella %1 da %2",
	DATA_DELETEALLOFLIST: "cancella tutto da %1",
	MOTION_IFONEDGEBOUNCE: "rimbalza quando tocchi il bordo",
	DATA_INSERTATLIST: "inserisci %1 alla posizione %2 di %3",
	DATA_REPLACEITEMOFLIST: "sostituisci elemento %1 di %2 con %3",
	DATA_SHOWLIST: "mostra la lista %1",
	DATA_HIDELIST: "nascondi la lista %1",
	SENSING_OF_XPOSITION: "posizione x",
	SENSING_OF_YPOSITION: "posizione y",
	SENSING_OF_DIRECTION: "direzione",
	SENSING_OF_COSTUMENUMBER: "numero del costume",
	LOOKS_COSTUMENUMBERNAME: "%1 costume",
	SENSING_OF_SIZE: "dimensione",
	SENSING_OF_BACKDROPNAME: "nome dello sfondo",
	LOOKS_BACKDROPNUMBERNAME: "%1 sfondo",
	SENSING_OF_BACKDROPNUMBER: "numero dello sfondo",
	SOUND_VOLUME: "volume",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "sta toccando %1",
	SENSING_TOUCHINGCOLOR: "sta toccando il colore %1",
	SENSING_COLORISTOUCHINGCOLOR: "il colore %1 sta toccando il colore %2",
	SENSING_DISTANCETO: "distanza da %1",
	SENSING_ANSWER: "risposta",
	SENSING_KEYPRESSED: "tasto %1 premuto",
	SENSING_MOUSEDOWN: "pulsante del mouse premuto",
	SENSING_MOUSEX: "x del mouse",
	SENSING_MOUSEY: "y del mouse",
	SENSING_SETDRAGMODE: "rendi lo sprite %1",
	SENSING_LOUDNESS: "volume microfono",
	"videoSensing.videoOn": "%1 del video su %2",
	SENSING_TIMER: "cronometro",
	SENSING_OF: "%1 di %2",
	SENSING_CURRENT: "%1 attuale",
	SENSING_DAYSSINCE2000: "giorni trascorsi dal 2000",
	SENSING_USERNAME: "username",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "numero a caso tra %1 e %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 e %2",
	OPERATORS_OR: "%1 o %2",
	OPERATORS_NOT: "non %1",
	OPERATORS_JOIN: "unione di %1 e %2",
	OPERATORS_LETTEROF: "lettera %1 di %2",
	OPERATORS_LENGTH: "lunghezza di %1",
	OPERATORS_MOD: "resto della divisione di %1 diviso %2",
	OPERATORS_ROUND: "arrotonda %1",
	OPERATORS_MATHOP: "%1 di %2",
	OPERATORS_CONTAINS: "%1 contiene %2",
	DATA_ITEMOFLIST: "elemento %1 di %2",
	DATA_ITEMNUMOFLIST: "posizione di %1 in %2",
	DATA_LENGTHOFLIST: "lunghezza di %1",
	DATA_LISTCONTAINSITEM: "%1 contiene %2",
	CONTROL_ELSE: "altrimenti",
	SENSING_USERID: "user id",
	SENSING_LOUD: "volume alto?",
	"text2speech.speakAndWaitBlock": "pronuncia %1",
	"text2speech.setVoiceBlock": "usa voce %1",
	"text2speech.setLanguageBlock": "usa lingua %1",
	"translate.translateBlock": "traduci %1 in %2",
	"translate.viewerLanguage": "lingua",
	"makeymakey.whenKeyPressed": "quando si preme il tasto %1",
	"makeymakey.whenKeysPressedInOrder": "quando si preme la sequenza di tasti %1",
	"microbit.whenButtonPressed": "quando pulsante %1 premuto",
	"microbit.isButtonPressed": "pulsante %1 premuto",
	"microbit.whenGesture": "quando %1",
	"microbit.displaySymbol": "mostra %1 su display",
	"microbit.displayText": "mostra testo %1",
	"microbit.clearDisplay": "cancella display",
	"microbit.whenTilted": "quando inclinato %1",
	"microbit.isTilted": "inclinato %1",
	"microbit.tiltAngle": "angolo inclinazione %1",
	"microbit.whenPinConnected": "quando il pin %1 è collegato",
	"ev3.motorTurnClockwise": "aziona il motore %1 in questa direzione per %2 secondi",
	"ev3.motorTurnCounterClockwise": "azione il motore %1 nell'altra direzione per %2 secondi",
	"ev3.motorSetPower": "porta potenza motore %1 a %2 %",
	"ev3.getMotorPosition": "posizione motore %1",
	"ev3.whenButtonPressed": "quando pulsante %1 premuto",
	"ev3.whenDistanceLessThan": "quando distanza < %1",
	"ev3.whenBrightnessLessThan": "quando luminosità < %1",
	"ev3.buttonPressed": "pulsante %1 premuto",
	"ev3.getDistance": "distanza",
	"ev3.getBrightness": "luminosità",
	"ev3.beepNote": "emetti nota %1 per %2 secondi",
	"wedo2.motorOn": "accendi %1",
	"wedo2.motorOff": "spegni %1",
	"wedo2.startMotorPower": "porta potenza %1 a %2",
	"wedo2.setMotorDirection": "porta direzione %1 a %2",
	"wedo2.whenDistance": "quando distanza %1 %2",
	"wedo2.getDistance": "distanza",
	"wedo2.motorOnFor": "accendi %1 per %2 secondi",
	"wedo2.setLightHue": "porta colore luci a %1",
	"wedo2.playNoteFor": "suona nota %1 per %2 secondi",
	"wedo2.whenTilted": "quando inclinato %1",
	"wedo2.isTilted": "inclinato %1",
	"wedo2.getTiltAngle": "angolo inclinazione %1",
	"gdxfor.whenGesture": "quando %1",
	"gdxfor.whenForcePushedOrPulled": "quando il sensore di forza rileva che %1",
	"gdxfor.getForce": "forza",
	"gdxfor.whenTilted": "quando inclinato %1",
	"gdxfor.isTilted": "inclinato %1",
	"gdxfor.getTilt": "angolo inclinazione %1",
	"gdxfor.isFreeFalling": "sto cadendo",
	"gdxfor.getSpin": "velocità di rotazione %1",
	"gdxfor.getAcceleration": "accelerazione %1",
	"boost.motorOnFor": "accendi motore %1 per %2 secondi",
	"boost.motorOnForRotation": "accendi motore %1 per %2 rotazioni",
	"boost.motorOn": "accendi motore %1",
	"boost.motorOff": "spegni motore %1",
	"boost.setMotorPower": "porta potenza %1 a %2",
	"boost.setMotorDirection": "porta direzione motore %1 a %2",
	"boost.getMotorPosition": "posizione motore %1",
	"boost.whenColor": "quando vedo mattoncino %1",
	"boost.seeingColor": "vedo mattoncino %1",
	"boost.whenTilted": "quando inclinato %1",
	"boost.getTiltAngle": "angolo inclinazione %1",
	"boost.setLightHue": "porta colore luci a %1"
};
var dropdowns$8 = {
	MOTION_GOTO_POINTER: {
		value: "puntatore del mouse",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "posizione a caso",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "puntatore del mouse",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "posizione a caso",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "puntatore del mouse",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "direzione a caso",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "sinistra-destra",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "non ruotare",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "può ruotare",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "seguente",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "precedente",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "scelto a caso",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "colore",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "fish-eye",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "mulinello",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "effetto pixel",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaico",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "luminosità",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "fantasma",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "primo",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "secondo",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "avanti",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "indietro",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "numero",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "nome",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "frequenza",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "panning sinistra/destra",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "spazio",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "freccia sinistra",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "freccia destra",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "freccia giù",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "freccia su",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "qualunque",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "cronometro",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "volume microfono",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "tutto",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "questo script",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "tutti gli altri script dello sprite",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "me stesso",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "puntatore del mouse",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "bordo",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "puntatore del mouse",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "trascinabile",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "non trascinabile",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "posizione x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "posizione y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "direzione",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "numero del costume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "nome del costume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "dimensione",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "numero dello sfondo",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "nome dello sfondo",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Stage",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "anno",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "mese",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "data",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "giorno della settimana",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "ora",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minuto",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "secondo",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "valore assoluto",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "intero inferiore",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "intero superiore",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "radice quadrata",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sen",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "arcsen",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "arccos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "arctan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Rullante",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Grancassa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Bacchette",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Piatto Crash",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Hi-Hat aperto",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Charleston",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamburello",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Battimano",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Legnetti",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Blocchetto di legno",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Campanaccio",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangolo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabassa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Guiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuíca",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Piano elettrico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Organo",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Chitarra",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Chitarra elettrica",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Basso elettrico",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Violoncello",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Clarinetto",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Sassofono",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flauto",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Flauto di legno",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagotto",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Coro",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibrafono",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Carillon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Steel Drum",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Sintetizzatore",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Sintetizzatore (suoni di sottofondo)",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "colore",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "intensità colore",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "luminosità",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "trasparenza",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "direzione",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "movimento",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "sprite",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "stage",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "spegni",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "accendi",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "accendi e inverti orizzontalmente",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "da contralto",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "da tenore",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "stridula",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "da gigante",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "da gattino",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "su",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "giù",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "a sinistra",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "a destra",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "in direzione qualunque",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "salta",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "si muove",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "si scuote",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "in direzione qualunque",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "indietro",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "in avanti",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "a sinistra",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "a destra",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "da quella parte",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "da questa parte",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "inversa",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "colore qualunque",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "nero",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "blu",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "verde",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "rosso",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "bianco",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "giallo",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "in direzione qualunque",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "in su",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "in giù",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "a sinistra",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "a destra",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "motore A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "motore B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "tutti i motori",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motore",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "da questa parte",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "da quella parte",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "inversa",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "in direzione qualunque",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "in su",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "in giù",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "a sinistra",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "a destra",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "vengo tirato",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "sono spinto",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "è scosso",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "inizia a cadere",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "è a faccia in giù",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "è a faccia in su",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "in avanti",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "indietro",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "a sinistra",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "a destra",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "in direzione qualunque",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "a sinistra su a destra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "a destra su a sinistra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "a sinistra a destra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "a destra a sinistra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "su giù",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "giù su",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "su a destra giù a sinistra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "su a sinistra giù a destra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "su su giù giù a sinistra a destra a sinistra a destra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.am": {
		value: "Amarico",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Arabo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azero",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Basco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Bulgaro",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Catalano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Ceco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Cinese (semplificato)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Cinese (tradizionale)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Coreano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Croato",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Curdo (Sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Danese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Ebraico",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estone",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Finlandese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Francese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Gaelico scozzese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galiziano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Gallese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Giapponese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Greco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonesiano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "Inglese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Irlandese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Islandese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Italiano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Lettone",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Lituano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Norvegese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Olandese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Persiano",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Polacco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portoghese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Rumeno",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Russo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Serbo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Slovacco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Sloveno",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Spagnolo",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Svedese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "Tedesco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Thai",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Turco",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ucraino",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Ungherese",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamita",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arabo",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Gallese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Danese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Tedesco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Inglese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Spagnolo",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Spagnolo (latinoamericano)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Francese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Coreano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italiano",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Olandese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Giapponese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norvegese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polacco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portoghese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portoghese (brasiliano)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Rumeno",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Russo",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Svedese",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turco",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Cinese (mandarino)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$8 = [
];
var soundEffects$8 = [
	"frequenza",
	"panning sinistra/destra"
];
var microbitWhen$8 = [
	"si muove",
	"si scuote",
	"salta"
];
var osis$8 = [
	"tutti gli altri script dello sprite"
];
var definePrefix$8 = [
	"definisci"
];
var defineSuffix$8 = [
];
var palette$8 = {
	Motion: "Movimento",
	Looks: "Aspetto",
	Sound: "Suono",
	Events: "Situazioni",
	Control: "Controllo",
	Sensing: "Sensori",
	Operators: "Operatori",
	Variables: "Variabili",
	"My Blocks": "I Miei Blocchi"
};
var math$8 = [
	"valore assoluto",
	"intero inferiore",
	"intero superiore",
	"radice quadrata",
	"sen",
	"cos",
	"tan",
	"arcsen",
	"arccos",
	"arctan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$8 = {
	"ruota in senso antiorario di %1 gradi": "MOTION_TURNLEFT",
	"ruota in senso orario di %1 gradi": "MOTION_TURNRIGHT",
	"quando si clicca sulla bandiera verde": "EVENT_WHENFLAGCLICKED",
	fine: "scratchblocks:end"
};
var name$8 = "Italiano";
var percentTranslated$8 = 100;
var it = {
	commands: commands$8,
	dropdowns: dropdowns$8,
	ignorelt: ignorelt$8,
	soundEffects: soundEffects$8,
	microbitWhen: microbitWhen$8,
	osis: osis$8,
	definePrefix: definePrefix$8,
	defineSuffix: defineSuffix$8,
	palette: palette$8,
	math: math$8,
	aliases: aliases$8,
	name: name$8,
	percentTranslated: percentTranslated$8
};

var commands$7 = {
	MOTION_MOVESTEPS: "זוז %1 צעדים",
	MOTION_TURNRIGHT: "הסתובב @turnRight %1 מעלות",
	MOTION_TURNLEFT: "הסתובב @turnLeft %1 מעלות",
	MOTION_POINTINDIRECTION: "פנה לכיוון %1",
	MOTION_POINTTOWARDS: "פנה לכיוון של %1",
	MOTION_GOTOXY: "קפוץ אל x: %1 y: %2",
	MOTION_GOTO: "קפוץ אל %1",
	MOTION_GLIDESECSTOXY: "גלוש %1 שניות אל x: %2 y: %3",
	MOTION_GLIDETO: "גלוש %1 שניות אל %2",
	MOTION_CHANGEXBY: "שנה את ערך x ב %1",
	MOTION_SETX: "קבע את ערך x ל %1",
	MOTION_CHANGEYBY: "שנה את ערך y ב %1",
	MOTION_SETY: "קבע את ערך y ל %1",
	MOTION_SETROTATIONSTYLE: "קבע אופן סיבוב %1",
	LOOKS_SAYFORSECS: "אמור %1 למשך %2 שניות",
	LOOKS_SAY: "אמור %1",
	LOOKS_THINKFORSECS: "חשוב %1 למשך %2 שניות",
	LOOKS_THINK: "חשוב %1",
	LOOKS_SHOW: "הצג",
	LOOKS_HIDE: "הסתר",
	LOOKS_SWITCHCOSTUMETO: "קבע תלבושת ל %1",
	LOOKS_NEXTCOSTUME: "התלבושת הבאה",
	LOOKS_NEXTBACKDROP_BLOCK: "הרקע הבא",
	LOOKS_SWITCHBACKDROPTO: "קבע רקע ל %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "החלף רקע ל %1 וחכה",
	LOOKS_CHANGEEFFECTBY: "שנה אפקט %1 ב %2",
	LOOKS_SETEFFECTTO: "קבע אפקט %1 ל %2",
	LOOKS_CLEARGRAPHICEFFECTS: "נקה אפקטים",
	LOOKS_CHANGESIZEBY: "שנה גודל ב %1",
	LOOKS_SETSIZETO: "קבע גודל ל %1 %",
	LOOKS_GOTOFRONTBACK: "העבר לשכבה ה %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "העבר %2 שכבות %1",
	SOUND_PLAY: "נגן צליל %1",
	SOUND_CHANGEEFFECTBY: "שנה אפקט %1 ב %2",
	SOUND_SETEFFECTO: "קבע אפקט %1 ל %2",
	SOUND_CLEAREFFECTS: "נקה אפקטים קוליים",
	SOUND_PLAYUNTILDONE: "נגן צליל %1 עד לסיום",
	SOUND_STOPALLSOUNDS: "הפסק את כל הצלילים",
	"music.playDrumForBeats": "נגן בתוף %1 למשך %2 פעימות",
	"music.restForBeats": "נוח למשך %1 פעימות",
	"music.playNoteForBeats": "נגן תו %1 במשך %2 פעימות",
	"music.setInstrument": "קבע כלי נגינה ל %1",
	SOUND_CHANGEVOLUMEBY: "שנה עוצמת קול ב %1",
	SOUND_SETVOLUMETO: "קבע עוצמת קול ל %1%",
	"music.changeTempo": "שנה קצב ב %1",
	"music.setTempo": "קבע קצב ל %1",
	"pen.clear": "מחק הכול",
	"pen.stamp": "חתום",
	"pen.penDown": "עט מטה",
	"pen.penUp": "עט מעלה",
	"pen.setColor": "קבע צבע עט ל%1",
	"pen.changeHue": "שנה צבע עט ב%1",
	"pen.setColorParam": "קבע %1 עט ל%2",
	"pen.changeColorParam": "שנה %1 עט ב%2",
	"pen.setHue": "קבע צבע עט ל%1",
	"pen.changeShade": "שנה הצללת עט ב%1",
	"pen.setShade": "קבע הצללת עט ל%1",
	"pen.changeSize": "שנה גודל עט ב%1",
	"pen.setSize": "קבע גודל עט ל%1",
	EVENT_WHENFLAGCLICKED: "כאשר לוחצים על @greenFlag",
	EVENT_WHENKEYPRESSED: "כאשר נלחץ מקש %1",
	EVENT_WHENTHISSPRITECLICKED: "כאשר לוחצים על דמות זו",
	EVENT_WHENSTAGECLICKED: "כאשר לוחצים על הבמה",
	EVENT_WHENBACKDROPSWITCHESTO: "כאשר הרקע משתנה ל %1",
	EVENT_WHENGREATERTHAN: "כאשר %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "כאשר מתקבל מסר %1",
	EVENT_BROADCAST: "שדר מסר %1",
	EVENT_BROADCASTANDWAIT: "שדר מסר %1 וחכה",
	CONTROL_WAIT: "חכה %1 שניות",
	CONTROL_REPEAT: "חזור  %1 פעמים",
	CONTROL_FOREVER: "לעולמים",
	CONTROL_IF: "אם %1 אז",
	CONTROL_WAITUNTIL: "חכה עד ש %1",
	CONTROL_REPEATUNTIL: "חזור עד ש %1",
	CONTROL_STOP: "עצור %1",
	CONTROL_STARTASCLONE: "כאשר מופעל ככפיל",
	CONTROL_CREATECLONEOF: "יצירת כפיל של %1",
	CONTROL_DELETETHISCLONE: "מחק כפיל זה",
	SENSING_ASKANDWAIT: "שאל %1 והמתן",
	"videoSensing.videoToggle": "%1 את המצלמה",
	"videoSensing.setVideoTransparency": "קבע שקיפות מצלמה ל %1",
	"videoSensing.whenMotionGreaterThan": "כאשר התנועה במצלמה > %1",
	SENSING_RESETTIMER: "אפס מונה",
	DATA_SETVARIABLETO: "קבע %1 ל %2",
	DATA_CHANGEVARIABLEBY: "שנה %1 ב %2",
	DATA_SHOWVARIABLE: "הצג משתנה %1",
	DATA_HIDEVARIABLE: "הסתר משתנה %1",
	DATA_ADDTOLIST: "הוסף %1 ל %2",
	DATA_DELETEOFLIST: "מחק פריט %1 מתוך %2",
	DATA_DELETEALLOFLIST: "מחק הכול מ%1",
	MOTION_IFONEDGEBOUNCE: "בנגיעה במסגרת שנה כיוון",
	DATA_INSERTATLIST: "הכנס %1 במקום %2 של %3",
	DATA_REPLACEITEMOFLIST: "קבע פריט %1 של %2 ל %3",
	DATA_SHOWLIST: "הצג רשימה %1",
	DATA_HIDELIST: "הסתר רשימה %1",
	SENSING_OF_XPOSITION: "מיקום על ציר x",
	SENSING_OF_YPOSITION: "מיקום על ציר y",
	SENSING_OF_DIRECTION: "כיוון",
	SENSING_OF_COSTUMENUMBER: "מספר תלבושת",
	LOOKS_COSTUMENUMBERNAME: "%1 תלבושת",
	SENSING_OF_SIZE: "גודל",
	SENSING_OF_BACKDROPNAME: "שם רקע",
	LOOKS_BACKDROPNUMBERNAME: "%1 רקע",
	SENSING_OF_BACKDROPNUMBER: "מספר רקע",
	SOUND_VOLUME: "עוצמת קול",
	"music.getTempo": "קצב",
	SENSING_TOUCHINGOBJECT: "נוגע ב %1?",
	SENSING_TOUCHINGCOLOR: "נוגע בצבע  %1?",
	SENSING_COLORISTOUCHINGCOLOR: "צבע %1 נוגע בצבע %2?",
	SENSING_DISTANCETO: "מרחק אל %1",
	SENSING_ANSWER: "תשובה",
	SENSING_KEYPRESSED: "מקש %1 נלחץ?",
	SENSING_MOUSEDOWN: "עכבר נלחץ?",
	SENSING_MOUSEX: "מיקום עכבר בציר x",
	SENSING_MOUSEY: "מיקום עכבר בציר y",
	SENSING_SETDRAGMODE: "קבע מצב גרירה ל %1",
	SENSING_LOUDNESS: "עוצמת קול",
	"videoSensing.videoOn": "%1 של המצלמה על %2",
	SENSING_TIMER: "שעון עצר",
	SENSING_OF: "%1 של %2",
	SENSING_CURRENT: "%1 נוכחית",
	SENSING_DAYSSINCE2000: "ימים מאז 2000",
	SENSING_USERNAME: "שם משתמש",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%2 - %1",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%2 / %1",
	OPERATORS_RANDOM: "בחר מספר אקראי בין %1 ל %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 וגם %2",
	OPERATORS_OR: "%1 או %2",
	OPERATORS_NOT: "לא %1",
	OPERATORS_JOIN: "חבר %1 %2",
	OPERATORS_LETTEROF: "אות %1 של %2",
	OPERATORS_LENGTH: "האורך של %1",
	OPERATORS_MOD: "%1 מודולו %2",
	OPERATORS_ROUND: "עגל %1",
	OPERATORS_MATHOP: "%1 של %2",
	OPERATORS_CONTAINS: "%1 מכיל %2?",
	DATA_ITEMOFLIST: "פריט %1 של %2",
	DATA_ITEMNUMOFLIST: "מספר פריט של %1 ב- %2",
	DATA_LENGTHOFLIST: "האורך של %1",
	DATA_LISTCONTAINSITEM: "%1 מכיל %2?",
	CONTROL_ELSE: "אחרת",
	SENSING_USERID: "זהות המשתמש",
	SENSING_LOUD: "עוצמת קול?",
	"text2speech.speakAndWaitBlock": "הקרא %1",
	"text2speech.setVoiceBlock": "קבע קול ל %1",
	"text2speech.setLanguageBlock": "קבע שפה ל%1",
	"translate.translateBlock": "תרגם%1 ל%2",
	"translate.viewerLanguage": "שפה",
	"makeymakey.whenKeyPressed": "כאשר לוחצים על מקש %1",
	"makeymakey.whenKeysPressedInOrder": "כאשר מקישים את הרצף %1",
	"microbit.whenButtonPressed": "כאשר לוחצים על כפתור %1",
	"microbit.isButtonPressed": "לחצו על כפתור %1‏ ?",
	"microbit.whenGesture": "כאשר %1",
	"microbit.displaySymbol": "הצג %1",
	"microbit.displayText": "הצגת טקסט %1",
	"microbit.clearDisplay": "נקה תצוגה",
	"microbit.whenTilted": "כאשר מוטה %1",
	"microbit.isTilted": "נוטה%1?",
	"microbit.tiltAngle": "זווית הטיה %1",
	"microbit.whenPinConnected": "כאשר פין %1 מחובר",
	"ev3.motorTurnClockwise": "סובב את מנוע%1 בכיוון זה במשך %2 שניות",
	"ev3.motorTurnCounterClockwise": "סובב את מנוע %1 בכיוון ההוא במשך %2 שניות",
	"ev3.motorSetPower": "קבע מנוע%1 להספק של %2 %",
	"ev3.getMotorPosition": "מצב מנוע ב%1",
	"ev3.whenButtonPressed": "כאשר לוחצים על כפתור %1",
	"ev3.whenDistanceLessThan": "כאשר מרחק < %1",
	"ev3.whenBrightnessLessThan": "כאשר בהירות <%1",
	"ev3.buttonPressed": "כפתור %1 נלחץ?",
	"ev3.getDistance": "מרחק",
	"ev3.getBrightness": "בהירות",
	"ev3.beepNote": "צפצף תו %1ל%2שניות",
	"wedo2.motorOn": "הדלקת %1",
	"wedo2.motorOff": "כיבוי %1",
	"wedo2.startMotorPower": "קבע הספק של%1 ל %2",
	"wedo2.setMotorDirection": "קבע כיוון%1 ל %2",
	"wedo2.whenDistance": "כאשר מרחק %1 %2",
	"wedo2.getDistance": "מרחק",
	"wedo2.motorOnFor": "הדלקת%1 למשך %2 שניות",
	"wedo2.setLightHue": "קבע צבע אור ל %1",
	"wedo2.playNoteFor": "ניגון תו %1 למשך %2 שניות",
	"wedo2.whenTilted": "כאשר מוטה %1",
	"wedo2.isTilted": "מוטה%1?",
	"wedo2.getTiltAngle": "זווית הטיה %1",
	"gdxfor.whenGesture": "כאשר %1",
	"gdxfor.whenForcePushedOrPulled": "כאשר חיישן הכוח %1",
	"gdxfor.getForce": "כוח",
	"gdxfor.whenTilted": "כאשר מוטה %1",
	"gdxfor.isTilted": "מוטה %1",
	"gdxfor.getTilt": "זווית הטיה %1",
	"gdxfor.isFreeFalling": "נופל?",
	"gdxfor.getSpin": "מהירות סיבוב %1",
	"gdxfor.getAcceleration": "תאוצה %1",
	"boost.motorOnFor": "הדלקת %1 למשך %2 שניות",
	"boost.motorOnForRotation": "הדלק מנוע %1 למשך %2 סיבובים",
	"boost.motorOn": "הדלק את מנוע %1",
	"boost.motorOff": "כבה את מנוע %1",
	"boost.setMotorPower": "קבע מהירות של %1 ל%2 %",
	"boost.setMotorDirection": "קבע כיוון %1 ל%2",
	"boost.getMotorPosition": "מיקום מנוע %1",
	"boost.whenColor": "כאשר רואים לבנה בצבע %1",
	"boost.seeingColor": "רואים לבנה בצבע %1?",
	"boost.whenTilted": "כאשר מוטה %1",
	"boost.getTiltAngle": "זווית הטיה %1",
	"boost.setLightHue": "קבע צבע אור ל %1"
};
var dropdowns$7 = {
	MOTION_GOTO_POINTER: {
		value: "מצביע העכבר",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "מיקום אקראי",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "סמן העכבר",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "מיקום אקראי",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "מצביע העכבר",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "כיוון אקראי",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "שמאל-ימין",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "בטל סיבוב",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "מסביב",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "הרקע הבא",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "הרקע הקודם",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "רקע אקראי",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "צבע",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "עין הדג",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "סחרור",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "פיקסלים",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "פסיפס",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "בהירות",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "רוח רפאים",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "קדמית",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "אחורית",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "קדימה",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "אחורה",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "מספר",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "שם",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "גובה צליל",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "ערוץ שמע שמאלי/ימני",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "רווח",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "חץ שמאלי",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "חץ ימני",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "חץ מטה",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "חץ מעלה",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "כל",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "שעון עצר",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "עוצמת קול",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "הכול",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "תסריט זה",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "תסריטים אחרים בדמות",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "עצמי",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "סמן העכבר",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "קצה",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "סמן העכבר",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "ניתן לגרירה",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "לא ניתן לגרירה",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "מיקום על ציר x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "מיקום על ציר y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "כיוון",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "מספר תלבושת",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "שם תלבושת",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "גודל",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "עוצמת קול",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "מספר רקע",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "שם רקע",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "במה",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "שנה",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "חודש",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "תאריך",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "יום בשבוע",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "שעה",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "דקה",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "שניה",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "ערך מוחלט",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "עיגול למטה",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "עיגול למעלה",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "שורש ריבועי",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "‏e בחזקה",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "‏10 בחזקה",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) תוף סנר",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) תוף בס",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) מקל על צד התוף",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) מצילתיים",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) מצילה פתוחה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) מצילה סגורה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) תוף מרים",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) מחיאת כף",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) מקלות הקשה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) לבנת עץ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) פעמון פרה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) משולש",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) בונגו",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) קונגה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) קבסה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) גווירו",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) ויברסלאפ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) קויקה",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) פסנתר",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) פסנתר חשמלי",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) אורגן",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) גיטרה",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) גיטרה חשמלית",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) בס",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) פיציקטו",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) צ'לו",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) טרומבון",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) קלרינט",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) סקסופון",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) חליל",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) חליל עץ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) בסון",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) מקהלה",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) ויברפון",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) תיבת נגינה",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) תוף פלדה",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) מרימבה",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) סינתיסייזר לד",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) סינתיסייזר פאד",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "צבע",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "רווי צבע",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "בהירות",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "שקיפות",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "כיוון",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "תנועה",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "דמות",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "במה",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "כבה",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "הפעל",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "הפעל כתמונת ראי",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "אלט",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "טנור",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "ציוץ",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "ענק",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "חתלתול",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "מעלה",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "מטה",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "שמאלה",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "ימינה",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "כל",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "קפץ",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "זז",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "רעד",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "כל",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "אחורית",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "קדמית",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "שמאלה",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "ימינה",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "בדרך ההיא",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "בדרך הזאת",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "הפוך",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "צבע כלשהו",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "שחור",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "כחול",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "ירוק",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "אדום",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "לבן",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "צהוב",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "הכל",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "למעלה",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "למטה",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "שמאלה",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "ימינה",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "מנוע A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "מנוע B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "כל המנועים",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "מנוע",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "בדרך הזאת",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "בדרך ההיא",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "הפוך",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "כל",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "מעלה",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "מטה",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "שמאלה",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "ימינה",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "נמשך",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "נדחף",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "נוער",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "החל ליפול",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "פונה כלפי מטה",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "פונה כלפי מעלה",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "קדימה",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "לאחור",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "שמאלה",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "ימינה",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "הכל",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "שמאלה מעלה ימינה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "ימינה מעלה שמאלה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "שמאלה ימינה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "ימינה שמאלה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "מעלה מטה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "מטה מעלה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "מעלה ימינה מטה שמאלה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "מעלה שמאלה מטה ימינה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "מעלה מעלה מטה מטה שמאלה ימינה שמאלה ימינה",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.uk": {
		value: "אוקראינית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "אזרית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "איטלקית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "אינדונזית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "איסלנדית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "אירית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "אמהרית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "אנגלית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "אסטונית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "באסקית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "בולגרית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "גאלית סקוטית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "גליציאנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "גרמנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "דנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "הולנדית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "הונגרית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "וולשית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "וייטנאמית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "זולו",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "טורקית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "יוונית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "יפנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "כורדית (סורנית)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "לטבית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "ליטאית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "מאורית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "נורווגית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "סינית (מסורתית)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "‏סינית (פשוטה)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "סלובנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "סלובקית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "ספרדית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "סרבית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "עברית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "ערבית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "פולנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "פורטוגזית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "פינית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "פרסית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "צ'כית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "צרפתית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "קוריאנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "קטלאנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "קרואטית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "רומנית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "רוסית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "שוודית",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "תאית",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "ערבית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "וולשית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "דנית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "גרמנית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "אנגלית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "ספרדית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "ספרדית (אמריקה הלטינית)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "צרפתית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "קוריאנית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "הינדי",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "איסלנדית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "איטלקית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "הולנדית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "יפנית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "נורווגית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "פולנית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "פורטוגזית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "פורטוגזית (ברזילאית)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "רומנית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "רוסית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "שוודית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "טורקית",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "סינית (מנדרינית)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$7 = [
];
var soundEffects$7 = [
	"גובה צליל",
	"ערוץ שמע שמאלי/ימני"
];
var microbitWhen$7 = [
	"זז",
	"רעד",
	"קפץ"
];
var osis$7 = [
	"תסריטים אחרים בדמות"
];
var definePrefix$7 = [
	"הגדר"
];
var defineSuffix$7 = [
];
var palette$7 = {
	Motion: "תנועה",
	Looks: "מראה",
	Sound: "צלילים",
	Events: "אירועים",
	Control: "בקרה",
	Sensing: "חיישנים",
	Operators: "מפעילים",
	Variables: "משתנים",
	"My Blocks": "הלבנים שלי"
};
var math$7 = [
	"ערך מוחלט",
	"עיגול למטה",
	"עיגול למעלה",
	"שורש ריבועי",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"‏e בחזקה",
	"‏10 בחזקה"
];
var aliases$7 = {
	"הסתובב שמאל %1 מעלות": "MOTION_TURNLEFT",
	"הסתובב ימינה %1 מעלות": "MOTION_TURNRIGHT",
	"כאשר לוחצים על דגל ירוק": "EVENT_WHENFLAGCLICKED",
	"סוף": "scratchblocks:end"
};
var name$7 = "עִבְרִית";
var percentTranslated$7 = 100;
var he = {
	commands: commands$7,
	dropdowns: dropdowns$7,
	ignorelt: ignorelt$7,
	soundEffects: soundEffects$7,
	microbitWhen: microbitWhen$7,
	osis: osis$7,
	definePrefix: definePrefix$7,
	defineSuffix: defineSuffix$7,
	palette: palette$7,
	math: math$7,
	aliases: aliases$7,
	name: name$7,
	percentTranslated: percentTranslated$7
};

var commands$6 = {
	MOTION_MOVESTEPS: "%1 만큼 움직이기",
	MOTION_TURNRIGHT: "@turnRight 방향으로 %1 도 돌기",
	MOTION_TURNLEFT: "@turnLeft 방향으로 %1 도 돌기",
	MOTION_POINTINDIRECTION: "%1 도 방향 보기",
	MOTION_POINTTOWARDS: "%1 쪽 보기",
	MOTION_GOTOXY: "x: %1 y: %2 (으)로 이동하기",
	MOTION_GOTO: "%1 (으)로 이동하기",
	MOTION_GLIDESECSTOXY: "%1 초 동안 x: %2 y: %3 (으)로 이동하기",
	MOTION_GLIDETO: "%1 초 동안 %2 (으)로 이동하기",
	MOTION_CHANGEXBY: "x좌표를 %1 만큼 바꾸기",
	MOTION_SETX: "x좌표를 %1 (으)로 정하기",
	MOTION_CHANGEYBY: "y좌표를 %1 만큼 바꾸기",
	MOTION_SETY: "y좌표를 %1 (으)로 정하기",
	MOTION_SETROTATIONSTYLE: "회전 방식을 %1 (으)로 정하기",
	LOOKS_SAYFORSECS: "%1 을(를) %2 초 동안 말하기",
	LOOKS_SAY: "%1 말하기",
	LOOKS_THINKFORSECS: "%1 을(를) %2 초 동안 생각하기",
	LOOKS_THINK: "%1 생각하기",
	LOOKS_SHOW: "보이기",
	LOOKS_HIDE: "숨기기",
	LOOKS_SWITCHCOSTUMETO: "모양을 %1 (으)로 바꾸기",
	LOOKS_NEXTCOSTUME: "다음 모양으로 바꾸기",
	LOOKS_NEXTBACKDROP_BLOCK: "다음 배경으로 바꾸기",
	LOOKS_SWITCHBACKDROPTO: "배경을 %1 (으)로 바꾸기",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "배경을 %1 (으)로 바꾸고 기다리기",
	LOOKS_CHANGEEFFECTBY: "%1 효과를 %2 만큼 바꾸기",
	LOOKS_SETEFFECTTO: "%1 효과를 %2 (으)로 정하기",
	LOOKS_CLEARGRAPHICEFFECTS: "그래픽 효과 지우기",
	LOOKS_CHANGESIZEBY: "크기를 %1 만큼 바꾸기",
	LOOKS_SETSIZETO: "크기를 %1 %로 정하기",
	LOOKS_GOTOFRONTBACK: "%1 으로 순서 바꾸기",
	LOOKS_GOFORWARDBACKWARDLAYERS: "%1 %2 단계 보내기",
	SOUND_PLAY: "%1 재생하기",
	SOUND_CHANGEEFFECTBY: "%1 효과를 %2 만큼 바꾸기",
	SOUND_SETEFFECTO: "%1 효과를 %2 로 정하기",
	SOUND_CLEAREFFECTS: "소리 효과 지우기",
	SOUND_PLAYUNTILDONE: "%1 끝까지 재생하기",
	SOUND_STOPALLSOUNDS: "모든 소리 끄기",
	"music.playDrumForBeats": "%1번 타악기를 %2 박자로 연주하기",
	"music.restForBeats": "%1 박자 쉬기",
	"music.playNoteForBeats": "%1번 음을 %2 박자로 연주하기",
	"music.setInstrument": "악기를 %1(으)로 정하기",
	SOUND_CHANGEVOLUMEBY: "음량을 %1 만큼 바꾸기",
	SOUND_SETVOLUMETO: "음량을 %1%로 정하기",
	"music.changeTempo": "빠르기를 %1 만큼 바꾸기",
	"music.setTempo": "빠르기를 %1(으)로 정하기",
	"pen.clear": "모두 지우기",
	"pen.stamp": "도장찍기",
	"pen.penDown": "펜 내리기",
	"pen.penUp": "펜 올리기",
	"pen.setColor": "펜 색깔을 %1(으)로 정하기",
	"pen.changeHue": "펜 색깔을 %1만큼 바꾸기",
	"pen.setColorParam": "펜 %1을(를) %2(으)로 정하기",
	"pen.changeColorParam": "펜 %1을(를) %2만큼 바꾸기",
	"pen.setHue": "펜 색깔을 %1(으)로 정하기",
	"pen.changeShade": "펜 명암을 %1 만큼 바꾸기",
	"pen.setShade": "펜 명암을 %1(으)로 정하기",
	"pen.changeSize": "펜 굵기를 %1 만큼 바꾸기",
	"pen.setSize": "펜 굵기를 %1(으)로 정하기",
	EVENT_WHENFLAGCLICKED: "@greenFlag 클릭했을 때",
	EVENT_WHENKEYPRESSED: "%1 키를 눌렀을 때",
	EVENT_WHENTHISSPRITECLICKED: "이 스프라이트를 클릭했을 때",
	EVENT_WHENSTAGECLICKED: "무대를 클릭했을 때",
	EVENT_WHENBACKDROPSWITCHESTO: "배경이 %1 (으)로 바뀌었을 때",
	EVENT_WHENGREATERTHAN: "%1 > %2 일 때",
	EVENT_WHENBROADCASTRECEIVED: "%1 신호를 받았을 때",
	EVENT_BROADCAST: "%1 신호 보내기",
	EVENT_BROADCASTANDWAIT: "%1 신호 보내고 기다리기",
	CONTROL_WAIT: "%1 초 기다리기",
	CONTROL_REPEAT: "%1 번 반복하기",
	CONTROL_FOREVER: "무한 반복하기",
	CONTROL_IF: "만약 %1 (이)라면",
	CONTROL_WAITUNTIL: "%1 까지 기다리기",
	CONTROL_REPEATUNTIL: "%1 까지 반복하기",
	CONTROL_STOP: "멈추기 %1",
	CONTROL_STARTASCLONE: "복제되었을 때",
	CONTROL_CREATECLONEOF: "%1 복제하기",
	CONTROL_DELETETHISCLONE: "이 복제본 삭제하기",
	SENSING_ASKANDWAIT: "%1 라고 묻고 기다리기",
	"videoSensing.videoToggle": "비디오 %1",
	"videoSensing.setVideoTransparency": "비디오 투명도를 %1 (으)로 정하기",
	"videoSensing.whenMotionGreaterThan": "비디오 동작 > %1일 때",
	SENSING_RESETTIMER: "타이머 초기화",
	DATA_SETVARIABLETO: "%1 을(를) %2 로 정하기",
	DATA_CHANGEVARIABLEBY: "%1 을(를) %2 만큼 바꾸기",
	DATA_SHOWVARIABLE: "%1 변수 보이기",
	DATA_HIDEVARIABLE: "%1 변수 숨기기",
	DATA_ADDTOLIST: "%1 을(를) %2 에 추가하기",
	DATA_DELETEOFLIST: "%1 번째 항목을 %2 에서 삭제하기",
	DATA_DELETEALLOFLIST: "%1 의 항목을 모두 삭제하기",
	MOTION_IFONEDGEBOUNCE: "벽에 닿으면 튕기기",
	DATA_INSERTATLIST: "%1 을(를) %3 리스트의 %2 번째에 넣기",
	DATA_REPLACEITEMOFLIST: "%2 리스트의 %1 번째 항목을 %3 으로 바꾸기",
	DATA_SHOWLIST: "%1 리스트 보이기",
	DATA_HIDELIST: "%1 리스트 숨기기",
	SENSING_OF_XPOSITION: "x좌표",
	SENSING_OF_YPOSITION: "y좌표",
	SENSING_OF_DIRECTION: "방향",
	SENSING_OF_COSTUMENUMBER: "모양 번호",
	LOOKS_COSTUMENUMBERNAME: "모양 %1",
	SENSING_OF_SIZE: "크기",
	SENSING_OF_BACKDROPNAME: "배경 이름",
	LOOKS_BACKDROPNUMBERNAME: "배경 %1",
	SENSING_OF_BACKDROPNUMBER: "배경 번호",
	SOUND_VOLUME: "음량",
	"music.getTempo": "빠르기",
	SENSING_TOUCHINGOBJECT: "%1 에 닿았는가?",
	SENSING_TOUCHINGCOLOR: "%1 색에 닿았는가?",
	SENSING_COLORISTOUCHINGCOLOR: "%1 색이 %2 색에 닿았는가?",
	SENSING_DISTANCETO: "%1 까지의 거리",
	SENSING_ANSWER: "대답",
	SENSING_KEYPRESSED: "%1 키를 눌렸는가?",
	SENSING_MOUSEDOWN: "마우스를 클릭했는가?",
	SENSING_MOUSEX: "마우스의 x좌표",
	SENSING_MOUSEY: "마우스의 y좌표",
	SENSING_SETDRAGMODE: "드래그 모드를 %1 상태로 정하기",
	SENSING_LOUDNESS: "음량",
	"videoSensing.videoOn": "비디오 %1에 대한 %2에서의 관찰값",
	SENSING_TIMER: "타이머",
	SENSING_OF: "%2 의 %1",
	SENSING_CURRENT: "현재 %1",
	SENSING_DAYSSINCE2000: "2000년 이후 현재까지 날짜 수",
	SENSING_USERNAME: "사용자 이름",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "%1 부터 %2 사이의 난수",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 그리고 %2",
	OPERATORS_OR: "%1 또는 %2",
	OPERATORS_NOT: "%1 이(가) 아니다",
	OPERATORS_JOIN: "%1 와(과) %2 결합하기",
	OPERATORS_LETTEROF: "%2 의 %1 번째 글자",
	OPERATORS_LENGTH: "%1 의 길이",
	OPERATORS_MOD: "%1 나누기 %2 의 나머지",
	OPERATORS_ROUND: "%1 의 반올림",
	OPERATORS_MATHOP: "%1 ( %2 )",
	OPERATORS_CONTAINS: "%1 이(가) %2 을(를) 포함하는가?",
	DATA_ITEMOFLIST: "%2 리스트의 %1 번째 항목",
	DATA_ITEMNUMOFLIST: "%2 리스트에서 %1 항목의 위치",
	DATA_LENGTHOFLIST: "%1 의 길이",
	DATA_LISTCONTAINSITEM: "%1 이(가) %2 을(를) 포함하는가?",
	CONTROL_ELSE: "아니면",
	SENSING_USERID: "사용자 번호",
	SENSING_LOUD: "소리가 큰가?",
	"text2speech.speakAndWaitBlock": "%1 말하기",
	"text2speech.setVoiceBlock": "음성을 %1로 정하기",
	"text2speech.setLanguageBlock": "언어를 %1로 정하기",
	"translate.translateBlock": "%1을(를) %2로 번역하기",
	"translate.viewerLanguage": "언어",
	"makeymakey.whenKeyPressed": "%1 키를 눌렀을 때",
	"makeymakey.whenKeysPressedInOrder": "%1 키를 순서대로 눌렀을 때",
	"microbit.whenButtonPressed": "%1 버튼이 눌러졌을 때",
	"microbit.isButtonPressed": "%1 버튼이 눌려졌는가?",
	"microbit.whenGesture": "%1 때",
	"microbit.displaySymbol": "%1 보여주기",
	"microbit.displayText": "글자 %1 보여주기",
	"microbit.clearDisplay": "화면 지우기",
	"microbit.whenTilted": "%1 방향으로 기울어졌을 때",
	"microbit.isTilted": "%1 방향으로 기울어졌는가?",
	"microbit.tiltAngle": "%1 방향으로 기울어진 각도",
	"microbit.whenPinConnected": "%1번 핀이 연결되었을 때",
	"ev3.motorTurnClockwise": "%1 모터를 %2 초 동안 이쪽으로 돌리기",
	"ev3.motorTurnCounterClockwise": "%1 모터를 %2 초 동안 저쪽으로 돌리기",
	"ev3.motorSetPower": "%1 모터 강도를 %2 %로 정하기",
	"ev3.getMotorPosition": "모터 %1 위치",
	"ev3.whenButtonPressed": "%1 번 버튼이 눌러졌을 때",
	"ev3.whenDistanceLessThan": "거리 < %1일 때",
	"ev3.whenBrightnessLessThan": "밝기 <  %1일 때",
	"ev3.buttonPressed": "%1 번 버튼이 눌러졌는가?",
	"ev3.getDistance": "거리",
	"ev3.getBrightness": "밝기",
	"ev3.beepNote": "%2 초 동안 %1 번 음 울리기",
	"wedo2.motorOn": "%1 켜기",
	"wedo2.motorOff": "%1 끄기",
	"wedo2.startMotorPower": "%1 모터 강도를 %2로 정하기",
	"wedo2.setMotorDirection": "%1의 방향을 %2으로 정하기",
	"wedo2.whenDistance": "거리 %1 %2 일 때",
	"wedo2.getDistance": "거리",
	"wedo2.motorOnFor": "%2 초 동안 %1 켜기",
	"wedo2.setLightHue": "빛의 색을  %1로 정하기",
	"wedo2.playNoteFor": "%1 번 음을 %2초 간 연주하기",
	"wedo2.whenTilted": "%1 방향으로 기울일 때",
	"wedo2.isTilted": "%1 방향으로 기울어졌는가?",
	"wedo2.getTiltAngle": "%1 방향으로 기울어진 각도",
	"gdxfor.whenGesture": "when %1",
	"gdxfor.whenForcePushedOrPulled": "when force sensor %1",
	"gdxfor.getForce": "force",
	"gdxfor.whenTilted": "when tilted %1",
	"gdxfor.isTilted": "tilted %1?",
	"gdxfor.getTilt": "tilt angle %1",
	"gdxfor.isFreeFalling": "falling?",
	"gdxfor.getSpin": "spin speed %1",
	"gdxfor.getAcceleration": "acceleration %1",
	"boost.motorOnFor": "turn motor %1 for %2 seconds",
	"boost.motorOnForRotation": "turn motor %1 for %2 rotations",
	"boost.motorOn": "turn motor %1 on",
	"boost.motorOff": "turn motor %1 off",
	"boost.setMotorPower": "set motor %1 speed to %2 %",
	"boost.setMotorDirection": "set motor %1 direction %2",
	"boost.getMotorPosition": "motor %1 position",
	"boost.whenColor": "when %1 brick seen",
	"boost.seeingColor": "seeing %1 brick?",
	"boost.whenTilted": "when tilted %1",
	"boost.getTiltAngle": "tilt angle %1",
	"boost.setLightHue": "set light color to %1"
};
var dropdowns$6 = {
	MOTION_GOTO_POINTER: {
		value: "마우스 포인터",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "무작위 위치",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "마우스 포인터",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "랜덤 위치",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "마우스 포인터",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "랜덤 방향",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "왼쪽-오른쪽",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "회전하지 않기",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "회전하기",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "다음 배경",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "이전 배경",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "랜덤 배경",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "색깔",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "어안 렌즈",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "소용돌이",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "픽셀화",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "모자이크",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "밝기",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "투명도",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "맨 앞쪽",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "맨 뒤쪽",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "앞으로",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "뒤로",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "번호",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "이름",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "음 높이",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "음향 위치 왼쪽/오른쪽",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "스페이스",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "왼쪽 화살표",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "오른쪽 화살표",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "아래쪽 화살표",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "위쪽 화살표",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "아무",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "타이머",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "음량",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "모두",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "이 스크립트",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "이 스프라이트에 있는 다른 스크립트",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "나 자신",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "마우스 포인터",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "벽",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "마우스 포인터",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "드래그 할 수 있는",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "드래그 할 수 없는",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x좌표",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y좌표",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "방향",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "모양 번호",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "모양 이름",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "크기",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "음량",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "배경 번호",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "배경 이름",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "무대",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "년",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "월",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "일",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "요일",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "시",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "분",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "초",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "절댓값",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "버림",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "올림",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "제곱근",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) 스네어 드럼",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) 베이스 드럼",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) 사이드 스틱",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) 크래시 심벌",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) 열린 하이햇",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) 닫힌 하이햇",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) 탬버린",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) 박수",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) 클라베",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) 나무 블록",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) 카우벨",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) 트라이앵글",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) 봉고",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) 콩가",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) 카바사",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) 귀로",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) 비브라슬랩",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) 쿠이카",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) 피아노",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) 전자 피아노",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) 오르간",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) 기타",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) 전자 기타",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) 베이스",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) 피치카토",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) 첼로",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) 트럼본",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) 클라리넷",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) 색소폰",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) 플루트",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) 나무 플루트",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) 바순",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) 합창단",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) 비브라폰",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) 뮤직 박스",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) 스틸 드럼",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) 마림바",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) 신드 리드",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) 신드 패드",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "색깔",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "채도",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "명도",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "투명도",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "방향",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "동작",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "스프라이트",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "무대",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "끄기",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "켜기",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "뒤집힌 상태로 켜기",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "중고음",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "중저음",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "고음",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "저음",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "고양이",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "위쪽",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "아래쪽",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "왼쪽",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "오른쪽",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "아무",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "점프하였을",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "움직일",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "흔들어졌을",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "아무",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "뒤쪽",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "앞쪽",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "왼쪽",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "오른쪽",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "that way",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "this way",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "reverse",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "any color",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "black",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "blue",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "green",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "red",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "white",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "yellow",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "any",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "up",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "down",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "left",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "right",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "모터 A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "모터 B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "모든 모터",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "모터",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "이쪽",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "저쪽",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "반대쪽",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "아무",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "위쪽",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "아래쪽",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "왼쪽",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "오른쪽",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "pulled",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "pushed",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "shaken",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "started falling",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "turned face down",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "turned face up",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "front",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "back",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "left",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "right",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "any",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "왼쪽 위쪽 오른쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "오른쪽 위쪽 왼쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "왼쪽 오른쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "오른쪽 왼쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "위쪽 아래쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "아래쪽 위쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "위쪽 오른쪽 아래쪽 왼쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "위쪽 왼쪽 아래쪽 오른쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "위쪽 위쪽 아래쪽 아래쪽 왼쪽 오른쪽 왼쪽 오른쪽",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.gl": {
		value: "갈리시아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "그리스어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "네덜란드어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "노르웨이어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "덴마크어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "독일어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "라트비아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "러시아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "루마니아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "리투아니아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "마오리어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "바스크어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "베트남어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "불가리아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "세르비아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "스웨덴어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "스코틀랜드 게일어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "스페인어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "슬로바키아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "슬로베니아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "아랍어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "아이슬란드어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "아일랜드어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "아제르바이잔어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "암하라어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "에스토니아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "영어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "우크라이나어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "웨일즈어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "이탈리아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "인도네시아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "일본어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "줄루어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "중국어(간체)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "중국어(번체)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "체코어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "카탈로니아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "쿠르드어(소라니)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "크로아티아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "태국어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "터키어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "페르시아어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "포르투갈어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "폴란드어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "프랑스어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "핀란드어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "한국어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "헝가리어",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "히브리어",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "아랍어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "웨일즈어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "덴마크어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "독일어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "영어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "스페인어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "스페인어(라틴 아메리카)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "프랑스어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "한국어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "힌디 어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "아이슬란드어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "이탈리아어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "네덜란드어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "일본어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "노르웨이어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "폴란드어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "포르투갈어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "포르투갈어(브라질)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "루마니아어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "러시아어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "스웨덴어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "터키어",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "중국어(만다린)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$6 = [
];
var soundEffects$6 = [
	"음 높이",
	"음향 위치 왼쪽/오른쪽"
];
var microbitWhen$6 = [
	"움직일",
	"흔들어졌을",
	"점프하였을"
];
var osis$6 = [
	"이 스프라이트에 있는 다른 스크립트"
];
var definePrefix$6 = [
];
var defineSuffix$6 = [
	"정의하기"
];
var palette$6 = {
	Motion: "동작",
	Looks: "형태",
	Sound: "소리",
	Events: "이벤트",
	Control: "제어",
	Sensing: "감지",
	Operators: "연산",
	Variables: "변수",
	"My Blocks": "내 블록"
};
var math$6 = [
	"절댓값",
	"버림",
	"올림",
	"제곱근",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$6 = {
};
var name$6 = "한국어";
var percentTranslated$6 = 100;
var ko = {
	commands: commands$6,
	dropdowns: dropdowns$6,
	ignorelt: ignorelt$6,
	soundEffects: soundEffects$6,
	microbitWhen: microbitWhen$6,
	osis: osis$6,
	definePrefix: definePrefix$6,
	defineSuffix: defineSuffix$6,
	palette: palette$6,
	math: math$6,
	aliases: aliases$6,
	name: name$6,
	percentTranslated: percentTranslated$6
};

var commands$5 = {
	MOTION_MOVESTEPS: "gå %1 steg",
	MOTION_TURNRIGHT: "snu @turnRight %1 grader",
	MOTION_TURNLEFT: "snu @turnLeft %1 grader",
	MOTION_POINTINDIRECTION: "pek i retning %1",
	MOTION_POINTTOWARDS: "pek mot %1",
	MOTION_GOTOXY: "gå til x: %1 y: %2",
	MOTION_GOTO: "gå til %1",
	MOTION_GLIDESECSTOXY: "gli %1 sekunder til x: %2 y: %3",
	MOTION_GLIDETO: "gli %1 sekunder til %2",
	MOTION_CHANGEXBY: "endre x med %1",
	MOTION_SETX: "sett x til %1",
	MOTION_CHANGEYBY: "endre y med %1",
	MOTION_SETY: "sett y til %1",
	MOTION_SETROTATIONSTYLE: "begrens rotasjon %1",
	LOOKS_SAYFORSECS: "si %1 i %2 sekunder",
	LOOKS_SAY: "si %1",
	LOOKS_THINKFORSECS: "tenk %1 i %2 sekunder",
	LOOKS_THINK: "tenk %1",
	LOOKS_SHOW: "vis",
	LOOKS_HIDE: "skjul",
	LOOKS_SWITCHCOSTUMETO: "bytt drakt til %1",
	LOOKS_NEXTCOSTUME: "neste drakt",
	LOOKS_NEXTBACKDROP_BLOCK: "neste bakgrunn",
	LOOKS_SWITCHBACKDROPTO: "bytt bakgrunn til %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "bytt bakgrunn til %1 og vent",
	LOOKS_CHANGEEFFECTBY: "endre %1 effekt med %2",
	LOOKS_SETEFFECTTO: "sett %1 effekt til %2",
	LOOKS_CLEARGRAPHICEFFECTS: "fjern grafiske effekter",
	LOOKS_CHANGESIZEBY: "endre størrelse med %1",
	LOOKS_SETSIZETO: "sett størrelse til %1 %",
	LOOKS_GOTOFRONTBACK: "legg %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "gå %1 %2 lag",
	SOUND_PLAY: "start lyden %1",
	SOUND_CHANGEEFFECTBY: "endre %1 effekt med %2",
	SOUND_SETEFFECTO: "sett %1 effekt til %2",
	SOUND_CLEAREFFECTS: "fjern lydeffekter",
	SOUND_PLAYUNTILDONE: "spill lyden %1 til den er ferdig",
	SOUND_STOPALLSOUNDS: "stopp alle lyder",
	"music.playDrumForBeats": "trommeslag %1 som varer %2 taktslag",
	"music.restForBeats": "pause i %1 taktslag",
	"music.playNoteForBeats": "spill tone %1 som varer %2 taktslag",
	"music.setInstrument": "velg instrument %1",
	SOUND_CHANGEVOLUMEBY: "endre volum med %1",
	SOUND_SETVOLUMETO: "sett volum %1%",
	"music.changeTempo": "endre tempo med %1",
	"music.setTempo": "sett tempo til %1",
	"pen.clear": "slett alt",
	"pen.stamp": "stemple avtrykk",
	"pen.penDown": "penn på",
	"pen.penUp": "penn av",
	"pen.setColor": "sett pennfarge til %1",
	"pen.changeHue": "endre pennfarge med %1",
	"pen.setColorParam": "sett pennens %1 til %2",
	"pen.changeColorParam": "endre pennens %1 med %2",
	"pen.setHue": "sett pennens farge til %1",
	"pen.changeShade": "endre pennens lysstyrke med %1",
	"pen.setShade": "sett pennens lysstyrke til %1",
	"pen.changeSize": "endre pennens bredde med %1",
	"pen.setSize": "sett pennbredde til %1",
	EVENT_WHENFLAGCLICKED: "når @greenFlag klikkes",
	EVENT_WHENKEYPRESSED: "når %1 trykkes",
	EVENT_WHENTHISSPRITECLICKED: "når denne figuren klikkes",
	EVENT_WHENSTAGECLICKED: "når scenen klikkes",
	EVENT_WHENBACKDROPSWITCHESTO: "når bakgrunn bytter til %1",
	EVENT_WHENGREATERTHAN: "når %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "når jeg mottar %1",
	EVENT_BROADCAST: "send melding %1",
	EVENT_BROADCASTANDWAIT: "send melding %1 og vent",
	CONTROL_WAIT: "vent %1 sekunder",
	CONTROL_REPEAT: "gjenta %1 ganger",
	CONTROL_FOREVER: "gjenta for alltid",
	CONTROL_IF: "hvis %1",
	CONTROL_WAITUNTIL: "vent til %1",
	CONTROL_REPEATUNTIL: "gjenta til %1",
	CONTROL_STOP: "stopp %1",
	CONTROL_STARTASCLONE: "når jeg starter som klon",
	CONTROL_CREATECLONEOF: "lag klon av %1",
	CONTROL_DELETETHISCLONE: "slett denne klonen",
	SENSING_ASKANDWAIT: "spør %1 og vent",
	"videoSensing.videoToggle": "sett video %1",
	"videoSensing.setVideoTransparency": "sett %1 gjennomsiktighet av video",
	"videoSensing.whenMotionGreaterThan": "når videobevegelse > %1",
	SENSING_RESETTIMER: "nullstill klokken",
	DATA_SETVARIABLETO: "sett %1 til %2",
	DATA_CHANGEVARIABLEBY: "endre %1 med %2",
	DATA_SHOWVARIABLE: "vis variabel %1",
	DATA_HIDEVARIABLE: "skjul variabel %1",
	DATA_ADDTOLIST: "legg til %1 i %2",
	DATA_DELETEOFLIST: "slett element %1 i %2",
	DATA_DELETEALLOFLIST: "slett alt i %1",
	MOTION_IFONEDGEBOUNCE: "sprett tilbake ved kanten",
	DATA_INSERTATLIST: "sett inn %1 på plass %2 i %3",
	DATA_REPLACEITEMOFLIST: "erstatt element %1 i %2 med %3",
	DATA_SHOWLIST: "vis liste %1",
	DATA_HIDELIST: "skjul liste %1",
	SENSING_OF_XPOSITION: "x-posisjon",
	SENSING_OF_YPOSITION: "y-posisjon",
	SENSING_OF_DIRECTION: "retning",
	SENSING_OF_COSTUMENUMBER: "drakt nr.",
	LOOKS_COSTUMENUMBERNAME: "drakt %1",
	SENSING_OF_SIZE: "størrelse",
	SENSING_OF_BACKDROPNAME: "navn på bakgrunn",
	LOOKS_BACKDROPNUMBERNAME: "bakgrunn %1",
	SENSING_OF_BACKDROPNUMBER: "bakgrunn nr.",
	SOUND_VOLUME: "volum",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "berører %1?",
	SENSING_TOUCHINGCOLOR: "berører fargen %1?",
	SENSING_COLORISTOUCHINGCOLOR: "farge %1 berører %2?",
	SENSING_DISTANCETO: "avstand til %1",
	SENSING_ANSWER: "svar",
	SENSING_KEYPRESSED: "tast %1 trykket?",
	SENSING_MOUSEDOWN: "museknappen er trykket?",
	SENSING_MOUSEX: "mus x",
	SENSING_MOUSEY: "mus y",
	SENSING_SETDRAGMODE: "%1 å dra med musen",
	SENSING_LOUDNESS: "lydnivå",
	"videoSensing.videoOn": "video %1 på %2",
	SENSING_TIMER: "sekundklokke",
	SENSING_OF: "%1 av %2",
	SENSING_CURRENT: "%1 nå",
	SENSING_DAYSSINCE2000: "dager siden 2000",
	SENSING_USERNAME: "brukernavn",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "tilfeldig tall fra %1 til %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 og %2",
	OPERATORS_OR: "%1 eller %2",
	OPERATORS_NOT: "ikke %1",
	OPERATORS_JOIN: "sett sammen %1 %2",
	OPERATORS_LETTEROF: "bokstav %1 i %2",
	OPERATORS_LENGTH: "lengden av %1",
	OPERATORS_MOD: "%1 mod %2",
	OPERATORS_ROUND: "avrund %1",
	OPERATORS_MATHOP: "%1 av %2",
	OPERATORS_CONTAINS: "%1 inneholder %2?",
	DATA_ITEMOFLIST: "element %1 i %2",
	DATA_ITEMNUMOFLIST: "posisjon av %1 i %2",
	DATA_LENGTHOFLIST: "lengden av %1",
	DATA_LISTCONTAINSITEM: "%1 inneholder %2?",
	CONTROL_ELSE: "ellers",
	SENSING_USERID: "brukernavn",
	SENSING_LOUD: "høy lyd?",
	"text2speech.speakAndWaitBlock": "si %1",
	"text2speech.setVoiceBlock": "velg stemme %1",
	"text2speech.setLanguageBlock": "velg språk %1",
	"translate.translateBlock": "oversett %1 til %2",
	"translate.viewerLanguage": "språk",
	"makeymakey.whenKeyPressed": "når %1 trykkes",
	"makeymakey.whenKeysPressedInOrder": "når %1 trykkes i rekkefølge",
	"microbit.whenButtonPressed": "når %1 knapp trykkes",
	"microbit.isButtonPressed": "%1 knapp trykket?",
	"microbit.whenGesture": "når %1",
	"microbit.displaySymbol": "vis bilde %1",
	"microbit.displayText": "vis tekst %1",
	"microbit.clearDisplay": "tøm skjermen",
	"microbit.whenTilted": "når helning %1",
	"microbit.isTilted": "helning %1?",
	"microbit.tiltAngle": "helningsvinkel %1",
	"microbit.whenPinConnected": "når kontakt %1 trykkes",
	"ev3.motorTurnClockwise": "motor %1 kjør den ene veien i %2 sekunder",
	"ev3.motorTurnCounterClockwise": "motor %1 kjør den andre veien i %2 sekunder",
	"ev3.motorSetPower": "motor %1 sett fart %2 %",
	"ev3.getMotorPosition": "motor %1 vinkel",
	"ev3.whenButtonPressed": "når knapp %1 trykkes",
	"ev3.whenDistanceLessThan": "når avstand < %1",
	"ev3.whenBrightnessLessThan": "når lysnivå < %1",
	"ev3.buttonPressed": "knapp %1 trykket?",
	"ev3.getDistance": "avstand",
	"ev3.getBrightness": "lysstyrke",
	"ev3.beepNote": "tone %1 i %2 sekunder",
	"wedo2.motorOn": "skru på %1",
	"wedo2.motorOff": "skru av %1",
	"wedo2.startMotorPower": "sett %1 fart %2",
	"wedo2.setMotorDirection": "velg %1 retning %2",
	"wedo2.whenDistance": "når avstand %1 %2",
	"wedo2.getDistance": "avstand",
	"wedo2.motorOnFor": "skru på %1 i %2 sekunder",
	"wedo2.setLightHue": "sett lysfarge %1",
	"wedo2.playNoteFor": "spill tone %1 i %2 sekunder",
	"wedo2.whenTilted": "når helning %1",
	"wedo2.isTilted": "helning %1?",
	"wedo2.getTiltAngle": "helningsvinkel %1",
	"gdxfor.whenGesture": "når %1",
	"gdxfor.whenForcePushedOrPulled": "når kraftsensoren %1",
	"gdxfor.getForce": "kraft",
	"gdxfor.whenTilted": "ved helning %1",
	"gdxfor.isTilted": "heller %1?",
	"gdxfor.getTilt": "helningsvinkel %1",
	"gdxfor.isFreeFalling": "fritt fall",
	"gdxfor.getSpin": "rotasjonsfart %1",
	"gdxfor.getAcceleration": "akselerasjon %1",
	"boost.motorOnFor": "kjør motor %1 i %2 sekunder",
	"boost.motorOnForRotation": "kjør motor %1 rundt %2 rotasjoner",
	"boost.motorOn": "skru på motor %1",
	"boost.motorOff": "skru av motor %1",
	"boost.setMotorPower": "sett motor %1 fart til %2 %",
	"boost.setMotorDirection": "velg motor %1 retning %2",
	"boost.getMotorPosition": "motor %1 posisjon",
	"boost.whenColor": "når %1 kloss sett",
	"boost.seeingColor": "ser %1 kloss?",
	"boost.whenTilted": "når helning %1",
	"boost.getTiltAngle": "helningsvinkel %1",
	"boost.setLightHue": "sett lysfarge %1"
};
var dropdowns$5 = {
	MOTION_GOTO_POINTER: {
		value: "musepeker",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "tilfeldig sted",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "musepeker",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "tilfeldig sted",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "musepeker",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "tilfeldig retning",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "vend sideveis",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "ikke roter",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "fri rotasjon",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "neste bakgrunn",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "forrige bakgrunn",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "tilfeldig bakgrunn",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "farge",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "fiskeøye",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "virvel",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "piksel",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaikk",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "lysstyrke",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "gjennomsiktig",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "foran alt",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "bakerst",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "forover",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "bakover",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "nummer",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "navn",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "tonehøyde",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "retning",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "mellomrom",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "pil venstre",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "pil høyre",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "pil ned",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "pil opp",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "hvilken som helst",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "sekundklokke",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "lydnivå",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "alle",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "dette skriptet",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "andre skript i figuren",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "meg",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "musepeker",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "kant",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "musepeker",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "tillat",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "ikke tillat",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x-posisjon",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y-posisjon",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "retning",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "drakt nr.",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "draktnavn",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "størrelse",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volum",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "bakgrunn nr.",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "navn på bakgrunn",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Scene",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "år",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "måned",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "dato",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "ukedag",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "time",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minutt",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "sekund",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "absoluttverdi",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "avrund ned",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "avrund opp",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "kvadratrot",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "arcsin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "arccos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "arctan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Skarptromme",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Stortromme",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Kantslag",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Crash cymbal",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Åpen hi-hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Lukket hi-hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamburin",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Håndklapp",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Pinner",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Treblokk",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Kubjelle",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangel",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Guiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuica",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Elektrisk piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Orgel",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Gitar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Elektrisk gitar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Kontrabass",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Cello",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombone",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Klarinett",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saksofon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Fløyte",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Blokkfløyte",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagott",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Kor",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibrafon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Spilledåse",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Steel drum",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Synth",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Synth-akkord",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "farge",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "fargemetning",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "lysstyrke",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "gjennomsiktighet",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "retning",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "bevegelse",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "figur",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "scene",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "av",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "på",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "på speilvendt",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "alt",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "knirk",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "kjempe",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "kattunge",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "opp",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "ned",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "venstre",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "høyre",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "hvilken som helst",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "hoppet",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "flyttet",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "ristet",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "hvilken som helst",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "bakover",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "forover",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "venstre",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "høyre",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "den andre veien",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "den ene veien",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "bytt retning",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "hvilken som helst",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "svart",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "blå",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "grønn",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "rød",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "hvit",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "gul",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "hvilken som helst",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "opp",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "ned",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "venstre",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "høyre",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "alle motorer",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "den andre veien",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "den ene veien",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "snu",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "hvilken som helst",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "opp",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "ned",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "venstre",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "høyre",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "trekkes",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "dyttes",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "ristet",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "begynner å falle",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "vender forsiden ned",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "vender forsiden opp",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "framover",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "bakover",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "venstre",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "høyre",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "hvilken som helst",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "venstre opp høyre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "høyre opp venstre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "venstre høyre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "høyre venstre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "opp ned",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "ned opp",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "opp høyre ned venstre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "opp venstre ned høyre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "opp opp ned ned venstre høyre venstre høyre",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.am": {
		value: "amharisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "arabisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "aserbajdsjansk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "baskisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "bulgarsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "dansk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "engelsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "estisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "farsi",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "finsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "fransk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "galisisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "gresk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "hebraisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "indonesisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "irsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "islandsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "italiensk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "japansk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "katalansk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "kinesisk (forenklet)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "kinesisk (tradisjonell)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "koreansk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "kroatisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "kurdisk (sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "latvisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "litauisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "nederlandsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "norsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "polsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "portugisisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "rumensk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "russisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "serbisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "skotsk gælisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "slovakisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "slovensk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "spansk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "svensk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "thai",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "tsjekkisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "tyrkisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "tysk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "ukrainsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "ungarsk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "vietnamesisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "walisisk",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arabisk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Walisisk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Dansk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Tysk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Engelsk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Spansk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Spansk (latinamerikansk)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Fransk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Koreansk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandsk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italiensk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Nederlandsk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japansk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norsk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polsk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugisisk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugisisk (brasiliansk)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Rumensk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Russisk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Svensk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Tyrkisk",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Kinesisk (mandarin)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$5 = [
];
var soundEffects$5 = [
	"tonehøyde",
	"retning"
];
var microbitWhen$5 = [
	"flyttet",
	"ristet",
	"hoppet"
];
var osis$5 = [
	"andre skript i figuren"
];
var definePrefix$5 = [
	"definer"
];
var defineSuffix$5 = [
];
var palette$5 = {
	Motion: "Bevegelse",
	Looks: "Utseende",
	Sound: "Lyd",
	Events: "Hendelser",
	Control: "Styring",
	Sensing: "Sansing",
	Operators: "Operatorer",
	Variables: "Variabler",
	"My Blocks": "Mine klosser"
};
var math$5 = [
	"absoluttverdi",
	"avrund ned",
	"avrund opp",
	"kvadratrot",
	"sin",
	"cos",
	"tan",
	"arcsin",
	"arccos",
	"arctan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$5 = {
	"vend venstre %1 grader": "MOTION_TURNLEFT",
	"vend høyre %1 grader": "MOTION_TURNRIGHT",
	"når grønt flagg klikkes": "EVENT_WHENFLAGCLICKED",
	slutt: "scratchblocks:end"
};
var name$5 = "Norsk Bokmål";
var percentTranslated$5 = 100;
var nb = {
	commands: commands$5,
	dropdowns: dropdowns$5,
	ignorelt: ignorelt$5,
	soundEffects: soundEffects$5,
	microbitWhen: microbitWhen$5,
	osis: osis$5,
	definePrefix: definePrefix$5,
	defineSuffix: defineSuffix$5,
	palette: palette$5,
	math: math$5,
	aliases: aliases$5,
	name: name$5,
	percentTranslated: percentTranslated$5
};

var commands$4 = {
	MOTION_MOVESTEPS: "%1 adım git",
	MOTION_TURNRIGHT: "@turnRight %1 derece dön",
	MOTION_TURNLEFT: "@turnLeft %1 derece dön",
	MOTION_POINTINDIRECTION: "%1 yönüne dön",
	MOTION_POINTTOWARDS: "%1 e doğru yönel",
	MOTION_GOTOXY: "x: %1 y: %2 konumuna git",
	MOTION_GOTO: "%1 e git",
	MOTION_GLIDESECSTOXY: "%1 saniyede x: %2 y: %3 konumuna git",
	MOTION_GLIDETO: "%1 saniyede %2 git",
	MOTION_CHANGEXBY: "x konumunu %1 değiştir",
	MOTION_SETX: "x konumunu %1 yap",
	MOTION_CHANGEYBY: "y konumunu %1 değiştir",
	MOTION_SETY: "y konumunu %1 yap",
	MOTION_SETROTATIONSTYLE: "dönüş stilini %1 yap",
	LOOKS_SAYFORSECS: "%2 saniye boyunca %1 de",
	LOOKS_SAY: "%1 de",
	LOOKS_THINKFORSECS: "%2 saniye boyunca %1 diye düşün",
	LOOKS_THINK: "%1 diye düşün",
	LOOKS_SHOW: "göster",
	LOOKS_HIDE: "gizle",
	LOOKS_SWITCHCOSTUMETO: "%1 kılığına geç",
	LOOKS_NEXTCOSTUME: "sonraki kostüm",
	LOOKS_NEXTBACKDROP_BLOCK: "sonraki dekor",
	LOOKS_SWITCHBACKDROPTO: "%1 dekoruna geç",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "%1 dekoruna geç ve bekle",
	LOOKS_CHANGEEFFECTBY: "%1 etkisini %2 değiştir",
	LOOKS_SETEFFECTTO: "%1 etkisini %2 yap",
	LOOKS_CLEARGRAPHICEFFECTS: "görsel etkileri temizle",
	LOOKS_CHANGESIZEBY: "boyutu %1 birim değiştir",
	LOOKS_SETSIZETO: "boyutu % %1 yap",
	LOOKS_GOTOFRONTBACK: "%1 katmanına git",
	LOOKS_GOFORWARDBACKWARDLAYERS: "%2 katman %1 git",
	SOUND_PLAY: "%1 sesini başlat",
	SOUND_CHANGEEFFECTBY: "%1 etkisini %2 değiştir",
	SOUND_SETEFFECTO: "%1 etkisini %2 yap",
	SOUND_CLEAREFFECTS: "ses etkilerini temizle",
	SOUND_PLAYUNTILDONE: "%1 sesini bitene kadar çal",
	SOUND_STOPALLSOUNDS: "tüm sesleri durdur",
	"music.playDrumForBeats": "%1 davulunu %2 vuruş çal",
	"music.restForBeats": "%1 vuruş durakla",
	"music.playNoteForBeats": "%1 notasını %2 vuruşunda çal",
	"music.setInstrument": "Enstrümanı %1 yap",
	SOUND_CHANGEVOLUMEBY: "ses düzeyini %1 değiştir",
	SOUND_SETVOLUMETO: "ses düzeyini %1% yap",
	"music.changeTempo": "tempoyu %1 yap",
	"music.setTempo": "tempoyu %1 yap",
	"pen.clear": "tümünü sil",
	"pen.stamp": "damgala",
	"pen.penDown": "kalemi bastır",
	"pen.penUp": "kalemi kaldır",
	"pen.setColor": "kalem rengini %1 yap",
	"pen.changeHue": "kalem rengini %1 artır",
	"pen.setColorParam": "kalem %1 %2 yap",
	"pen.changeColorParam": "kalem %1 %2 artır",
	"pen.setHue": "kalem rengini %1 yap",
	"pen.changeShade": "kalem tonunu %1 artır",
	"pen.setShade": "kalem tonunu %1 yap",
	"pen.changeSize": "kalem kalınlığını %1 artır",
	"pen.setSize": "kalem kalınlığını %1 yap",
	EVENT_WHENFLAGCLICKED: "@greenFlag e tıklandığında",
	EVENT_WHENKEYPRESSED: "%1 tuşuna basılınca",
	EVENT_WHENTHISSPRITECLICKED: "bu kuklaya tıklandığında",
	EVENT_WHENSTAGECLICKED: "sahneye tıklandığında",
	EVENT_WHENBACKDROPSWITCHESTO: "dekor %1 olduğunda",
	EVENT_WHENGREATERTHAN: "%1 > %2 olduğunda",
	EVENT_WHENBROADCASTRECEIVED: "%1 haberini aldığımda",
	EVENT_BROADCAST: "%1 haberini sal",
	EVENT_BROADCASTANDWAIT: "%1 haberini sal ve bekle",
	CONTROL_WAIT: "%1 saniye bekle",
	CONTROL_REPEAT: "%1 defa tekrarla",
	CONTROL_FOREVER: "sürekli tekrarla",
	CONTROL_IF: "eğer %1 ise",
	CONTROL_WAITUNTIL: "%1 olana kadar bekle",
	CONTROL_REPEATUNTIL: "%1 olana kadar tekrarla",
	CONTROL_STOP: "durdur %1",
	CONTROL_STARTASCLONE: "ikiz olarak başladığımda",
	CONTROL_CREATECLONEOF: "%1 in ikizini yarat",
	CONTROL_DELETETHISCLONE: "bu ikizi sil",
	SENSING_ASKANDWAIT: "%1 diye sor ve bekle",
	"videoSensing.videoToggle": "videoyu %1",
	"videoSensing.setVideoTransparency": "videonun saydamlığını %1 yap",
	"videoSensing.whenMotionGreaterThan": "video hareketi > %1 olduğunda",
	SENSING_RESETTIMER: "zamanlayıcıyı sıfırla",
	DATA_SETVARIABLETO: "%1 değişkenini %2 yap",
	DATA_CHANGEVARIABLEBY: "%1 i %2 kadar değiştir",
	DATA_SHOWVARIABLE: "%1 değişkenini göster",
	DATA_HIDEVARIABLE: "%1 değişkenini gizle",
	DATA_ADDTOLIST: "%1 i %2 ye ekle",
	DATA_DELETEOFLIST: "%2 in %1 ini sil",
	DATA_DELETEALLOFLIST: "%1 in her şeyini sil",
	MOTION_IFONEDGEBOUNCE: "kenara geldiyse sek",
	DATA_INSERTATLIST: "%1 i %3 in %2 pozisyonuna ekle",
	DATA_REPLACEITEMOFLIST: "%2 öğesinin %1 öğesini %3 ile değiştir",
	DATA_SHOWLIST: "%1 listesini göster",
	DATA_HIDELIST: "%1 listesini gizle",
	SENSING_OF_XPOSITION: "x konumu",
	SENSING_OF_YPOSITION: "y konumu",
	SENSING_OF_DIRECTION: "yön",
	SENSING_OF_COSTUMENUMBER: "kostüm #",
	LOOKS_COSTUMENUMBERNAME: "kostüm %1",
	SENSING_OF_SIZE: "büyüklük",
	SENSING_OF_BACKDROPNAME: "dekorun adı",
	LOOKS_BACKDROPNUMBERNAME: "dekor %1",
	SENSING_OF_BACKDROPNUMBER: "dekor #",
	SOUND_VOLUME: "ses düzeyi",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "%1 e değiyor mu?",
	SENSING_TOUCHINGCOLOR: "%1 rengine değiyor mu?",
	SENSING_COLORISTOUCHINGCOLOR: "%1 rengi %2 rengine değiyor mu?",
	SENSING_DISTANCETO: "%1 e mesafe",
	SENSING_ANSWER: "yanıt",
	SENSING_KEYPRESSED: "%1 tuşuna basıldı mı?",
	SENSING_MOUSEDOWN: "fareye basılı mı?",
	SENSING_MOUSEX: "farenin x i",
	SENSING_MOUSEY: "farenin y si",
	SENSING_SETDRAGMODE: "sürükleme modunu %1 yap",
	SENSING_LOUDNESS: "ses yüksekliği",
	"videoSensing.videoOn": "%2 video %1",
	SENSING_TIMER: "zamanlayıcı",
	SENSING_OF: "%2 in %1 i",
	SENSING_CURRENT: "şu anki %1",
	SENSING_DAYSSINCE2000: "2000 yılından beri geçen gün",
	SENSING_USERNAME: "kullanıcı adı",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "%1 ile %2 arasında rastgele bir sayı seç",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 ve %2",
	OPERATORS_OR: "%1 veya %2",
	OPERATORS_NOT: "%1 değil",
	OPERATORS_JOIN: "%1 i ve %2 ile birleştir",
	OPERATORS_LETTEROF: "%2 in %1. harfi",
	OPERATORS_LENGTH: "%1 in uzunluğu",
	OPERATORS_MOD: "%1 mod %2",
	OPERATORS_ROUND: "%1 i yuvarla",
	OPERATORS_MATHOP: "%2 in %1 i",
	OPERATORS_CONTAINS: "%1, %2 i içeriyor mu?",
	DATA_ITEMOFLIST: "%2' in %1 öğesi",
	DATA_ITEMNUMOFLIST: "%2 in %1 öğesinin # öğesi",
	DATA_LENGTHOFLIST: "%1 in uzunluğu",
	DATA_LISTCONTAINSITEM: "%1, %2 i içeriyor mu?",
	CONTROL_ELSE: "değilse",
	SENSING_USERID: "kullanıcı kimliği",
	SENSING_LOUD: "gürültülü mü?",
	"text2speech.speakAndWaitBlock": "konuş %1",
	"text2speech.setVoiceBlock": "sesi %1e ayarla",
	"text2speech.setLanguageBlock": "dili %1'ye ayarla",
	"translate.translateBlock": "%1 metnini %2 diline çevir",
	"translate.viewerLanguage": "dil",
	"makeymakey.whenKeyPressed": "%1 tuşu basılınca",
	"makeymakey.whenKeysPressedInOrder": "%1 dizisi sırayla basılınca",
	"microbit.whenButtonPressed": "%1 düğmesi basıldığında",
	"microbit.isButtonPressed": "%1 düğmesi basıldı mı?",
	"microbit.whenGesture": "%1 olduğunda",
	"microbit.displaySymbol": "%1göster",
	"microbit.displayText": "%1 metnini göster",
	"microbit.clearDisplay": "ekranı temizle",
	"microbit.whenTilted": "%1 eğildiğinde",
	"microbit.isTilted": "%1 eğildi mi?",
	"microbit.tiltAngle": "%1 eğim açısı",
	"microbit.whenPinConnected": "%1 pini bağlandığında",
	"ev3.motorTurnClockwise": "%1 motorunu > yönünde %2 saniye döndür",
	"ev3.motorTurnCounterClockwise": "%1 motorunu < yönünde %2 saniye döndür",
	"ev3.motorSetPower": "%1 motor gücünü % %2 yap",
	"ev3.getMotorPosition": "%1 motor konumu",
	"ev3.whenButtonPressed": "%1 düğmesine basıldığında",
	"ev3.whenDistanceLessThan": "mesafe < %1 olduğunda",
	"ev3.whenBrightnessLessThan": "parlaklık < %1 olduğunda",
	"ev3.buttonPressed": "%1 düğmesi basıldı mı?",
	"ev3.getDistance": "mesafe",
	"ev3.getBrightness": "parlaklık",
	"ev3.beepNote": "%1 notasını %2 saniye çal",
	"wedo2.motorOn": "%1 u aç",
	"wedo2.motorOff": "%1 u kapat",
	"wedo2.startMotorPower": "%1 gücünü %2'e ayarla",
	"wedo2.setMotorDirection": "%1 yönünü %2'a ayarla",
	"wedo2.whenDistance": "mesafe  %1 %2 olduğunda",
	"wedo2.getDistance": "mesafe",
	"wedo2.motorOnFor": "%1 u %2 saniye çalıştır",
	"wedo2.setLightHue": "ışık rengini %1 'ye ayarla",
	"wedo2.playNoteFor": "%1 notasını %2 saniye çal",
	"wedo2.whenTilted": "%1 eğildiğinde",
	"wedo2.isTilted": "%1 eğildi mi?",
	"wedo2.getTiltAngle": "%1 eğim açısı",
	"gdxfor.whenGesture": "%1 olduğunda",
	"gdxfor.whenForcePushedOrPulled": "kuvvet sensörü %1",
	"gdxfor.getForce": "güç",
	"gdxfor.whenTilted": "Eğim %1 olduğunda",
	"gdxfor.isTilted": "%1 eğimli mi?",
	"gdxfor.getTilt": "eğim açısı %1",
	"gdxfor.isFreeFalling": "düşüyor mu?",
	"gdxfor.getSpin": "devir hızı %1",
	"gdxfor.getAcceleration": "ivme %1",
	"boost.motorOnFor": "%1 numaralı motoru %2 saniye çalıştır",
	"boost.motorOnForRotation": "%1 numaralı motoru %2 tur çalıştır",
	"boost.motorOn": "%1 numaralı motoru aç",
	"boost.motorOff": "%1 numaralı motoru kapat",
	"boost.setMotorPower": "motor %1 gücünü % %2 ayarla",
	"boost.setMotorDirection": "motor %1 motorunun yönünü %2 olarak ayarla",
	"boost.getMotorPosition": "motor %1 motorunun konumu",
	"boost.whenColor": "parça, %1 renginde görüldüğünde",
	"boost.seeingColor": "%1 parça görüyor musun?",
	"boost.whenTilted": "%1 eğildiğinde",
	"boost.getTiltAngle": "eğim açısı %1",
	"boost.setLightHue": "ışık rengini %1 olarak ayarla"
};
var dropdowns$4 = {
	MOTION_GOTO_POINTER: {
		value: "fare-imleci",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "rastgele konum",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "fare-imleci",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "rastgele konum",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "fare-imleci",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "rastgele yön",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "sol-sağ",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "dönmeyi kapat",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "tüm yönlere dönebilir",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "sonraki dekor",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "önceki dekor",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "rastgele dekor",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "renk",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "balık gözü",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "girdap",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pikselleşme",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mozaik",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "parlaklık",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "hayalet",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "ön",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "arka",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "ileri",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "geri",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "sayı",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "isim",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "ses perdesi",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "sağa-sola kaydır",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "boşluk",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "sol ok",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "sağ ok",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "aşağı ok",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "yukarı ok",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "herhangi",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "zamanlayıcı",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "ses yüksekliği",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "tümü",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "bu dizi",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "kukladaki diğer dizileri",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "kendim",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "fare-imleci",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "kenar",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "fare-imleci",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "sürüklenebilir",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "sürüklenmez",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "x konumu",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "y konumu",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "yön",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "kostüm #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "kostüm ismi",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "büyüklük",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "ses düzeyi",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "dekor #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "dekorun adı",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Sahne",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "yıl",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "ay",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "tarih",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "haftanın günü",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "saat",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "dakika",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "saniye",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "mutlak değer",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "aşağı yuvarla",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "yukarı yuvarla",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "karekök",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sinüs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "kosinüs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tanjant",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "arcsinüs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "arckosinüs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "arctanjant",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "logaritma",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Trampet",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Bas Davul",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) yan Çubuk",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Çarpışma Zili",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Açık Hi-Hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Kapalı Hi-Hat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tef",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Alkışla",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Bagetler",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Fagot",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Çan",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Üçgen",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Guiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuica",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piyano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Elektro Piyano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Org",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Gitar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Elektro Gitar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Bas",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Parmak Hareketi",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Çello",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Klarnet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saksafon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flüt",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Tahta Flüt",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagot",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Koro",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibrafon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Müzik Kutusu",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Çelik Tambur",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Klisifon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Synth Kurşun",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Synth Padi",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "rengi",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "doygunluk",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "parlaklık",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "saydamlık",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "yönü",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "hareketi",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "kuklanın",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "sahnenin",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "kapat",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "aç",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "ters çevrilmiş",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "alto",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "ciyak",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "dev",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "kedi yavrusu",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "yukarı",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "aşağı",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "sol",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "sağ",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "herhangi",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "atlanmış",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "taşınmış",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "sallanmış",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "herhangi",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "geri",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "ön",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "sol",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "sağ",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "diğer tarafa",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "bu tarafa",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "tersine",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "herhangi bir renk",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "siyah",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "mavi",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "yeşil",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "kırmızı",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "beyaz",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "sarı",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "herhangi",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "yukarı",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "aşağı",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "sol",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "sağ",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "A motoru",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "B motoru",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "tüm motorlar",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "bu tarafa",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "diğer tarafa",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "tersine",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "herhangi",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "yukarı",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "aşağı",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "sol",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "sağ",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "çekilmiş",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "itilmiş",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "sallanmış",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "düşmeye başlamış",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "yüzü aşağı dönük",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "yüzü yukarı dönük",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "öne",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "geriye",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "sola",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "sağa",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "herhangi yöne",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "sol yukarı sağ",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "sağ yukarı sol",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "sol sağ",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "sağ sol",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "yukarı aşağı",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "aşağı yukarı",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "yukarı sağ aşağı sol",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "yukarı sol aşağı sağ",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "yukarı yukarı aşağı aşağı sol sağ sol sağ",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.de": {
		value: "Almanca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Arapça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azerbaycan dili",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Baskça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Bulgarca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Çekçe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Çince (Basitleştirilmiş)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Çince (Geleneksel)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Danca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Endonezce",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estonyaca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Farsça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Felemenkçe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Fince",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Fransızca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Galce",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galiçyaca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "Habeşçe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Hırvatça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "İbranice",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "İngilizce",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "İrlandaca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "İskoç Gaelcesi",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "İspanyolca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "İsveççe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "İtalyanca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "İzlandaca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Japonca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Katalanca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Korece",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Kürtçe (Sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Lehçe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Letonca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Litvanca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Macarca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori dili",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Norveççe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portekizce",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Romence",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Rusça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Sırpça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Slovakça",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Slovence",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Tayca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Türkçe",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ukraynaca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnamca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Yunanca",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arapça",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Galce",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Danca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Almanca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "İngilizce",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "İspanyolca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "İspanyolca (Latin Amerika)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Fransızca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Korece",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hintçe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "İzlandaca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "İtalyanca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Felemenkçe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japonca",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norveççe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Lehçe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portekizce",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portekizce (Brezilya)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Romence",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Rusça",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "İsveççe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Türkçe",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Çince (Mandarin)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$4 = [
];
var soundEffects$4 = [
	"ses perdesi",
	"sağa-sola kaydır"
];
var microbitWhen$4 = [
	"taşınmış",
	"sallanmış",
	"atlanmış"
];
var osis$4 = [
	"kukladaki diğer dizileri"
];
var definePrefix$4 = [
];
var defineSuffix$4 = [
	"i",
	"tanımla"
];
var palette$4 = {
	Motion: "Hareket",
	Looks: "Görünüm",
	Sound: "Ses",
	Events: "Olaylar",
	Control: "Kontrol",
	Sensing: "Algılama",
	Operators: "Operatörler",
	Variables: "Değişkenler",
	"My Blocks": "Bloklarım"
};
var math$4 = [
	"mutlak değer",
	"aşağı yuvarla",
	"yukarı yuvarla",
	"karekök",
	"sinüs",
	"kosinüs",
	"tanjant",
	"arcsinüs",
	"arckosinüs",
	"arctanjant",
	"ln",
	"logaritma",
	"e ^",
	"10 ^"
];
var aliases$4 = {
	"%1 derece sola dön": "MOTION_TURNLEFT",
	"%1 derece sağa dön": "MOTION_TURNRIGHT",
	"%1 derece saatin tersi yönde dön": "MOTION_TURNLEFT",
	"%1 derece saat yönünde dön": "MOTION_TURNRIGHT",
	"yeşil bayrak tıklandığında": "EVENT_WHENFLAGCLICKED",
	son: "scratchblocks:end"
};
var name$4 = "Türkçe";
var percentTranslated$4 = 100;
var tr = {
	commands: commands$4,
	dropdowns: dropdowns$4,
	ignorelt: ignorelt$4,
	soundEffects: soundEffects$4,
	microbitWhen: microbitWhen$4,
	osis: osis$4,
	definePrefix: definePrefix$4,
	defineSuffix: defineSuffix$4,
	palette: palette$4,
	math: math$4,
	aliases: aliases$4,
	name: name$4,
	percentTranslated: percentTranslated$4
};

var commands$3 = {
	MOTION_MOVESTEPS: "κινήσου %1 βήματα",
	MOTION_TURNRIGHT: "στρίψε @turnRight %1 μοίρες",
	MOTION_TURNLEFT: "στρίψε @turnLeft %1 μοίρες",
	MOTION_POINTINDIRECTION: "δείξε προς κατεύθυνση %1",
	MOTION_POINTTOWARDS: "δείξε προς %1",
	MOTION_GOTOXY: "πήγαινε σε θέση x: %1 y: %2",
	MOTION_GOTO: "πήγαινε σε %1",
	MOTION_GLIDESECSTOXY: "ολίσθησε για %1 δευτ. στη θέση x: %2 y: %3",
	MOTION_GLIDETO: "ολίσθησε για %1 δευτ. στη θέση %2",
	MOTION_CHANGEXBY: "άλλαξε x κατά %1",
	MOTION_SETX: "όρισε x σε %1",
	MOTION_CHANGEYBY: "άλλαξε y κατά %1",
	MOTION_SETY: "όρισε y σε %1",
	MOTION_SETROTATIONSTYLE: "όρισε τρόπο περιστροφής %1",
	LOOKS_SAYFORSECS: "πες %1 για %2 δευτερόλεπτα",
	LOOKS_SAY: "πες %1",
	LOOKS_THINKFORSECS: "σκέψου %1 για %2 δευτερόλεπτα",
	LOOKS_THINK: "σκέψου %1",
	LOOKS_SHOW: "εμφανίσου",
	LOOKS_HIDE: "εξαφανίσου",
	LOOKS_SWITCHCOSTUMETO: "άλλαξε ενδυμασία σε %1",
	LOOKS_NEXTCOSTUME: "επόμενη ενδυμασία",
	LOOKS_NEXTBACKDROP_BLOCK: "επόμενο υπόβαθρο",
	LOOKS_SWITCHBACKDROPTO: "άλλαξε υπόβαθρο σε %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "άλλαξε υπόβαθρο σε %1 και περίμενε",
	LOOKS_CHANGEEFFECTBY: "άλλαξε εφέ %1 κατά %2",
	LOOKS_SETEFFECTTO: "όρισε εφέ %1 σε %2",
	LOOKS_CLEARGRAPHICEFFECTS: "επανάφερε εφέ γραφικών",
	LOOKS_CHANGESIZEBY: "άλλαξε μέγεθος κατά %1",
	LOOKS_SETSIZETO: "όρισε μέγεθος σε %1 %",
	LOOKS_GOTOFRONTBACK: "πήγαινε σε επίπεδο %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "πήγαινε %1 %2 επίπεδα",
	SOUND_PLAY: "παίξε τον ήχο %1",
	SOUND_CHANGEEFFECTBY: "άλλαξε εφέ %1 κατά %2",
	SOUND_SETEFFECTO: "όρισε εφέ %1 σε %2",
	SOUND_CLEAREFFECTS: "καθάρισε ηχητικά εφέ",
	SOUND_PLAYUNTILDONE: "παίξε ήχο %1 μέχρι τέλους",
	SOUND_STOPALLSOUNDS: "σταμάτησε όλους τους ήχους",
	"music.playDrumForBeats": "παίξε τύμπανο %1 για %2 χτύπους",
	"music.restForBeats": "κάνε παύση για %1 χτύπους",
	"music.playNoteForBeats": "παίξε νότα %1 για %2 χτύπους",
	"music.setInstrument": "όρισε όργανο σε %1",
	SOUND_CHANGEVOLUMEBY: "άλλαξε ένταση κατά %1",
	SOUND_SETVOLUMETO: "όρισε ένταση σε %1%",
	"music.changeTempo": "άλλαξε ρυθμό κατά %1",
	"music.setTempo": "όρισε ρυθμό σε %1",
	"pen.clear": "καθάρισε όλα",
	"pen.stamp": "σφραγίδα",
	"pen.penDown": "κατέβασε πένα",
	"pen.penUp": "σήκωσε πένα",
	"pen.setColor": "όρισε χρώμα πένας σε %1",
	"pen.changeHue": "άλλαξε χρώμα πένας κατά %1",
	"pen.setColorParam": "όρισε %1 πένας σε %2",
	"pen.changeColorParam": "άλλαξε %1 πένας κατά %2",
	"pen.setHue": "όρισε χρώμα πένας σε %1",
	"pen.changeShade": "άλλαξε σκιά πένας κατά %1",
	"pen.setShade": "όρισε σκιά πένας σε %1",
	"pen.changeSize": "άλλαξε μέγεθος πένας κατά %1",
	"pen.setSize": "όρισε μέγεθος πένας σε %1",
	EVENT_WHENFLAGCLICKED: "όταν γίνει κλικ σε @greenFlag",
	EVENT_WHENKEYPRESSED: "όταν πατηθεί πλήκτρο %1",
	EVENT_WHENTHISSPRITECLICKED: "όταν γίνει κλικ σε αυτό το αντικείμενο",
	EVENT_WHENSTAGECLICKED: "όταν γίνει κλικ στη σκηνή",
	EVENT_WHENBACKDROPSWITCHESTO: "όταν το υπόβαθρο αλλάξει σε %1",
	EVENT_WHENGREATERTHAN: "όταν %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "όταν λάβω %1",
	EVENT_BROADCAST: "μετάδωσε %1",
	EVENT_BROADCASTANDWAIT: "μετάδωσε %1 και περίμενε",
	CONTROL_WAIT: "περίμενε %1 δευτερόλεπτα",
	CONTROL_REPEAT: "επανάλαβε %1",
	CONTROL_FOREVER: "για πάντα",
	CONTROL_IF: "εάν %1 τότε",
	CONTROL_WAITUNTIL: "περίμενε ώσπου %1",
	CONTROL_REPEATUNTIL: "επανάλαβε ώσπου %1",
	CONTROL_STOP: "σταμάτησε %1",
	CONTROL_STARTASCLONE: "όταν ξεκινήσω ως κλώνος",
	CONTROL_CREATECLONEOF: "δημιούργησε κλώνο του %1",
	CONTROL_DELETETHISCLONE: "διάγραψε αυτόν τον κλώνο",
	SENSING_ASKANDWAIT: "ρώτησε %1 και περίμενε",
	"videoSensing.videoToggle": "βίντεο %1",
	"videoSensing.setVideoTransparency": "όρισε διαφάνεια βίντεο σε %1",
	"videoSensing.whenMotionGreaterThan": "όταν κίνηση βίντεο > %1",
	SENSING_RESETTIMER: "μηδένισε χρονόμετρο",
	DATA_SETVARIABLETO: "όρισε %1 σε %2",
	DATA_CHANGEVARIABLEBY: "άλλαξε %1 κατά %2",
	DATA_SHOWVARIABLE: "εμφάνισε μεταβλητή %1",
	DATA_HIDEVARIABLE: "απόκρυψε μεταβλητή %1",
	DATA_ADDTOLIST: "πρόσθεσε %1 στη λίστα %2",
	DATA_DELETEOFLIST: "διάγραψε %1 από λίστα %2",
	DATA_DELETEALLOFLIST: "διαγραφή όλων από λίστα %1",
	MOTION_IFONEDGEBOUNCE: "εάν σε όριο, αναπήδησε",
	DATA_INSERTATLIST: "βάλε %1 στη θέση %2 λίστας %3",
	DATA_REPLACEITEMOFLIST: "αντικατάστησε στοιχείο %1 λίστας %2 με %3",
	DATA_SHOWLIST: "εμφάνισε λίστα %1",
	DATA_HIDELIST: "απόκρυψε λίστα %1",
	SENSING_OF_XPOSITION: "θέση x",
	SENSING_OF_YPOSITION: "θέση y",
	SENSING_OF_DIRECTION: "κατεύθυνση",
	SENSING_OF_COSTUMENUMBER: "# ενδυμασίας",
	LOOKS_COSTUMENUMBERNAME: "ενδυμασία %1",
	SENSING_OF_SIZE: "μέγεθος",
	SENSING_OF_BACKDROPNAME: "όνομα υποβάθρου",
	LOOKS_BACKDROPNUMBERNAME: "υπόβαθρο %1",
	SENSING_OF_BACKDROPNUMBER: "# υποβάθρου",
	SOUND_VOLUME: "ένταση",
	"music.getTempo": "ρυθμός",
	SENSING_TOUCHINGOBJECT: "αγγίζει %1;",
	SENSING_TOUCHINGCOLOR: "αγγίζει χρώμα %1;",
	SENSING_COLORISTOUCHINGCOLOR: "χρώμα %1 αγγίζει χρώμα %2;",
	SENSING_DISTANCETO: "απόσταση έως %1",
	SENSING_ANSWER: "απάντηση",
	SENSING_KEYPRESSED: "πατήθηκε πλήκτρο %1;",
	SENSING_MOUSEDOWN: "πατήθηκε πλήκτρο ποντικιού;",
	SENSING_MOUSEX: "x ποντικιού",
	SENSING_MOUSEY: "y ποντικιού",
	SENSING_SETDRAGMODE: "όρισε τρόπο συρσίματος %1",
	SENSING_LOUDNESS: "ένταση",
	"videoSensing.videoOn": "βίντεο %1 για %2",
	SENSING_TIMER: "χρονόμετρο",
	SENSING_OF: "%1 από %2",
	SENSING_CURRENT: "τρέχων %1",
	SENSING_DAYSSINCE2000: "ημέρες από το 2000",
	SENSING_USERNAME: "όνομα χρήστη",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "επίλεξε τυχαίο %1 εώς %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 και %2",
	OPERATORS_OR: "%1 ή %2",
	OPERATORS_NOT: "όχι %1",
	OPERATORS_JOIN: "ένωσε %1 %2",
	OPERATORS_LETTEROF: "γράμμα %1 του %2",
	OPERATORS_LENGTH: "μήκος του %1",
	OPERATORS_MOD: "ακέρ. υπόλ. %1 δια %2",
	OPERATORS_ROUND: "στρογγυλ. %1",
	OPERATORS_MATHOP: "%1 %2",
	OPERATORS_CONTAINS: "%1 περιλαμβάνει %2;",
	DATA_ITEMOFLIST: "στοιχείο %1 λίστας %2",
	DATA_ITEMNUMOFLIST: "# στοιχείου %1 σε %2",
	DATA_LENGTHOFLIST: "μήκος λίστας %1",
	DATA_LISTCONTAINSITEM: "%1 περιέχει %2;",
	CONTROL_ELSE: "αλλιώς",
	SENSING_USERID: "αναγνωριστικό χρήστη",
	SENSING_LOUD: "δυνατά;",
	"text2speech.speakAndWaitBlock": "μίλησε %1",
	"text2speech.setVoiceBlock": "όρισε φωνή σε %1",
	"text2speech.setLanguageBlock": "όρισε γλώσσα σε %1",
	"translate.translateBlock": "μετάφρασε %1 σε %2",
	"translate.viewerLanguage": "γλώσσα",
	"makeymakey.whenKeyPressed": "όταν πατηθεί το κουμπί %1",
	"makeymakey.whenKeysPressedInOrder": "όταν πατηθεί με σειρά %1",
	"microbit.whenButtonPressed": "όταν πατηθεί το κουμπί %1",
	"microbit.isButtonPressed": "πατήθηκε το κουμπί %1;",
	"microbit.whenGesture": "όταν %1",
	"microbit.displaySymbol": "εμφάνισε %1",
	"microbit.displayText": "εμφάνισε κείμενο %1",
	"microbit.clearDisplay": "καθάρισε οθόνη",
	"microbit.whenTilted": "όταν σε κλίση %1",
	"microbit.isTilted": "σε κλίση %1;",
	"microbit.tiltAngle": "γωνία κλίσης %1",
	"microbit.whenPinConnected": "όταν ακίδσ %1 συνδεθεί",
	"ev3.motorTurnClockwise": "κινητήρα %1 στρίψε προς αυτήν την κατεύθυνση για %2 δευτ.",
	"ev3.motorTurnCounterClockwise": "κινητήρα %1 στρίψε προς την άλλη κατεύθυνση για %2 δευτ.",
	"ev3.motorSetPower": "κινητήρα %1 όρισε ισχύ %2 %",
	"ev3.getMotorPosition": "θέση κινητήρα %1",
	"ev3.whenButtonPressed": "όταν πατηθεί το κουμπί %1",
	"ev3.whenDistanceLessThan": "όταν απόσταση < %1",
	"ev3.whenBrightnessLessThan": "όταν φωτεινότητα < %1",
	"ev3.buttonPressed": "πατήθηκε το κουμπί %1;",
	"ev3.getDistance": "απόσταση",
	"ev3.getBrightness": "φωτεινότητα",
	"ev3.beepNote": "παίξε τη νότα %1 για %2 δευτ.",
	"wedo2.motorOn": "ενεργοποίησε κινητήρα %1",
	"wedo2.motorOff": "απενεργοποίησε κινητήρα %1",
	"wedo2.startMotorPower": "όρισε ισχύ του %1 σε %2",
	"wedo2.setMotorDirection": "όρισε κατεύθυνση %2 στον %1",
	"wedo2.whenDistance": "όταν απόσταση %1 %2",
	"wedo2.getDistance": "απόσταση",
	"wedo2.motorOnFor": "ενεργοποίησε %1 για %2 δευτ.",
	"wedo2.setLightHue": "όρισε χρώμα φωτός σε %1",
	"wedo2.playNoteFor": "παίξε νότα %1 για %2 δευτ.",
	"wedo2.whenTilted": "όταν κλίση %1",
	"wedo2.isTilted": "έχει κλίση %1;",
	"wedo2.getTiltAngle": "γωνία κλίσης %1",
	"gdxfor.whenGesture": "όταν %1",
	"gdxfor.whenForcePushedOrPulled": "όταν αισθητήρας ισχύος %1",
	"gdxfor.getForce": "ισχύς",
	"gdxfor.whenTilted": "όταν σε κλίση%1",
	"gdxfor.isTilted": "σε κλίση %1;",
	"gdxfor.getTilt": "γωνία κλίσης %1",
	"gdxfor.isFreeFalling": "σε πτώση;",
	"gdxfor.getSpin": "ταχύτητα περιστροφής %1",
	"gdxfor.getAcceleration": "επιτάχυνση %1",
	"boost.motorOnFor": "ενεργοποίησε κινητήρα %1 για %2 δευτ.",
	"boost.motorOnForRotation": "ενεργοποίησε κινητήρα %1 για %2 περιστροφές",
	"boost.motorOn": "ενεργοποίσε κινητήρα %1",
	"boost.motorOff": "απενεργοποίησε κινητήρα %1",
	"boost.setMotorPower": "όρισε ταχύτητα κινητήρα %1 σε %2 %",
	"boost.setMotorDirection": "όρισε κατεύθυνση %2 κινητήρα %1",
	"boost.getMotorPosition": "θέση κινητήρα %1",
	"boost.whenColor": "όταν έχει δει %1 τούβλο",
	"boost.seeingColor": "βλέπει %1 τούβλο;",
	"boost.whenTilted": "όταν κλίση %1",
	"boost.getTiltAngle": "γωνία κλίσης %1",
	"boost.setLightHue": "όρισε χρώμα φωτός σε %1"
};
var dropdowns$3 = {
	MOTION_GOTO_POINTER: {
		value: "δείκτη ποντικιού",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "τυχαία θέση",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "δείκτη ποντικιού",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "τυχαία θέση",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "δείκτη ποντικιού",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "τυχαία κατεύθυνση",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "αριστερά-δεξιά",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "μην περιστρέψεις",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "τριγύρω",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "επόμενο υπόβαθρο",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "προηγούμενο υπόβαθρο",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "τυχαίο υπόβαθρο",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "χρώματος",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "κυρτότητας",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "δίνης",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "εικονοστοιχειοποίησης",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "ψηφιδωτού",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "φωτεινότητας",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "φαντάσματος",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "προσκήνιο",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "υπόβαθρο",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "μπροστά",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "πίσω",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "νούμερο",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "όνομα",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "τόνος",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "μετατόπιση αριστερά/δεξιά",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "διάστημα",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "αριστερό βέλος",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "δεξί βέλος",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "κάτω βέλος",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "πάνω βέλος",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "οποιοδήποτε",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "χρονομέτρο",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "ένταση",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "όλα",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "αυτό το σενάριο",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "άλλα σενάρια σε αυτό το αντικείμενο",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "εαυτού μου",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "δείκτη ποντικιού",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "όριο",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "δείκτη ποντικιού",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "συρόμενο",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "μη συρόμενο",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "θέση x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "θέση y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "κατεύθυνση",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "# ενδυμασίας",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "όνομα ενδυμασίας",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "μέγεθος",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "ένταση",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "# υποβάθρου",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "όνομα υποβάθρου",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Σκηνή",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "έτος",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "μήνας",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "ημερομηνία",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "μέρα της εβδομάδας",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "ώρα",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "λεπτό",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "δευτερόλεπτο",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "απόλυτο",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "στρογγυλ. κάτω",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "στρογγυλ. άνω",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "τετρ. ρίζα",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "ημ",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "συν",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "εφ",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "τοξημ",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "τοξσυν",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "τοξεφ",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Ταμπούρο",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Μπάσο Τύμπανο",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Side Stick",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Κύμβαλο Crash",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Ανοικτά Πιατίνια",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Κλειστά Πιατίνια",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Ντέφι",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Παλαμάκια",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Κλάβες",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Ξύλινη Κασετίνα",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Κουδούνα",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Τρίγωνο",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Μπόνγκο",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Κόνγκα",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Καμπάσα",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Γκουίρο",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Βίμπρασλαπ",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Κουίκα",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Πιάνο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Ηλεκτρικό πιάνο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Εκκλησιαστικό Όργανο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Κιθάρα",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Ηλεκτρική κιθάρα",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Μπάσο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Πιτσικάτο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Τσέλο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Τρομπόνι",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Κλαρινέτο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Σαξόφωνο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Φλάουτο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Ξύλινο φλάουτο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Φαγκότο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Χορωδία",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Βιμπράφωνο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Μουσικό Κουτί",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Μεταλλικό Τύμπανο",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Μαρίμπα",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Εισαγωγή Συνθεσάιζερ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Πληκτρολόγιο Συνθεσάιζερ",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "χρώμα",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "κορεσμό",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "φωτεινότητα",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "διαφάνεια",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "κατεύθυνση",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "κίνηση",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "αντικείμενο",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "σκηνή",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "απενεργοποιημένο",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "ενεργοποιημένο",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "αναστραμμένο",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "άλτο",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "τενόρος",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "στριγκλιά",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "γίγαντας",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "γατάκι",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "πάνω",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "κάτω",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "αριστερά",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "δεξιά",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "οποιοδήποτε",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "αναπηδήσει",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "κινηθεί",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "τρανταχθεί",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "οπουδήποτε",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "πίσω",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "μπροστά",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "αριστερά",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "δεξιά",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "προς εκείνη την κατεύθυνση",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "προς αυτήν την κατεύθυνση",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "αντιστροφή",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "όποιο χρώμα",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "μαύρο",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "μπλε",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "πράσινο",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "κόκκινο",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "άσπρο",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "κίτρινο",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "οπουδήποτε",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "πάνω",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "κάτω",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "αριστερά",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "δεξιά",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "κινητήρα A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "κινητήρα B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "όλους κινητήρες",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "κινητήρα",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "προς αυτήν την κατεύθυνση",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "προς εκείνη την κατεύθυνση",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "αντιστροφή",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "οπουδήποτε",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "πάνω",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "κάτω",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "αριστερά",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "δεξιά",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "τραβηχτεί",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "πιεστεί",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "τρανταχθεί",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "αρχίσει πτώση",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "στραμμένο προς τα κάτω",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "στραμμένο προς τα πάνω",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "μπροστά",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "πίσω",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "αριστερά",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "δεξιά",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "οπουδήποτε",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "αριστερά πάνω δεξιά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "δεξιά πάνω αριστερά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "αριστερά δεξιά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "δεξιά αριστερά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "πάνω κάτω",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "κάτω πάνω",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "πάνω δεξιά κάτω αριστερά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "πάνω αριστερά κάτω δεξιά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "πάνω πάνω κάτω κάτω αριστερά δεξιά αριστερά δεξιά",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.en": {
		value: "Αγγλικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Αζερμπαϊτζανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "Αμχαρικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Αραβικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Βασκικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Βιετναμεζικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Βουλγαρικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Γαελικά Σκοτίας",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Γαλικιακά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Γαλλικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "Γερμανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Δανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Εβραϊκά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Ελληνικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Εσθονικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Ζουλού",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Ιαπωνικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Ινδονησιακά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Ιρλανδικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Ισλανδικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Ισπανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Ιταλικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Καταλανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "Κινεζικά (Απλοποιημένα)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "Κινεζικά (Παραδοσιακά)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Κορεατικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Κουρδικά (Σορανί)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Κροατικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Λετονικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Λιθουανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Μαορί",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Νορβηγικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Ολλανδικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Ουαλικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Ουγγρικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ουκρανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Περσικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Πολωνικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Πορτογαλικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Ρουμανικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Ρωσικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Σερβικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Σλοβακικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Σλοβενικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Σουηδικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Ταϊλανδεζικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Τουρκικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Τσεχικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Φινλανδικά",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Αραβικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Ουαλικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Δανικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Γερμανικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Αγγλικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Ισπανικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Ισπανικά (Λατινικής Αμερικής)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Γαλλικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Κορεατικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Χίντι",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Ισλανδικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Ιταλικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Ολλανδικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Ιαπωνικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Νορβηγικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Πολωνικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Πορτογαλικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Πορτογαλικά (Βραζιλιάνικα)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Ρουμανικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Ρωσικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Σουηδικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Τουρκικά",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Κινέζικα (μανταρίνια)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$3 = [
];
var soundEffects$3 = [
	"τόνος",
	"μετατόπιση αριστερά/δεξιά"
];
var microbitWhen$3 = [
	"κινηθεί",
	"τρανταχθεί",
	"αναπηδήσει"
];
var osis$3 = [
	"άλλα σενάρια σε αυτό το αντικείμενο"
];
var definePrefix$3 = [
	"ορισμός"
];
var defineSuffix$3 = [
];
var palette$3 = {
	Motion: "Κίνηση",
	Looks: "Όψεις",
	Sound: "Ήχος",
	Events: "Συμβάντα",
	Control: "Έλεγχος",
	Sensing: "Αισθητήρες",
	Operators: "Τελεστές",
	Variables: "Μεταβλητές",
	"My Blocks": "Οι Εντολές μου"
};
var math$3 = [
	"απόλυτο",
	"στρογγυλ. κάτω",
	"στρογγυλ. άνω",
	"τετρ. ρίζα",
	"ημ",
	"συν",
	"εφ",
	"τοξημ",
	"τοξσυν",
	"τοξεφ",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$3 = {
	"στρίψε αριστερά %1 μοίρες": "MOTION_TURNLEFT",
	"στρίψε αριστερόστροφα %1 μοίρες": "MOTION_TURNLEFT",
	"στρίψε δεξιά %1 μοίρες": "MOTION_TURNRIGHT",
	"στρίψε δεξιόστροφα %1 μοίρες": "MOTION_TURNRIGHT",
	"Όταν στην πράσινη σημαία γίνει κλικ": "EVENT_WHENFLAGCLICKED",
	"τέλος": "scratchblocks:end"
};
var name$3 = "Ελληνικά";
var percentTranslated$3 = 100;
var el = {
	commands: commands$3,
	dropdowns: dropdowns$3,
	ignorelt: ignorelt$3,
	soundEffects: soundEffects$3,
	microbitWhen: microbitWhen$3,
	osis: osis$3,
	definePrefix: definePrefix$3,
	defineSuffix: defineSuffix$3,
	palette: palette$3,
	math: math$3,
	aliases: aliases$3,
	name: name$3,
	percentTranslated: percentTranslated$3
};

var commands$2 = {
	MOTION_MOVESTEPS: "идти %1 шагов",
	MOTION_TURNRIGHT: "повернуть @turnRight на %1 градусов",
	MOTION_TURNLEFT: "повернуть @turnLeft на %1 градусов",
	MOTION_POINTINDIRECTION: "повернуться в направлении %1",
	MOTION_POINTTOWARDS: "повернуться к %1",
	MOTION_GOTOXY: "перейти в x: %1 y: %2",
	MOTION_GOTO: "перейти на %1",
	MOTION_GLIDESECSTOXY: "плыть %1 секунд в точку x: %2 y: %3",
	MOTION_GLIDETO: "плыть %1 секунд к %2",
	MOTION_CHANGEXBY: "изменить x на %1",
	MOTION_SETX: "установить x в %1",
	MOTION_CHANGEYBY: "изменить y на %1",
	MOTION_SETY: "установить y в %1",
	MOTION_SETROTATIONSTYLE: "установить способ вращения %1",
	LOOKS_SAYFORSECS: "говорить %1 %2 секунд",
	LOOKS_SAY: "сказать %1",
	LOOKS_THINKFORSECS: "думать %1 %2 секунд",
	LOOKS_THINK: "думать %1",
	LOOKS_SHOW: "показаться",
	LOOKS_HIDE: "спрятаться",
	LOOKS_SWITCHCOSTUMETO: "изменить костюм на %1",
	LOOKS_NEXTCOSTUME: "следующий костюм",
	LOOKS_NEXTBACKDROP_BLOCK: "следующий фон",
	LOOKS_SWITCHBACKDROPTO: "переключить фон на %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "переключить фон на %1 и ждать",
	LOOKS_CHANGEEFFECTBY: "изменить эффект %1 на %2",
	LOOKS_SETEFFECTTO: "установить эффект %1 %2",
	LOOKS_CLEARGRAPHICEFFECTS: "убрать графические эффекты",
	LOOKS_CHANGESIZEBY: "изменить размер на %1 %",
	LOOKS_SETSIZETO: "установить размер %1 %",
	LOOKS_GOTOFRONTBACK: "перейти на %1 слой",
	LOOKS_GOFORWARDBACKWARDLAYERS: "перейти %1 на %2 слоя",
	SOUND_PLAY: "включить звук %1",
	SOUND_CHANGEEFFECTBY: "изменить %1 эффект на %2",
	SOUND_SETEFFECTO: "установить эффект %1 в %2",
	SOUND_CLEAREFFECTS: "убрать звуковые эффекты",
	SOUND_PLAYUNTILDONE: "играть звук %1 до конца",
	SOUND_STOPALLSOUNDS: "остановить все звуки",
	"music.playDrumForBeats": "барабану играть %1  %2 бита",
	"music.restForBeats": "пауза в течение %1 бит",
	"music.playNoteForBeats": "играй ноту %1 %2 бита",
	"music.setInstrument": "изменить инструмент на %1",
	SOUND_CHANGEVOLUMEBY: "изменить громкость на %1",
	SOUND_SETVOLUMETO: "установить громкость %1%",
	"music.changeTempo": "изменить темп на %1",
	"music.setTempo": "установить темп %1",
	"pen.clear": "стереть всё",
	"pen.stamp": "печать",
	"pen.penDown": "опустить перо",
	"pen.penUp": "поднять перо",
	"pen.setColor": "установить для пера цвет %1",
	"pen.changeHue": "изменить цвет пера на %1",
	"pen.setColorParam": "установить %1 пера %2",
	"pen.changeColorParam": "изменить %1 пера на %2",
	"pen.setHue": "установить цвет пера %1",
	"pen.changeShade": "изменить оттенок пера на %1",
	"pen.setShade": "установить оттенок пера %1",
	"pen.changeSize": "изменить размер пера на %1",
	"pen.setSize": "установить размер пера %1",
	EVENT_WHENFLAGCLICKED: "когда @greenFlag нажат",
	EVENT_WHENKEYPRESSED: "когда клавиша %1 нажата",
	EVENT_WHENTHISSPRITECLICKED: "когда спрайт нажат",
	EVENT_WHENSTAGECLICKED: "когда кликнут по сцене",
	EVENT_WHENBACKDROPSWITCHESTO: "когда фон сменился на %1",
	EVENT_WHENGREATERTHAN: "когда %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "когда я получу %1",
	EVENT_BROADCAST: "передать %1",
	EVENT_BROADCASTANDWAIT: "передать %1 и ждать до конца",
	CONTROL_WAIT: "ждать %1 секунд",
	CONTROL_REPEAT: "повторить %1 раз",
	CONTROL_FOREVER: "повторять всегда",
	CONTROL_IF: "если %1 , то",
	CONTROL_WAITUNTIL: "ждать до %1",
	CONTROL_REPEATUNTIL: "повторять пока не %1",
	CONTROL_STOP: "стоп %1",
	CONTROL_STARTASCLONE: "когда я начинаю как клон",
	CONTROL_CREATECLONEOF: "создать клон %1",
	CONTROL_DELETETHISCLONE: "удалить клон",
	SENSING_ASKANDWAIT: "спросить %1 и ждать",
	"videoSensing.videoToggle": "включить видео %1",
	"videoSensing.setVideoTransparency": "установить прозрачность видео  %1",
	"videoSensing.whenMotionGreaterThan": "когда скорость видео > %1",
	SENSING_RESETTIMER: "сбросить таймер",
	DATA_SETVARIABLETO: "задать %1 значение %2",
	DATA_CHANGEVARIABLEBY: "изменить %1 на %2",
	DATA_SHOWVARIABLE: "показать переменную %1",
	DATA_HIDEVARIABLE: "скрыть переменную %1",
	DATA_ADDTOLIST: "добавить %1 к %2",
	DATA_DELETEOFLIST: "удалить %1 из %2",
	DATA_DELETEALLOFLIST: "удалить все из %1",
	MOTION_IFONEDGEBOUNCE: "если касается края, оттолкнуться",
	DATA_INSERTATLIST: "вставить %1 в %3 из %2",
	DATA_REPLACEITEMOFLIST: "заменить элемент %1 в %2 на %3",
	DATA_SHOWLIST: "показать список %1",
	DATA_HIDELIST: "скрыть список %1",
	SENSING_OF_XPOSITION: "положение x",
	SENSING_OF_YPOSITION: "положение y",
	SENSING_OF_DIRECTION: "направление",
	SENSING_OF_COSTUMENUMBER: "костюм #",
	LOOKS_COSTUMENUMBERNAME: "костюм %1",
	SENSING_OF_SIZE: "размер",
	SENSING_OF_BACKDROPNAME: "имя фона",
	LOOKS_BACKDROPNUMBERNAME: "фон %1",
	SENSING_OF_BACKDROPNUMBER: "фон #",
	SOUND_VOLUME: "громкость звука",
	"music.getTempo": "темп",
	SENSING_TOUCHINGOBJECT: "касается %1?",
	SENSING_TOUCHINGCOLOR: "касается цвета %1?",
	SENSING_COLORISTOUCHINGCOLOR: "цвет %1 касается цвета %2?",
	SENSING_DISTANCETO: "расстояние до %1",
	SENSING_ANSWER: "ответ",
	SENSING_KEYPRESSED: "клавиша %1 нажата?",
	SENSING_MOUSEDOWN: "мышь нажата?",
	SENSING_MOUSEX: "x мыши",
	SENSING_MOUSEY: "y мыши",
	SENSING_SETDRAGMODE: "перетаскивать %1",
	SENSING_LOUDNESS: "громкость",
	"videoSensing.videoOn": "видео %1  на %2",
	SENSING_TIMER: "таймер",
	SENSING_OF: "%1 от %2",
	SENSING_CURRENT: "текущий %1",
	SENSING_DAYSSINCE2000: "дней с 2000 г",
	SENSING_USERNAME: "имя пользователя",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "выдать случайное от %1 до %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 и %2",
	OPERATORS_OR: "%1 или %2",
	OPERATORS_NOT: "не %1",
	OPERATORS_JOIN: "объединить %1 %2",
	OPERATORS_LETTEROF: "буква %1 в %2",
	OPERATORS_LENGTH: "длина %1",
	OPERATORS_MOD: "остаток от деления %1 на %2",
	OPERATORS_ROUND: "округлить %1",
	OPERATORS_MATHOP: "%1 от %2",
	OPERATORS_CONTAINS: "%1 содержит %2?",
	DATA_ITEMOFLIST: "элемент %1 в %2",
	DATA_ITEMNUMOFLIST: "№ элемента %1 в %2",
	DATA_LENGTHOFLIST: "длина списка %1",
	DATA_LISTCONTAINSITEM: "%1 содержит %2?",
	CONTROL_ELSE: "иначе",
	SENSING_USERID: "id пользователя",
	SENSING_LOUD: "громко?",
	"text2speech.speakAndWaitBlock": "сказать %1",
	"text2speech.setVoiceBlock": "установить %1 голос",
	"text2speech.setLanguageBlock": "установить %1 язык",
	"translate.translateBlock": "перевести %1 на %2",
	"translate.viewerLanguage": "язык",
	"makeymakey.whenKeyPressed": "когда %1 клавиша нажата",
	"makeymakey.whenKeysPressedInOrder": "при нажатии по порядку %1",
	"microbit.whenButtonPressed": "когда %1 кнопка нажата",
	"microbit.isButtonPressed": "%1 кнопка нажата?",
	"microbit.whenGesture": "когда %1",
	"microbit.displaySymbol": "отобразить %1",
	"microbit.displayText": "показать текст %1",
	"microbit.clearDisplay": "очистить дисплей",
	"microbit.whenTilted": "когда наклонён %1",
	"microbit.isTilted": "наклонён %1?",
	"microbit.tiltAngle": "угол наклона %1",
	"microbit.whenPinConnected": "когда подключён пин %1",
	"ev3.motorTurnClockwise": "мотор %1 повернуть сюда на %2 секунд",
	"ev3.motorTurnCounterClockwise": "мотор %1 повернуть туда на %2 секунд",
	"ev3.motorSetPower": "мотор %1 установить мощность %2 %",
	"ev3.getMotorPosition": "позиция мотора %1",
	"ev3.whenButtonPressed": "когда кнопка %1 нажата",
	"ev3.whenDistanceLessThan": "когда расстояние < %1",
	"ev3.whenBrightnessLessThan": "когда яркость < %1",
	"ev3.buttonPressed": "кнопка %1 нажата?",
	"ev3.getDistance": "расстояние",
	"ev3.getBrightness": "яркость",
	"ev3.beepNote": "играть ноту %1 %2 секунд",
	"wedo2.motorOn": "включить %1",
	"wedo2.motorOff": "выключить %1",
	"wedo2.startMotorPower": "установить мощность %1 в %2",
	"wedo2.setMotorDirection": "установить направление %1 в %2",
	"wedo2.whenDistance": "когда расстояние %1 %2",
	"wedo2.getDistance": "расстояние",
	"wedo2.motorOnFor": "включить %1 на %2 секунд",
	"wedo2.setLightHue": "установить цвет лампочки %1",
	"wedo2.playNoteFor": "играть ноту %1 %2 секунд",
	"wedo2.whenTilted": "когда наклонён %1",
	"wedo2.isTilted": "наклонён %1 ?",
	"wedo2.getTiltAngle": "угол наклона%1",
	"gdxfor.whenGesture": "когда %1",
	"gdxfor.whenForcePushedOrPulled": "когда датчик приложения силы %1",
	"gdxfor.getForce": "сила",
	"gdxfor.whenTilted": "когда наклонён %1",
	"gdxfor.isTilted": "наклонён %1?",
	"gdxfor.getTilt": "угол наклона %1",
	"gdxfor.isFreeFalling": "падение?",
	"gdxfor.getSpin": "скорость вращения %1",
	"gdxfor.getAcceleration": "ускорение %1",
	"boost.motorOnFor": "включить мотор %1 на %2 секунд",
	"boost.motorOnForRotation": "включить мотор %1 на %2 оборотов",
	"boost.motorOn": "включить мотор %1",
	"boost.motorOff": "выключить мотор %1",
	"boost.setMotorPower": "установить скорость %1 в %2 %",
	"boost.setMotorDirection": "установить направление мотора %1 в %2",
	"boost.getMotorPosition": "позиция мотора %1",
	"boost.whenColor": "когда виден %1 кирпич",
	"boost.seeingColor": "виден %1 кирпич?",
	"boost.whenTilted": "когда наклонён %1",
	"boost.getTiltAngle": "угол наклона %1",
	"boost.setLightHue": "установить цвет лампочки %1"
};
var dropdowns$2 = {
	MOTION_GOTO_POINTER: {
		value: "указатель мыши",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "случайное положение",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "указатель мыши",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "случайное положение",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "указатель мыши",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "случайно направление",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "влево-вправо",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "не вращать",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "кругом",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "следующий фон",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "предыдущий фон",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "случайный фон",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "цвет",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "рыбий глаз",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "завихрение",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "укрупнение пикселей",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "мозаика",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "яркость",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "прозрачность",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "передний",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "задний",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "вперёд",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "назад",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "номер",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "имя",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "высота тона",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "звучание слева/справа",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "пробел",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "стрелка влево",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "стрелка вправо",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "стрелка вниз",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "стрелка вверх",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "любая",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "таймер",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "громкость",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "все",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "этот скрипт",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "другие скрипты спрайта",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "самого себя",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "указатель мыши",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "край",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "указатель мыши",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "можно",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "нельзя",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "положение x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "положение y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "направление",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "костюм #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "имя костюма",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "размер",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "громкость",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "фон #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "имя фона",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Сцена",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "год",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "месяц",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "дата",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "день недели",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "час",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "минута",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "секунда",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "модуль",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "целое меньшее",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "целое большее",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "квадратный корень",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Малый барабан",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Большой барабан",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Римшот",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Крэш-тарелка",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Открытый Хай-Хет",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(16) Закрытый Хай-Хэт",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Бубен",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Хлопок",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Клаве",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Коробочка",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Ковбелл",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Треугольник",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Бонго",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Конга",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Кабаса",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Гуиро",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Вибраслэп",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Куика",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Фортепиано",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Электрическое пианино",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Орган",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Гитара",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Электрогитара",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Бас",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Пиццикато",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Виолончель",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Тромбон",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Кларнет",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Саксофон",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Флейта",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Деревянная флейта",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Фагот",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Хор",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Вибрафон",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Музыкальная шкатулка",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Стальной барабан",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Маримба",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Ведущий синтезатор",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Синтезатор с функциями драм-машины",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "цвет",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "насыщенность",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "яркость",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "прозрачность",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "направление",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "движение",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "спрайт",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "сцена",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "выключить",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "включить",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "включить в обратную",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "альт",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "тенор",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "писк",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "гигант",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "котенок",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "вверх",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "вниз",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "влево",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "направо",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "любой из",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "подпрыгнули",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "передвинулись",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "встряхнули",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "любой из",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "назад",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "вперёд",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "влево",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "направо",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "туда",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "сюда",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "изменить направление",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "любой цвет",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "черный",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "синий",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "зеленый",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "красный",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "белый",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "желтый",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "любая",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "вверх",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "вниз",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "налево",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "направо",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "мотор A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "мотор B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "все моторы",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "мотор",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "сюда",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "туда",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "изменить направление",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "любая",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "вверх",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "вниз",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "влево",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "направо",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "вытянут",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "нажат",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "встряхнут",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "начал падать",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "повернут лицом вниз",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "повернут лицом вверх",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "передний",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "задний",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "левый",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "правый",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "любая",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "влево вверх направо",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "направо вверх влево",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "влево направо",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "направо влево",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "вверх вниз",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "вниз вверх",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "вверх направо вниз влево",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "вверх влево вниз направо",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "вверх вверх вниз вниз влево направо влево направо",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.az": {
		value: "азербайджанский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "амхарский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "английский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "арабский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "баскский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "болгарский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "валлийский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "венгерский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "вьетнамский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "галисийский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "греческий",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "датский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "зулу",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "иврит",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "индонезийский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "ирландский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "исландский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "испанский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "итальянский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "каталанский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "китайский (традиционный)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "китайский (упрощенный)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "корейский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "курдский (сорани)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "латышский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "литовский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "маори",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "немецкий",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "нидерландский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "норвежский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "польский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "португальский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "румынский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "русский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "сербский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "словацкий",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "словенский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "тайский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "турецкий",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "украинский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "фарси",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "финский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "французский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "хорватский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "чешский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "шведский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "шотландский (гэльский)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "эстонский",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "японский",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Арабский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Валлийский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Датский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Немецкий",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Английский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Испанский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Испанский (Латинская Америка)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Французский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Корейский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Хинди",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Исландский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Итальянский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Нидерландский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Японский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Норвежский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Польский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Португальский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Португальский (бразильский)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Румынский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Русский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Шведский",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Турецкий",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Китайский (мандарин)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$2 = [
];
var soundEffects$2 = [
	"высота тона",
	"звучание слева/справа"
];
var microbitWhen$2 = [
	"передвинулись",
	"встряхнули",
	"подпрыгнули"
];
var osis$2 = [
	"другие скрипты спрайта"
];
var definePrefix$2 = [
	"определить"
];
var defineSuffix$2 = [
];
var palette$2 = {
	Motion: "Движение",
	Looks: "Внешний вид",
	Sound: "Звук",
	Events: "События",
	Control: "Управление",
	Sensing: "Сенсоры",
	Operators: "Операторы",
	Variables: "Переменные",
	"My Blocks": "Другие блоки"
};
var math$2 = [
	"модуль",
	"целое меньшее",
	"целое большее",
	"квадратный корень",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$2 = {
	"повернуть влево на %1 градусов": "MOTION_TURNLEFT",
	"повернуть вправо на %1 градусов": "MOTION_TURNRIGHT",
	"когда щёлкнут по зелёному флагу": "EVENT_WHENFLAGCLICKED",
	"конец": "scratchblocks:end"
};
var name$2 = "Русский";
var percentTranslated$2 = 100;
var ru = {
	commands: commands$2,
	dropdowns: dropdowns$2,
	ignorelt: ignorelt$2,
	soundEffects: soundEffects$2,
	microbitWhen: microbitWhen$2,
	osis: osis$2,
	definePrefix: definePrefix$2,
	defineSuffix: defineSuffix$2,
	palette: palette$2,
	math: math$2,
	aliases: aliases$2,
	name: name$2,
	percentTranslated: percentTranslated$2
};

var commands$1 = {
	MOTION_MOVESTEPS: "mou-te %1 passos",
	MOTION_TURNRIGHT: "gira @turnRight %1 graus",
	MOTION_TURNLEFT: "gira @turnLeft %1 graus",
	MOTION_POINTINDIRECTION: "apunta en direcció %1",
	MOTION_POINTTOWARDS: "apunta cap a %1",
	MOTION_GOTOXY: "vés a x: %1 y: %2",
	MOTION_GOTO: "vés a %1",
	MOTION_GLIDESECSTOXY: "llisca en %1 segons fins a x: %2 y: %3",
	MOTION_GLIDETO: "llisca en %1 segons fins a %2",
	MOTION_CHANGEXBY: "suma %1 a x",
	MOTION_SETX: "assigna el valor %1 a x",
	MOTION_CHANGEYBY: "suma %1 a y",
	MOTION_SETY: "assigna el valor %1 a y",
	MOTION_SETROTATIONSTYLE: "fixa el tipus de rotació %1",
	LOOKS_SAYFORSECS: "digues %1 durant %2 segons",
	LOOKS_SAY: "digues %1",
	LOOKS_THINKFORSECS: "pensa %1 durant %2 segons",
	LOOKS_THINK: "pensa %1",
	LOOKS_SHOW: "mostra't",
	LOOKS_HIDE: "amaga't",
	LOOKS_SWITCHCOSTUMETO: "canvia el vestit a %1",
	LOOKS_NEXTCOSTUME: "següent vestit",
	LOOKS_NEXTBACKDROP_BLOCK: "següent fons de pantalla",
	LOOKS_SWITCHBACKDROPTO: "canvia el fons a %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "canvia el fons a %1 i espera",
	LOOKS_CHANGEEFFECTBY: "augmenta l'efecte %1 en %2",
	LOOKS_SETEFFECTTO: "fixa l'efecte %1 a %2",
	LOOKS_CLEARGRAPHICEFFECTS: "treu els efectes gràfics",
	LOOKS_CHANGESIZEBY: "augmenta %1 la mida",
	LOOKS_SETSIZETO: "fixa la mida a %1 %",
	LOOKS_GOTOFRONTBACK: "vés a la capa %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "vés %1 %2 capes",
	SOUND_PLAY: "inicia el so %1",
	SOUND_CHANGEEFFECTBY: "augmenta l'efecte %1 en %2",
	SOUND_SETEFFECTO: "fixa l'efecte %1 a %2",
	SOUND_CLEAREFFECTS: "treu els efectes sonors",
	SOUND_PLAYUNTILDONE: "toca el so %1 fins que acabi",
	SOUND_STOPALLSOUNDS: "atura tots els sons",
	"music.playDrumForBeats": "toca el tambor %1 durant %2 pulsacions",
	"music.restForBeats": "espera %1 pulsacions",
	"music.playNoteForBeats": "toca la nota %1 durant %2 pulsacions",
	"music.setInstrument": "fixa instrument a %1",
	SOUND_CHANGEVOLUMEBY: "puja %1 el volum",
	SOUND_SETVOLUMETO: "fixa el volum a %1%",
	"music.changeTempo": "augmenta %1 el tempo",
	"music.setTempo": "fixa el tempo a %1",
	"pen.clear": "esborra-ho tot",
	"pen.stamp": "estampa",
	"pen.penDown": "baixa el llapis",
	"pen.penUp": "puja el llapis",
	"pen.setColor": "fixa el color del llapis a %1",
	"pen.changeHue": "augmenta %1 el color del llapis",
	"pen.setColorParam": "fixa %1 del llapis a %2",
	"pen.changeColorParam": "augmenta %1 del llapis en %2",
	"pen.setHue": "fixa el color del llapis a %1",
	"pen.changeShade": "augmenta %1 la intensitat del llapis",
	"pen.setShade": "fixa la intensitat del llapis a %1",
	"pen.changeSize": "augmenta %1 la mida del llapis",
	"pen.setSize": "fixa la mida del llapis a %1",
	EVENT_WHENFLAGCLICKED: "quan la @greenFlag es cliqui",
	EVENT_WHENKEYPRESSED: "quan la tecla %1 es premi",
	EVENT_WHENTHISSPRITECLICKED: "quan es cliqui aquest personatge",
	EVENT_WHENSTAGECLICKED: "quan es cliqui l'escenari",
	EVENT_WHENBACKDROPSWITCHESTO: "quan l'escenari canviï al fons %1",
	EVENT_WHENGREATERTHAN: "quan %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "quan rebi %1",
	EVENT_BROADCAST: "envia a tots %1",
	EVENT_BROADCASTANDWAIT: "envia a tots %1 i espera",
	CONTROL_WAIT: "espera %1 segons",
	CONTROL_REPEAT: "repeteix %1",
	CONTROL_FOREVER: "per sempre",
	CONTROL_IF: "si %1 llavors",
	CONTROL_WAITUNTIL: "espera fins %1",
	CONTROL_REPEATUNTIL: "repeteix fins %1",
	CONTROL_STOP: "atura %1",
	CONTROL_STARTASCLONE: "quan una còpia meva comenci",
	CONTROL_CREATECLONEOF: "crea una còpia de %1",
	CONTROL_DELETETHISCLONE: "esborra aquesta còpia",
	SENSING_ASKANDWAIT: "pregunta %1 i espera",
	"videoSensing.videoToggle": "posa vídeo %1",
	"videoSensing.setVideoTransparency": "fixa la transparència del vídeo a %1",
	"videoSensing.whenMotionGreaterThan": "quan el moviment de vídeo > %1",
	SENSING_RESETTIMER: "reinicia el cronòmetre",
	DATA_SETVARIABLETO: "assigna a %1 el valor %2",
	DATA_CHANGEVARIABLEBY: "augmenta %1 en %2",
	DATA_SHOWVARIABLE: "mostra la variable %1",
	DATA_HIDEVARIABLE: "amaga la variable %1",
	DATA_ADDTOLIST: "afegeix %1 a %2",
	DATA_DELETEOFLIST: "esborra l'element %1 de %2",
	DATA_DELETEALLOFLIST: "esborra-ho tot de %1",
	MOTION_IFONEDGEBOUNCE: "rebota en tocar una vora",
	DATA_INSERTATLIST: "afegeix %1 a la posició %2 de %3",
	DATA_REPLACEITEMOFLIST: "canvia l'element %1 de %2 per %3",
	DATA_SHOWLIST: "mostra la llista %1",
	DATA_HIDELIST: "amaga la llista %1",
	SENSING_OF_XPOSITION: "posició x",
	SENSING_OF_YPOSITION: "posició y",
	SENSING_OF_DIRECTION: "direcció",
	SENSING_OF_COSTUMENUMBER: "vestit nr",
	LOOKS_COSTUMENUMBERNAME: "vestit %1",
	SENSING_OF_SIZE: "mida",
	SENSING_OF_BACKDROPNAME: "nom del fons",
	LOOKS_BACKDROPNUMBERNAME: "fons %1",
	SENSING_OF_BACKDROPNUMBER: "fons nr",
	SOUND_VOLUME: "volum",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "tocant %1?",
	SENSING_TOUCHINGCOLOR: "tocant el color %1?",
	SENSING_COLORISTOUCHINGCOLOR: "color %1 sobre %2?",
	SENSING_DISTANCETO: "distància a %1",
	SENSING_ANSWER: "resposta",
	SENSING_KEYPRESSED: "tecla %1 premuda?",
	SENSING_MOUSEDOWN: "ratolí clicat?",
	SENSING_MOUSEX: "ratolí x",
	SENSING_MOUSEY: "ratolí y",
	SENSING_SETDRAGMODE: "fixa el mode d'arrossegament %1",
	SENSING_LOUDNESS: "volum del so",
	"videoSensing.videoOn": "vídeo %1 a %2",
	SENSING_TIMER: "cronòmetre",
	SENSING_OF: "%1 de %2",
	SENSING_CURRENT: "actual %1",
	SENSING_DAYSSINCE2000: "dies des del 2000",
	SENSING_USERNAME: "nom d'usuari",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "nombre a l'atzar entre %1 i %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 i %2",
	OPERATORS_OR: "%1 o %2",
	OPERATORS_NOT: "no %1",
	OPERATORS_JOIN: "uneix %1 i %2",
	OPERATORS_LETTEROF: "lletra %1 de %2",
	OPERATORS_LENGTH: "llargada de %1",
	OPERATORS_MOD: "residu de dividir %1 entre %2",
	OPERATORS_ROUND: "arrodoneix %1",
	OPERATORS_MATHOP: "%1 de %2",
	OPERATORS_CONTAINS: "%1 conté %2?",
	DATA_ITEMOFLIST: "element %1 de %2",
	DATA_ITEMNUMOFLIST: "element # de %1 en %2",
	DATA_LENGTHOFLIST: "llargada de %1",
	DATA_LISTCONTAINSITEM: "%1 conté %2?",
	CONTROL_ELSE: "si no",
	SENSING_USERID: "ID d'usuari",
	SENSING_LOUD: "so fort?",
	"text2speech.speakAndWaitBlock": "parla %1",
	"text2speech.setVoiceBlock": "fixa la veu a %1",
	"text2speech.setLanguageBlock": "fixa l'idioma a %1",
	"translate.translateBlock": "tradueix %1 a %2",
	"translate.viewerLanguage": "idioma",
	"makeymakey.whenKeyPressed": "quan la tecla %1 es premi",
	"makeymakey.whenKeysPressedInOrder": "quan %1 es premin en ordre",
	"microbit.whenButtonPressed": "quan el botó %1 es premi",
	"microbit.isButtonPressed": "%1 botó premut?",
	"microbit.whenGesture": "quan %1",
	"microbit.displaySymbol": "mostra %1",
	"microbit.displayText": "mostra text %1",
	"microbit.clearDisplay": "no mostris res",
	"microbit.whenTilted": "quan s'inclini %1",
	"microbit.isTilted": "inclinat %1?",
	"microbit.tiltAngle": "angle d'inclinació %1",
	"microbit.whenPinConnected": "quan el pin %1 connectat",
	"ev3.motorTurnClockwise": "motor %1 cap aquí durant %2 segons",
	"ev3.motorTurnCounterClockwise": "motor %1 cap allà durant %2 segons",
	"ev3.motorSetPower": "motor %1 potència %2 %",
	"ev3.getMotorPosition": "posició del motor %1",
	"ev3.whenButtonPressed": "quan el botó %1 es premi",
	"ev3.whenDistanceLessThan": "quan la distància < %1",
	"ev3.whenBrightnessLessThan": "quan la brillantor < %1",
	"ev3.buttonPressed": "botó %1 premut?",
	"ev3.getDistance": "distància",
	"ev3.getBrightness": "brillantor",
	"ev3.beepNote": "fes sonar la nota %1 durant %2 segons",
	"wedo2.motorOn": "activa el motor %1",
	"wedo2.motorOff": "apaga motor %1",
	"wedo2.startMotorPower": "fixa la potència de %1 a %2",
	"wedo2.setMotorDirection": "fixa la direcció de %1 a %2",
	"wedo2.whenDistance": "quan la distància %1 %2",
	"wedo2.getDistance": "distància",
	"wedo2.motorOnFor": "activa %1 durant %2 segons",
	"wedo2.setLightHue": "fixa el color del llum a %1",
	"wedo2.playNoteFor": "toca la nota %1 durant %2 segons",
	"wedo2.whenTilted": "quan la inclinació %1",
	"wedo2.isTilted": "inclinat %1?",
	"wedo2.getTiltAngle": "angle d'inclinació %1",
	"gdxfor.whenGesture": "quan %1",
	"gdxfor.whenForcePushedOrPulled": "quan el sensor de força %1",
	"gdxfor.getForce": "força",
	"gdxfor.whenTilted": "quan s'inclini %1",
	"gdxfor.isTilted": "inclinat %1?",
	"gdxfor.getTilt": "angle d'inclinació %1",
	"gdxfor.isFreeFalling": "caient?",
	"gdxfor.getSpin": "velocitat de gir %1",
	"gdxfor.getAcceleration": "acceleració %1",
	"boost.motorOnFor": "activa el motor %1 durant %2 segons",
	"boost.motorOnForRotation": "activa el motor %1 durant %2 rotacions",
	"boost.motorOn": "activa el motor %1",
	"boost.motorOff": "apaga el motor %1",
	"boost.setMotorPower": "fixa la velocitat del motor %1 a %2 %",
	"boost.setMotorDirection": "fixa la direcció del motor %1 a %2",
	"boost.getMotorPosition": "posició del motor %1",
	"boost.whenColor": "quan detecti el bloc %1",
	"boost.seeingColor": "detecta el bloc %1?",
	"boost.whenTilted": "quan la inclinació %1",
	"boost.getTiltAngle": "angle d'inclinació %1",
	"boost.setLightHue": "fixa el color del llum a %1"
};
var dropdowns$1 = {
	MOTION_GOTO_POINTER: {
		value: "punter del ratolí",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "posició aleatòria",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "punter del ratolí",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "posició aleatòria",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "punter del ratolí",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "direcció aleatòria",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "esquerra-dreta",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "no giris",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "al voltant",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "següent fons de pantalla",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "fons anterior",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "fons a l'atzar",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "color",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "ull de peix",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "remolí",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pixelar",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaic",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "brillantor",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "transparència",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "front",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "darrere",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "endavant",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "enrere",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "número",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "nom",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "pitch",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "pan esquerra/dreta",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "espai",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "fletxa esquerra",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "fletxa dreta",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "fletxa avall",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "fletxa amunt",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "qualsevol",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "cronòmetre",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "volum del so",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "tot",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "aquest programa",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "altres programes del personatge",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "jo mateix",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "punter del ratolí",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "vora",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "punter del ratolí",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "arrossegable",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "no arrossegable",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "posició x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "posició y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "direcció",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "vestit nr",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "nom del vestit",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "mida",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volum",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "fons nr",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "nom del fons",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Escenari",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "any",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "mes",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "data",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "dia de la setmana",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "hora",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "minut",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "segon",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "abs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "part sencera",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "sostre",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "arrel quadrada",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Tambor militar petit",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Bombo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Cop lateral",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Platets",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Xarles obert",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Xarles tancat",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamborí",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Aplaudiment",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Claus",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Bloc de fusta",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Esquella",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangle",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabassa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Guiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibra-Slap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuica",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Piano elèctric",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Orgue",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Guitarra",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Guitarra elèctrica",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Baix",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Violoncel",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombó",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Clarinet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saxòfon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Flauta",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Flauta dolça",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagot",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Cor",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibràfon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Caixa de música",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Tambor d'acer",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Sintetitzador solista",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Sintetitzador de fons",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "color",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "saturació",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "brillantor",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "transparència",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "direcció",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "moviment",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "personatge",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "escenari",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "apaga",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "activa",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "voltejat actiu",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "contralt",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "veu divertida",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "gegant",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "gatet",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "amunt",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "avall",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "esquerra",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "dreta",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "qualsevol",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "salti",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "es mogui",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "es sacsegi",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "qualsevol",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "darrere",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "al davant",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "esquerra",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "dreta",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "cap aquí",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "cap allà",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "invertit",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "qualsevol color",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "negre",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "blau",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "verd",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "vermell",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "blanc",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "groc",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "qualsevol",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "amunt",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "avall",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "esquerra",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "dreta",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "tots els motors",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "cap allà",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "cap aquí",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "invertit",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "qualsevol",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "amunt",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "avall",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "esquerra",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "dreta",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "tirat",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "empès",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "es sacsegi",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "ha començat a caure",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "girat cara avall",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "girat cara amunt",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "davant",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "darrere",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "esquerra",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "dreta",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "qualsevol",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "esquerra amunt dreta",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "dreta amunt esquerra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "esquerra dreta",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "dreta esquerra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "amunt avall",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "avall amunt",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "amunt dreta avall esquerra",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "amunt esquerra avall dreta",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "amunt amunt avall avall esquerra dreta esquerra dreta",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.de": {
		value: "alemany",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.am": {
		value: "amhàric",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "anglès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "àrab",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "àzeri",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "basc",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "búlgar",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "castellà",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "català",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "coreà",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "croat",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "danès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "eslovac",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "eslovè",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "estonià",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "finès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "francès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "gaèlic escocès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "gallec",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "gal·lès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "grec",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "hebreu",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "hongarès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "indonesi",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "irlandès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "islandès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "italià",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "japonès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "kurd (sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "letó",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "lituà",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "neerlandès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "noruec",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "persa",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "polonès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "portuguès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "romanès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "rus",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "serbi",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "suec",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "tai",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "turc",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "txec",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "ucraïnès",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "vietnamita",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "xinès (simplificat)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "xinès (tradicional)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "zulú",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Àrab",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Gal·lès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Danès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Alemany",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Anglès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Castellà",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Espanyol (llatinoamericà)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Francès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Coreà",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italià",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Neerlandès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Japonès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Noruec",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polonès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portuguès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portuguès (brasiler)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Romanès",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Rus",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Suec",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turc",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Xinès (mandarí)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt$1 = [
];
var soundEffects$1 = [
	"pitch",
	"pan esquerra/dreta"
];
var microbitWhen$1 = [
	"es mogui",
	"es sacsegi",
	"salti"
];
var osis$1 = [
	"altres programes del personatge"
];
var definePrefix$1 = [
	"defineix"
];
var defineSuffix$1 = [
];
var palette$1 = {
	Motion: "Moviment",
	Looks: "Aspecte",
	Sound: "So",
	Events: "Esdeveniments",
	Control: "Control",
	Sensing: "Sensors",
	Operators: "Operadors",
	Variables: "Variables",
	"My Blocks": "Els meus blocs"
};
var math$1 = [
	"abs",
	"part sencera",
	"sostre",
	"arrel quadrada",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases$1 = {
	"gira a l'esquerra %1 graus": "MOTION_TURNLEFT",
	"gira a la dreta %1 graus": "MOTION_TURNRIGHT",
	"quan la bandera verda es cliqui": "EVENT_WHENFLAGCLICKED",
	"quan la bandera verda es premi": "EVENT_WHENFLAGCLICKED",
	fi: "scratchblocks:end"
};
var name$1 = "Català";
var percentTranslated$1 = 100;
var ca = {
	commands: commands$1,
	dropdowns: dropdowns$1,
	ignorelt: ignorelt$1,
	soundEffects: soundEffects$1,
	microbitWhen: microbitWhen$1,
	osis: osis$1,
	definePrefix: definePrefix$1,
	defineSuffix: defineSuffix$1,
	palette: palette$1,
	math: math$1,
	aliases: aliases$1,
	name: name$1,
	percentTranslated: percentTranslated$1
};

var commands = {
	MOTION_MOVESTEPS: "gerak %1 langkah",
	MOTION_TURNRIGHT: "putar @turnRight %1 derajat",
	MOTION_TURNLEFT: "putar @turnLeft %1 derajat",
	MOTION_POINTINDIRECTION: "mengarah ke arah %1",
	MOTION_POINTTOWARDS: "mengarah ke %1",
	MOTION_GOTOXY: "pergi ke x: %1 y: %2",
	MOTION_GOTO: "pergi ke %1",
	MOTION_GLIDESECSTOXY: "meluncur %1 detik ke x: %2 y: %3",
	MOTION_GLIDETO: "meluncur %1 detik ke %2",
	MOTION_CHANGEXBY: "ubah x sebesar %1",
	MOTION_SETX: "atur x ke %1",
	MOTION_CHANGEYBY: "ubah y sebesar %1",
	MOTION_SETY: "atur y ke %1",
	MOTION_SETROTATIONSTYLE: "atur gaya rotasi %1",
	LOOKS_SAYFORSECS: "katakan %1 selama %2 detik",
	LOOKS_SAY: "katakan %1",
	LOOKS_THINKFORSECS: "pikirkan %1 selama %2 detik",
	LOOKS_THINK: "pikirkan %1",
	LOOKS_SHOW: "tampilkan",
	LOOKS_HIDE: "sembunyikan",
	LOOKS_SWITCHCOSTUMETO: "ganti kostum ke %1",
	LOOKS_NEXTCOSTUME: "kostum berikutnya",
	LOOKS_NEXTBACKDROP_BLOCK: "latar berikutnya",
	LOOKS_SWITCHBACKDROPTO: "ganti latar ke %1",
	LOOKS_SWITCHBACKDROPTOANDWAIT: "ganti latar ke %1 dan tunggu",
	LOOKS_CHANGEEFFECTBY: "ubah efek %1 sebesar %2",
	LOOKS_SETEFFECTTO: "atur efek %1 ke %2",
	LOOKS_CLEARGRAPHICEFFECTS: "hapus semua efek grafis",
	LOOKS_CHANGESIZEBY: "ubah ukuran sebesar %1",
	LOOKS_SETSIZETO: "atur ukuran ke %1 %",
	LOOKS_GOTOFRONTBACK: "pergi ke lapisan %1",
	LOOKS_GOFORWARDBACKWARDLAYERS: "pergi %1 %2 lapisan",
	SOUND_PLAY: "mulai suara %1",
	SOUND_CHANGEEFFECTBY: "ubah efek %1 sebesar %2",
	SOUND_SETEFFECTO: "atur efek %1 ke %2",
	SOUND_CLEAREFFECTS: "hapus semua efek suara",
	SOUND_PLAYUNTILDONE: "mainkan suara %1 sampai selesai",
	SOUND_STOPALLSOUNDS: "hentikan semua suara",
	"music.playDrumForBeats": "mainkan drum %1 selama %2 ketukan",
	"music.restForBeats": "diam selama %1 ketukan",
	"music.playNoteForBeats": "mainkan nada %1 selama %2 ketukan",
	"music.setInstrument": "atur instrumen ke %1",
	SOUND_CHANGEVOLUMEBY: "ubah volume sebesar %1",
	SOUND_SETVOLUMETO: "atur volume ke %1%",
	"music.changeTempo": "ubah tempo sebesar %1",
	"music.setTempo": "atur tempo ke %1",
	"pen.clear": "hapus semua",
	"pen.stamp": "cap",
	"pen.penDown": "tekan pena",
	"pen.penUp": "angkat pena",
	"pen.setColor": "atur warna pena ke %1",
	"pen.changeHue": "ubah warna pena sebesar %1",
	"pen.setColorParam": "atur %1 pena ke %2",
	"pen.changeColorParam": "ubah %1 pena sebesar %2",
	"pen.setHue": "atur warna pena ke %1",
	"pen.changeShade": "ubah kegelapan pena sebesar %1",
	"pen.setShade": "atur kegelapan pena sebesar %1",
	"pen.changeSize": "ubah ukuran pena sebesar %1",
	"pen.setSize": "atur ukuran pena ke %1",
	EVENT_WHENFLAGCLICKED: "ketika @greenFlag diklik",
	EVENT_WHENKEYPRESSED: "ketika tombol %1 ditekan",
	EVENT_WHENTHISSPRITECLICKED: "ketika sprite ini diklik",
	EVENT_WHENSTAGECLICKED: "ketika panggung diklik",
	EVENT_WHENBACKDROPSWITCHESTO: "ketika latar menjadi %1",
	EVENT_WHENGREATERTHAN: "ketika %1 > %2",
	EVENT_WHENBROADCASTRECEIVED: "ketika aku menerima %1",
	EVENT_BROADCAST: "siarkan %1",
	EVENT_BROADCASTANDWAIT: "siarkan %1 dan tunggu",
	CONTROL_WAIT: "tunggu %1 detik",
	CONTROL_REPEAT: "ulangi %1 kali",
	CONTROL_FOREVER: "selamanya",
	CONTROL_IF: "jika %1",
	CONTROL_WAITUNTIL: "tunggu sampai %1",
	CONTROL_REPEATUNTIL: "ulangi sampai %1",
	CONTROL_STOP: "berhenti %1",
	CONTROL_STARTASCLONE: "ketika aku mulai sebagai clone",
	CONTROL_CREATECLONEOF: "buat clone dari %1",
	CONTROL_DELETETHISCLONE: "hapus clone ini",
	SENSING_ASKANDWAIT: "tanya %1 dan tunggu",
	"videoSensing.videoToggle": "nyalakan video %1",
	"videoSensing.setVideoTransparency": "atur transparansi video ke %1",
	"videoSensing.whenMotionGreaterThan": "ketika gerakan video > %1",
	SENSING_RESETTIMER: "atur ulang pengatur waktu",
	DATA_SETVARIABLETO: "atur %1 ke %2",
	DATA_CHANGEVARIABLEBY: "ubah %1 sebesar %2",
	DATA_SHOWVARIABLE: "tampilkan variabel %1",
	DATA_HIDEVARIABLE: "sembunyikan variabel %1",
	DATA_ADDTOLIST: "tambahkan %1 ke %2",
	DATA_DELETEOFLIST: "hapus %1 dari %2",
	DATA_DELETEALLOFLIST: "hapus semua dari %1",
	MOTION_IFONEDGEBOUNCE: "jika di pinggir, pantulkan",
	DATA_INSERTATLIST: "sisipkan %1 pada %2 dari %3",
	DATA_REPLACEITEMOFLIST: "ganti benda %1 dari %2 dengan %3",
	DATA_SHOWLIST: "tampilkan daftar %1",
	DATA_HIDELIST: "sembunyikan daftar %1",
	SENSING_OF_XPOSITION: "posisi x",
	SENSING_OF_YPOSITION: "posisi y",
	SENSING_OF_DIRECTION: "arah",
	SENSING_OF_COSTUMENUMBER: "# kostum",
	LOOKS_COSTUMENUMBERNAME: "%1 kostum",
	SENSING_OF_SIZE: "ukuran",
	SENSING_OF_BACKDROPNAME: "nama latar",
	LOOKS_BACKDROPNUMBERNAME: "latar %1",
	SENSING_OF_BACKDROPNUMBER: "latar #",
	SOUND_VOLUME: "volume",
	"music.getTempo": "tempo",
	SENSING_TOUCHINGOBJECT: "menyentuh %1?",
	SENSING_TOUCHINGCOLOR: "menyentuh warna %1?",
	SENSING_COLORISTOUCHINGCOLOR: "warna %1 menyentuh %2?",
	SENSING_DISTANCETO: "jarak dari %1",
	SENSING_ANSWER: "jawaban",
	SENSING_KEYPRESSED: "tombol %1 ditekan?",
	SENSING_MOUSEDOWN: "mouse ditekan?",
	SENSING_MOUSEX: "x mouse",
	SENSING_MOUSEY: "y mouse",
	SENSING_SETDRAGMODE: "atur mode seret %1",
	SENSING_LOUDNESS: "kenyaringan",
	"videoSensing.videoOn": "video %1 di %2",
	SENSING_TIMER: "pengatur waktu",
	SENSING_OF: "%1 dari %2",
	SENSING_CURRENT: "%1 saat ini",
	SENSING_DAYSSINCE2000: "hari-hari sejak 2000",
	SENSING_USERNAME: "nama pengguna",
	OPERATORS_ADD: "%1 + %2",
	OPERATORS_SUBTRACT: "%1 - %2",
	OPERATORS_MULTIPLY: "%1 * %2",
	OPERATORS_DIVIDE: "%1 / %2",
	OPERATORS_RANDOM: "pilih acak dari %1 hingga %2",
	OPERATORS_LT: "%1 < %2",
	OPERATORS_EQUALS: "%1 = %2",
	OPERATORS_GT: "%1 > %2",
	OPERATORS_AND: "%1 dan %2",
	OPERATORS_OR: "%1 atau %2",
	OPERATORS_NOT: "tidak %1",
	OPERATORS_JOIN: "gabungkan %1 %2",
	OPERATORS_LETTEROF: "huruf %1 dari %2",
	OPERATORS_LENGTH: "panjang dari %1",
	OPERATORS_MOD: "%1 mod %2",
	OPERATORS_ROUND: "bulatkan %1",
	OPERATORS_MATHOP: "%1 dari %2",
	OPERATORS_CONTAINS: "%1 berisi %2?",
	DATA_ITEMOFLIST: "benda %1 dari %2",
	DATA_ITEMNUMOFLIST: "benda # dari %1 di %2",
	DATA_LENGTHOFLIST: "panjang dari %1",
	DATA_LISTCONTAINSITEM: "%1 berisi %2?",
	CONTROL_ELSE: "jika tidak",
	SENSING_USERID: "id pengguna",
	SENSING_LOUD: "nyaring?",
	"text2speech.speakAndWaitBlock": "ujarkan %1",
	"text2speech.setVoiceBlock": "atur suara ke %1",
	"text2speech.setLanguageBlock": "atur bahasa ke %1",
	"translate.translateBlock": "terjemahkan %1 ke %2",
	"translate.viewerLanguage": "bahasa",
	"makeymakey.whenKeyPressed": "ketika tombol %1 ditekan",
	"makeymakey.whenKeysPressedInOrder": "ketika %1 ditekan dalam urutan tersebut",
	"microbit.whenButtonPressed": "ketika tombol %1 ditekan",
	"microbit.isButtonPressed": "tombol %1 ditekan?",
	"microbit.whenGesture": "ketika %1",
	"microbit.displaySymbol": "tampilkan %1",
	"microbit.displayText": "tampilkan teks %1",
	"microbit.clearDisplay": "bersihkan tampilan",
	"microbit.whenTilted": "ketika dimiringkan %1",
	"microbit.isTilted": "miring %1?",
	"microbit.tiltAngle": "sudut miring %1",
	"microbit.whenPinConnected": "ketika pin %1 disambung",
	"ev3.motorTurnClockwise": "motor %1 belok ke arah ini selama %2 detik",
	"ev3.motorTurnCounterClockwise": "motor %1 belok ke arah itu selama %2 detik",
	"ev3.motorSetPower": "motor %1 atur kekuatan %2 %",
	"ev3.getMotorPosition": "posisi motor %1",
	"ev3.whenButtonPressed": "ketika tombol %1 ditekan",
	"ev3.whenDistanceLessThan": "ketika jarak < %1",
	"ev3.whenBrightnessLessThan": "ketika kecerahan < %1",
	"ev3.buttonPressed": "tombol %1 ditekan?",
	"ev3.getDistance": "jarak",
	"ev3.getBrightness": "kecerahan",
	"ev3.beepNote": "bunyikan nada %1 selama %2 detik",
	"wedo2.motorOn": "nyalakan %1",
	"wedo2.motorOff": "matikan %1",
	"wedo2.startMotorPower": "atur kekuatan %1 ke %2",
	"wedo2.setMotorDirection": "atur arah %1 ke %2",
	"wedo2.whenDistance": "ketika jarak %1 %2",
	"wedo2.getDistance": "jarak",
	"wedo2.motorOnFor": "nyalakan %1 selama %2 detik",
	"wedo2.setLightHue": "atur warna lampu ke %1",
	"wedo2.playNoteFor": "mainkan nada %1 selama %2 detik",
	"wedo2.whenTilted": "ketika dimiringkan %1",
	"wedo2.isTilted": "dimiringkan %1?",
	"wedo2.getTiltAngle": "sudut kemiringan %1",
	"gdxfor.whenGesture": "ketika %1",
	"gdxfor.whenForcePushedOrPulled": "ketika sensor gaya %1",
	"gdxfor.getForce": "gaya",
	"gdxfor.whenTilted": "ketika dimiringkan %1",
	"gdxfor.isTilted": "dimiringkan %1?",
	"gdxfor.getTilt": "sudut kemiringan %1",
	"gdxfor.isFreeFalling": "sedang jatuh bebas?",
	"gdxfor.getSpin": "kecepatan berputar %1",
	"gdxfor.getAcceleration": "akselerasi %1",
	"boost.motorOnFor": "nyalakan motor %1 selama %2 detik",
	"boost.motorOnForRotation": "nyalakan motor %1 selama %2 rotasi",
	"boost.motorOn": "nyalakan motor %1",
	"boost.motorOff": "matikan motor %1",
	"boost.setMotorPower": "atur kecepatan motor %1 ke %2 %",
	"boost.setMotorDirection": "atur arah motor %1 %2",
	"boost.getMotorPosition": "posisi motor %1",
	"boost.whenColor": "ketika bata %1 dilihat",
	"boost.seeingColor": "melihat bata %1?",
	"boost.whenTilted": "ketika dimiringkan %1",
	"boost.getTiltAngle": "sudut kemiringan %1",
	"boost.setLightHue": "atur warna lampu ke %1"
};
var dropdowns = {
	MOTION_GOTO_POINTER: {
		value: "pointer-mouse",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GOTO_RANDOM: {
		value: "posisi sembarang",
		parents: [
			"MOTION_GOTO"
		]
	},
	MOTION_GLIDETO_POINTER: {
		value: "pointer-mouse",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_GLIDETO_RANDOM: {
		value: "posisi sembarang",
		parents: [
			"MOTION_GLIDETO"
		]
	},
	MOTION_POINTTOWARDS_POINTER: {
		value: "pointer-mouse",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_POINTTOWARDS_RANDOM: {
		value: "arah sembarang",
		parents: [
			"MOTION_POINTTOWARDS"
		]
	},
	MOTION_SETROTATIONSTYLE_LEFTRIGHT: {
		value: "kiri-kanan",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_DONTROTATE: {
		value: "jangan berputar",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	MOTION_SETROTATIONSTYLE_ALLAROUND: {
		value: "seluruh",
		parents: [
			"MOTION_SETROTATIONSTYLE"
		]
	},
	LOOKS_NEXTBACKDROP: {
		value: "latar berikutnya",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_PREVIOUSBACKDROP: {
		value: "latar sebelumnya",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_RANDOMBACKDROP: {
		value: "latar sembarang",
		parents: [
			"LOOKS_SWITCHBACKDROPTO"
		]
	},
	LOOKS_EFFECT_COLOR: {
		value: "warna",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_FISHEYE: {
		value: "mata ikan",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_WHIRL: {
		value: "pusaran",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_PIXELATE: {
		value: "pixelasi",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_MOSAIC: {
		value: "mosaik",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_BRIGHTNESS: {
		value: "kecerahan",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_EFFECT_GHOST: {
		value: "bayangan",
		parents: [
			"LOOKS_SETEFFECTTO",
			"LOOKS_CHANGEEFFECTBY"
		]
	},
	LOOKS_GOTOFRONTBACK_FRONT: {
		value: "depan",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOTOFRONTBACK_BACK: {
		value: "belakang",
		parents: [
			"LOOKS_GOTOFRONTBACK"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD: {
		value: "maju",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD: {
		value: "mundur",
		parents: [
			"LOOKS_GOFORWARDBACKWARDLAYERS"
		]
	},
	LOOKS_NUMBERNAME_NUMBER: {
		value: "angka",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	LOOKS_NUMBERNAME_NAME: {
		value: "nama",
		parents: [
			"LOOKS_COSTUMENUMBERNAME",
			"LOOKS_BACKDROPNUMBERNAME"
		]
	},
	SOUND_EFFECTS_PITCH: {
		value: "nada",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	SOUND_EFFECTS_PAN: {
		value: "pan kiri/kanan",
		parents: [
			"SOUND_CHANGEEFFECTBY",
			"SOUND_SETEFFECTO"
		]
	},
	EVENT_WHENKEYPRESSED_SPACE: {
		value: "spasi",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_LEFT: {
		value: "panah kiri",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_RIGHT: {
		value: "panah kanan",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_DOWN: {
		value: "panah bawah",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_UP: {
		value: "panah atas",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED",
			"makeymakey.whenKeyPressed"
		]
	},
	EVENT_WHENKEYPRESSED_ANY: {
		value: "manapun",
		parents: [
			"EVENT_WHENKEYPRESSED",
			"SENSING_KEYPRESSED"
		]
	},
	EVENT_WHENGREATERTHAN_TIMER: {
		value: "pengatur waktu",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	EVENT_WHENGREATERTHAN_LOUDNESS: {
		value: "kenyaringan",
		parents: [
			"EVENT_WHENGREATERTHAN"
		]
	},
	CONTROL_STOP_ALL: {
		value: "semua",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_THIS: {
		value: "skrip ini",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_STOP_OTHER: {
		value: "skrip lain di sprite ini",
		parents: [
			"CONTROL_STOP"
		]
	},
	CONTROL_CREATECLONEOF_MYSELF: {
		value: "diriku",
		parents: [
			"CONTROL_CREATECLONEOF"
		]
	},
	SENSING_TOUCHINGOBJECT_POINTER: {
		value: "pointer-mouse",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_TOUCHINGOBJECT_EDGE: {
		value: "pinggir",
		parents: [
			"SENSING_TOUCHINGOBJECT"
		]
	},
	SENSING_DISTANCETO_POINTER: {
		value: "pointer-mouse",
		parents: [
			"SENSING_DISTANCETO"
		]
	},
	SENSING_SETDRAGMODE_DRAGGABLE: {
		value: "dapat diseret",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_SETDRAGMODE_NOTDRAGGABLE: {
		value: "tidak dapat diseret",
		parents: [
			"SENSING_SETDRAGMODE"
		]
	},
	SENSING_OF_XPOSITION: {
		value: "posisi x",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_YPOSITION: {
		value: "posisi y",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_DIRECTION: {
		value: "arah",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENUMBER: {
		value: "# kostum",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_COSTUMENAME: {
		value: "nama kostum",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_SIZE: {
		value: "ukuran",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_VOLUME: {
		value: "volume",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNUMBER: {
		value: "latar #",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_BACKDROPNAME: {
		value: "nama latar",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_OF_STAGE: {
		value: "Panggung",
		parents: [
			"SENSING_OF"
		]
	},
	SENSING_CURRENT_YEAR: {
		value: "tahun",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MONTH: {
		value: "bulan",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DATE: {
		value: "tanggal",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_DAYOFWEEK: {
		value: "nama hari",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_HOUR: {
		value: "jam",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_MINUTE: {
		value: "menit",
		parents: [
			"SENSING_CURRENT"
		]
	},
	SENSING_CURRENT_SECOND: {
		value: "detik",
		parents: [
			"SENSING_CURRENT"
		]
	},
	OPERATORS_MATHOP_ABS: {
		value: "abs",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_FLOOR: {
		value: "floor",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_CEILING: {
		value: "ceil",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SQRT: {
		value: "akar kuadrat",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_SIN: {
		value: "sin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_COS: {
		value: "cos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_TAN: {
		value: "tan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ASIN: {
		value: "asin",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ACOS: {
		value: "acos",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_ATAN: {
		value: "atan",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LN: {
		value: "ln",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_LOG: {
		value: "log",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_EEXP: {
		value: "e ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	OPERATORS_MATHOP_10EXP: {
		value: "10 ^",
		parents: [
			"OPERATORS_MATHOP"
		]
	},
	"music.drumSnare": {
		value: "(1) Drum Senar",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBass": {
		value: "(2) Drum Bass",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumSideStick": {
		value: "(3) Tongkat Samping",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCrashCymbal": {
		value: "(4) Simbal",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumOpenHiHat": {
		value: "(5) Hi-Hat Terbuka",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClosedHiHat": {
		value: "(6) Hi-Hat Tertutup",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTambourine": {
		value: "(7) Tamborin",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumHandClap": {
		value: "(8) Tepukan Tangan",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumClaves": {
		value: "(9) Claves",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumWoodBlock": {
		value: "(10) Balok Kayu",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCowbell": {
		value: "(11) Lonceng Sapi",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumTriangle": {
		value: "(12) Triangle",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumBongo": {
		value: "(13) Bongo",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumConga": {
		value: "(14) Conga",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCabasa": {
		value: "(15) Cabasa",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumGuiro": {
		value: "(16) Guiro",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumVibraslap": {
		value: "(17) Vibraslap",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.drumCuica": {
		value: "(18) Cuica",
		parents: [
			"music.playDrumForBeats"
		]
	},
	"music.instrumentPiano": {
		value: "(1) Piano",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricPiano": {
		value: "(2) Piano Listrik",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentOrgan": {
		value: "(3) Organ",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentGuitar": {
		value: "(4) Gitar",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentElectricGuitar": {
		value: "(5) Gitar Listrik",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBass": {
		value: "(6) Bass",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentPizzicato": {
		value: "(7) Pizzicato",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentCello": {
		value: "(8) Cello",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentTrombone": {
		value: "(9) Trombon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentClarinet": {
		value: "(10) Klarinet",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSaxophone": {
		value: "(11) Saksofon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentFlute": {
		value: "(12) Seruling",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentWoodenFlute": {
		value: "(13) Seruling Kayu",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentBassoon": {
		value: "(14) Fagot",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentChoir": {
		value: "(15) Paduan Suara",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentVibraphone": {
		value: "(16) Vibrafon",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMusicBox": {
		value: "(17) Kotak Musik",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSteelDrum": {
		value: "(18) Drum Baja",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentMarimba": {
		value: "(19) Marimba",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthLead": {
		value: "(20) Sintesis Pimpinan",
		parents: [
			"music.setInstrument"
		]
	},
	"music.instrumentSynthPad": {
		value: "(21) Pad Sintesis",
		parents: [
			"music.setInstrument"
		]
	},
	"pen.colorMenu.color": {
		value: "warna",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.saturation": {
		value: "saturasi",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.brightness": {
		value: "kecerahan",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"pen.colorMenu.transparency": {
		value: "transparansi",
		parents: [
			"pen.setColorParam",
			"pen.changeColorParam"
		]
	},
	"videoSensing.direction": {
		value: "arah",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.motion": {
		value: "gerakan",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.sprite": {
		value: "sprite",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.stage": {
		value: "panggung",
		parents: [
			"videoSensing.videoOn"
		]
	},
	"videoSensing.off": {
		value: "mati",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.on": {
		value: "hidup",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"videoSensing.onFlipped": {
		value: "nyala dibalik",
		parents: [
			"videoSensing.videoToggle"
		]
	},
	"text2speech.alto": {
		value: "alto",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.tenor": {
		value: "tenor",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.squeak": {
		value: "mencicit",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.giant": {
		value: "raksasa",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"text2speech.kitten": {
		value: "anak kucing",
		parents: [
			"text2speech.setVoiceBlock"
		]
	},
	"makeymakey.upArrowShort": {
		value: "atas",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.downArrowShort": {
		value: "bawah",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.leftArrowShort": {
		value: "kiri",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"makeymakey.rightArrowShort": {
		value: "kanan",
		parents: [
			"makeymakey.whenKeyPressed"
		]
	},
	"microbit.buttonsMenu.any": {
		value: "manapun",
		parents: [
			"microbit.whenButtonPressed",
			"microbit.isButtonPressed"
		]
	},
	"microbit.gesturesMenu.jumped": {
		value: "melompat",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.moved": {
		value: "bergerak",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.gesturesMenu.shaken": {
		value: "tergoyang",
		parents: [
			"microbit.whenGesture"
		]
	},
	"microbit.tiltDirectionMenu.any": {
		value: "manapun",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted"
		]
	},
	"microbit.tiltDirectionMenu.back": {
		value: "belakang",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.front": {
		value: "depan",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.left": {
		value: "kiri",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"microbit.tiltDirectionMenu.right": {
		value: "kanan",
		parents: [
			"microbit.whenTilted",
			"microbit.isTilted",
			"microbit.tiltAngle"
		]
	},
	"boost.motorDirection.backward": {
		value: "ke arah sana",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.forward": {
		value: "ke arah sini",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.motorDirection.reverse": {
		value: "reverse",
		parents: [
			"boost.setMotorDirection"
		]
	},
	"boost.color.any": {
		value: "warna apapun",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.black": {
		value: "hitam",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.blue": {
		value: "biru",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.green": {
		value: "hijau",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.red": {
		value: "merah",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.white": {
		value: "putih",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.color.yellow": {
		value: "kuning",
		parents: [
			"boost.whenColor",
			"boost.seeingColor"
		]
	},
	"boost.tiltDirection.any": {
		value: "any",
		parents: [
			"boost.whenTilted"
		]
	},
	"boost.tiltDirection.up": {
		value: "atas",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.down": {
		value: "bawah",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.left": {
		value: "kiri",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"boost.tiltDirection.right": {
		value: "kanan",
		parents: [
			"boost.whenTilted",
			"boost.getTiltAngle"
		]
	},
	"wedo2.motorId.a": {
		value: "motor A",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.b": {
		value: "motor B",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.all": {
		value: "semua motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorId.default": {
		value: "motor",
		parents: [
			"wedo2.motorOnFor",
			"wedo2.motorOn",
			"wedo2.motorOff",
			"wedo2.startMotorPower",
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.forward": {
		value: "ke arah sini",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.backward": {
		value: "ke arah sana",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.motorDirection.reverse": {
		value: "balikkan arah",
		parents: [
			"wedo2.setMotorDirection"
		]
	},
	"wedo2.tiltDirection.any": {
		value: "manapun",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted"
		]
	},
	"wedo2.tiltDirection.up": {
		value: "atas",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.down": {
		value: "bawah",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.left": {
		value: "kiri",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"wedo2.tiltDirection.right": {
		value: "kanan",
		parents: [
			"wedo2.whenTilted",
			"wedo2.isTilted",
			"wedo2.getTiltAngle"
		]
	},
	"gdxfor.pulled": {
		value: "ditarik",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.pushed": {
		value: "didorong",
		parents: [
			"gdxfor.whenForcePushedOrPulled"
		]
	},
	"gdxfor.shaken": {
		value: "digoyang",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.startedFalling": {
		value: "mulai jatuh bebas",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceDown": {
		value: "tengkurap",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.turnedFaceUp": {
		value: "telentang",
		parents: [
			"gdxfor.whenGesture"
		]
	},
	"gdxfor.tiltDirectionMenu.front": {
		value: "depan",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.back": {
		value: "belakang",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.left": {
		value: "kiri",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.right": {
		value: "kanan",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted",
			"gdxfor.getTilt"
		]
	},
	"gdxfor.tiltDirectionMenu.any": {
		value: "any",
		parents: [
			"gdxfor.whenTilted",
			"gdxfor.isTilted"
		]
	},
	"makeymakey.sequence.0": {
		value: "kiri atas kanan",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.1": {
		value: "kanan atas kiri",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.2": {
		value: "kiri kanan",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.3": {
		value: "kanan kiri",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.4": {
		value: "atas bawah",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.5": {
		value: "bawah atas",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.6": {
		value: "atas kanan bawah kiri",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.7": {
		value: "atas kiri bawah kanan",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"makeymakey.sequence.8": {
		value: "atas atas bawah bawah kiri kanan kiri kanan",
		parents: [
			"makeymakey.whenKeysPressedInOrder"
		]
	},
	"translate.language.am": {
		value: "Amharik",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ar": {
		value: "Arab",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.az": {
		value: "Azerbaijan",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.eu": {
		value: "Bask",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nl": {
		value: "Belanda",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.bg": {
		value: "Bulgaria",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cs": {
		value: "Ceko",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-cn": {
		value: "China (Aks. Sederhana)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zh-tw": {
		value: "China (Aks. Tradisional)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.da": {
		value: "Denmark",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.et": {
		value: "Estonia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fa": {
		value: "Farsi",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fi": {
		value: "Finlandia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ga": {
		value: "Gaelig",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gd": {
		value: "Gaelik Skotlandia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.gl": {
		value: "Galisia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hu": {
		value: "Hungaria",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.he": {
		value: "Ibrani",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.id": {
		value: "Indonesia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.en": {
		value: "Inggris",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.is": {
		value: "Islandia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.it": {
		value: "Italia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ja": {
		value: "Jepang",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.de": {
		value: "Jerman",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ca": {
		value: "Katalan",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ko": {
		value: "Korea",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.hr": {
		value: "Kroasia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ckb": {
		value: "Kurdi (Sorani)",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lv": {
		value: "Latvia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.lt": {
		value: "Lituania",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.mi": {
		value: "Maori",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.nb": {
		value: "Norwegia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pl": {
		value: "Polandia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.pt": {
		value: "Portugis",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.fr": {
		value: "Prancis",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ro": {
		value: "Rumania",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.ru": {
		value: "Rusia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sr": {
		value: "Serb",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sk": {
		value: "Slovakia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sl": {
		value: "Slovenia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.es": {
		value: "Spanyol",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.sv": {
		value: "Swedia",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.th": {
		value: "Thai",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.tr": {
		value: "Turkiye",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.uk": {
		value: "Ukraina",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.vi": {
		value: "Vietnam",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.cy": {
		value: "Welsh",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.el": {
		value: "Yunani",
		parents: [
			"translate.translateBlock"
		]
	},
	"translate.language.zu": {
		value: "Zulu",
		parents: [
			"translate.translateBlock"
		]
	},
	"text2speech.language.ar": {
		value: "Arab",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.cy": {
		value: "Welsh",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.da": {
		value: "Denmark",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.de": {
		value: "Jerman",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.en": {
		value: "Inggris",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es": {
		value: "Spanyol",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.es-419": {
		value: "Spanyol (Amerika Latin)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.fr": {
		value: "Prancis",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ko": {
		value: "Korea",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.hi": {
		value: "Hindi",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.is": {
		value: "Islandia",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.it": {
		value: "Italia",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nl": {
		value: "Belanda",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ja": {
		value: "Jepang",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.nb": {
		value: "Norwegia",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pl": {
		value: "Polandia",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt": {
		value: "Portugis",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.pt-br": {
		value: "Portugis (Brasil)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ro": {
		value: "Rumania",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.ru": {
		value: "Rusia",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.sv": {
		value: "Swedia",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.tr": {
		value: "Turkiye",
		parents: [
			"text2speech.setLanguageBlock"
		]
	},
	"text2speech.language.zh-cn": {
		value: "Bahasa Mandarin (Cina)",
		parents: [
			"text2speech.setLanguageBlock"
		]
	}
};
var ignorelt = [
];
var soundEffects = [
	"nada",
	"pan kiri/kanan"
];
var microbitWhen = [
	"bergerak",
	"tergoyang",
	"melompat"
];
var osis = [
	"skrip lain di sprite ini"
];
var definePrefix = [
	"artikan"
];
var defineSuffix = [
];
var palette = {
	Motion: "Gerakan",
	Looks: "Tampilan",
	Sound: "Suara",
	Events: "Kejadian",
	Control: "Kontrol",
	Sensing: "Sensor",
	Operators: "Operator",
	Variables: "Variabel",
	"My Blocks": "Balok Saya"
};
var math = [
	"abs",
	"floor",
	"ceil",
	"akar kuadrat",
	"sin",
	"cos",
	"tan",
	"asin",
	"acos",
	"atan",
	"ln",
	"log",
	"e ^",
	"10 ^"
];
var aliases = {
	"putar ke kiri %1 derajat": "MOTION_TURNLEFT",
	"putar ke kanan %1 derajat": "MOTION_TURNRIGHT",
	"ketika bendera hijau diklik": "EVENT_WHENFLAGCLICKED",
	selesai: "scratchblocks:end"
};
var name = "Bahasa Indonesia";
var percentTranslated = 100;
var id = {
	commands: commands,
	dropdowns: dropdowns,
	ignorelt: ignorelt,
	soundEffects: soundEffects,
	microbitWhen: microbitWhen,
	osis: osis,
	definePrefix: definePrefix,
	defineSuffix: defineSuffix,
	palette: palette,
	math: math,
	aliases: aliases,
	name: name,
	percentTranslated: percentTranslated
};

var languages = {
  de,
  es,
  fr,
  zh_cn,
  pl,
  ja,
  nl,
  pt,
  it,
  he,
  ko,
  nb,
  tr,
  el,
  ru,
  ca,
  id,
};

function init(scratchblocks) {
  scratchblocks.loadLanguages(languages);
}
init.languages = languages;

export { init as default };
//# sourceMappingURL=translations-es.js.map
