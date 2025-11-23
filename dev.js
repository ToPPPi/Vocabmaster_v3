const { spawn } = require('child_process');
const path = require('path');

// Function to run a command in a specific directory
function runCommand(command, args, cwd, name) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: true
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${name} exited with code ${code}`));
      }
    });

    process.on('error', (err) => {
      reject(new Error(`Failed to start ${name}: ${err.message}`));
    });
  });
}

// Start both server and client
async function startDev() {
  console.log('Starting VocabMaster development environment...');
  
  // Start the server in the background
  const serverProcess = spawn('npx', ['ts-node', 'index.ts'], {
    cwd: path.join(__dirname, 'server'),
    stdio: 'inherit'
  });

  // Small delay to let server start
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Then start the client
  const clientProcess = spawn('npx', ['vite'], {
    cwd: __dirname,
    stdio: 'inherit'
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\nShutting down development environment...');
    if (!serverProcess.killed) serverProcess.kill();
    if (!clientProcess.killed) clientProcess.kill();
    process.exit(0);
  });

  // Wait for either process to exit
  Promise.all([
    new Promise((_, reject) => serverProcess.on('error', reject)),
    new Promise((_, reject) => clientProcess.on('error', reject))
  ]).catch(err => {
    console.error('Error in development environment:', err.message);
    process.exit(1);
  });
}

startDev().catch(err => {
  console.error('Failed to start development environment:', err.message);
  process.exit(1);
});