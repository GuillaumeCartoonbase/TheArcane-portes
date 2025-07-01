const stateMachine = "State Machine 1";

const riveInstance = new rive.Rive({
	src: "the_arcane-doors.riv", //get rive file
	canvas: document.getElementById("rive"), //get correct canvas
	autoplay: true,
	stateMachines: stateMachine, // get correct stateMachine
	automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
	onLoad: onLoadHandler,
});

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => {
		// riveInstance.resizeDrawingSurfaceToCanvas();
	},
	false
);
// Handle the onLoad event
function onLoadHandler() {
	// Prevent a blurry canvas by using the device pixel ratio
	riveInstance.resizeDrawingSurfaceToCanvas();
}

const eventFire = (riveEvent) => {
	const eventData = riveEvent.data;
	const eventName = eventData.name;
	const eventProperties = eventData.properties;
	switch (eventName) {
		case "left":
		case "right":
		case "gameOver":
			console.log(eventName);
			break;
		case "question":
			console.log(eventProperties.index);
			break;

		// Change pointer when hovering action
		case "pointerIn":
			document.body.style.cursor = "pointer";
			break;
		case "pointerOut":
			document.body.style.cursor = "auto";
			break;
		default:
			break;
	}
};

// Register the event handler
riveInstance.on(rive.EventType.RiveEvent, eventFire);
