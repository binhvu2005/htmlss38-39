
      //seach b9
      function search() {
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("search_input");
        filter = input.value.toUpperCase();
        table = document.getElementById("data_table");
        tr = table.getElementsByTagName("tr");
    
        for (i = 1; i < tr.length; i++) { 
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
      // phần đổi trang
      let currentStep = 1;

      function next() {
        if (currentStep < 4) {
          currentStep++;
          updateSteps();
          updateButtons();
          loadTableData()
        }
      }

      function prev() {
        if (currentStep > 1) {
          currentStep--;
          updateSteps();
          updateButtons();
          loadTableData()
        }
      }

      function updateSteps() {
        for (let i = 1; i <= 4; i++) {
          const step = document.getElementById(`step${i}`);
          if (i == currentStep) {
            step.classList.add("mau");
          } else {
            step.classList.remove("mau");
          }
        }
      }

      function updateButtons() {
        let prevButton = document.getElementById("prevButton");
        let nextButton = document.getElementById("nextButton");

        prevButton.disabled = currentStep === 1;
        nextButton.disabled = currentStep === 4;
        if (prevButton.disabled) {
          prevButton.classList.add("disabled");
        } else {
          prevButton.classList.remove("disabled");
        }

        if (nextButton.disabled) {
          nextButton.classList.add("disabled");
        } else {
          nextButton.classList.remove("disabled");
        }
      }
      updateSteps();
      updateButtons();
      loadTableData();
      function loadTableData() {

            const data = [
                { name: "Alice", country: "USA" },
                { name: "Bob", country: "Canada" },
                { name: "Charlie", country: "UK" },
                { name: "David", country: "Australia" },
                { name: "Eva", country: "Germany" },
                { name: "Frank", country: "France" },
                { name: "Grace", country: "Spain" },
                { name: "Henry", country: "Italy" },
                { name: "Ivy", country: "Japan" },
                { name: "Jack", country: "China" },
                { name: "Karen", country: "India" },
                { name: "Liam", country: "Brazil" },
                { name: "Mia", country: "Mexico" },
                { name: "Noah", country: "Argentina" },
                { name: "Olivia", country: "Canada" },
                { name: "Owen", country: "USA" },
                { name: "Piper", country: "Germany" },
                { name: "Quinn", country: "France" },
                { name: "Riley", country: "Italy" },
                { name: "Ryan", country: "Spain" },
                { name: "Sophia", country: "UK" },
                { name: "Samuel", country: "Japan" },
                { name: "Samantha", country: "China" },
                { name: "Thomas", country: "India" },
                { name: "Taylor", country: "Brazil" },
                { name: "Victoria", country: "Mexico" },
                { name: "William", country: "Argentina" },
                { name: "Zoe", country: "Canada" },
                { name: "Alexander", country: "USA" },
                { name: "Emma", country: "Germany" },
                { name: "Ethan", country: "France" },
                { name: "Isabella", country: "Italy" },
                { name: "James", country: "Spain" },
                { name: "Ava", country: "UK" },
                { name: "Lucas", country: "Japan" },
                { name: "Mason", country: "China" },
                { name: "Madison", country: "India" },
                { name: "Charlotte", country: "Brazil" }
            ];
            
        const tableBody = document.getElementById("data_table");
        tableBody.innerHTML = `<tr>
        <th>name</th>
        <th>country</th>
      </tr>`;
      
        const startIndex = (currentStep - 1) * 10;
        const endIndex = Math.min(startIndex + 10, data.length);
      
        for (let i = startIndex; i < endIndex; i++) {
          const rowData = data[i];
          const row = `<tr><td>${rowData.name}</td><td>${rowData.country}</td></tr>`;
          tableBody.innerHTML += row;
        }
      }