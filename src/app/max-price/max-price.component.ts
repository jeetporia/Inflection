import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-price',
  templateUrl: './max-price.component.html',
  styleUrls: ['./max-price.component.css']
})
export class MaxPriceComponent implements OnInit {

  items = [1, 2, 90, 10, 110];
  maxDiff: any;
  constructor() { }

  ngOnInit() {
    this.maxDiff = this.maxDifference(this.items, this.items.length)
  }

  maxDifference(arr, arr_size) {
    let max_diff = arr[1] - arr[0];
    for (let i = 0; i < arr_size; i++) {
      for (let j = i + 1; j < arr_size; j++) {
        if (arr[j] - arr[i] > max_diff)
          max_diff = arr[j] - arr[i];
      }
    }
    return max_diff;
  }

}
