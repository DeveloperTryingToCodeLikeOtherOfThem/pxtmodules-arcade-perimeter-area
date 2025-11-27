
namespace area_ {
    //% deprecated=1
   export function getArea(data: Image): number {
     return (data.width * data.height);
   }
}

namespace perimeter_ {
    //% deprecated=1
   export function getPerimeter(data: Image): number {
    return ((data.width * 2) + (data.height * 2));
   }  
}

namespace Math {
    //% shim=TD_NOOP
    //% block="perimeter %data=screen_image_picker"
  export function perimeter(data: Image): number {
      return perimeter_.getPerimeter(data);
  }

  //% shim=TD_NOOP
  //% block="area %data=screen_image_picker"
  export function area(data: Image): number {
      return area_.getArea(data);
  }
}

let e = Math.area(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)
