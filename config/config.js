module.exports = {
  server: {
    port: process.env.PORT || 4000,
    host: process.env.HOST,
  },
  corsSettings: {
    // Le simulateur appelle le stats-recorder depuis son propre domaine : CORS
    // ne sert plus qu'à la lecture des statistiques par mes-aides-analytics.
    origin: process.env.CORS_DOMAIN || "*",
  },
  mongo: {
    uri: process.env.MONGO_URL || "mongodb://localhost/ajs",
  },
}
