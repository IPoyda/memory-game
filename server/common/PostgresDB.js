const Sequelize = require('sequelize');

class PostgresDB {
    static init() {
        // databaseName, username, password
        const psql = new Sequelize('memory_game', 'postgres', 'root', {
            host: 'localhost',
            dialect: 'postgres',
            define: {
                timestamps: false,
            },
        });

        psql.authenticate()
            .then(() => {
                console.log('Connection to postgres has been established successfully.');
            })
            .catch((err) => {
                console.error('Unable to connect to the database:', err);
            });

        const Scores = psql.define('scores',{
            id: { type: Sequelize.STRING, primaryKey: true, autoIncrement: true },
            title: { type: Sequelize.STRING, allowNull: false },
            value: { type: Sequelize.STRING, allowNull: false },
        });

        return {
            db: psql,
            type: 'postgres',
            Scores,
        };
    }
}

module.exports = PostgresDB;