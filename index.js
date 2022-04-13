$(document).ready(function () {
  var visited = $.cookie("visited");
   if (visited == "yes") { return false; } else {
   // Run Script
   }
  $.cookie("visited", "yes", { expires: 7 });
});
