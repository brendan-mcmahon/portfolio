app.use(express.static(`./dist/portfolio`));

app.get(`/*`, function(req, res) {
  res.sendFile(`index.html`, {root: 'dist/portfolio/'}
);
});

app.listen(process.env.PORT || 8080);
