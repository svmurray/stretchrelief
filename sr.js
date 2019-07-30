window.onload = function ()
{
	document.getElementById("navButt").onclick = nav;
	document.getElementById("vl").onclick = vl;
	document.getElementById("home").onclick = home;
	document.getElementById("cal").onclick = cal;
	document.getElementById("so").onclick = signOn;
	document.getElementById("reg").onclick = register;
	document.getElementById("regSub").onclick = regDis;
	document.getElementById("soSub").onclick = soDis;
	document.getElementById("soCan").onclick = function(){canc("soBox")};
	document.getElementById("regCan").onclick = function(){canc("regBox")};
}

function vl()
{
	updateContent('<h1 style="text-align:center">Video Library</h1>');
	var lib = [["Class Title", "Instructor","Audience","Length","Intensity","Music Genre"]];
	lib.push(["Hot Yoga Day 1", "Strack, Eric", "Fitness", "53:17", "Hard", "Pop"]);
	var el = '<table style="margin:auto">';
	var row;
	var pl;
	for (i=0;i<lib.length;i++)
	{
		row = "<tr>";
		if (i==0) {pl = "th";}
		else {pl = "td";}
		for (j=0; j<lib[i].length; j++) {row += "<" + pl + ">" + lib[i][j] + "</" + pl + ">";}
		el += row + "</tr>";
	}
	el += "</table>"
	document.getElementById("content").innerHTML += el;
}
function home() {updateContent("<h1>This is a placeholder for the Stretch Relief desktop homepage</h1>");}
function register() {changeBox('regBox', 'soBox');}
function signOn ()  {changeBox('soBox', 'regBox');}
function cal()
{
	updateContent("<h1>Calendar</h1>");
	var lib = [["Sunday 8/4", "Monday 8/5","Tuesday 8/6","Wednesday 8/7","Thursday 8/8","Friday 8/9", "Saturday 8/10"]];
	lib.push(["8am Hot Yoga 1 @ St. Paul",
						"8am Hot Yoga 2 @ St. Paul",
						"10am Injury Recovery 1 @ Downtown Minneapolis",
						"6am Hot Yoga 1 @ St. Paul",
						"10am Injury Recovery 1 @ Downtown Minneapolis",
						"8am Hot Yoga 2 @ St. Paul",
						"10am Injury Recovery 2 @ Downtown Minneapolis"]);
		lib.push(["11am Hot Yoga 2 @ St. Paul",
							"1pm Hot Yoga 3 @ St. Paul",
							"10am Injury Recovery 3 @ Downtown Minneapolis",
							"8am Hot Yoga 1 @ St. Paul",
							"10am Injury Recovery 3 @ Downtown Minneapolis",
							"8am Hot Yoga 2 @ St. Paul",
							"10am Injury Recovery 4 @ Downtown Minneapolis"]);
	var el = '<table style="margin:2em;">';
	var row;
	var pl;
	for (i=0;i<lib.length;i++)
	{
		row = "<tr>";
		if (i==0) {pl = "th";}
		else {pl = "td";}
		for (j=0; j<lib[i].length; j++) {row += "<" + pl + ">" + lib[i][j] + "</" + pl + ">";}
		el += row + "</tr>";
	}
	el += "</table>"
	document.getElementById("content").innerHTML += el;
}

function updateContent(content)
{
	document.getElementById("menu").style.visibility = "hidden";
	document.getElementById("content").innerHTML = content;
}

function canc(input)
{
	document.getElementById(input).style.visibility = "hidden";
	document.getElementById(input).style.height = "0px";
	document.getElementById(input).style.width = "0px";
}

function signOut()
{
	document.getElementById("cont").innerHTML = '<button class="button" id="so">Sign-in</button><button class="button" id="reg">Register</button>';
	document.getElementById("so").onclick = signOn;
	document.getElementById("reg").onclick = register;
	document.getElementById("body").style.paddingTop = "5em";
}

function regDis()
{
	var pw1 = document.getElementById("regPw").value;
	var pw2 = document.getElementById("regPw2").value;
	var un = document.getElementById("regUn").value;
	var same = (pw1 == pw2);
	if (un.length <1) {window.alert("Please Enter User Name")}
	else if (same)
	{
		document.getElementById("regBox").style.visibility = "hidden";
		document.getElementById("regPw").value = "";
		document.getElementById("regUn").value = "";
		document.getElementById("cont").innerHTML = '<div style="text-align:center;"><h2> Welcome, ' + un + '</h2> <button style="text-align:center;margin:auto;" id="signout">Sign Out</button></div>';
		document.getElementById("body").style.paddingTop = "8em";
		document.getElementById("signout").onclick = signOut;
	}
	else
	{
		window.alert("Passwords do not match");
		document.getElementById("regPw2").value = "";
	}
}

function soDis()
{
	console.log(document.getElementById("soPw").value);
	var pw1 = document.getElementById("soPw").value;
	var un = document.getElementById("soUn").value;
	if (un.length <1) 			{window.alert("Please Enter User Name")}
	else if (pw1.length <1) 	{window.alert("Please Enter Password")}
	else {
		document.getElementById("soPw").value = "";
		document.getElementById("soUn").value = "";
		document.getElementById("soBox").style.visibility = "hidden";
		document.getElementById("cont").innerHTML = '<div style="text-align:center;"><h2> Welcome, ' + un + '</h2> <button style="text-align:center;margin:auto;" id="signout">Sign Out</button></div>';
		document.getElementById("body").style.paddingTop = "8em";
		document.getElementById("signout").onclick = signOut;
	}
}

function changeBox(in1, in2)
{
	document.getElementById(in1).style.visibility = "visible";
	document.getElementById(in1).style.height = "auto";
	document.getElementById(in1).style.width = "45%";
	document.getElementById(in1).style.position = "static";

	document.getElementById(in2).style.visibility = "hidden";
	document.getElementById(in2).style.height = "0px";
	document.getElementById(in2).style.width = "0px";
	document.getElementById(in2).style.position = "fixed";

}

function nav()
{
	var el = document.getElementById("menu");
	console.log(el.style.visibility == "");
	if (el.style.visibility == "hidden" || el.style.visibility == "") {el.style.visibility = "visible";}
	else{el.style.visibility = "hidden";}
}
