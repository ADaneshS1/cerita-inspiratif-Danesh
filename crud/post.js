const postCom = async (req,res) => {
    try {
        const {nama,teks} = req.body;

        if(nama.length > 20) {
            res.send("Nama tidak boleh dari 20 huruf");
        }
        if(teks.length > 160) {
            res.send("Komentar tidak boleh dari 160 huruf");
        }
        res.send("Komenter telah terkirim");
    } catch(error) {
        res.send("Terjadi error ", error, " membuat comment");
    }
};

module.exports = {postCom}