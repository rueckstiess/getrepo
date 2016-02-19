// need to `npm install --save` this one too
var downloadRepo = require('download-github-repo');

// this is how you "export" something, which will be returned by "require"ing
// it elsewhere, either locally or from another module. You can export functions,
// objects, whatever you want. But it's usually a function or object by convention.
module.exports = function(repo, dest, callback) {
  // convention: callbacks are of the form: function(err, res) { ... }

  // if you encounter an error, call it like so: callback(error);
  // if everything goes well, call it like so: callback(null, result) or, if
  // there is no result to return, callback() suffices.

  // because of this convention, we can just pass the callback function
  // along to other async methods, knowing downloadRepo will do the same thing.
  // see https://github.com/ianstormtaylor/download-github-repo/blob/master/index.js#L21-L27
  downloadRepo(repo, dest, callback);
}

// yes, this is a minimal example, we could just do it in ./bin/getrepo, but
// it's good practice to offer both a CLI and a programatic interface to the
// module you're building. You may also do other things here, like check if
// the repo exists, resolve the path to an absolute one, check we don't overwrite
// existing files, etc.
