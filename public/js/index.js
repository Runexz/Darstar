//var studentInfoUpdate = require("./teacher");
// var putTeacherInfo = require("./teacher");

// Get references to parent.html page elements
var stuNameID = $(".stuNameID");
var pillarOne = $(".pilOne");
var pillarTwo = $(".pilTwo");
var pillarThree = $(".pilThree");
var pillarFour = $(".pilFour");
var missingWork = $(".pilFive");
var teacherComment = $(".comToPost");

// Get references to teacher.html page elements
var teacherStuName = $(".studentName");
var teacherStuId = $(".stuId");




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


// The API object contains methods for each kind of request we'll make (have not tried)
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
  // This function is ran when teacher enters student new info to update current student info (DOES NOT WORK)
  updateStudentbyId: function (id) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: `api/classrooms/${id}`,
      data: JSON.stringify(classroom.putTeacherInfo)
    }).then(function (data) {
      console.log(data);
      // data.pillar1 = radioValue;
      // data.pillar2 = radioValue2;
      // data.pillar3 = radioValue3;
      // data.pillar4 = radioValue4;
      // data.color = behaviorColor;
      // data.descriptioncomments = teacherCommment;
      // data.missingwork = isHwChecked;
    });
  },
  // This function is ran when teacher enters id number (WORKS)
  getStudentbyId: function (id) {
    return $.ajax({
      url: `api/classrooms/${id}`,
      type: "GET"
    }).then(function (data) {
      teacherStuName.append("Student Name: " + data.name);
      teacherStuId.append(data.studentid)
      console.log("Student Name: " + data.name + "Student Id: " + data.studentid);
    });
  },
  // This function is ran when parent enters id number(WORKS)
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
       }else if(databaseColor === 'Green'){
        $('.behavColor').addClass('bg-success');
       }else if(databaseColor === 'Yellow'){
        $('.behavColor').addClass('bg-warning');
       }else if(databaseColor === 'Orange'){
        $('.behavColor').addClass('bg-warning');
       }else if(databaseColor === 'Red'){
        $('.behavColor').addClass('bg-danger');
       };
       console.log("Student average color: " + data.color);
       console.log("Student average color: " + databaseColor);

      teacherComment.append(data.descriptioncomments);
      console.log(data.descriptioncomments);

    });
  },
  // (HAVE NOT TRIED)
  deleteClassroms: function (id) {
    return $.ajax({
      url: "api/classrooms/" + id,
      type: "DELETE"
    });
  }
};







