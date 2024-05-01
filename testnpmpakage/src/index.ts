import { myFunction } from './utils/myFunction';
import * as d3 from 'd3';

const greeting: string = "Hello, TypeScript!";
console.log(greeting);

myFunction(greeting);



interface OHLCVData {
    date: string;
    close: number;
}

// export function generateLineChart(ohlcvData: OHLCVData[], targetDivId: string): void {
//     const svg = d3.select(`#${targetDivId}`).append('svg');
//     // Add D3 code to generate line chart using OHLCV data
// }
