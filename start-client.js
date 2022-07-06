const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'react_refresher_swapi', shell: true };
require('child_process').spawn('npm', args, opts);