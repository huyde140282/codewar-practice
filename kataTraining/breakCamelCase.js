// complete the function
function solution(string) {
    let a =''
    for (let i in string) {
        if (!/^[a-z]/.test(i)) {
            i=' ' + i
          }
      }
   
}
solution('camelCasing')