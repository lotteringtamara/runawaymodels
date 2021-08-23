let stampTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: ".trigger", // the element triggering the scroll
		start: "top 20%", // start when the top of the trigger hits 20% down the viewport
		end: "bottom bottom", // end when the bottom of the trigger hits the bottom of the viewport
		scrub: 1, // smooth scrubbing
		markers: true // view markers
	}
});

stampTimeline
	.from(
		"#small-lines path",
		{
			yPercent: 200,
			duration: 2,
			stagger: {
				each: 1
			}
		},
		0
	)
	.from(
		"#small-lines path",
		{
			duration: 1,
			stagger: {
				each: 1
			},
			drawSVG: 0
		},
		0
	)
	.from(
		".path-later",
		{
			duration: 1,
			stagger: {
				each: 0.25
			},
			drawSVG: 0
		},
		5
	)
	.to(
		".path-hide",
		{
			duration: 1,
			opacity: 0,
			stagger: 1
		},
		2.5
	)
	.fromTo(
		"#stamp",
		{
			yPercent: -150
		},
		{
			rotate: 360,
			yPercent: 300,
			transformOrigin: "center",
			duration: 4
		},
		4.2
	)
	.to(
		"#large-lines",
		{
			yPercent: -300,
			duration: 2
		},
		7
	)
	.from(
		"#large-lines path",
		{
			duration: 0.8,
			stagger: {
				each: 0.4
			},
			drawSVG: 0
		},
		7
	)
	.from(
		"#stamp-2",
		{
			yPercent: -500,
			transformOrigin: "center",
			duration: 4
		},
		0
	)
	.from(
		"#circle-3",
		{
			opacity: 0,
			duration: 0.5
		},
		8
	)
	.fromTo(
		"#circle-3",
		{
			yPercent: 100
		},
		{
			yPercent: -500,
			duration: 4
		},
		8
	)
	.from(
		"#circle-2",
		{
			opacity: 0,
			duration: 0.02
		},
		3
	)
	.fromTo(
		"#circle-2",
		{
			yPercent: 100
		},
		{
			yPercent: -300,
			duration: 3
		},
		3
	)
	.fromTo(
		"#circle-4",
		{
			yPercent: 100
		},
		{
			yPercent: -300,
			duration: 6
		},
		1
	)
	.to(
		"#circle-4",
		{
			opacity: 0,
			duration: 0.01
		},
		7
	)
	.fromTo(
		"#circle",
		{
			yPercent: -400
		},
		{
			yPercent: 100,
			duration: 5
		},
		6
	);
