---
title: 'JavaScript 算法题书写注意Tips…'
description: '从最开始用 C++ 刷算法题，到后面需要春招找实习才切换到 JavaScript，在输入输出和一些处理操作上，有较大的差异，本篇博客用来记录一下这些差异，也帮助自己更好的查询……'
pubDate: '2024-06-13'
category: 'frontend'
banner: '@images/banners/banner(10).jpeg'
tags: ['JavaScript'、'算法'、'求职']
oldViewCount: 530
oldKeywords: ['JavaScript'、'算法'、'求职']
---

> 从最开始用 C++ 刷算法题，到后面需要春招找实习才切换到 JavaScript，在输入输出和一些处理操作上，有较大的差异，本篇博客用来记录一下这些差异，也帮助自己更好的查询。

<a name="Rtmq2"></a>

### 数组排序

-   sort排序的时候，默认按照字符串的顺序排序,如果要比较数字的大小需要这样写： `nums.sort((a, b)=> a -b))`
    <a name="lI1Nf"></a>

### 数字处理

-   最大值要用`Number.MAX_VALUE`, 最小值不是Number.MIN_VALUE，这是最接近0的小数，可以用`-Number.MAX_VALUE`
-   小数的加减求整数时，要用`Math.floor(a - b)`，不然加减可能不太准确。
    <a name="DIZcF"></a>

### 数组处理

-   如果结果是tmp数组push进res数组，push 的时候一定要用[...tmp] 或者tmp.slice()，不然会把原先数组的引用push进去，导致结果和tmp同加同减
-   二维数组的初始化，不能用嵌套Array.fill，不然传进去的就是同一个引用，应该这样用Array.from

```javascript
const matrix = Array.from(Array(rows), () => new Array(cols).fill(0));
```

-   判断某个数组元素是否在数组内，使用includes()方法，在就返回true
    <a name="QjlZ8"></a>

### 字符串处理

字符串的截取使用substring(begin, end)或者slice(begin, end)，都直接传结束的数组
<a name="Pa0mb"></a>

### ACM模式输入输出

例题：[kamacoder-solutions/problems/0003.A+B问题III.md at main · youngyangyang04/kamacoder-solutions](https://github.com/youngyangyang04/kamacoder-solutions/blob/main/problems/0003.A+B%E9%97%AE%E9%A2%98III.md)

```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.on('line', (input) => {
    const [a, b] = input.split(' ');
    console.log(parseInt(a) + parseInt(b));
});
```

```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function processInput() {
    let paths = [];
    readline.on('line', (input) => {
        let path = input.split(' ').map(Number);
        if (path.length === 1) {
            paths.push(path);
        } else {
            const [a, b] = input.split(' ');
            console.log(parseInt(a) + parseInt(b));
        }
    });
}

processInput();
```

```javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (input) => {
    let inputs = input.split(' ').map(Number);
    let len = 0;
    if (inputs.length === 1) {
        len = inputs[0];
    } else {
        let arr = inputs;
        const quicksort = (q, l, r) => {
            if (l >= r) return;
            let m = q[Math.floor((r + l) / 2)],
                i = l - 1,
                j = r + 1;
            while (i < j) {
                do i++;
                while (q[i] < m);
                do j--;
                while (q[j] > m);
                if (i < j) [q[i], q[j]] = [q[j], q[i]];
            }
            quicksort(q, l, j);
            quicksort(q, j + 1, r);
        };
        quicksort(arr, 0, arr.length - 1);
        console.log(arr.join(' '));
    }
});
```
