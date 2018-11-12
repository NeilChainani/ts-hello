var count = 5;
count = "a";
var b = true;
var c = [1, 2, 3];
var d = [1, "d"];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["gren"] = 1] = "gren";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var backgroundColor = Color.red;
