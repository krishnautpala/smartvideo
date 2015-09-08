 function addField (argument) {
            var myTable = document.getElementById("myTable");
            var currentIndex = myTable.rows.length;
            var currentRow = myTable.insertRow(-1);

            var startTime = document.createElement("input");
            startTime.setAttribute("name", "startTime" + currentIndex);

            var endTime = document.createElement("input");
            endTime.setAttribute("name", "endTime" + currentIndex);

            var filterRating = document.createElement("input");
            filterRating.setAttribute("name", "filterRating" + currentIndex);

            var skipType = document.createElement("input");
            skipType.setAttribute("name", "skipType" + currentIndex);

            var addRowBox = document.createElement("input");
            addRowBox.setAttribute("type", "button");
            addRowBox.setAttribute("value", "Add");
            addRowBox.setAttribute("onclick", "addField();");
            addRowBox.setAttribute("class", "button");

            var deleteRowBox = document.createElement("input");
            deleteRowBox.setAttribute("type", "button");
            deleteRowBox.setAttribute("value", "Delete");
            deleteRowBox.setAttribute("onclick", "deleteRow();");
            deleteRowBox.setAttribute("class", "button");

            var currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(startTime);

            currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(endTime);

            currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(filterRating);

            currentCell = currentRow.insertCell(-1);
            currentCell.appendChild(skipType);
}

function deleteRow() {
    //get row id from document
   var myTable = document.getElementById("myTable");
   var currentIndex = myTable.rows.length;
   if (currentIndex != 1){
      document.getElementById("myTable").deleteRow(currentIndex-1);
   }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                obj = JSON.parse(allText);
                console.log(obj.splits[0]);
                console.log(obj.splits[1]);
            }
        }
    }
    rawFile.send(null);
}
