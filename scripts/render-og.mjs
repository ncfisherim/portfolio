// Renders scripts/og-image.html to public/og.png and public/apple-touch-icon.png
// using headless Microsoft Edge (Windows). Usage: npm run og
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const edge = process.env.EDGE_PATH ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const page = pathToFileURL(resolve('scripts/og-image.html')).href;
const shot = (out, w, h, hash = '') =>
	execFileSync(edge, [
		'--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
		'--allow-file-access-from-files', '--virtual-time-budget=2000',
		`--window-size=${w},${h}`, `--screenshot=${resolve(out)}`, page + hash,
	], { stdio: 'ignore' });

shot('public/og.png', 1200, 630);
// Icon: #icon tells the page to hide the OG card and show only the icon
shot('public/apple-touch-icon.png', 180, 180, '#icon');
console.log('Wrote public/og.png and public/apple-touch-icon.png');
