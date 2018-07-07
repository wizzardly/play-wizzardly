const externals = [
  {
    module: 'google-roboto',
    entry: {
      path: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
      type: 'css',
    },
  },
  {
    module: 'font-awesome',
    entry: {
      path: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      type: 'css',
    },
  },
]

module.exports = {
  externals,
}
