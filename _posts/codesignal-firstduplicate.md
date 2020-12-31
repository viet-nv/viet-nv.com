---
title: '[Algorithms with Rust] #1 firstDuplicate - CodeSignal'
excerpt: 'Learning Rust by practice algorithms. #1 find the fist duplicate number in array'
tags: ['#algorithm', '#rust', '#codesignal', '#firstDuplicate']
date: '2020-12-28T15:13:04.000Z'
ogImage: ''
---

### [firstDuplicate](https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q/description)

Given an array <code>a</code> that contains only numbers in the range from 1 to <code>a.length</code>,
find the first duplicate <b>number</b> for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the <b>number</b> for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

### Example

- For `a = [2, 1, 3, 5, 3, 2]`, the output should be `firstDuplicate(a) = 3`.

  There are `2` duplicates: numbers `2` and `3`. The second occurrence of `3` has a smaller index than the second occurrence of `2` does, so the answer is `3`.

- For `a = [2, 2]`, the output should be `firstDuplicate(a) = 2`;
- For `a = [2, 4, 3, 5, 1]`, the output should be `firstDuplicate(a) = -1`.

### Input/Output

- <b>[execution time limit] 2 seconds (rs)</b>

- <b>[input] array.integer a</b>

  <i>Guaranteed constraints:</i>

  `1 ≤ a.length ≤ 10**5,`

  `1 ≤ a[i] ≤ a.length.`

- <b>[output] integer</b>

  The element in `a` that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.

### Solution

- Using array:

```rs
fn firstDuplicate(a: Vec<i32>) -> i32 {
    let mut check = Vec::new();
    for _ in 0..100001 {
        check.push(0);
    }
    for i in a {
        check[i as usize] += 1;
        if check[i as usize] >= 2 {
            return i;
        }
    }
    return -1;
}
```

- Using HashMap:

```rs
use std::collections::HashMap;

fn firstDuplicate(a: Vec<i32>) -> i32 {
    let mut map = HashMap::new();
    for &i in &a {
        if map.contains_key(&i) {
            return i
        } else {
            map.insert(i, 1);
        }
    }
    return -1;
}
```
