var jsonData;
var tableHtml ="hello";
var dueSeconds;

$( document ).ready(function() {

    $.ajax({
      url: "/tasks.json",
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      dataType: "json",
      method: "get",
      error: function() { console.log("Cannot GET AJAX file") },
      success: function(data){ 
        console.log("Got JSON file!");
        jsonData = data;

        tableHtml = "<table><tr> <th>Title</th> <th>Note</th> <th>Due Date</th> <th>Time Left (seconds)</th> <th>Status</th> <tr>";

        for (x=0; x<jsonData.length; x++) {
          tableHtml += "<tr>";
          tableHtml += "<td>" +jsonData[x].title+ "</td>";
          tableHtml += "<td>" +jsonData[x].note+ "</td>";
          tableHtml += "<td>" +jsonData[x].due+ "</td>";

          dueSeconds = jsonData[x].due_seconds - (new Date().getTime()/1000);

          tableHtml += "<td>" +dueSeconds+ "</td>";

          if (dueSeconds > 0) {
            tableHtml += "<td class='due'>Due</td>"
          } else {
            tableHtml += "<td class='past-due'>Past Due</td>"
          }

          tableHtml += "</tr>";


        }

        tableHtml += "</table>";

        $('#results').html(tableHtml);
        
      }
    });


});
