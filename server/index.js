const server = require('server');
const { get, post } = server.router;
const { file, redirect } = server.reply;

server(
  { port: 4444 },
  [
    ctx => 'made itttt',
    get('*', ctx => {
      console.log('/')
      return 'made it'
    }),
    post('/screenshots', ctx => {
      // Show the submitted data on the console:
      console.log(ctx.data);
      return json({ worked: true })
    })
  ]
);