document.addEventListener('DOMContentLoaded', function() {
  
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registrasi berhasil! Silahkan login dengan akun yang telah dibuat.');
            window.location.href = 'form.html';
        });
    }


    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
        studentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulir pendaftaran berhasil dikirim! Silahkan cek status pendaftaran secara berkala.');
        });
    }

    const modal = document.getElementById('detailModal');
    if (modal) {
        const closeBtn = document.querySelector('.close');
        const viewBtns = document.querySelectorAll('.view-btn');

        function showModal(studentData) {
            const modalContent = document.getElementById('modalDetailContent');
            modalContent.innerHTML = `
                <p><strong>Nama Siswa:</strong> ${studentData.name}</p>
                <p><strong>Tanggal Lahir:</strong> ${studentData.birthDate}</p>
                <p><strong>Alamat:</strong> ${studentData.address}</p>
                <p><strong>Nama Ayah:</strong> ${studentData.fatherName}</p>
                <p><strong>Nama Ibu:</strong> ${studentData.motherName}</p>
                <p><strong>Telepon:</strong> ${studentData.phone}</p>
                <p><strong>Status:</strong> ${studentData.status}</p>
                <p><strong>Catatan:</strong> ${studentData.notes || 'Tidak ada catatan'}</p>
            `;
            modal.style.display = 'block';
        }
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
        
        viewBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const row = this.closest('tr');
                const cells = row.querySelectorAll('td');
                
                const studentData = {
                    name: cells[1].textContent,
                    birthDate: '15 April 2020', 
                    address: 'Jl. Contoh No. 123, Jakarta', 
                    fatherName: 'Bapak ' + cells[1].textContent.split(' ')[0], 
                    motherName: 'Ibu ' + cells[1].textContent.split(' ')[0], 
                    phone: '08123456789', 
                    status: cells[3].querySelector('span').textContent,
                    notes: 'Silahkan verifikasi berkas yang diupload' 
                };
                
                showModal(studentData);
            });
        });
        
        document.getElementById('approveBtn').addEventListener('click', function() {
            alert('Pendaftaran telah diterima!');
            modal.style.display = 'none';
        });
        
        document.getElementById('rejectBtn').addEventListener('click', function() {
            alert('Pendaftaran telah ditolak!');
            modal.style.display = 'none';
        });
        
        document.getElementById('requestRevisionBtn').addEventListener('click', function() {
            alert('Permintaan revisi telah dikirim ke orang tua!');
            modal.style.display = 'none';
        });
    }
    
    const printReportBtn = document.getElementById('printReport');
    if (printReportBtn) {
        printReportBtn.addEventListener('click', function() {
            alert('Mencetak laporan...');
        });
    }
    
    const exportDataBtn = document.getElementById('exportData');
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', function() {
            alert('Mengekspor data ke Excel...');
        });
    }

    
});

