var express = require('express'),
    app = express(),
    http = require('http').Server(app).listen(81),
    upload = require('express-fileupload');
app.use(upload());
console.log('Server Started');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    if (req.files) {
        //console.log(req.files)
        var file = req.files.filename,
            filename = file.name;
        file.mv(".\Upload File" + filename, (err) => {
            console.log(err);
            if (err)
                res.send("Error Occured");
            else
                res.send("Upload Done!!");
        });
    }
});