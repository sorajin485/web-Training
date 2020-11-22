// ./routes/controller.js
module.exports = function(app) {
    app.get('/', (req, res) => {
        // var html = "<!DOCTYPE HTML>"
        //          + "<html>"
        //          + "<head>"
        //          + "<meta charset='UTF-8'>"
        //          + "<title>"
        //          + "</title>"
        //          + "<body>"
        //          + "<h1>ROOT</h1>"
        //          + "</body>"
        //          + "</head>"
        //          + "</html>"  
        res.render('index.ejs');
    });

    app.get('/contact', (req, res) => {
        res.render('contact.ejs');
    });
}