# visually-safe-base.js
> conversion tool for base27 readable error-proof short URLs


### Rules
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


## Install
``` sh
npm i visually-safe-base.js
```


## Use
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
# base27

> <DESCRIPTION>


<a href='./preview.png'><img height=100 border=2 align='right' alt='preview' src='preview.png'></a>
## preview
- [preview.html](./preview.html)
- https://codepen.io/dym-sh/pen/<TBD>/left/?editors=0100


## mirrors
- https://github.com/dym-sh/base27
- https://gitlab.com/dym-sh/base27
- https://dym.sh/base27
- hyper://<TBD> /[?](https://beakerbrowser.com)


## license
[mit](./license)
