function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/news', (req, res) => {
        res.render('news');
    });

    // app.use('/news', newsRouter);
    // app.use('/courses', coursesRouter);
    // app.use('/me', meRouter);
}

module.exports = route;
