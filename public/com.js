window.onload = () => { 
    document.getElementById('form') .addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('nama').value;
      const com = document.getElementById('com').value;
  
      const apiUrl = 'http://localhost:3000/comment';
  
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, com }),
      })    
  
        .then((response) => response.json())
        .then((data) => {
          if(data.error) {
            alert(data.message);
            console.log(data.error);
            return;
          }
          window.open('/', '_self'); // untuk kembali ke awal / list data
        })
  
        .catch((err) => {
          alert('Terjadi kesalahan saat mengirim data ke API.');
          console.log(err)
        });
    });
    };