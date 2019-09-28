import { deepStrictEqual } from "assert";

// Get references to page elements
var stuNameID = $(".stuNameID");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveClassrooms: function(classroom) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/classrooms",
      data: JSON.stringify(classroom)
    });
  },
  getClassrooms: function() {
    return $.ajax({
      url: "api/classrooms",
      type: "GET"
    });
  },
  getClassroomsbyId: function(id) {
    return $.ajax({
      url: `api/classrooms/${id}`,
      type: "GET"
    }).then (function(data) {
      // displayClassroom();
      console.log(data)
    });
  },
  deleteClassroms: function(id) {
    return $.ajax({
      url: "api/classrooms/" + id,
      type: "DELETE"
    });
  }
};



function displayClassrooms() {
  var classroomsList = API.getClassrooms();
  for (i=0; i< classroomsList.length; i++) {
    displayClassrooms(classroomsList[i]);
  }
}


var displayStuId = function(id) {
  var classroomInfo = API.getClassroombyId(studentid);
  $('.pilFour').text = classroomInfo.pillar4;
}
var displayClassroom = function(data) {
  $('.pilFour').text = data.pillar4;
}



