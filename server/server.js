const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS middleware
app.use(cors());

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    cache: 'bounded',
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
    });
  }

  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookfinder', {});

  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
