// Get references to page elements
var stuNameID = $(".stuNameID");
var pillarOne = $(".pilOne");
var pillarTwo = $(".pilTwo");
var pillarThree = $(".pilThree");
var pillarFour = $(".pilFour");
var missingWork = $(".pilFive");
var teacherComment = $(".comToPost");


// function studentHeader() {
//   var classroomsList = API.getClassrooms();
//   for (i = 0; i < classroomsList.length; i++) {
//     displayClassrooms(classroomsList[i]);
//   }
// }

// var displayStuId = function(data) {
//   stuNameID.append(data.name);
//   stuNameID.append(data.studentId);
// }

// var displayClassroom = function (data) {
//   $('.pilFour').text = data.pillar4;
// }


// The API object contains methods for each kind of request we'll make
var API = {
  saveClassrooms: function (classroom) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/classrooms",
      data: JSON.stringify(classroom)
    });
  },
  getClassrooms: function () {
    return $.ajax({
      url: "api/classrooms",
      type: "GET"
    });
  },
  getClassroomsbyId: function (id) {
    return $.ajax({
      url: `/api/classrooms/${id}`,
      type: "GET"
    }).then(function (data) {
      stuNameID.append("Student Name: " + data.name + "<br>" + "Student Id: " + data.studentid);
      console.log("Student Name: " + data.name + "Student Id: " + data.studentid);

      pillarOne.append(data.pillar1);
      console.log("Pillar1: " + data.pillar1);

      pillarTwo.append(data.pillar2);
      console.log("Pillar2: " + data.pillar2);

      pillarThree.append(data.pillar3);
      console.log("Pillar3: " + data.pillar3);

      pillarFour.append(data.pillar4);
      console.log("Pillar4: " + data.pillar4);

      missingWork.append(data.missingwork);
      console.log("Missing Work: " + data.missingwork);

      var databaseColor = data.color;
      if(databaseColor === 'blue'){
        $('.behavColor').addClass('bg-primary');
       }else if(databaseColor === 'green'){
        $('.behavColor').addClass('bg-success');
       }else if(databaseColor === 'yellow'){
        $('.behavColor').addClass('bg-warning');
       }else if(databaseColor === 'orange'){
        $('.behavColor').addClass('bg-orange');
       }else if(databaseColor === 'red'){
        $('.behavColor').addClass('bg-danger');
       };
       console.log("Student average color: " + data.color);

      teacherComment.append(data.descriptioncomments);
      console.log(data.descriptioncomments);

    });
  },
  deleteClassroms: function (id) {
    return $.ajax({
      url: "api/classrooms/" + id,
      type: "DELETE"
    });
  }
};







