---
title: '[Algorithms with Rust] #2 firstNotRepeatingCharacter - CodeSignal'
excerpt: 'Learning Rust by practice algorithms. #2 find and return the first instance of a non-repeating character in string s'
tags: ['#algorithm', '#rust', '#codesignal', '#firstNotRepeatingCharacter']
date: '2020-12-31T01:13:46.000Z'
ogImage: ''
---

### [firstNotRepeatingCharacter](https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC/description)

Given a string `s` consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return `'_'`.

### Example

- For `s = "abacabad"`, the output should be
  `firstNotRepeatingCharacter(s) = 'c'`.

    There are `2` non-repeating characters in the string: `'c'` and `'d'`. Return `c` since it appears in the string first.

- For `s = "abacabaabacaba"`, the output should be
  `firstNotRepeatingCharacter(s) = '_'`.

    There are no characters in this string that do not repeat.

### Input/Output

- <b>[execution time limit] 2 seconds (rs)</b>

- <b>[input] string s</b>

  A string that contains only lowercase English letters.

  <i>Guaranteed constraints:</i>

  `1 ≤ s.length ≤ 10**5,`

- <b>[output] char</b>

  The first non-repeating character in `s`, or `'_'` if there are no characters that do not repeat.

### Solution

```rs
use std::collections::HashMap;

fn firstNotRepeatingCharacter(s: String) -> char {
    let mut m = HashMap::new();
    for i in s.chars() {
        if let Some(&c) = m.get(&i) {
            m.insert(i, c + 1);
        } else {
            m.insert(i, 1);
        }
    }

    for i in s.chars() {
        if let Some(&1) = m.get(&i) {
            return i;
        }
    }

    '_'
}
```
