# base27

> conversion tool for base27 readable error-proof short URLs

### rules
Only digits and some upper case `latin-1` letters only:

> `0 1 2 3 4 5 6 7 8 9` \
> `C D E F H K M N P Q R T U W X Y Z`

- 0 < OОΘØÖÓ
- 1 < jIl|
- 4 < АA
- 5 < S$
- 6 < G
- 8 < BВβẞß
- E < ЕΕ
- H < ΗН
- N < η
- U < Vυ
- X < ХΧ


## install and use

``` sh
npm i visually-safe-base.js
```

``` js
const Safe_Base = require( 'visually-safe-base.js' )

Safe_Base.transform_to_Safe_String( 'J1lIo0ØOB8BßA4G6' )
  // > '1111-0000-8888-4466'
Safe_Base.transform_to_Safe_String( 'x1x2x3x4x5', 2 )
  // > 'X1-X2-X3-X4-X5'

Safe_Base.encode( Date.now() )
  // > smth like '5C91W56DC'

Safe_Base.decode( 'xXx_1337_xXx' )
  // > 138542128285927710
```


## mirrors
- https://npmjs.com/package/visually-safe-base.js
- https://github.com/dym-sh/base27
- https://gitlab.com/dym-sh/base27
- https://dym.sh/base27
- hyper://8ef36ae1bd811f7ee431a9023e3bafe67e96bba3e267896018bbedc4999f26b7 /[?](https://beakerbrowser.com)


## license
[mit](./license)
