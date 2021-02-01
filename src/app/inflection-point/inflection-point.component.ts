import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inflection-point',
  templateUrl: './inflection-point.component.html',
  styleUrls: ['./inflection-point.component.css']
})
export class InflectionPointComponent implements OnInit {

  items = [1, 4, 2, 5];
  inflection: string;
  constructor() { }

  ngOnInit() {
    this.inflection = this.inflectionPoint(this.items, this.items.length)
  }

  pushItem(i) {
    this.items.push(i.value)
    this.inflection = this.inflectionPoint(this.items, this.items.length)
  }

  inflectionPoint(arr, n) {
    let prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++)
      prefixSum[i] = prefixSum[i - 1] + arr[i];

    // Forming suffix sum array from n-1
    let suffixSum = [];
    suffixSum[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--)
      suffixSum[i] = suffixSum[i + 1] + arr[i];

    // Find the point where prefix and suffix
    // sums are same.
    for (let i = 1; i < n - 1; i++)
      if (prefixSum[i] == suffixSum[i])
        return arr[i];

    return -1;

  }
}
