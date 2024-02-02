function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  listFiles();
  document.getElementById("defaultTab").click();
});

function listFiles() {
  const apiUrlList = 'listFiles.php';

  fetch(apiUrlList)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch file list');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('fileList').innerHTML = data;
      })
      .catch(error => {
        console.error('Error fetching file list:', error.message);
      });
}


function uploadFile(fileInput) {
  const apiUrl = '/files/public/'; // replace with your server's API endpoint

  const formData = new FormData();
  formData.append('file', fileInput);

  fetch(apiUrl, {
    method: 'POST',
    body: formData,
  })
      .then(response => {
        if (!response.ok) {
          throw new Error('File upload failed');
        }
        console.log('File uploaded successfully');
      })
      .catch(error => {
        console.error('Error uploading file:', error.message);
      });
}

function downloadFile(fileName) {
  const apiUrl = `/files/public/${fileName}`; // replace with your server's API endpoint

  fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('File download failed');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a link element and trigger a download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading file:', error.message);
      });
}




