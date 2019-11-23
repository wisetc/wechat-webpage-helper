# wechat-webpage-helper

微信内 web 页面的工具方法。

## iso 微信 input 定位问题

从 2018 年年底的某个时刻起，在 iso 微信公众号页面中对输入框用虚拟键盘键入后，点击软键盘上的完成，页面中的内容显示是正常的，但是点击页面元素却会发现页面元素的位置其实发生了向上的偏移。解决这个 bug，可以这样，当点击软键盘的完成，也就是页面失去焦点时，让浏览器重排。

在掘金上找到这一样一段代码，实测有效。

```js
const pattern = /iphone|ipod|ipad/i;
pattern.test(window.navigator.appVersion) &&
  document.addEventListener(
    'blur',
    () => {
      document.body.scrollIntoView(false);
    },
    true
  );
```

于是有了这个仓库。

## 使用

引入 polyfill，

```js
require('@wisetc/wechat-webpage-helper/lib/ios-input-polyfill');
```

## 多次调用触发包装

利用 `charge` 来蓄积调用能量。下面的代码连续快速调用 5 次才打印当前的时间，调用间的延时默认为 500ms。

```js
import { charge } from '@wisetc/wechat-webpage-helper/lib/debugger';
const print = () => {
  console.log(Date.now());
};
const charged = charge(print, 5);

// 连续调用
charged();
charged();
charged();
charged();
charged();
```

定义 `charge`，

```ts
function charge(func: Function, maxTimes = 5, delay = 500): Function;
```

`charge` 方法的第三个参数为调用间的延时，第二个参数为触发设定函数的最小调用次数。
