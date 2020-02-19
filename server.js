const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const userRoutes = require('./routes/user-routes');
app.use('/api/auth', userRoutes);
const profileRoutes = require('./routes/profile-routes');
app.use('/api/profiles', profileRoutes);
const postRoutes = require('./routes/post-routes');
app.use('/api/posts', postRoutes);



db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Started on port: ' + PORT))
});


