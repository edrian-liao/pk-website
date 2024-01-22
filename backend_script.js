<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif; /* Modern font */
            background-color: #f4f4f4; /* Light background for contrast */
            color: #333; /* Darker text for better readability */
            padding: 20px; /* Padding around the body content */
        }
    
        h1 {
            text-align: center; /* Center-align the title */
            font-size: 50px;
            color: #009879; /* Color matching the table header */
        }
    
        .scrollableTable {
            overflow-x: auto; /* Scroll horizontally if needed */
            margin: 20px 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); /* Subtle shadow for depth */
        }
    
        table {
            width: 100%; /* Full-width */
            border-collapse: collapse; /* Collapse borders */
            font-size: 1em; /* Increase font size for readability */
            background-color: white; /* White background for the table */
            margin-bottom: 20px; /* Margin at the bottom of the table */
        }
    
        th, td {
            padding: 15px; /* Increase padding for spaciousness */
            text-align: left; /* Left-align text */
            border-bottom: 1px solid #dddddd; /* Light grey border for subtlety */
        }
    
        th {
            background-color: #009879; /* Header background color */
            color: white; /* White text for contrast */
            font-weight: normal; /* Normal font weight */
        }
    
        tr:nth-of-type(even) {
            background-color: #f9f9f9; /* Light grey for zebra striping */
        }
    
        tr:hover {
            background-color: #f1f1f1; /* Light grey for hover effect */
        }
    
        #refreshButton {
            padding: 10px 20px;
            background-color: #009879;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1em;
            display: block; /* Make the button a block element */
            width: 200px; /* Fixed width */
            margin: 20px auto; /* Center the button */
            text-align: center; /* Center-align the text */
        }
    
        #refreshButton:hover {
            background-color: #007f67; /* Slightly darker shade on hover */
        }
    </style>
    
    <title>Secret Database</title>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js"></script>
</head>
<body>
    <h1>User Information</h1>
    <pre id="data"></pre>
    <button id="refreshButton">Refresh Data</button>
    <div class="scrollableTable">
        <table id="userData">
            <tr>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Donator?</th>
                <th>Student?</th>
                <th>Additional</th>
            </tr>
        </table>
    </div>

    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCE-YxLoNfDEw_NPJhEeFq--VhkBs5FRI4",
            authDomain: "kayamanan-d3a22.firebaseapp.com",
            databaseURL: "https://kayamanan-d3a22-default-rtdb.firebaseio.com",
            projectId: "kayamanan-d3a22",
            storageBucket: "kayamanan-d3a22.appspot.com",
            messagingSenderId: "401799279273",
            appId: "1:401799279273:web:f1d5244e233ae51bf5afb8",
            measurementId: "G-QVPNXY134T"
          };
        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        function loadData() {
            var database = firebase.database();
            database.ref('users').once('value', (snapshot) => {
                const data = snapshot.val();
                updateTable(data);
            });
        }    

        // Function to update the table with new data
        function updateTable(data) {
            var table = document.getElementById('userData');

            // Clear existing table data (except the header)
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }

            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var row = table.insertRow(-1); // Insert a row at the end of the table
                    var fullname = row.insertCell(0);
                    fullname.innerHTML = data[key].fullname;
                    var phone = row.insertCell(1);
                    phone.innerHTML = data[key].phone;
                    var email = row.insertCell(2);
                    email.innerHTML = data[key].email;
                    var donator = row.insertCell(3);
                    donator.innerHTML = data[key].donator ? 'Yes' : 'No';
                    var student = row.insertCell(4);
                    student.innerHTML = data[key].student ? 'Yes' : 'No';
                    var additional = row.insertCell(5);
                    additional.innerHTML = data[key].additional;
                }
            }
        }
        document.getElementById('refreshButton').addEventListener('click', function() {
            loadData();
        });
        loadData(); 
    </script>
</body>
</html>
