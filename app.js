<script>
    fetch('data.json')  // Ganti dengan nama berkas JSON Anda
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#data-table tbody');

            data.forEach(item => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = item.nama;
                const ageCell = document.createElement('td');
                ageCell.textContent = item.usia;
                const emailCell = document.createElement('td');
                emailCell.textContent = item.email;

                row.appendChild(nameCell);
                row.appendChild(ageCell);
                row.appendChild(emailCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
</script>
