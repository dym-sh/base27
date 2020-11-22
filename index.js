'use strict'


const Safe_Chars = '0123456789CDEFHKMNPQRTUWXYZ'
    , Safe_Chars_Count = Safe_Chars.length
    , regexp_Not_Safe_Chars = new RegExp( `[^${ Safe_Chars }]`, 'g' )


const type_of = _ =>
  Object.prototype.toString.call( _ )
        .replace( /(\[object )|\]/g, '' )


const parse_int_or_zero_form = _ =>
  {
    const n = parseInt( _ )
    return ( 'NaN' !== n )
        && ( 0 < n )
         ? n
         : 0
  }


const transform_to_Safe_String =
exports.transform_to_Safe_String = ( _, sep_size = 4 ) =>
  [ 'String', 'Number' ]
     .includes( type_of( _ ) )

  ? _.toString( )
     .replace(    /[АA]/gi, '4' )
     .replace( /[BВβẞß]/gi, '8' )
  // .replace(        /g/g, '9' ) ???
     .replace(    /[Vυ]/gi, 'U' )
     .replace(        /η/g, 'N' )
     .toUpperCase( )
     .replace( /[OОΘØÖÓ]/g, '0' )
     .replace(  /[ILJ\|]/g, '1' )
     .replace(    /[S\$]/g, '5' )
     .replace(        /G/g, '6' )
     .replace(     /[ΗН]/g, 'H' )
     .replace(     /[ЕΕ]/g, 'E' )
     .replace(     /[ХΧ]/g, 'X' )
     .replace( regexp_Not_Safe_Chars, '' )
     .match( new RegExp
               ( `.{1,${ parse_int_or_zero_form( sep_size )
                      || 0x7FFFFFFF
                       }}`
               , 'g'
               )
           )
     .join( '-' )

  : ''


const convert_Number_to_Save_String = _ =>
  _ ? encode( ( _
              - ( _ % Safe_Chars_Count )
              ) / Safe_Chars_Count
            )
    + Safe_Chars[ _ % Safe_Chars_Count ]
    : ''


const encode =
exports.encode = _ =>
  {
    const n = parse_int_or_zero_form( _ )
    return n
         ? convert_Number_to_Save_String( n )
         . replace( /^0/, '' )
         : '0'
  }


const decode =
exports.decode = _ =>
  transform_to_Safe_String( _ )
    .split( '' )
    .map( c => Safe_Chars.indexOf( c ) )
    .reduce( ( A, n ) => ( ( Safe_Chars_Count * A ) + n ) , 0 )



module.exports = exports
